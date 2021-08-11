<script>
	import checkUpdate from './uni_modules/uni-upgrade-center-app/utils/check-update.js'
	export default {
		// 本地进行调试的话，因为一保存就活不到，那就得补查一次，在utils里设置一个
		// 目前只可以在登陆成功的时候进行赋值缓存，在app里面进行时，得是开发环境
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			// 检查app版本更新 热更新
			checkUpdate()

			if (process.env.NODE_ENV === 'development') {
				console.log('------- 当前是开发环境 ---------');
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						console.log('读取的数据= ' + JSON.stringify(res.data));
						if (res.data && res.data.hasLogin === true) {
							// 赋值vuex
							this.$store.commit('login', res.data);

							// this.isShowLogin = false;
							// uni.navigateTo({
							// 	url: '/pages/main/main'
							// });
						} else {
							// 未登录则展示登陆页面
							// this.isShowLogin = true;
						}
					},
					fail: () => {
						// console.log('读取的数据= fail ');
						// // 未登录则展示登陆页面
						// this.isShowLogin = true;
					}
				});
			}
			// if (process.env.NODE_ENV === 'production') {
			//     // TODO
			// 	console.log('-------当前是生产环境---------');
			// }


			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// 随拍发布页面 覆盖复选框
	.addvideo uni-checkbox .uni-checkbox-input{
		color: #ffffff!important;
		border-radius: 22px;
		border: 1px solid #ffffff;
		background-color: rgba(0,0,0,0);
	}
	.addvideo uni-checkbox:not([disabled]) .uni-checkbox-input:hover{
		border: 1px solid #ffffff;
	}
	// =========================================== 底部弹窗样式 ===============================================
	// @import url("./components/aui-actionsheet/common/aui/css/aui.css");
	// @import url("./components/aui-actionsheet/common/aui/css/aui.css");
	// uni-page-head{
	// 	display: none;
	// }
	// uni-page-wrapper{
	// 	height: 100vh !important;
	// }
	// uni-tabbar .uni-tabbar-border{background: rgba(100,100,100,.3) !important; transform: scaleY(.3) !important;}
	// uni-tabbar .uni-tabbar__icon{
	// 	width: 20px; 
	// 	height: 20px; 
	// 	/* #ifdef MP */
	// 	width: 18px;
	// 	height: 18px; 
	// 	/* #endif */
	// 	margin-top: 10px;
	// }	
	// =========================================== 底部弹窗样式 ===============================================

	/*每个页面公共css */
	/* *{
		font-family: 'Courier New', Courier, monospace;
	} */
	// 公共的table固定列样式
	.sticky-left {
		position: sticky;
		/* 首行永远固定在左侧 */
		left: 0;
		background-color: #FFFFFF;
		// table-layout: fixed
	}

	.sticky-right {
		position: sticky;
		/* 首行永远固定在右侧 */
		right: 0;
		background-color: #FFFFFF;
		// table-layout: fixed
	}

	// 以下为底部tab页的样式
	.tabbar {
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		height: 110rpx;
		background-color: #FFFFff;

		.tabbar__item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;
		}

		.tabbar__svg {
			display: flex;
			width: 20px;
			height: 20px;

			svg {
				width: 100%;
				height: 100%;

				.icon {
					fill: none;
					stroke: #AFB8CC;
					stroke-dashoffset: 98;
					stroke-width: 2px;
					stroke-linecap: round;
					stroke-linejoin: round;
				}
			}
		}

		.tabbar__name {
			height: auto;
			padding-top: 2px;
			font-size: 9px;
			transition: color .3s;
			color: #AFB8CC;

		}

		.on {
			.tabbar__name {
				color: #698AFF;
			}

			svg {
				//如果不需要跳动效果删除下方动画
				animation: heartbeat 1s;

				.icon {
					fill: none;
					stroke: #AFB8CC;
					stroke-dashoffset: 98;
					stroke-width: 2px;
					stroke-linecap: round;
					stroke-linejoin: round;

				}

				.icon:nth-child(2) {
					opacity: 0;
					stroke: #698AFF;
					-webkit-animation-delay: 0.2s !important;
					animation-delay: 0.2s !important;
					-webkit-animation: stroke-animation .5s linear;
					animation: stroke-animation .5s linear;
				}

				.icon:nth-child(3) {
					opacity: 0;
					stroke: #FF5100;
					-webkit-animation-delay: 0.3s !important;
					animation-delay: 0.3s !important;
					-webkit-animation: stroke-animation .5s linear;
					animation: stroke-animation .5s linear;
				}

				.icon:nth-child(4) {
					opacity: 0;
					stroke: #FFB400;
					-webkit-animation-delay: 0.4s !important;
					animation-delay: 0.4s !important;
					-webkit-animation: stroke-animation .5s linear;
					animation: stroke-animation .5s linear;
				}

				.icon:nth-child(5) {
					opacity: 0;
					stroke: #698AFF;
					-webkit-animation-delay: 0.5s !important;
					animation-delay: 0.5s !important;
					-webkit-animation: stroke-animation-last .5s linear forwards;
					animation: stroke-animation-last .5s linear forwards;
				}
			}
		}
	}

	/**
		 * 心跳动画图标的跳动效果
		 */
	@keyframes heartbeat {
		0% {
			transform: scale(1);
		}

		20% {
			transform: scale(0.8);
		}

		40% {
			transform: scale(1);
		}

		60% {
			transform: scale(0.9);
		}

		80%,
		100% {
			transform: scale(1);
		}
	}

	/**
		 * 图标流光效果
		 */
	@-webkit-keyframes stroke-animation-first {
		0% {
			opacity: 1;
			stroke-dashoffset: 98;
			stroke-dasharray: 98 0;
		}

		100% {
			opacity: 0;
			stroke-dashoffset: 0;
			stroke-dasharray: 0 98;
		}
	}

	@keyframes stroke-animation-first {
		0% {
			opacity: 1;
			stroke-dashoffset: 98;
			stroke-dasharray: 98 0;
		}

		100% {
			opacity: 0;
			stroke-dashoffset: 0;
			stroke-dasharray: 0 98;
		}
	}

	@-webkit-keyframes stroke-animation {
		0% {
			opacity: 1;
			stroke-dashoffset: 98;
			stroke-dasharray: 0 98 0 0;
		}

		15% {
			stroke-dasharray: 0 98 18 0;
		}

		100% {
			opacity: 1;
			stroke-dashoffset: 0;
			stroke-dasharray: 0 98 18 0;
		}
	}

	@keyframes stroke-animation {
		0% {
			opacity: 1;
			stroke-dashoffset: 98;
			stroke-dasharray: 0 98 0 0;
		}

		15% {
			stroke-dasharray: 0 98 18 0;
		}

		100% {
			opacity: 1;
			stroke-dashoffset: 0;
			stroke-dasharray: 0 98 18 0;
		}
	}

	@-webkit-keyframes stroke-animation-last {
		0% {
			opacity: 1;
			stroke-dashoffset: 98;
			stroke-dasharray: 98 98 18 0;
		}

		15% {
			stroke-dasharray: 116 98 18 0;
		}

		100% {
			opacity: 1;
			stroke-dashoffset: 0;
			stroke-dasharray: 116 98 18 0;
		}
	}

	@keyframes stroke-animation-last {
		0% {
			opacity: 1;
			stroke-dashoffset: 98;
			stroke-dasharray: 98 98 18 0;
		}

		15% {
			stroke-dasharray: 116 98 18 0;
		}

		100% {
			opacity: 1;
			stroke-dashoffset: 0;
			stroke-dasharray: 116 98 18 0;
		}
	}

	@-webkit-keyframes click-animation {
		50% {
			-webkit-transform: scale(4);
			transform: scale(4);
			opacity: .1;
		}
	}

	@keyframes click-animation {
		50% {
			-webkit-transform: scale(4);
			transform: scale(4);
			opacity: .1;
		}
	}
</style>
