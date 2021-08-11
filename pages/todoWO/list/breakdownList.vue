<template>
	<view class="deviceList">

		<view class="container">
			<view class="top-box">
				<view class="btn" @click="toCreate()">
					<image class="add-img" src="../../../static/img/breakdown/add.png" mode=""></image>
					新增
				</view>
			</view>
			<view class="bottom-box">
				<view v-if="tableData.length>0" class="table-box">
					<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-th class="sticky-left" width="50">操作</uni-th>
							<uni-th width="120">故障区域</uni-th>
							<uni-th width="90">发现时间</uni-th>
							<uni-th width="90">发现人</uni-th>
							<uni-th class="sticky-right" width="70">工单状态</uni-th>
						</uni-tr>
						<uni-tr v-for="(item, index) in tableData" :key="index">
							<uni-td class="btn-td td sticky-left">
								<view class="btn-box">
									<text @click="toDetail(item)" class="btn">查看</text>
								</view>
							</uni-td>
							<uni-td class="td">
								<view @click="taptext($event,item.gzsb)"
									:class="{'ellipsis':item.gzsb && item.gzsb.length>8}">
									{{ item.gzsb }}
								</view>
							</uni-td>
							<uni-td class="td">
								{{ (item.gzfxsj||'').substr(0,10) }}
							</uni-td>
							<uni-td class="td">
								{{ item.gzfxr }}
							</uni-td>
							<uni-td class="td sticky-right">
								{{ item.gdzt }}
							</uni-td>
						</uni-tr>
					</uni-table>
				</view>

				<view v-if="tableData.length>0" class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
						@change="change" />
				</view>

				<view v-if="tableData.length===0" class="empty-box">
					<image class="img" src="../../../static/img/job/empty.png" mode=""></image>
					<view class="no-data">
						暂无数据
					</view>
				</view>
			</view>

		</view>

		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	// 1. 美化设备详情卡片：增加标题左侧蓝色，背景色改为灰色；底部俩按钮颜色改为
	// 5. 美化设备卡片详情页 30min   美化故障工单详情页 10min；
	// 6. 增加所有的巡检标准，然后美化页面，1h；今天完成这些就行了，生产系统的明天上午搞，再和李总说一下没空搞，今天九点半回去；
	import utils from '@/common/utils.js'
	import popupScroll from '@/components/popup-scroll/popup-scroll.vue';
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import {
		getBreakdownListBySbzj, // 获取设备的故障列表
	} from '@/common/api.js'; //引入需要的api
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
				lbbm: '', // 技术类别编码
				sbmc: '', // 设备名称
				x: 0, // 气泡位置
				y: 0, // 气泡位置
				isShowPopup: false, // 气泡是否显示
				popupText: '', // 气泡内容
			}
		},
		onLoad(options) {
			console.log(JSON.stringify(options))
			this.sbzj = options.sbzj;
		},
		onShow() {
			this.getData(1);
		},
		methods: {
			// 发起创建故障工单
			toCreate() {
				uni.navigateTo({
					url: `/pages/todoWO/edit/breakdownCreate?gzlx=设备巡检工单&sbzj=${this.sbzj}&gzsb=${this.sbmc}`
				});
			},
			// 查看故障工单
			toDetail(item) {
				uni.navigateTo({
					url: `/pages/todoWO/detail/breakdownDetail?zj=${item.zj}&gzlx=设备巡检工单&sbzj=${item.gzsbzj}&gzsb=${item.gzsb}`
				});
			},
			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},

			// 分页触发
			change(e) {
				// this.$refs.table.clearSelection()
				// this.selectedIndexs.length = 0
				this.getData(e.current)
			},

			// 获取数据
			getData(pageCurrent) {
				this.loading = true
				this.pageCurrent = pageCurrent

				// 获取设备故障列表
				getBreakdownListBySbzj({
					sbzj: this.sbzj,
					page: pageCurrent,
					limit: this.pageSize,
				}).then(data => {
					console.log("设备故障列表= " + JSON.stringify(data));
					this.tableData = data.data
					// 判断字数，超过八个就省略号 
					this.total = data.count;
					this.loading = false
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
		}
	}
</script>

<style lang="scss">
	.deviceList {
		background-color: $uni-bg-color-grey;

		.container {
			height: calc(100vh - 12px);
			padding-top: 12px;
			background-color: $uni-bg-color-grey;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			.top-box {
				width: 100%;
				background-color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				height: 60px;
				box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.03);

				.btn {
					display: flex;
					justify-content: center;
					align-items: center;
					color: $uni-color-primary;

					.add-img {
						width: 14px;
						height: 14px;
						margin: 8px 4px 8px 16px;
					}

				}
			}

			.bottom-box {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				min-height: calc(100vh - var(--status-bar-height) - 60px);
				// 计算一下上面距离 然后减去 给上最小高度 table；
				.table-box {
					padding: 16px 8px;
					background-color: #ffffff;
					margin-bottom: 16px;
					min-height: calc(100vh - var(--status-bar-height) - 180px);
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
