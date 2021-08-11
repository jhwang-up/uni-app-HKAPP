<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th class="sticky-left" v-if="WOType==='check'" width="90">操作</uni-th>
					<uni-th class="sticky-left" v-if="WOType==='checkend'" width="60">操作</uni-th>
					<uni-th width="120">工单名称</uni-th>
					<uni-th width="120">工单内容</uni-th>
					<uni-th width="90">工单类型</uni-th>
					<uni-th width="90">开始办理日期</uni-th>
					<uni-th width="90">结束办理日期</uni-th>
					<uni-th width="90">执行人员</uni-th>
					<uni-th class="sticky-right" width="60">状态</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td class="td btn-td sticky-left">
						<view class="btn-box">
							<text @click="toDetail(item)" class="btn">查看</text>
							<text v-if="WOType==='check'" @click="toAudit(item)" class="btn">审核</text>
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


		<!-- 延期审核 弹窗 -->
		<uni-popup ref="popup">
			<view class="popup-inner">
				<view class="header">
					<view class="left">
						<view class="bar blue-bar">
						</view>
						<text>延期审核</text>
					</view>
					<view @click="close()" class="close">
						关闭
					</view>
				</view>
				<popup-scroll style="height: auto;width: 700rpx; background-color: #fff;border-radius: 8px;">
					<view class="info info-textarea">
						<text class="left">延期原因:</text>
						<textarea class="textarea" v-model="currentDelayContent" disabled='true' auto-height="true" />
					</view>
					<view class="info info-no-line">
						<text class="left">延期至:</text>
						<!-- 日期选择 -->
						<picker mode="date" :value="currentDate" :start="startDate" :end="endDate"
							@change="bindDateChange">
							<view class="uni-input">{{currentDate}}</view>
						</picker>
					</view>
					<view class="bottom-box">
						<view class="operation-box btn-box">
							<button @click="ok()" size="mini" type="primary">通过</button>
							<button @click="no()" type="default" size="mini">驳回</button>
						</view>
					</view>
				</popup-scroll>
			</view>
		</uni-popup>
		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	// show的时候 赋值yy mm dd  且要赋值currentDelayContent 以展示
	import popupScroll from '@/components/popup-scroll/popup-scroll.vue';
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import {
		getWO,
		auditDelayProduceWorkContent, // 生产系统过期工单延期审核
	} from '../../common/api.js'; //引入需要的api
	export default {
		components: {
			popupScroll,
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
				currentDate: 'YYYY-MM-DD', // 当前延期日期
				currentDelayContent: '', //当前延期原因
				x: 0, // 气泡位置
				y: 0, // 气泡位置
				isShowPopup: false, // 气泡是否显示
				popupText: '', // 气泡内容
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		// 点击时 传入标题内容
		onLoad(options) {
			console.log(JSON.stringify(options))
			this.WOType = options.WOType;
			this.getData(1);
			uni.setNavigationBarTitle({
				title: options.title
			})
		},
		methods: {
			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},
			// 通过延期审核
			ok() {
				this.audit({
					gdzj: this.gdzj,
					wcrq: this.currentDate
				})
			},
			// 驳回
			no() {
				this.audit({
					gdzj: this.gdzj,
					wcrq: this.currentDate,
					sftg: 0
				})
			},
			audit(data) {
				if (this.currentDate === 'YYYY-MM-DD') {
					uni.showToast({
						title: `请选择延期日期`,
						icon: 'none'
					});
					return;
				}
				auditDelayProduceWorkContent(data).then(res => {
					console.log(JSON.stringify(res));
					if (res.flag === 1) {
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
			// 分页触发
			change(e) {
				// this.$refs.table.clearSelection()
				// this.selectedIndexs.length = 0
				this.getData(e.current)
			},
			toDetail(item) {
				let where = '';
				switch (item.ordertype) {
					case '生产系统':
						where = `produceDetail`;
						break;
					case '故障工单':
						where = `breakdownDetail`;
						break;
					case '通讯线路':
						where = `lineDetail`;
						break;
					case '设备巡检':
						where = `equipmentDetail`;
						break;
					default:
						break;
				};
				uni.navigateTo({
					url: `/pages/auditWO/detail/${where}?zj=${item.zj}&bzbh=${item.bzbh}&xtbm=${item.xtbm}&ordertype=${item.ordertype}&bzmc=${item.bzmc}&gznr=${item.gznr}&sfys=${item.sfys}&wcqk=${item.wcqk}`
				});
			},
			// 去审核页面
			toAudit(item) {
				console.log(JSON.stringify(item));
				this.gdzj = item.zj;
				// 先判断当前的状态是延期审核还是待审核；延期审核直接弹出popup
				if (item.sfys === '延期审核') {
					this.currentDelayContent = item.ylzd5;
					this.$refs.popup.open();
				} else {
					let where = '';
					switch (item.ordertype) {
						case '生产系统':
							where = `produceAudit`;
							break;
						case '故障工单':
							where = `breakdownAudit`;
							break;
						case '通讯线路':
							where = `lineAudit`;
							break;
						default:
							break;
					};

					uni.navigateTo({
						url: `/pages/auditWO/audit/${where}?zj=${item.zj}&bzbh=${item.bzbh}&xtbm=${item.xtbm}&ordertype=${item.ordertype}&bzmc=${item.bzmc}&gznr=${item.gznr}&sfys=${item.sfys}&wcqk=${item.wcqk}`
					});
				}


			},
			close() {
				this.currentDate = "YY-MM-DD";
				this.$refs.popup.close();
			},
			// 日期控件操作
			bindDateChange(e) {
				this.currentDate = e.target.value;
				console.log(e.target.value)
				this.$forceUpdate()
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
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
				margin: 0 2px;
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

	.ellipsis {
		overflow: hidden !important;
		text-overflow: ellipsis !important;
		display: -webkit-box !important;
		-webkit-line-clamp: 1; //文字上限行
		-webkit-box-orient: vertical;
	}
</style>
