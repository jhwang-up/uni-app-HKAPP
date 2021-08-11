<template>
	<view class="personalInfo">
		<view class="background-img-box">
			<image class="background-img" src="../../static/img/background.jpg" mode=""></image>
		</view>
		<view class="top">
			<view class="personal-img-box">
				<image class="personal-img" :src="avatar" mode=""></image>
			</view>
			<view v-if="pages==='user'" :style="style4" class="change" @click="change">
				<text v-show="changeContent==='关注'" class="iconfont iconjiahao"></text> {{changeContent}}
			</view>
			<view v-else class="change" @click="changeInfo">
				编辑资料
			</view>
		</view>
		<view class="name-box">
			<view class="name">
				{{myData.userName}}
			</view>
			<view class="douyinId">
				{{myData.mainDeptName}}/{{myData.deptName}}
			</view>
		</view>
		<view class="text-box">
			<!-- <view class="introduce">
				签名
			</view> -->
			<view class="label-box">
				<!-- <view class="label">
					应用开发信息部
				</view> -->
				<view class="label">
					淮北
				</view>
			</view>
			<view class="number-box">
				<view class="box">
					<text class="number">{{likeSum}}</text>
					<text class="number-text">获赞</text>
				</view>
				<view @click="toFansAndAttention" class="box">
					<text class="number">{{focusOnMeSum}}</text>
					<text class="number-text">关注</text>
				</view>
				<view @click="toFansAndAttention" class="box">
					<text class="number">{{fansSum}}</text>
					<text class="number-text">粉丝</text>
				</view>
			</view>
		</view>
		<view class="btn-box">
			<view class="add-box" @click="addVideo">
				<text class="add">大文件上传</text>
			</view>
			<view class="add-box" @click="addShoot">
				<text class="add">从相册选择</text>
			</view>
		</view>

		<view class="option-box">
			<view class="option" :style="style1" @click="click('作品')">
				作品
			</view>
			<!-- <view class="option" :style="style2" @click="click('动态')">
				动态
			</view> -->
			<view class="option" :style="style3" @click="click('喜欢')">
				喜欢
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getJob, // 根据工号获取用户部门信息
		attentionYesOrNo,
	} from '@/common/api.js'; //引入需要的api 
	import utils from '@/common/utils.js'
	export default {
		props: ['pages', 'focusOnMeSum', 'likeSum', 'fansSum', 'avatar', 'userId', 'attention'],
		data() {
			return {
				style1: 'border-bottom:3px solid #F0AD4E;',
				style2: '',
				style3: '',
				style4: 'background:#dd524d',
				changeContent: "关注",
				myData: {},
			};
		},
		mounted() {
			// 此时为其他用户界面
			if (this.pages === 'user') {
				this.style4 = this.attention * 1 === 0 ? "background:#dd524d" : '';
				this.changeContent = this.attention * 1 === 0 ? "关注" : '取消关注';
				getJob({
					userid: this.userId
				}).then(res => {
					console.log(JSON.stringify(res));
					let temp = {
						userName: res.data && res.data.a00100n,
						mainDeptName: res.mainDeptName,
						deptName: res.deptName,
					}
					this.myData = temp;
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			} else {
				// 获取用户信息
				this.myData = this.$store.state.userInfo;
			}
		},
		methods: {
			click(res) {
				switch (res) {
					case "作品":
						this.style1 = 'border-bottom:3px solid #F0AD4E;'
						this.style2 = ""
						this.style3 = ""
						this.$emit('change', res)
						break;
					case "动态":
						this.style2 = 'border-bottom:3px solid #F0AD4E;'
						this.style3 = ""
						this.style1 = ""
						this.$emit('change', res)
						break;
					case "喜欢":
						this.style3 = 'border-bottom:3px solid #F0AD4E;'
						this.style2 = ""
						this.style1 = ""
						this.$emit('change', res)
						break;
					default:
						break;
				}

			},
			// 跳转粉丝和关注列表页
			toFansAndAttention() {
				// 进入获取粉丝
				uni.navigateTo({
					url: `/pages/tiktok/fansAndAttention?userId=${this.userId}`
				})
			},
			// 添加视频
			addVideo() {
				uni.navigateTo({
					url: '/pages/tiktok/addVideo'
				})
			},
			// 添加随拍
			addShoot() {
				// 首页加号和此处的点击都会跳转到addShoot页面，传过去sourceType，然后直接吊起chooseVideo
				uni.navigateTo({
					url: `/pages/tiktok/addShoot?sourceType=album`
				})
				// var self = this;
				// uni.chooseVideo({
				// 	count: 1,
				// 	sourceType: ['album'],
				// 	// sourceType: ['camera', 'album'],
				// 	compressed: true,
				// 	success: function(res) {
				// 		// self.src = res.tempFilePath;
				// 		console.log(res.tempFilePath);
				// 		uni.navigateTo({
				// 			url: `/pages/tiktok/addShoot?tempFilePath=${res.tempFilePath}`
				// 		})
				// 	},
				// 	fail: function(res) {
				// 		console.log('error选择视频=========' + JSON.stringify(res));
				// 	}
				// });

			},
			changeInfo() {
				uni.navigateTo({
					url: '/pages/tiktok/editUserInfo'
				})
			},
			change() {
				let temp = {
					type: this.changeContent === '关注' ? '' : 1,
					userid: this.userId
				};
				attentionYesOrNo(temp).then(res => {
					if (res.flag === 1) {
						this.style4 = this.style4 === '' ? "background:#dd524d" : ''
						this.changeContent = this.changeContent === '关注' ? "取消关注" : '关注'
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})

			}

		}

	}
</script>

<style scoped>
	.personalInfo {
		width: 100%;
		background: #000000;
		position: relative;
	}

	.background-img-box {
		width: 100%;
		padding: 0 1px;
		z-index: 19;
	}

	.background-img {
		width: 100%;
		height: 180px;
	}

	.top {
		width: 100%;
		position: absolute;
		top: 140px;
		left: 0;
		z-index: 20;
		background: #000000;
		height: 60px;
	}

	.personal-img-box {
		margin: -25px 0 0 30px;
	}

	.personal-img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		z-index: 20;
		border: 3.5px solid #000000;
		border: 1px solid white;
	}

	.change {
		position: absolute;
		top: 15px;
		right: 25px;
		width: 55%;
		height: 35px;
		line-height: 35px;
		font-size: 16px;
		text-align: center;
		background: #333333;
		border-radius: 2px;
		color: #ffffff;
	}

	.name-box {
		padding: 0 25px;
		color: #EEEEEE;
		z-index: 20;
		margin-top: 20px;
	}

	.name {
		height: 50px;
		line-height: 50px;
		font-size: 26px;
	}

	.douyinId {
		height: 25px;
		line-height: 25px;
		font-size: 14px;
	}

	.text-box {
		z-index: 20;
		padding: 0 25px;
		margin-top: 8px;
		border-top: 1px solid #222222;
	}

	.introduce {
		height: 30px;
		line-height: 30px;
		font-size: 15px;
		color: #EEEEEE;
	}

	.label-box {
		width: 100%;
		height: 25px;
		margin-top: 5px;
		line-height: 25px;
		color: #EEEEEE;
	}

	.label {
		height: 20px;
		padding: 0 5px;
		line-height: 20px;
		font-size: 11.5px;
		background: #333333;
		color: #999999;
		float: left;
		border-radius: 1.5px;
		margin-right: 10px;
	}

	.number-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.box {
		height: 40px;
		line-height: 40PX;
		float: left;
		margin-right: 5px;
	}

	.number {
		color: #FFFFFF;
		font-size: 15px;
	}

	.number-text {
		color: #999999;
		font-size: 13px;
		width: 50px;
	}

	.btn-box {
		margin: 0 6%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.add-box {
		width: 39vw;
		height: 40px;
		line-height: 40px;
		background: #333333;
		border-radius: 3px;
		text-align: center;
		color: #FFFFFF;
	}

	.add {
		padding-left: 5px;
		font-size: 15px;
	}

	.option-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin-bottom: 10px;
	}

	.option {
		width: 33%;
		height: 50px;
		line-height: 50px;
		color: #999999;
		float: left;
		text-align: center;
	}
</style>
