<template>
	<view class="nfc">
		<view v-if="isOnlyNfc!=='true'" class="tab-box">
			<view class="tab-left">
				<image class="tab-left-img" :src="nfcImg" mode=""></image>
			</view>
			<view class="tab-right" @click="running()">
				<image class="tab-right-img" :src="scanImg" mode=""></image>
			</view>
			<view :animation="animationData" class="tab-bg"></view>
		</view>
		<view class="card-ani">
			<view class="card">
				<text class="card-name">设备巡检点</text>
				<image class="nfc-img" src="../../static/img/nfc/nfc.png" mode=""></image>
			</view>
			<!-- 水纹动画 -->
			<view class="animate wave">
				<view class="w1"></view>
				<view class="w2"></view>
				<view class="w3"></view>
				<view class="w4"></view>
			</view>
		</view>

		<view class="tip">
			请将手机背面顶部靠近刷卡区域
		</view>

		<!-- <input style="margin: 20px 0;padding: 6px;	border-bottom: 1px solid #333333;" class="account-input"
			name="userId" type="text" placeholder="请输入写入nfc的内容" v-model="nfcData" />
		<button @click="writeData()">writeData</button>
		<button @click="readData()">readData</button>
		<view>当前读取nfc_id: {{stringByNFC.id}}</view>
		<view>当前读取nfc_data: {{stringByNFC.data}}</view> -->
	</view>

</template>

<script>
	/** 
	 * 
	 * 首页 nfc 扫码 我的 通讯线路表格和地图，我的页面里面设置，里面再来修改密码表单页面，然后
	 * 2: 我的 以及适配 今天得搞一下接口 3: 搞定应用app图标和其他人安装测试，搞定地图 4: 首页和底部banner
	 * -0.5 看下如何
	 * 0. 
	 * 2. 替换高斯模糊背景
	 * 2.5 看下波纹动画是咋实现的
	 */
	import nfc from '../../utils/nfc.js'

	export default {
		data() {
			return {
				nfcData: '',
				stringByNFC: '',
				// nfcTimer: null,
				scanImg: '../../static/img/nfc/scan_white.png',
				nfcImg: '../../static/img/nfc/card_black.png',
				animationData: {},
				zj: "", // 传入的设备主键
			}
		},
		onUnload() {
			console.log('页面onUnload' + JSON.stringify(this.animation))
			this.animationData = {}
			// 页面关闭后清空数据
		},
		onShow() {
			console.log('页面onShow')
			this.$forceUpdate();
			// 开启nfc监听
			var that = this;

			setTimeout(() => {
				nfc.init(that.zj);
				nfc.listenNFCStatus();
				// ？？？待解决监听异常js报错
				try {
					nfc.readData();
					// that.nfcTimer = setInterval(() => {
					// 	console.log('继续监听1111111111');
					// 	nfc.readData();
					// }, 2000)
				} catch (e) {
					//TODO handle the exception
					setTimeout(() => {
						console.log('继续监听222222');
						nfc.readData();
					}, 600);
				}
			}, 300);
		},
		onLoad(options) {
			this.isOnlyNfc = options.isOnlyNfc || ''; // 为true时，则不展示扫码tab
			this.zj = options.zj || '';
			// 创建动画实例
			this.animation = uni.createAnimation({
				timingFunction: "ease",
			})

		},
		onHide() {
			// console.log('页面隐藏' + JSON.stringify(this.animation))
			nfc.stopListenNFCStatus();
		},
		onBackPress() {
			nfc.stopListenNFCStatus();
			nfc.stopNfc();
			console.log('页面返回')
		},
		methods: {
			running() {
				console.log('开始动画')
				setTimeout(() => {
					this.scanImg = '../../static/img/nfc/scan_black.png';
				}, 200);
				this.animation.translateX(98).step({
					duration: 300
				})
				// 调用实例的方法来描述动画,translateX定义动画类型为x轴偏移, 500为偏移长度, 单位px
				// 调用 step() 来表示一组动画完成(当前参数动画时间1s)
				// step 可以配置参数用于指定当前组动画的配置。具体参数请看文档
				this.animationData = this.animation.export()
				// export方法导出动画数据
				setTimeout(() => {
					uni.scanCode({
						success: (res) => {
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
							uni.navigateTo({
								url: `/pages/deviceInfo/deviceInfo?code=${res.result}`
							});
							this.restoreAnimation();
						},
						fail: (error) => {
							this.restoreAnimation();
							console.log('条码error：' + JSON.stringify(error));
						}
					});
				}, 300)
			},
			// 重置动画
			restoreAnimation() {
				this.animation = uni.createAnimation({
					timingFunction: "ease",
				});
				this.animation.translateX(0).step({
					duration: 300
				});
				this.animationData = this.animation.export();
				setTimeout(() => {
					this.scanImg = '../../static/img/nfc/scan_white.png';
				}, 200);
			},
			// 测试用
			writeData() {
				uni.showModal({
					title: "温馨提示",
					content: "此操作将抹除芯片中的数据，且不可逆",
					success: (res) => {
						if (res.confirm) {
							nfc.writeData(this.nfcData);
						}
					}
				})
			},
			readData() {
				nfc.readData();
				setTimeout(() => {
					console.log('获取nfc数据：' + nfc.getNFCData())
					this.stringByNFC = nfc.getNFCData();
				}, 2500);
			},
		}
	}
</script>

<style lang="scss">
	.nfc {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 94vh;
		padding: 24px 8px;
		background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%);
		background-blend-mode: multiply;

		.tab-box {
			position: relative;
			z-index: 9;
			top: 30px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 200px;
			height: 40px;
			border-radius: 20px;
			background-color: rgba(255, 255, 255, 0.1);

			.tab-left {
				position: relative;
				z-index: 1;
				display: flex;
				justify-content: center;

				.tab-left-img {
					position: relative;
					z-index: 1;
					width: 28px;
					height: 28px;

				}
			}

			.tab-right {
				display: flex;
				justify-content: center;
				align-items: center;

				.tab-right-img {
					position: relative;
					z-index: 1;
					width: 24px;
					height: 24px;
				}
			}

			.tab-bg {
				z-index: 0;
				position: absolute;
				left: 8px;
				width: 84px;
				height: 70%;
				border-radius: 40px;
				background-color: #ffffff;
			}
		}

		.card {
			position: relative;
			z-index: 2;
			width: calc(100vw - 80px);
			height: 20vh;
			padding: 16px;
			margin-top: 80px;
			border-radius: 16px;
			// background-image: linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%);
			background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);

			.card-name {
				font-size: 22px;
				color: #FFFFFF;
			}

			.nfc-img {
				position: absolute;
				bottom: 16px;
				right: 32px;
				width: 58px;
				height: 58px;
			}
		}

		.tip {
			margin-top: 200px;
			color: #c2c0c4;
		}

		@-webkit-keyframes opac {
			from {
				opacity: 1;
				width: 0;
				height: 0;
				top: 50%;
				left: 50%;
			}

			to {
				opacity: 0;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
			}
		}

		.animate .w2 {
			/*延迟1s*/
			-webkit-animation-delay: 1s;
		}

		.animate .w3 {
			-webkit-animation-delay: 2s;
		}

		.animate .w4 {
			-webkit-animation-delay: 3s;
		}

		.wave {
			width: 22.7rem;
			height: 22.7rem;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			margin: 0 auto;
			position: absolute;
			top: 8%;
			z-index: 1;
		}

		.wave * {
			border: 1px solid #fff;
			position: absolute;
			border-radius: 50%;
			-webkit-animation: opac 4s infinite;
		}

		.text {
			background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
			background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
			background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
			background-image: linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%);
		}
	}
</style>
