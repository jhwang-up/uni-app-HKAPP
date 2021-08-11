<template>
	<view class="personal">
		<personal-info :avatar="avatar" :focusOnMeSum="focusOnMeSum" :likeSum="likeSum" :fansSum="fansSum"
			@change="change">
		</personal-info>
		<!-- 直接不用组件，然后用图片循环就行了，还能添加点赞数 -->
		<view class="poster-box" v-show="show==='作品'">
			<block v-for="item in videoList">
				<view class="inner" @click="toVideoDetail(item)">
					<image @longpress="longpress(item)" :src="item.poster" mode="" class="poster"></image>
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
					<image @longpress="longpress(item)" :src="item.poster" mode="" class="poster"></image>
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
	/*
		2. 点击首页用户头像，带着用户id跳转到新的others页面，即用户首页，然后布局就编辑资料按钮变成红色点击关注按钮 1h
		3. 视频删除功能，需要找一个从下方弹出按钮的插件，然后在长按视频截图触发，然后调用删除接口；1h
		3. 爱心动画效果查找1h 可以看看官方动画模块，结合起来能实现成啥样
		3. 优化上传视频界面，以及选择类别的复选框；1h
		5. 优化分级压缩视频以达到合适的压缩效果；
	*/
	// import {
	// 	aui
	// } from '@/components/aui-actionsheet/common/aui/js/aui.js'; // 底部弹窗插件所用
	import utils from '@/common/utils.js'
	import personalInfo from '@/components/tik-tok/personalInfo.vue'
	import personalList from '@/components/tik-tok/personalList.vue'
	// import followList from '@/components/followList.vue'
	import {
		myVideo,
		getFansOrAttentionList,
		getLikeVideos, // 淮矿抖音视频收藏接口
		deleteVideo, // 淮矿抖音视频删除接口
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
				cuurentVideoZj: '', // 待删除视频的主键
			}
		},
		onShow() {
			console.log(JSON.stringify(this.show));
			// 获取头像
			utils.reallyGetAvatar().then(res => {
				this.avatar = res.url;
			})
			setTimeout(() => {
				this.initFileList();
			}, 100);
		},
		methods: {
			// 长按删除功能
			longpress(data) {
				this.cuurentVideoZj = data.zj;
				let that = this;
				console.log('长按事件 测' + JSON.stringify(data.zj));
				if (this.show === '作品') {
					// this.$refs.actionsheet.show();
					uni.showModal({
						title: '提示',
						content: '确定删除该视频？',
						success: function(res) {
							if (res.confirm) {
								// 点击删除之后要调取
								deleteVideo(JSON.stringify({
									datas: [{
										zj: that.cuurentVideoZj
									}]
								})).then(res => {
									// console.log(JSON.stringify(res));
									if (res.flag === 1) {
										that.initFileList();
									}
								}).catch(err => {
									uni.showToast({
										title: `异常，请稍后重试`,
										icon: 'none'
									});
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},

			initFileList() {
				this.dealChange(this.show);
			},
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
				Promise.all([this.getFansOrAttentionList(), this.getFansOrAttentionList({
					type: 1
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
					myVideo().then(res => {
						this.dealVideoList(res, true);
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						});
					})

				} else if (data === '喜欢') {
					getLikeVideos().then(res => {
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
