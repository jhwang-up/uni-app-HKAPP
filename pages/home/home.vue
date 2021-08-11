<template>
	<!-- icon下载 swiper组件 其他组件搞定 跳转-->
	<view class="main">

		<!-- banner 图轮播 -->
		<view class="banner-box">
			<!-- 顶部icon -->
			<view class="top-icon-box">
				<image class="message-img" src="../../static/img/home/list.png" mode=""></image>
				<image class="message-img" src="../../static/img/home/message.png" mode=""></image>
			</view>
			<carousel :img-list="imgList" url-key="url" @selected="selectedBanner" />
		</view>

		<!-- 通知广告 -->
		<!-- <view class="news">
			<view class="news-left">
				<image class="news-img" src="../../static/img/tzgg.png" mode=""></image>
				<swiper class="news-swiper" vertical="true" :autoplay="true" :interval="1500" :duration="500">
					<swiper-item>
						<view @click="toNewsDetail()" class="swiper-item">
							<text>备用1(钢丝绳)录用信息有误</text>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<text>无标题</text>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<image class="right-arrow-img" src="../../static/img/home/right-arrow.png" mode=""></image>
		</view> -->
		<!-- 待办事项 -->
		<view class="todo-box">
			<view class="title">
				<text>待办事项</text>
			</view>
			<view class="todo-content">
				<view class="left" @click="toTodoWO()">
					<text class="text">待办工单</text>
					<text class="num">{{runningWONum}}</text>
				</view>
				<view class="right" @click="toAuditWO()">
					<text class="text">工单审核</text>
					<text class="num">{{auditWONum}}</text>
				</view>
			</view>
		</view>
		<!-- 常办业务 -->
		<view class="business">
			<view class="business-title">
				<text>常办业务</text>
			</view>
			<view class="items">
				<view class="item" @click="toNFC()">
					<view class="img-box">
						<image class="img" src="../../static/img/home/nfc.svg" mode=""></image>
					</view>
					<text class="item-text">NFC</text>
				</view>
				<!-- 空白占位 -->
				<view class="item" @click="toScan()">
					<view class="img-box">
						<image class="img" src="../../static/img/home/scan.svg" mode=""></image>
					</view>
					<text class="item-text">设备扫一扫</text>
				</view>
				<!-- 空白占位 -->
				<view class="item" @click="toDeviceList()">
					<view class="img-box">
						<image class="img" src="../../static/img/home/deviceList.svg" mode=""></image>
					</view>
					<text class="item-text">设备列表</text>
				</view>

				<!-- 空白占位 -->
				<view class="item" @click="toProduce()">
					<view class="img-box">
						<image class="img" src="../../static/img/home/produce.svg" mode=""></image>
					</view>
					<text class="item-text">生产系统</text>
				</view>
			</view>

			<view class="items">
				<!-- 空白占位 -->
				<view class="item">
					<view class="img-box">
					</view>
					<text class="item-text"></text>
				</view>
				<!-- 空白占位 -->
				<view class="item">
					<view class="img-box">
					</view>
					<text class="item-text"></text>
				</view>
				<!-- 空白占位 -->
				<view class="item">
					<view class="img-box">
					</view>
					<text class="item-text"></text>
				</view>
				<!-- 空白占位 -->
				<view class="item">
					<view class="img-box">
					</view>
					<text class="item-text"></text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	/**
	 * 0. 在下面增加设备扫一扫图标，微信端是扫一扫之后拉起扫码，扫描后跳转到设备详情页（得增加详情页）；是否要分开展示；
	 * 1. 顶部蓝色，渐变，
	 * 2. 胶囊区域进行 半圆弧遮照，或者是白色有阴影即可
	 */
	import carousel from '../../components/vear-carousel/vear-carousel.vue'
	import {
		getWO
	} from '../../common/api.js'; //引入需要的api
	export default {
		components: {
			carousel
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				testId: 12, // 待删除
				auditWONum: '-',
				runningWONum: '-',
				imgList: [{
					url: '../../static/img/logo.png',
					id: 1
				}]
			}
		},
		mounted() {
			// 获取待办工单
			this.getWONum();
		},
		onBackPress() {
			return true
		},
		methods: {
			getWONum() {
				// 获取待办工单数目
				getWO({
					selectType: 'running',
				}).then(data => {
					this.runningWONum = data.count;
					// 嵌套调接口是为了规避问题：检测登陆状态时返回两次登陆页面；
					// 获取工单审核数目
					getWO({
						selectType: 'check',
					}).then(data => {
						console.log(data)
						this.auditWONum = data.count;
					}).catch(err => {
						this.auditWONum = '-';
					});
				}).catch(err => {
					this.runningWONum = '-';
				});
			},
			toIndex(index) {
				// index 当前页面的索引
				this.index = index

			},
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			},
			// 待办工单
			toTodoWO() {
				uni.navigateTo({
					url: `/pages/todoWO/todoWO`
				});
			},
			// 工单审核
			toAuditWO() {
				uni.navigateTo({
					url: `/pages/auditWO/auditWO`
				});
			},
			toNewsDetail(e) {
				uni.navigateTo({
					url: `/pages/newsDetail/newsDetail?id=${this.testId}`
				});
			},
			// toLine(e) {
			// 	uni.navigateTo({
			// 		url: `/pages/lineList/lineList`
			// 	});
			// },
			// toLineEdit(e) {
			// 	uni.navigateTo({
			// 		url: `/pages/lineEdit/lineEdit`
			// 	});
			// },
			toJob(e) {
				uni.navigateTo({
					url: `/pages/job/job`
				});
			},
			toNFC() {
				uni.navigateTo({
					url: `/pages/nfc/nfc`
				});
			},
			toDeviceList() {
				uni.navigateTo({
					url: `/pages/deviceList/deviceList`
				});
			},
			toProduce() {
				uni.navigateTo({
					url: `/pages/produce/produce`
				});
			},
			toScan() {
				// 直接拉起扫码界面，然后在回调中执行跳转设备详情页，带着参数去跳转，然后在详情页查询设备
				uni.scanCode({
					success: (res) => {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url: `/pages/deviceInfo/deviceInfo?code=${res.result}`
						});
					},
					fail: (error) => {
						console.log('条码error：' + JSON.stringify(error));
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #F6F7F8;
		padding-bottom: 16px;

		.banner-box {
			padding: 35px 0 8px;
			background-color: blue;
			background-image: linear-gradient(to top, #3D76E6 0%, #3d78ee 100%);

			.top-icon-box {
				display: flex;
				justify-content: space-between;
				padding: 0 18px;
				margin-bottom: 8px;

				.message-img {
					width: 24px;
					height: 24px;
				}
			}
		}
	}

	/* banner */
	.swiper {
		.swiper-item {
			width: 100%;

			.banner-img {
				width: 100%;
				height: 150px;
			}
		}
	}


	/* 通知广告 */
	.news {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0px;
		// margin: 20px 8px;
		background-color: #ffffff;
		box-shadow: 8px 5px 20px #ffffff;
		border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);

		// border-radius: 7px;
		.news-left {
			width: 80%;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.right-arrow-img {
			width: 16px;
			height: 16px;
			margin-right: 16px;
		}
	}

	.news-img {
		margin-left: 18px;
		margin-right: 10px;
		width: 17px;
		height: 15px;
	}

	.news-swiper {
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		color: #333333;
		// width: 80%;
	}

	.todo-box {
		.title {
			font-size: 15px;
			font-weight: bold;
			color: #333333;
			padding: 10px 0 10px 12px;
			background-color: #FFFFFF;
			// margin: 0 8px;
			// box-shadow: 1px 1px 2px rgba(188, 188, 188, .1);
		}
	}

	/* 待办事项 */
	.todo-content {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		// margin: 0 8px 20px;
		background-color: #FFFFFF;
		// box-shadow: 1px 1px 2px rgba(188, 188, 188, .05);
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
	}

	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		height: 80px;
		background-color: #F8F8F8;
	}

	.right {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 80px;
		background-color: #F8F8F8;
		margin-left: 10px;
	}

	.text {
		font-size: 12px;
		color: #666666;
		margin: 10px;
	}

	.num {
		font-size: 30px;
		color: #387CF9;
		font-weight: 500;
		margin-left: 10px;
	}

	/* 常办业务 */
	.business {
		width: 100%;
		// height: 100px;
		border-radius: 12px;
		background-color: #FFFFFF;
		padding-bottom: 16px;

		.business-title {
			margin-top: 16px;
			font-size: 15px;
			font-weight: bold;
			color: #333333;
			padding: 10px 0 10px 12px;
			// margin: 0 8px;
			// box-shadow: 1px 1px 2px rgba(188, 188, 188, .1);
		}

		.items {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding-top: 16px;
			// margin: 0 8px;
			background-color: #FFFFFF;
			// box-shadow: 1px 1px 2px rgba(188, 188, 188, .1);
		}

		.last-items {
			border-bottom-left-radius: 7px;
			border-bottom-right-radius: 7px;
			padding-bottom: 12px;
		}

		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 60px;
		}

		.item-text {
			font-size: 12px;
			margin-top: 4px;
		}

		.img-box {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.img {
			width: 30px;
			height: 30px;
		}
	}
</style>
