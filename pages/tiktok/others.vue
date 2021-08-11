<template>
	<view class="personal">
		<personal-info :pages="'user'" :attention="attention" :userId='currentUserId' :avatar="avatar"
			:focusOnMeSum="focusOnMeSum" :likeSum="likeSum" :fansSum="fansSum" @change="change">
		</personal-info>
		<!-- 直接不用组件，然后用图片循环就行了，还能添加点赞数 -->
		<view class="poster-box" v-show="show==='作品'">
			<block v-for="item in videoList">
				<view class="inner" @click="toVideoDetail(item)">
					<image :src="item.poster" mode="" class="poster"></image>
					<view class="like-box">
						<image src="../../static/img/tiktok/like.png" class="like-img" mode=""></image>
						<text class="like-num">{{item.like}}</text>
					</view>
				</view>
			</block>
			<view class="more">
				暂时没有更多了
			</view>
		</view>
		<view class="poster-box" v-show="show==='喜欢'">
			<block v-for="item in videoList">
				<view class="inner" @click="toVideoDetail(item)">
					<image :src="item.poster" mode="" class="poster"></image>
					<view class="like-box">
						<image src="../../static/img/tiktok/like.png" class="like-img" mode=""></image>
						<text class="like-num">{{item.like}}</text>
					</view>
				</view>
			</block>
			<view class="more">
				暂时没有更多了
			</view>
		</view>
		<!-- <view class="" v-show="show==='动态'">
			<follow-list  :list="list"></follow-list>
		</view> -->
		<!-- <tab></tab> -->
	</view>
</template>

<script>
	import utils from '@/common/utils.js'
	import personalInfo from '@/components/tik-tok/personalInfo.vue'
	import personalList from '@/components/tik-tok/personalList.vue'
	// import followList from '@/components/followList.vue'
	import {
		getJob, // 根据工号获取用户部门信息
		myVideo,
		getFansOrAttentionList,
		getLikeVideos, // 淮矿抖音视频收藏接口
	} from '@/common/api.js'; //引入需要的api 
	export default {
		components: {
			personalInfo,
			personalList,
			// followList
		},
		data() {
			return {
				videoList: [],
				show: "作品",
				pages: "personal",
				userSum: {}, // 用户数据信息
				focusOnMeSum: '',
				likeSum: '',
				fansSum: '',
				avatar: '',
				currentAvatar: '',
				currentUserId: '',
				attention: '',
			}
		},
		onLoad(options) {
			console.log("其他用户主页参数=="+JSON.stringify(options))
			this.avatar = JSON.parse(decodeURIComponent(options.avatar));;
			this.currentUserId = options.userId.split(',')[0];
			this.attention = JSON.parse(options.attention);
			// console.log(JSON.stringify(this.currentUserId), this.avatar)
			// 获取用户作品，喜欢；
		},
		onShow() {
			console.log(JSON.stringify(this.show));
			setTimeout(() => {
				this.initFileList();
			}, 100);
		},
		methods: {
			initFileList() {
				this.dealChange(this.show);
			},
			// 首先是获取我的视频是依据的其他用户的工号，然后呢，获取的是
			dealVideoList(res, boolean = false) {
				this.videoList = [];
				console.log("我的作品=" + JSON.stringify(res.datas));
				for (let s of res.datas) {
					let temp = {};
					temp.src =
						`http://www.hbcoal.cn:8999/document/check?fileId=${s.SPDZ}&userId=${this.$store.state.userInfo.userId}&attname=`;
					temp.poster =
						`http://www.hbcoal.cn:8999/document/check?fileId=${s.TPDZ}&userId=${this.$store.state.userInfo.userId}&attname=`;
					temp.like = s.spdzs || 0;
					temp.zj = s.zj;
					temp.at = s.yhxm;
					temp.tag = s.spbq.split(',');
					temp.avatar = utils.dealInternetUrl(s.TXDZ);
					temp.attention = s.SFGZYH === 0 ? false : true;
					temp.content = s.spjj;
					temp.userId = s.yhgh;
					temp.check = s.SFSCSP === 0 ? false : true;
					this.videoList.push(temp);
				}
				console.log(JSON.stringify(this.videoList));
				// 根据我的视频列表去获取
				if (boolean) {
					this.likeSum = this.videoList.reduce(function(total, currentValue, currentIndex,
						arr) {
						return total * 1 + currentValue.like * 1;
					}, 0);
				}
				// 处理用户信息
				this.dealUserInfo();
			},
			dealUserInfo() {
				Promise.all([this.getFansOrAttentionList({
					userid: this.currentUserId
				}), this.getFansOrAttentionList({
					type: 1,
					userid: this.currentUserId
				})]).then(([res1, res2]) => {
					this.focusOnMeSum = res1.datas.length;
					this.fansSum = res2.datas.length;
				}).catch((error) => {
					console.log(error)
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				});
			},
			// 获取关注我的人
			getFansOrAttentionList(data = {
				type: ""
			}) {
				return new Promise((resolve, reject) => {
					getFansOrAttentionList(data).then(res => {
						resolve(res);
					}).catch(err => {
						reject(err)
					})
				})
			},
			change(res) {
				this.show = res
				this.dealChange(this.show);
			},
			dealChange(data) {
				// 得在onshow的时候判断，show的index，这个看下onshow时默认的index还是 返回时还会变化index
				// 看下是否切换喜欢
				if (data === '作品') {
					myVideo({
						userid: this.currentUserId
					}).then(res => {
						console.log('作品=' + JSON.stringify(res));
						this.dealVideoList(res, true);
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						});
					})

				} else if (data === '喜欢') {
					getLikeVideos({
						userid: this.currentUserId
					}).then(res => {
						console.log('喜欢=' + JSON.stringify(res));
						console.log(JSON.stringify(res));
						this.dealVideoList(res);
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						});
					})
				}

			},
			// 去视频详情页播放
			toVideoDetail(item) {
				console.log(JSON.stringify(item));
				uni.navigateTo({
					url: `/pages/tiktok/videoDetail?userId=${item.userId}&tag=${item.tag}&src=${encodeURIComponent(JSON.stringify(item.src))}&like=${item.like}&at=${item.at}&content=${item.content}&attention=${item.attention}&check=${item.check}&avatar=${encodeURIComponent(JSON.stringify(item.avatar))}&zj=${item.zj}`
				});
			},
		}
	}
</script>

<style lang="scss">
	.personal {
		width: 100vw;
		min-height: 100vh;
		background: #171724;
		background: #000000;
	}

	.poster-box {
		display: flex;
		flex-wrap: wrap;

		.inner {
			width: 33.33%;
			height: 170px;
			position: relative;

			.poster {
				width: 100%;
				height: 100%;
			}

			.like-box {
				position: absolute;
				bottom: 8px;
				left: 8px;
				z-index: 9;

				.like-img {
					width: 13px;
					height: 13px;
					margin-right: 4px;
					vertical-align: middle;
				}

				.like-num {
					font-size: 12px;
					color: white;
				}

			}

		}

	}

	.more {
		width: 100%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 12px;
		color: #999999;
		background: #000000;
	}
</style>
