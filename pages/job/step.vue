<template>
	<view class="job">
		<view class="top">
			<view class="job-info" v-if="!isEmpty">
				<block v-for="(item,index) in jobNameArray">
					<view @click="tab(index)" class="job-tab" :class="[index===currentIndex?'active':'']">
						{{item}}
					</view>
				</block>
			</view>
			<view style="height: 40px;background-color: #3d78ee;" v-if="!isEmpty">

			</view>
		</view>

		<view v-if="!isEmpty" class="content">
			<view class="" v-html="currentContent">

			</view>
		</view>

		<view class="empty-box" v-if="isEmpty">
			<image class="img" src="../../static/img/job/empty.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmpty: true,
				currentContent: '',
				userId: '',
				currentJobId: '',
				currentIndex: 0, // 当前tab选中的序号
				jobData: null, // 内容
				jobNameArray: [], // 岗位名称数组
				jobIdArray: [], // 岗位ID数组
			}
		},
		onUnload() {
			console.log('页面onUnload' + JSON.stringify(this.animation));
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
			tab(index) {
				this.currentJobId = this.jobIdArray[index];
				this.currentIndex = index;
				this.getDetail();
			},
			// --标准化作业流程
			getJob() {
				uni.request({
					url: `${this.$store.state.hostUrl}/com.hbky.basedata.ProfessionalLedger.gwkbUser.biz.ext`,
					method: 'GET',
					data: {
						userid: this.userId
					},
					success: (res) => {
						if (res.data) {
							try {
								if (res.data.data.a001229) {
									this.isEmpty = false;
									this.jobNameArray = res.data.data.a001229.split(',');
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
						}
					}
				})
			},
			//  --岗位信息
			getDetail() {
				uni.request({
					url: `${this.$store.state.hostUrl}/com.hbky.basedata.Station.querygwbzzylc.biz.ext`,
					method: 'GET',
					data: {
						gwzj: this.currentJobId
					},
					success: (res) => {
						if (res.data) {
							this.currentContent = res.data.data.bzhzylc;
							uni.hideNavigationBarLoading();
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 16px 12px;
		border-radius: 16px;
		background-color: #FFFFFF;
		margin-top: -40px;
		min-height: 100px;
	}

	.job {
		background-color: #FFFFFF;
		height: 100vh;

		.top {
			.title {
				padding-top: 32px;
				height: 55px;
				text-align: center;
				font-size: 20px;
				background-image: #ffffff;
			}

			.job-info {
				display: flex;
				flex-direction: row;
				padding: 16px 12px;
				font-size: 15px;
				background-color: #FFFFFF;
				color: #ffffff;
				background-image: linear-gradient(to top, #3D76E6 0%, #3d78ee 100%);

				.job-tab {
					padding: 4px 16px;
				}
			}
		}

		.empty-box {
			height: calc(100% - 95px);
			display: flex;
			justify-content: center;
			align-items: center;

			.img {
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
