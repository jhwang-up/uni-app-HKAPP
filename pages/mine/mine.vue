<template>
	<view class="mine">
		<view class="top">
			<view class="user-info">
				<image :src="avatar" mode="" class="user-img"></image>
				<text class="user-name">{{userName}}</text>
				<text class="user-department">{{mainDeptName}}/{{deptName}}</text>
			</view>
			<image @click="toQrcode()" src="../../static/img/mine/qrcode.png" mode="" class="qrcode-img"></image>
		</view>

		<view class="center">
			<block>
				<view class="item" @click="toJob()">
					<view class="left">
						<image class="img" src="../../static/img/mine/job.png" mode=""></image>
						<text class="text">我的岗位</text>
					</view>
					<image class="arrow" src="../../static/img/mine/arrow.png" mode=""></image>
				</view>
				<view class="bottom-line"></view>
			</block>
			<!-- <block>
				<view class="item" @click="scan()">
					<view class="left">
						<image class="img" src="../../static/img/mine/scan.png" mode=""></image>
						<text class="text">扫一扫</text>
					</view>
					<image class="arrow" src="../../static/img/mine/arrow.png" mode=""></image>
				</view>
				<view class="bottom-line"></view> 
			</block> -->
			<block>
				<view class="item" @click="toSetting()">
					<view class="left">
						<image class="img" src="../../static/img/mine/setting.png" mode=""></image>
						<text class="text">设置</text>
					</view>
					<image class="arrow" src="../../static/img/mine/arrow.png" mode=""></image>
				</view>
				<!-- <view class="bottom-line"></view> -->
			</block>

		</view>
	</view>
</template>

<script>
	/**
	 * -1. 点击二维码展示啥，问一下, 是不是展示一个二维码？啥功能
	 * 1. 背景图未覆盖完全？？
	 * 2. 状态栏颜色未改变
	 * 3. 0.5px的下划线表现不一致
	 */
	import utils from '@/common/utils.js'
	import {
		mapState,
	} from 'vuex';
	export default {
		data() {
			return {
				avatar:''// 头像
			}
		},
		computed: mapState({
			// 从state中拿到数据 箭头函数可使代码更简练
			userName: state => state.userInfo.userName,
			userId: state => state.userInfo.userId,
			mainDeptName: state => state.userInfo.mainDeptName,
			deptName: state => state.userInfo.deptName,
		}),
		mounted() {
			// 获取头像
			utils.reallyGetAvatar().then(res => {
				this.avatar = res.url;
			})
		},
		methods: {
			scan() {
				uni.scanCode({
					success: (res) => {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.showToast({
							title: res.result,
							icon: 'none'
						})
					},
					fail: (error) => {
						console.log('条码error：' + JSON.stringify(error));
					}
				});
			},
			toSetting() {
				uni.navigateTo({
					url: `/pages/setting/setting`,
					animationType: 'pop-in',
					animationDuration: 1200
				});
			},
			toJob() {
				uni.navigateTo({
					url: `/pages/job/list`
				});
			},
			toQrcode() {
				uni.showToast({
					title: '敬请期待',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.mine {
		height: calc(100vh - 55px);
		display: flex;
		flex-direction: column;
		font-size: 20px;
		background-color: #f4f4f4;

		.top {
			width: 100%;
			height: 256px;
			background-color: #387CF9;
			background-image: url(../../static/img/mine/bg.png);

			.user-info {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 80px;

				.user-img {
					width: 62px;
					height: 62px;
					border-radius: 31px;
				}

				.user-name {
					height: 16px;
					font-size: 16px;
					color: #FFFFFF;
					margin: 10px 0 30px;
				}

				.user-department {
					font-size: 14px;
					color: #FFFFFF;
				}
			}

			.qrcode-img {
				padding: 6px;
				width: 16px;
				height: 16px;
				position: fixed;
				top: 41px;
				right: 16px;
			}
		}

		.center {
			width: calc(100vw - 16px);
			// height: 177px;
			margin: 10px 8px;
			border-radius: 7px;
			background: #FFFFFF;
			box-shadow: 0px 5px 18px 3px rgba(0, 0, 0, 0.06);

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 48px;
				padding: 0 16px;

				.left {
					display: flex;
					justify-content: center;
					align-items: center;

					.img {
						width: 27px;
						height: 27px;
						margin-right: 12px;
					}

					.text {
						font-size: 14px;
						font-weight: 500;
						color: #333333;
					}
				}

				.arrow {
					width: 12px;
					height: 12px;
				}


			}

			.bottom-line {
				height: 0.5px;
				width: calc(100% - 16px);
				margin: 0 8px;
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}
</style>
