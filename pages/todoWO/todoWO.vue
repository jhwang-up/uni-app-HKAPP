<template>
	<view class="todoWO">
		<view class="item" @click="toTable('运行中工单','running')">
			<view class="top">
				<view class="bar blue-bar">
				</view>
				<view class="title">
					运行中工单
				</view>
			</view>
			<view class="bottom">
				{{pendingNum}}
			</view>
		</view>
		<view class="item" @click="toTable('过期工单','Overdue')">
			<view class="top">
				<view class="bar red-bar">
				</view>
				<view class="title">
					过期工单
				</view>
			</view>
			<view class="bottom">
				{{overdueNum}}
			</view>
		</view>
		<view class="item" @click="toTable('已执行工单','Executed')">
			<view class="top">
				<view class="bar green-bar">
				</view>
				<view class="title">
					已执行工单
				</view>
			</view>
			<view class="bottom">
				{{doneNum}}
			</view>
		</view>
	</view>
</template>

<script>
	// /**
	//  * 
	//   1. 待会查一下华为文档 有递归查询属性的方法
	// 	 2.       
	//   3. 把其他之前的请求替换掉新写法 10min
	//   3a.继续写table样式，绑定mock数据，简单调整一下表格样式，把按钮搞出来，跳转增加好， 接入分页器 1h
	//   5. 写edit 1h
	//   6. detail 1h

	//  * / 注意：目前写死的宽高元素，都没能随着屏幕宽度变化，当你的元素需要变化时，再使用rpx
	//  /
	import {
		getWO
	} from '../../common/api.js'; //引入需要的api
	export default {
		data() {
			return {
				pendingNum: null,
				overdueNum: null,
				doneNum: null,
			}
		},
		onShow() {
			this.getNum();
		},
		methods: {
			getNum() {
				Promise.all([getWO({
					selectType: 'running'
				}), getWO({
					selectType: 'Overdue'
				}), getWO({
					selectType: 'Executed'
				})]).then(([r1, r2, r3]) => {
					this.pendingNum = r1.count;
					this.overdueNum = r2.count;
					this.doneNum = r3.count;
				}).catch((error) => {
					console.log(error)
				})
			},
			// getTest() {
			// 		uni.request({
			// 			//请求数据  
			// 			url: 'http://www.hbcoal.cn:8115/com.hbky.basedata.ProfessionalLedger.querykqz.biz.ext',
			// 			method: 'GET',
			// 			success: (res) => {
			// 				uni.showToast({
			// 					title: JSON.stringify(res),
			// 					icon: 'none'
			// 				})
			// 				 console.log("getTest"+JSON.stringify(res))
			// 			},
			// 			complete(res) {
			// 				uni.showToast({
			// 					title: JSON.stringify(res),
			// 					icon: 'none'
			// 				})
			// 			}
			// 		})
			// },
			toTable(title, WOType) {
				console.log(title, WOType)
				uni.navigateTo({
					url: `/pages/todoWO/table?title=${title}&&WOType=${WOType}`
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
			box-shadow: 0px 5px 18px 3px rgba(0, 0, 0, 0.04);
			// box-shadow: 0 2px 2px 0 #eeeeee40;
			// box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
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

				.red-bar {
					background-color: #FA7268;
					box-shadow: 1px 0px 3px 0px rgba(250, 114, 104, 0.5);
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
