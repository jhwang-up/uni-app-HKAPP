<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th class="sticky-left" v-if=" WOType==='Overdue' " width="90">操作</uni-th>
					<uni-th class="sticky-left" v-if=" WOType!=='Overdue' " width="60">操作</uni-th>
					<uni-th width="120">工单名称</uni-th>
					<uni-th width="120">工单内容</uni-th>
					<uni-th width="90">工单类型</uni-th>
					<uni-th width="90">开始办理日期</uni-th>
					<uni-th width="90">结束办理日期</uni-th>
					<uni-th width="90">执行人员</uni-th>
					<uni-th class="sticky-right" width="60">状态</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td class="btn-td td sticky-left">
						<view class="btn-box">
							<text v-if=" WOType==='running' " @click="toEdit(item)" class="btn">执行</text>
							<text v-if=" (WOType==='Overdue' || WOType==='Executed') " @click="toDetail(item)"
								class="btn">查看</text>
							<text v-if=" WOType==='Overdue' && (item.ordertype==='通讯线路' || item.ordertype==='设备巡检' || item.ordertype==='生产系统' || item.ordertype==='隐患')"
								@click="toDelay(item)" class="btn delay-btn">延期</text>
						</view>
					</uni-td>
					<uni-td class="td">
						<view @click="taptext($event,item.bzmc)" :class="{'ellipsis':item.bzmc && item.bzmc.length>8}">
							{{ item.bzmc }}
						</view>
					</uni-td>
					<uni-td class="td">
						<view @click="taptext($event,item.gznr)" :class="{'ellipsis':item.gznr && item.gznr.length>8}">
							{{ item.gznr }}</view>
					</uni-td>
					<uni-td class="td">{{ item.ordertype }}</uni-td>
					<uni-td class="td">{{ (item.lrrq)?(item.lrrq+'').substr(0,10):''}}</uni-td>
					<uni-td class="td">{{ (item.gdzxsj)?(item.gdzxsj+'').substr(0,10):'' }}</uni-td>
					<uni-td class="td">
						<view @click="taptext($event,item.gszxry)"
							:class="{'ellipsis':item.gszxry && item.gszxry.length>5}">
							{{ item.gszxry }}
						</view>
					</uni-td>
					<uni-td class="td sticky-right">{{ item.sfys ? item.sfys : '未提交' }}</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box">
				<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
					@change="change" />
			</view>
		</view>

		<!-- 延期 弹窗 -->
		<uni-popup ref="popup">
			<view class="popup-inner">
				<view class="header">
					<view class="left">
						<view class="bar blue-bar">
						</view>
						<text>申请延期</text>
					</view>
					<view @click="close()" class="close">
						关闭
					</view>
				</view>
				<popup-scroll style="height: auto;width: 700rpx; background-color: #fff;border-radius: 8px;">
					<view class="info info-textarea info-no-line">
						<text class="left">延期原因:</text>
						<textarea class="textarea" v-model="currentDelayContent" auto-height="true" />
					</view>
					<view class="info">
						<text class="left">延期审核人:</text>
						<!-- 此处是有点击事件 -->
						<button type="default" size="mini"
							@click="showTree">{{currentShr.length>0?currentShr:'请选择'}}</button>
					</view>
					<view class="bottom-box">
						<view class="operation-box btn-box">
							<button @click="submitDelay()" size="mini" type="primary">提交</button>
							<button @click="close()" type="default" size="mini">取消</button>
						</view>
					</view>
				</popup-scroll>
			</view>
		</uni-popup>

		<!-- 树形图 弹窗 -->
		<uni-popup ref="treePopup">
			<view class="tree-popup-box">
				<popup-scroll
					style="min-height: 100px;max-height: 68vh;height: auto; width: 700rpx; background-color: #fff;border-top-left-radius: 8px;border-top-right-radius: 8px;">
					<view class="tree-box">
						<ly-tree ref="tree" :tree-data="treeData" :ready="ready" node-key="id"
							:defaultExpandAll="defaultExpandAll" show-radio checkOnlyLeaf @check="handleCheck">
						</ly-tree>
					</view>
				</popup-scroll>
				<view class="bottom-box">
					<button @click="ok()" size="mini" type="primary">确认</button>
					<button @click="cancel()" type="default" size="mini">取消</button>
				</view>
			</view>
		</uni-popup>
		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	import utils from '@/common/utils.js'
	import popupScroll from '@/components/popup-scroll/popup-scroll.vue';
	import LyTree from '@/components/ly-tree/ly-tree.vue';
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import {
		getWO,
		delayProduceWorkContent, //生产系统过期工单延期申请
		getProfessionalLedgerTree, // 获取延期申请科区长人员_选择树数据
	} from '../../common/api.js'; //引入需要的api
	export default {
		components: {
			popupScroll,
			LyTree,
			chunLeiPopups
		},
		data() {
			return {
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 0,
				// 数据总量
				total: 0,
				loading: false,
				WOType: '', // 工单类型
				currentDelayContent: '', // 延期原因
				currentGdzj: '', // 当前工单主键
				currentOrdertype: '', // 当前工单类型
				currentShrgh: '', // 当前选择的审核人工号
				currentShr: '', // 当前选择的审核人
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				showRadio: true, // 单选树 
				treeData: [],
				defaultExpandAll: true,
				x: 0, // 气泡位置
				y: 0, // 气泡位置
				isShowPopup: false, // 气泡是否显示
				popupText: '', // 气泡内容

			}
		},
		onLoad(options) {
			// this.selectedIndexs = [];
			console.log(JSON.stringify(options))
			this.WOType = options.WOType;
			uni.setNavigationBarTitle({
				title: options.title
			})
		},
		onShow() {
			this.getData(1);
		},
		methods: {
			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},
			toEdit(item) {
				// 单独判断，如果是重修和维修，则跳转固定路由；
				if (item.sfys === '重修' || item.sfys === '维修') {
					uni.navigateTo({
						url: `/pages/todoWO/edit/breakdownMaintain?zj=${item.zj}&bzbh=${item.bzbh}&xtbm=${item.xtbm}&ordertype=${item.ordertype}&bzmc=${item.bzmc}&gznr=${item.gznr}&sfys=${item.sfys}&wcqk=${item.wcqk}`
					});
				} else {
					this.myTo(item, 'edit');
				}
			},
			// 查看工单
			toDetail(item) {
				this.myTo(item, 'detail');
			},
			// 延期申请
			submitDelay() {
				if (!this.currentShrgh || !this.currentDelayContent) {
					uni.showToast({
						title: `延期原因或延期审核人不能为空`,
						icon: 'none'
					});
				}
				// 生产系统和隐患 进行延期 就是点击后，来个弹窗，然后搞定必填之后，然后点击提交可以调用接口
				// 得根据orderType进行判断类型，然后调用不同的接口；
				// 不用传审核人工号
				// let commonDelay;
				// switch (this.currentOrdertype) {
				// 	case '生产系统':
				// 		commonDelay = delayProduceWorkContent;
				// 		break;
				// 		// case '隐患':
				// 		// 	commonDelay = delayProduceWorkContent;
				// 		// 	break;
				// 	default:
				// 		break;
				// }

				delayProduceWorkContent({
					gdzj: this.currentGdzj,
					yqyy: this.currentDelayContent,
					shrgh: this.currentShrgh
				}).then(res => {
					console.log(JSON.stringify(res));
					if (res.flag === 1) {
						uni.showToast({
							title: `申请已提交`,
							icon: 'none'
						});
						this.close();
						this.getData(this.pageCurrent);
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 延期
			toDelay(item) {
				this.currentDelayContent = '';
				this.currentGdzj = item.zj;
				this.currentOrdertype = item.ordertype;
				this.$refs.popup.open()
				console.log(JSON.stringify(item));
			},
			// 树选择 确认按钮
			ok() {
				this.$refs.popup.open();
				this.$refs.treePopup.close();
			},
			// 树选择 取消按钮
			cancel() {
				this.$refs.popup.open();
				this.$refs.treePopup.close();
			},
			myTo(item, directory) {
				// 首字母大写
				let str = directory.substring(0, 1).toUpperCase() + directory.substring(1);
				// 此处判断跳转哪个edit，根据类型决定跳转的地址
				let where = '';
				switch (item.ordertype) {
					case '生产系统':
						where = `produce${str}`;
						break;
					case '故障工单':
						where = `breakdown${str}`;
						break;
					case '机电隐患':
						where = `electromechanical${str}`;
						break;
					case '基层隐患':
						where = `basicLevel${str}`;
						break;
					case '通讯线路':
						where = `line${str}`;
						break;
					case '设备巡检':
						where = `equipment${str}`;
						break;
					default:
						break;
				};
				// console.log(JSON.stringify(item));
				console.log(`/pages/todoWO/${directory}/${where}`);
				uni.navigateTo({
					url: `/pages/todoWO/${directory}/${where}?zj=${item.zj}&bzbh=${item.bzbh}&xtbm=${item.xtbm}&ordertype=${item.ordertype}&bzmc=${item.bzmc}&gznr=${item.gznr}&sfys=${item.sfys}&wcqk=${item.wcqk}`
				});
			},
			// 分页触发
			change(e) {
				// this.$refs.table.clearSelection()
				// this.selectedIndexs.length = 0
				this.getData(e.current)
			},
			close() {
				this.currentDelayContent = '';
				this.$refs.popup.close()
			},
			//================================ 以下是树形 =======================================
			// 设置节点选中状态
			// setCheckedKeys(keys) {
			// 	this.$refs.tree.setCheckedKeys(keys);
			// },
			// 展示树形选择弹窗Î
			showTree() {
				// 清空审核人编号
				this.currentShrgh = '';
				this.currentShr = '';
				getProfessionalLedgerTree().then(res => {
					console.log(JSON.stringify(res));
					this.treeData = utils.translateDataToTree(res.data);
					this.ready = true;
					//打开popup弹窗
					this.$refs.popup.close();
					this.$refs.treePopup.open();
					// this.$nextTick(function() {
					// 	this.setCheckedKeys(this.currentShrgh);
					// });

				}).catch(err => {
					console.log(JSON.stringify(err));
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					})
				});
			},
			// 只有在"点击"修改的指定节点会触发(也就是说这个方法只会触发一次)，obj中包含当前选中
			handleCheck(obj) {
				// obj: {
				// 	checkedKeys: [9, 5], // 当前选中节点的id数组
				// 	checkedNodes: [{...}, {...}], // 当前选中节点数组
				// 	data: {...}, // 当前节点的数据
				// 	halfCheckedKeys: [1, 4, 2], // 半选中节点的id数组
				// 	halfCheckedNodes: [{...}, {...}, {...}], // 半选中节点的数组
				// 	node: Node {...} // 当前节点实例
				// }

				// 需要删除 有children的节点，这样就只剩下最底层的节点；
				// let tempLabel = [];
				// let tempId = [];
				// for (let s of obj.checkedNodes) {
				// 	if (s.children === undefined) {
				// 		tempLabel.push(s.label);
				// 		tempId.push(s.id);
				// 	}
				// }

				// this.myData.gzwxr = tempLabel.toString();
				// this.myData.gzwxrgh = tempId.toString();
				// // 保存选中的节点key数组，用于渲染选中
				// this.myData.gzwxrIdArray = tempId;
				this.currentShr = obj.checkedNodes[0].label;
				this.currentShrgh = obj.checkedNodes[0].id;
				console.log('handleCheck===', JSON.stringify(obj));
				console.log('=========================================');
			},
			// 获取数据
			getData(pageCurrent) {
				this.loading = true
				this.pageCurrent = pageCurrent

				getWO({
					page: pageCurrent,
					limit: this.pageSize,
					selectType: this.WOType,
				}).then(data => {
					console.log('data', JSON.stringify(data));
					this.tableData = data.data
					// 判断字数，超过八个就省略号 
					this.total = data.count
					this.loading = false
				}).catch(err => {});
			},
		}
	}
</script>

<style lang="scss">
	.uni-group {
		display: flex;
		align-items: center;
	}

	// ========================= 以下是 table的样式修改 =========================
	.uni-table-td {
		padding: 0;
	}

	.td {
		height: 50px;
		font-size: 13px !important;
	}

	.btn-td {
		display: flex;
		justify-content: center;
		align-items: center;

		.btn-box {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.btn {
				margin-top: 2px; // 待改？
				font-size: 12px;
				border-radius: 2px;
				color: #FFFFFF;
				background-color: #387CF9;
				padding: 1px 2px;
			}

			.delay-btn {
				margin: 0 4px;
			}
		}
	}

	// ========================= 以上是 table的样式修改 =========================
	// 弹窗样式
	.popup-inner {
		margin-top: -5vh;
		background-color: #F6F7F8;
		overflow: hidden;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-radius: 10px;

		.header {
			display: flex;
			justify-content: space-between;
			padding: 10px 8px 8px;
			background-color: #ffffff;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.1);
			margin-bottom: 8px;

			.left {
				display: flex;
				flex-direction: row;
				align-items: center;

			}

			.close {
				font-size: 14px;
				color: #FA7268;
			}

		}


		.info {
			display: flex;
			flex-direction: row;
			padding: 12px 0px 12px;
			margin: 0 12px;
			border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

			.left {
				flex-shrink: 0;
				font-size: 14px;
				padding-right: 8px;
			}

			.right {
				// width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #777777;

				.btn {
					font-size: 12px;
					border-radius: 2px;
					color: #FFFFFF;
					background-color: #387CF9;
					padding: 4px 8px;
				}


			}


			.textarea {
				width: auto;
				padding: 8px;
				background-color: #F6F7F8;
				font-size: 14px;
				min-height: 70px;
				border-radius: 4px;
				color: #777777;
			}
		}

		.info-no-line {
			border-bottom: 0px solid rgba(0, 0, 0, 0);
		}

		.info-text {
			justify-content: space-between;
		}

		.info-textarea {
			flex-direction: column;

			.left {
				margin-bottom: 8px;
			}
		}

		.btn-box {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;

			.btn {
				font-size: 14px;
				border-radius: 2px;
				color: #FFFFFF;
				background-color: #387CF9;
				padding: 4px 8px;
				line-height: 1.5;
			}
		}


		.bottom-box {
			padding: 16px 0 24px;
			margin-top: 40px;
			background-color: #FFFFFF;
			box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.05);

			.operation-box {
				.cancel-btn {
					background-color: gray;
				}

				.disabled-btn {
					background-color: gray;
				}
			}

			.bottom {
				padding-top: 16px;
				text-align: center;
				font-size: 14px;
				color: #FA7268;
			}
		}

	}

	.tree-popup-box {
		.bottom-box {
			display: flex;
			justify-content: space-around;
			padding: 24px 0;
			background-color: #FFFFFF;
			box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.05);
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
			border-top: 1px solid #F6F7F8;
		}
	}

	.ellipsis {
		overflow: hidden !important;
		text-overflow: ellipsis !important;
		display: -webkit-box !important;
		-webkit-line-clamp: 1; //文字上限行
		-webkit-box-orient: vertical;
	}
</style>
