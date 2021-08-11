<template>
	<view class="setting">
		<view class="item-1">
			<!-- <view class="edit-password" @click="toEditPassword()">
				修改密码
			</view> -->
			<!-- <view class="bottom-line"></view> -->
			<view class="about" @click="toAbout()">
				关于
			</view>
			<view class="bottom-line"></view>
		</view>
		<view class="item-2" @click="quit()" type="default">退出登陆</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onShow() {
			// setTimeout(()=>{
			// 	plus.navigator.setStatusBarStyle('white')
			// },1000);
		},
		methods: {
			toEditPassword() {
				uni.showToast({
					title: '敬请期待',
					icon: 'none'
				})
			},
			toAbout() {
				uni.getSystemInfo({
					success: function(res) {
						console.log(res.model);
						console.log(res.pixelRatio);
						console.log(res.windowWidth);
						console.log(res.windowHeight);
						console.log(res.language);
						console.log(res.version);
						console.log(res.platform);
						uni.showToast({
							title: '版本号：' + res.version,
							icon: 'none'
						})
					}
				});
				// uni.showToast({
				// 	title: '敬请期待',
				// 	icon: 'none'
				// })
			},
			// 退出登录
			quit() {
				try {
					this.$store.commit('logout');
				} catch (e) {
					// 退出app 不支持ios
					plus.runtime.quit();
				}
			}
		}
	}
</script>

<style lang="scss">
	.setting {
		width: 100vw;
		// height: calc(100vh - 69px);
		height: 100vh;
		display: flex;
		flex-direction: column;
		font-size: 18px;
		color: #5d5c5e;
		background-color: #F4F4F4;

		.item-1 {
			.edit-password {
				padding: 12px;
				background-color: #ffffff;
			}

			.bottom-line {
				height: 0.5px;
				width: calc(100% - 16px);
				margin: 0 12px;
				background-color: rgba(0, 0, 0, 0.05);
			}

			.about {
				padding: 12px;
				background-color: #ffffff;
			}
		}

		.item-2 {
			// margin-top: 10px;
			padding: 12px;
			text-align: center;
			color: #FA7268;
			background-color: #ffffff;
		}
	}
</style>
