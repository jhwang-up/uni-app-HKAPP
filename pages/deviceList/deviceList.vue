<template>
	<view class="deviceList">

		<view class="container">
			<view class="search-box">
				<view class="item" @click="showTree()">
					<view class="triangle">
					</view>
					<view class="name">
						技术分类：
					</view>
					<text class="label">{{typeName}}</text>
				</view>
				<view class="item">
					<view class="triangle">
					</view>
					<view class="name">
						搜索内容：
					</view>
					<input class="label-input" type="text" v-model="sbmc" @blur="search" />
				</view>
				<!-- <view class="search-input">
					<uni-search-bar @confirm="search"></uni-search-bar>
				</view> -->
			</view>

			<view class="bottom-box">
				<view class="table-box">
					<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-th width="120">设备名称</uni-th>
							<uni-th width="80">绑定状态</uni-th>
							<uni-th width="90">详细位置</uni-th>
							<uni-th class="sticky-right" width="50">操作</uni-th>
						</uni-tr>
						<uni-tr v-for="(item, index) in tableData" :key="index">
							<uni-td class="td">
								<view @click="taptext($event,item.sbmc)"
									:class="{'ellipsis':item.sbmc && item.sbmc.length>8}">
									{{ item.sbmc }}
								</view>
							</uni-td>
							<uni-td class="td">
								<view>
									{{ item.nfcuuid?"已绑定":"未绑定" }}
								</view>
							</uni-td>
							<uni-td class="td">{{ item.sbxxdz }}</uni-td>
							<uni-td class="btn-td td sticky-right">
								<view class="btn-box">
									<text @click="toBind(item)" class="btn">绑定</text>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>
				</view>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
						@change="change" />
				</view>

			</view>
		</view>

		<!-- 树形图 弹窗 -->
		<uni-popup ref="treePopup">
			<view class="tree-popup-box">
				<popup-scroll
					style="min-height: 50px;max-height: 68vh;height: auto; width: 700rpx; background-color: #fff;border-top-left-radius: 8px;border-top-right-radius: 8px;">
					<view class="tree-box">
						<ly-tree ref="tree" :ready="ready" node-key="id" :load="loadNode" lazy
							:defaultExpandAll="defaultExpandAll" show-radio @check="handleCheck">
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
		getDeviceList,
		getAllTechTypeTree,
		getAllTechTypeTreeById, //设备技术类别树数据（分层次查询）
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
				typeName: '请选择',
				lbbm: '', // 技术类别编码
				sbmc: '', // 设备名称
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				treeRootData: [],
				defaultExpandAll: false,
				x: 0, // 气泡位置
				y: 0, // 气泡位置
				isShowPopup: false, // 气泡是否显示
				popupText: '', // 气泡内容
			}
		},
		onLoad(options) {
			// console.log(JSON.stringify(options))
			getAllTechTypeTree().then(res => {
				this.treeRootData = res.data;
			}).catch(err => {
				console.log(JSON.stringify(err));
				uni.showToast({
					title: `异常，请稍后重试`,
					icon: 'none'
				})
			});
		},
		onShow() {
			this.getData(1);
		},
		methods: {
			// 在每次点击展开时执行
			loadNode(node, resolve) {
				console.log(('node节点参数', node));
				// 这里只是为了模拟数据，这个条件是用来判断当数的层级是第一层，也就是根节点，则返回根节点数据
				if (node.level === 0) {
					// 先获取第一层父级层级
					if (this.treeRootData === []) {
						getAllTechTypeTree().then(res => {
							this.treeRootData = res.data;
							resolve(this.dealParent(this.treeRootData));
						}).catch(err => {
							console.log(JSON.stringify(err));
							uni.showToast({
								title: `异常，请稍后重试`,
								icon: 'none'
							})
						});
					} else {
						resolve(this.dealParent(this.treeRootData));
					}
				} else {
					// 懒加载获取后续的子节点数据
					getAllTechTypeTreeById({
						id: node.data.id
					}).then(res => {
						console.log(JSON.stringify(res));
						for (let s of res.data) {
							s.label = s.name;
						}
						resolve(res.data);
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						});
					})
				}
			},
			// 获取树形顶级父级别数组；
			dealParent(data) {
				for (let s of data) {
					s.label = s.name;
				}
				// 先筛选顶级层级父级, 如果一个parentid 在所有里面的id都取不到 则为顶级父级
				let parents = [];
				for (let a of data) {
					let temp = a.parentid;
					let isTopNode = true;
					for (let b of data) {
						if (temp === b.id) {
							isTopNode = false;
						}
					}
					if (isTopNode) {
						parents.push(a);
					}
				}
				return parents;
			},
			// 绑定NFC
			toBind(item) {
				// 传递isOnlyNfc 是就只展示nfc即可
				uni.navigateTo({
					url: `/pages/nfc/nfc?zj=${item.zj}&isOnlyNfc=true`
				});
			},
			search(e) {
				// console.log('搜索事件！！！！！！' + JSON.stringify(e));
				// this.sbmc = e.value;
				// 拿到搜索框的值，然后调用getData
				this.getData(1);
			},
			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},
			// 树选择 确认按钮
			ok() {
				this.$refs.treePopup.close();
			},
			// 树选择 取消按钮
			cancel() {
				this.$refs.treePopup.close();
			},

			// 分页触发
			change(e) {
				// this.$refs.table.clearSelection()
				// this.selectedIndexs.length = 0
				this.getData(e.current)
			},
			//================================ 以下是树形 =======================================
			// 设置节点选中状态
			// setCheckedKeys(keys) {
			// 	this.$refs.tree.setCheckedKeys(keys);
			// },
			// 展示树形选择弹窗Î
			showTree() {
				// 清空审核人编号
				this.ready = true;
				this.$refs.treePopup.open();
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
				// this.currentShrgh = obj.checkedNodes[0].id;
				// console.log('handleCheck===', JSON.stringify(obj));
				// console.log('=========================================' + JSON.stringify(tempId));
				// console.log('=========================================' + JSON.stringify(tempLabel));
				this.lbbm = obj.checkedKeys[0];
				this.typeName = obj.node.label;
				console.log('当前技术分类==' + JSON.stringify(this.lbbm));
				this.getData(1);
			},
			// 获取数据
			getData(pageCurrent) {
				this.loading = true
				this.pageCurrent = pageCurrent
				getDeviceList({
					page: pageCurrent,
					limit: this.pageSize,
					lbbm: this.lbbm,
					sbmc: this.sbmc,
				}).then(data => {
					console.log('data', JSON.stringify(data));
					this.tableData = data.data
					// 判断字数，超过八个就省略号 
					this.total = data.total;
					this.loading = false
				}).catch(err => {});
			},
		}
	}
</script>

<style lang="scss">
	.triangle {
		border-left: 8px solid #007aff;
		border-right: 8px solid transparent;
		border-bottom: 8px solid transparent;
		border-top: 8px solid transparent;
		filter: blur(0);
	}

	.triangle:after {
		content: '';
		position: absolute;
		top: -8px;
		left: 0;
		border-left: 8px solid rgba(0, 122, 255, 0.5);
		border-right: 8px solid transparent;
		border-bottom: 8px solid transparent;
		border-top: 8px solid transparent;
		position: absolute;
		margin-left: -8px;
		z-index: -1;
		filter: blur(3px);
	}



	.deviceList {
		background-color: $uni-bg-color-grey;

		.container {
			height: calc(100vh - 12px);
			padding-top: 12px;
			background-color: $uni-bg-color-grey;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			.search-box {
				padding: 16px 8px;
				background-color: #ffffff;
				margin-bottom: 12px;

				.item {
					position: relative;
					display: flex;
					align-items: center;
					margin: 8px;

					.name {
						flex-shrink: 0;
					}

					.label {
						width: 100%;
						font-size: 14px;
						padding: 4px 8px;
						border-radius: 5px;
						background-color: rgb(248, 248, 248);
						border-width: .5px;
						border-style: solid;
						border-color: #e5e5e5;
					}

					.label-input {
						font-size: 14px;
						width: 100%;
						padding: 3px 8px;
						border-radius: 5px;
						background-color: rgb(248, 248, 248);
						border-width: .5px;
						border-style: solid;
						border-color: #e5e5e5;
					}
				}
			}

			.bottom-box {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				min-height: calc(100vh - var(--status-bar-height) - 160px);

				// 计算一下上面距离 然后减去 给上最小高度 table；
				.table-box {
					padding: 16px 8px;
					background-color: #ffffff;
					margin-bottom: 16px;
					min-height: calc(100vh - var(--status-bar-height) - 220px);
					box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.03);
				}

				.uni-pagination-box {
					height: 60px;
					display: flex;
					justify-content: center;
					background-color: #ffffff;
					box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.03);
				}

				.empty-box {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: $uni-text-color-grey;

					.img {
						width: 200px;
						height: 120px;
						margin-bottom: 8px;
					}
				}
			}

		}
	}



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
