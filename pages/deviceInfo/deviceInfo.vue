<template>
	<view class="deviceInfo">
		<view class="card">
			<view class="title">
				<view class="bar blue-bar">
				</view>
				<view class="">
					设备信息
				</view>
			</view>
			<view class="content">
				<uni-transition ref="ani" custom-class="transition" :mode-class="'fade'" :show="show">
					<view class="item">
						<view class="left">
							设备状态
						</view>
						<view class="right" :class="{'green':deviceInfo.amstate==='使用中'}">
							{{deviceInfo.amstate}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							设备编号
						</view>
						<view class="right">
							{{deviceInfo.sbbh}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							设备名称
						</view>
						<view class="right">
							{{deviceInfo.sbmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							型号规格
						</view>
						<view class="right">
							{{deviceInfo.xhgg}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							包机人
						</view>
						<view class="right">
							{{deviceInfo.bjr}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							是否开启
						</view>
						<view class="right">
							{{deviceInfo.sfkq?'是':'否'}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							开启日期
						</view>
						<view class="right">
							{{deviceInfo.kqsj}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							设备区域
						</view>
						<view class="right">
							{{deviceInfo.sbwz}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							详细位置
						</view>
						<view class="right">
							{{deviceInfo.sbxxdz}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							资产类别
						</view>
						<view class="right">
							{{deviceInfo.zclbmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							技术类别
						</view>
						<view class="right">
							{{deviceInfo.jslbmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							供应商
						</view>
						<view class="right">
							{{deviceInfo.gys}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							生产厂家
						</view>
						<view class="right">
							{{deviceInfo.sccj}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							出厂日期
						</view>
						<view class="right">
							{{deviceInfo.ccrq}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							所属单位
						</view>
						<view class="right">
							{{deviceInfo.ssdwmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							所属部门
						</view>
						<view class="right">
							{{deviceInfo.ssbmmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							使用单位
						</view>
						<view class="right">
							{{deviceInfo.sydwmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							使用部门
						</view>
						<view class="right">
							{{deviceInfo.sybmmc}}
						</view>
					</view>
					<view class="item">
						<view class="left">
							备注
						</view>
						<view class="right">
							{{deviceInfo.bz}}
						</view>
					</view>
				</uni-transition>

				<view @click="unfold" class="unfold">
					{{isFold?'展开':'收起'}}
				</view>
			</view>

			<view class="btn-box">
				<view class="left-btn" @click="toEquipment()">
					巡检工作
				</view>
				<view class="right-btn" @click="toBreakdown()">
					故障工单
				</view>
			</view>
		</view>
		<view class="bind-box">
			<view v-if="deviceInfo.nfcuuid === null" class="bind" @click="bindNfc">
				点击绑定nfc
			</view>
			<view v-if="deviceInfo.nfcuuid" class="already" @click="bindNfc">
				已绑定nfc，点击更改
			</view>
		</view>
	</view>

</template>

<script>
	/*
	/ 
	    -2. 
		-1. 就差任务主键时哪里来的 这个问题，用是用同一个页面，总计1h；然后故障工单复用 一上午即可；
		1. 需要拷贝设备巡检的页面，完全搞过来使用，点击巡检按钮时，先调用接口看下是否已经有巡检标准了；
		0. 兼容两行展示，所以得动态计算dom的高度；30min；
		1. 增加两个按钮,用统一的按钮样式；10min；
		1. 除了使用中，其他的都是灰色主题；
		2. 测一下其他手机动画高度
		3a. 底部是两个大的按钮，想办法画俩icon使用
		
	*/
	import utils from '@/common/utils.js';
	import {
		getDeviceInfo,
		getDeviceInfoByNfc,
		getEquipmentStandard, // 设备巡检标准查询
		createEquipmentWO, // 设备巡检生成巡检工单
	} from '@/common/api.js'; //引入需要的api 
	export default {
		data() {
			return {
				show: true,
				isFold: true, // 是否收起
				deviceInfo: {},
				animationData: {},
				code: "", // 设备主键
				nfcCode: "",
			}
		},
		onUnload() {
			this.animationData = {}
			// 页面关闭后清空数据
		},
		onLoad(options) {
			this.code = options.code || ""; // 设备主键
			this.nfcCode = options.nfcCode || "";
			// 创建动画实例
			this.animation = uni.createAnimation({
				timingFunction: "ease",
			})
		},
		onShow() {
			// 根据传入的是nfcCode还是扫码得到的code来判断调用哪个接口获取设备信息；
			if (this.code) {
				getDeviceInfo({
					code: this.code
				}).then(res => {
					console.log('设备信息= ' + JSON.stringify(res.bdcardinfo));
					if (res.f === 0) {
						uni.showToast({
							title: `设备不可看`,
							icon: 'none'
						});
					} else {
						this.deviceInfo = res.bdcardinfo;
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			} else if (this.nfcCode) {
				getDeviceInfoByNfc({
					code: this.nfcCode
				}).then(res => {
					console.log('设备信息= ' + JSON.stringify(res.bdcardinfo));
					if (res.f === 0) {
						uni.showToast({
							title: `设备不可看`,
							icon: 'none'
						});
					} else if (res.f === 2) {
						uni.showToast({
							title: `此nfc未绑定设备`,
							icon: 'none'
						});
					} else {
						this.deviceInfo = res.bdcardinfo;
						// nfc卡获取设备信息后，要读取设备主键以备使用
						this.code = res.bdcardinfo.zj
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			}
		},
		onHide() {},
		onBackPress() {
			console.log('页面返回')
		},
		methods: {
			// 故障列表
			toBreakdown() {
				uni.navigateTo({
					url: `/pages/todoWO/list/breakdownList?sbzj=${this.code}`
				});
			},
			// 巡检工作
			toEquipment() {

				// 故障工单时一个接口，然后直接拷贝devicelist即可 然后再又一个新增按钮，直接跳转过去现有故障页面 10min
				// 故障列表在末尾有操作列，然后可以查看；跳转现有的详情页面；10min；
				// 看看故障列表是否有5min，然后再写故障列表 20min 然后也可以跳转故障工单页面
				// 然后就接入完了，还差样式优化2h，以及测试1h；
				// 生产系统总揽 还需要一天时间；
				getEquipmentStandard({
					sbzj: this.code
				}).then(res => {
					console.log("巡检标准== " + JSON.stringify(res));
					if (res.data.length > 0) {

						createEquipmentWO({
							sbzj: this.code,
							lx: '设备'
						}).then(res => {
							console.log("生成巡检工单== " + JSON.stringify(res));
							if (res.f === "2") {
								uni.navigateTo({
									url: `/pages/todoWO/edit/equipmentEdit?zj=${res.zj}&bzbh=${res.sbzj}&sbmc=${this.deviceInfo.sbmc}&isCreated=true`
								});
							} else {
								uni.showToast({
									title: `巡检工单生成异常，请稍后重试`,
									icon: 'none'
								});
							}
						}).catch(err => {
							uni.showToast({
								title: `异常，请稍后重试`,
								icon: 'none'
							});
						})

					} else {
						uni.showToast({
							title: `请先设置巡检标准`,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 绑定nfc卡
			bindNfc() {
				// 拉起nfc页面，然后在nfc逻辑中，绑定该设备；
				// 需要确定在读取到值之后，就立刻处理绑定逻辑，直接在js文件里执行绑定接口，成功后，提示成功绑定，并返回页面；
				// 利用vuex全局方法，然后在nfc.js中读取到值之后，就绑定接口；
				uni.navigateTo({
					url: `/pages/nfc/nfc?zj=${this.deviceInfo.zj}`
				});
			},
			// 展开卡片
			unfold() {
				// step 配置
				this.$refs.ani.step({
					height: (this.isFold ? '1760rpx' : '1000rpx')
				}, {
					duration: 800,
					timingFunction: 'ease',
					delay: 0,
				});
				this.$refs.ani.run();
				this.isFold = !this.isFold;
			},
			running() {
				console.log('开始动画')
				setTimeout(() => {
					this.scanImg = '../../static/img/nfc/card_black.png';
				}, 200);
				// 点击到时候进行切换后面的为黑色图片
				// 在俩按钮上绑定俩函数，点击第一个，延迟300ms后变为白色，
				this.animation.translateX(-82).step({
					duration: 500
				})
				// 调用实例的方法来描述动画,translateX定义动画类型为x轴偏移, 500为偏移长度, 单位px
				// 调用 step() 来表示一组动画完成(当前参数动画时间1s)
				// step 可以配置参数用于指定当前组动画的配置。具体参数请看文档
				this.animationData = this.animation.export()
				// export方法导出动画数据
				setTimeout(function() {
					uni.navigateTo({
						url: `/pages/nfc/nfc`
					});
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
	.transition {
		height: calc(100vh - 236px);
		overflow: hidden;
	}

	.deviceInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - 48px);
		padding: 24px 8px;
		background-color: $uni-bg-color-grey;

		.card {
			background-color: #ffffff;
			width: calc(100vw - 64px);
			margin: 0 16px 24px;
			padding: 16px;
			border-radius: 5px;
			box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);

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

			.title {
				display: flex;
				align-items: center;
				color: #333333;
				font-size: 18px;
				// background-color: red;
				margin-bottom: 12px;
			}

			.content {
				font-size: 15px;

				.item {
					padding: 12px 0;
					position: relative;
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.right {
						color: #777777;
					}

					.green {
						color: $uni-color-success;
					}
				}

				.item:after {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					top: 0;
					right: 0;
					border-bottom: 1px solid #e5e5e5;
					box-sizing: border-box;
					width: 200%;
					height: 200%;
					-webkit-transform: scale(.5);
					transform: scale(.5);
					-webkit-transform-origin: left top;
					transform-origin: left top;
					z-index: -1;
				}

				.unfold {
					margin: 16px 0;
					text-align: center;
					color: $uni-color-primary;
				}
			}

			.btn-box {
				margin: 16px 0 8px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}

		}

		.bind-box {
			.bind {
				color: $uni-color-error;
				border-bottom: 1px solid $uni-color-error;
			}

			.already {
				color: $uni-color-primary;
				border-bottom: 1px solid $uni-color-primary;
			}
		}
	}
</style>
