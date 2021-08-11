<template>
	<view class="job">
		<view class="top">
			<view class="job-info"  v-if="!isEmpty">
				<block v-for="(item,index) in jobNameArray">
					<view @click="tab(index)" class="job-tab" :class="[index===currentIndex?'active':'']">
						{{item}}
					</view>
				</block>
			</view>
			<view style="height: 40px;background-color: #3d78ee;" v-if="!isEmpty">

			</view>
		</view>
		<!-- item -->
		<view class="item-box" v-if="!isEmpty">
			<view class="item item-1">
				<view class="header">
					<view class="left">
						<image class="left-img" src="../../static/img/job/standard.png" mode=""></image>
						<text>操作规范</text>
					</view>
					<image @click="fold(0)" :class="this.itemObj[0]['rotateClass']" class="arrow"
						src="../../static/img/job/arrow.png" mode=""></image>
				</view>
				<view class="content" :class="this.itemObj[0]['heightClass']">
					<view class="inner">
						<block v-for="item in jobData.czgf">
							<view class="top">
								<view class="around">
								</view>
								<view class="">
									{{item.bt}}
								</view>
							</view>
							<view class="bottom">
								<textarea class="textarea" v-model="item.nr" disabled="true" auto-height="true"
									placeholder="" />
							</view>
						</block>
					</view>
				</view>
			</view>

			<view class="item item-2">
				<view class="header">
					<view class="left">
						<image class="left-img" src="../../static/img/job/standard.png" mode=""></image>
						<text>风险管控</text>
					</view>
					<image @click="fold(1)" :class="this.itemObj[1]['rotateClass']" class="arrow"
						src="../../static/img/job/arrow.png" mode=""></image>
				</view>
				<view class="content" :class="this.itemObj[1]['heightClass']">
					<view class="inner">
						<block v-for="item in jobData.fxgk">
							<view class="top">
								<view class="around">
								</view>
								<view class="">
									{{item.bt}}
								</view>
							</view>
							<view class="bottom">
								<textarea class="textarea" v-model="item.nr" disabled="true" auto-height="true"
									placeholder="" />
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="item item-3">
				<view class="header">
					<view class="left">
						<image class="left-img" src="../../static/img/job/warn.png" mode=""></image>
						<text>应急处理</text>
					</view>
					<image @click="fold(2)" :class="this.itemObj[2]['rotateClass']" class="arrow"
						src="../../static/img/job/arrow.png" mode=""></image>
				</view>
				<view class="content" :class="this.itemObj[2]['heightClass']">
					<view class="inner">
						<block v-for="item in jobData.yjcz">
							<view class="top">
								<view class="around-red">
								</view>
								<view class="">
									{{item.bt}}
								</view>
							</view>
							<view class="bottom">
								<textarea class="textarea" v-model="item.nr" disabled="true" auto-height="true"
									placeholder="" />
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="item item-3a">
				<view class="header">
					<view class="left">
						<image class="left-img" src="../../static/img/job/warn.png" mode=""></image>
						<text>岗位禁令</text>
					</view>
					<image @click="fold(3)" :class="this.itemObj[3]['rotateClass']" class="arrow"
						src="../../static/img/job/arrow.png" mode=""></image>
				</view>
				<view class="content" :class="this.itemObj[3]['heightClass']">
					<view class="inner">
						<block v-for="item in jobData.gwjl">
							<view class="top">
								<view class="around-red">
								</view>
								<view class="">
									{{item.bt}}
								</view>
							</view>
							<view class="bottom">
								<textarea class="textarea" v-model="item.nr" disabled="true" auto-height="true"
									placeholder="" />
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
		<view class="empty-box" v-if="isEmpty">
			<image class="img" src="../../static/img/job/empty.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	/**
	 * -1.  多个岗位tab页面，搞成透明背景色，透出蓝色半透明，被选中的tab则展示纯白色的背景色(找ui把)
	 * 0.2. tab加上滚动吧，展示不完可以滚动，得看横向滚动用啥组件
	 * 0.3. 网上找一个table结构，仅用作展示
	 * 0.1 （该模式不需要收缩展开）卡片布局，就展示为 参考这个的小卡片，https://www.zcool.com.cn/work/ZNDc0MTIwNDQ=.html 点击小卡片，就展示莫泰层展示
	 * 1. 加上收缩动画  为啥没动画？？？过渡效果？？
	 * 3. 整体布局采用卡片展开收缩的方式
	 * 3a. 还差个标题不知道咋设计 标题用白色
	 * 
	 * 
	 * 1. 特定的四个view 分别渲染不同的四个数组，将bt字段放到小卡片里面
	 * 
	 * 
	 */
	export default {
		data() {
			return {
				isEmpty: true,
				userId: '',
				currentJobId: '',
				currentIndex: 0, // 当前tab选中的序号
				jobData: null, // 内容
				jobNameArray: [], // 岗位名称数组
				jobIdArray: [], // 岗位ID数组
				animationData: {},
				itemObj: [{
					isFold: true,
					heightClass: "",
					rotateClass: ""
				}, {
					isFold: true,
					heightClass: "",
					rotateClass: ""
				}, {
					isFold: true,
					heightClass: "",
					rotateClass: ""
				}, {
					isFold: true,
					heightClass: "",
					rotateClass: ""
				}]
			}
		},
		onUnload() {
			console.log('页面onUnload' + JSON.stringify(this.animation));
			this.animationData = {};
			// 页面关闭后清空数据
		},
		onShow() {
			uni.showNavigationBarLoading();
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.userId = res.data.userId;
					this.getJob();
					setTimeout(() => {
						this.getDetail();
					}, 300);
				}
			});
			console.log('页面onShow');

		},
		methods: {
			// 给个数组，四个，每个都有isFold字段，传入index 写死，然后就可以
			fold(index) {
				// let isFold = this.itemObj[index]['isFold']; 

				this.itemObj[index]['heightClass'] = this.itemObj[index]['isFold'] ? 'fold' : 'unfold';
				this.itemObj[index]['rotateClass'] = this.itemObj[index]['isFold'] ? 'rotateDown' : 'rotateUp';

				this.itemObj[index]['isFold'] = !this.itemObj[index]['isFold'];
				// uni.showToast({
				// 	title: 'fold',
				// 	icon: 'none'
				// })
				// this.animation = uni.createAnimation({
				// 	timingFunction: "ease",
				// 	needLayout: true
				// });
				// this.animation.height(height).step({
				// 	duration: 1300
				// });
				// this.animationData = this.animation.export();
			},
			tab(index) {
				this.currentJobId = this.jobIdArray[index];
				this.currentIndex = index;
				this.getDetail();
			},
			// --人员岗位
			getJob() {
				uni.request({
					url: `${this.$store.state.hostUrl}/com.hbky.basedata.ProfessionalLedger.gwkbUser.biz.ext`,
					method: 'GET',
					data: {
						userid: this.userId
					},
					success: (res) => {
						if (res.data) {
							console.log(JSON.stringify(res));
							// console.log(JSON.stringify(res.data.data.a001229)); // 职位
							try {
								if (res.data.data.a001229) {
									this.isEmpty = false;
									this.jobNameArray = res.data.data.a001229.split(',');
									console.log(JSON.stringify(this.jobNameArray));
									this.jobIdArray = res.data.data.a00100f.split(',');
									this.currentJobId = this.jobIdArray[0];
								} else {
									this.isEmpty = true;
								}

							} catch (e) {
								uni.showToast({
									title: e,
									icon: 'none'
								})
							}
							console.log(this.currentJobId)
						}
					}
				})
			},
			//  --岗位信息
			getDetail() {
				uni.request({
					url: `${this.$store.state.hostUrl}/com.hbky.basedata.Accident.queryAllAccidentCk.biz.ext`,
					method: 'GET',
					data: {
						gwzj: this.currentJobId
					},
					success: (res) => {
						uni.hideNavigationBarLoading();
						if (res.data) {
							console.log(JSON.stringify(res));
							this.jobData = (res.data.data || []).reduce((last, item) => {
								if (last[item.lx]) {
									last[item.lx].push(item)
								} else {
									last[item.lx] = [item]
								}
								return last
							}, {})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@keyframes rotate-up {
		from {
			transform: rotate(180deg);
		}

		to {
			transform: rotate(0deg);
		}
	}

	@keyframes rotate-down {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(180deg);
		}
	}

	.rotateDown {
		transform: rotate(180deg);
		animation: rotate-down 0s ease;
	}

	.rotateUp {
		transform: rotate(0deg);
		animation: rotate-up 0s ease;
	}

	@keyframes to-fold {
		from {
			height: auto;
		}

		to {
			height: 0;
		}
	}

	@keyframes to-unfold {
		from {
			height: 0;
		}

		to {
			height: auto;
		}
	}

	.fold {
		height: 0;
		animation: to-fold 0s ease;
		opacity: 0;
	}

	.unfold {
		height: auto;
		animation: to-unfold 0s ease;
	}

	.job {
		background-color: #FFFFFF;
		height: 100vh;

		.top {
			.title {
				padding-top: 32px;
				height: 55px;
				text-align: center;
				// color: #ffffff;
				font-size: 20px;
				background-image: #ffffff;
			}

			.job-info {
				display: flex;
				flex-direction: row;
				padding: 16px 12px;
				font-size: 15px;
				background-color: #FFFFFF;
				// box-shadow: 2px 1px 5px rgba(255, 255, 255, 0.5);
				color: #ffffff;
				background-image: linear-gradient(to top, #3D76E6 0%, #3d78ee 100%);

				.job-tab {
					padding: 4px 16px;
				}
			}
		}

		.item-box {
			margin-top: -36px;
			background-color: #ffffff;
			padding-top: 24px;
			border-radius: 20px;
		}

		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			// width: 100vw;
			height: auto;
			border-radius: 12px;
			margin-bottom: 16px;
			background-color: #FFFFFF;
			// box-shadow: 2px 1px 5px rgba(255, 255, 255, 0.5);
			box-shadow: 1px 1px 5px rgba(56, 124, 249, 0.1);

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 8px 0;

				.left {
					display: flex;
					align-items: center;
					font-size: 16px;

					.left-img {
						width: 24px;
						height: 24px;
						margin: 0 8px;
					}
				}

				.arrow {
					width: 16px;
					height: 16px;
					margin-right: 16px;
				}
			}

			.content {
				display: flex;
				flex-direction: column;
				// border-top: 0.5px solid rgba(0, 0, 0, 0.05);

				.inner {
					padding: 12px 0;
				}

				.top {
					display: flex;
					flex-direction: row;
					align-items: center;
					flex-shrink: 0;
					font-size: 16px;

					.around {
						margin-right: 8px;
						margin-left: 32px;
						width: 7px;
						height: 7px;
						background-color: #4c98f8;
						border-radius: 4px;
					}

					.around-red {
						margin-right: 8px;
						margin-left: 32px;
						width: 7px;
						height: 7px;
						border-radius: 4px;
						background-color: #FA7268;
					}
				}

				.bottom {
					padding-top: 4px;
					padding-left: 32px;
					padding-bottom: 8px;

					.textarea {
						font-size: 14px;
					}
				}
			}

		}
		.empty-box{
			height: calc(100% - 95px);
			display: flex;
			justify-content: center;
			align-items: center;
			.img{
				width: 200px;
				height: 120px;
			}
		}

		.active {
			background-color: #ffffff;
			color: #4c98f8;
			border-radius: 20px;
			font-size: 16px;
			padding: 2px 8px;
			// border-bottom: 2px solid rgba(56, 124, 249, 0.8);
			box-shadow: 1px 1px 3px rgba(255, 255, 255, 0.2);
		}
	}
</style>
