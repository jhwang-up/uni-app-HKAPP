<template>
	<view class="todoWO">
		<view class="item" @click="toTable('待审工单','check')">
			<view class="top">
				<view class="bar blue-bar">
				</view>
				<view class="title">
					待审工单
				</view>
			</view>
			<view class="bottom">
				{{pendingAuditNum}}
			</view>
		</view>
		<view class="item" @click="toTable('已审工单','checkend')">
			<view class="top">
				<view class="bar green-bar">
				</view>
				<view class="title">
					已审工单
				</view>
			</view>
			<view class="bottom">
				{{doneAuditNum}}
			</view>
		</view>
	</view>
</template>

<script>
	// 详情页应该只有隐患和生产系统的 故障和其他不添加查看详情页；
	
	import {
		getWO
	} from '../../common/api.js'; //引入需要的api
	export default {
		data() {
			return {
				pendingAuditNum: null,
				doneAuditNum: null,
			}
		},
		onShow() {
			this.getNum();
		},
		methods: {
			getNum() {
				Promise.all([getWO({
					selectType: 'check'
				}), getWO({
					selectType: 'checkend'
				})]).then(([r1, r2]) => {
					this.pendingAuditNum = r1.count;
					this.doneAuditNum = r2.count;
				}).catch((error) => {
					console.log(error)
				})
			},
			toTable(title, WOType) {
				console.log(title, WOType)
				uni.navigateTo({
					url: `/pages/auditWO/table?title=${title}&&WOType=${WOType}`
				});
			}
		}
	}
</script>

<style lang="scss">
	.todoWO {
		padding-top: 24px;
		background: #fbfcfd;
		height: calc(100vh - 28px);

		.item {
			margin: 0 32px;
			height: 100px;
			// box-shadow: 0px 5px 18px 3px rgba(0, 0, 0, 0.06);
			box-shadow: 0 2px 2px 0 #eeeeee40;
			box-shadow: 0px 10px 10px -10px rgba(105, 96, 215, 0.0944602);
			margin-bottom: 32px;
			border-radius: 8px;
			background: #FFFFFF;

			.top {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding-top: 16px;

				.bar {
					margin-right: 12px;
					width: 5px;
					height: 24px;
					border-top-right-radius: 2px;
					border-bottom-right-radius: 2px;
				}

				.blue-bar {
					background-color: #387CF9;
					box-shadow: 1px 0px 3px 0px rgba(56, 124, 249, 0.5);
				}

				.green-bar {
					background-color: #3FFCA7;
					box-shadow: 1px 0px 3px 0px rgba(63, 252, 167, 0.5);
				}
			}

			.bottom {
				padding-left: 24px;
				padding-top: 8px;
				color: #333333;
				font-size: 28px;
			}
		}
	}
</style>
