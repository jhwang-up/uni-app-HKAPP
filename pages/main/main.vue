<template>
	<view class="main">
		<home v-if="index === 0" />
		<!-- <wait v-if="index === 1" /> -->
		<!-- <wait v-if="index === 1" /> -->
		<mine v-if="index === 2" />
		<!-- 底部导航 -->
		<foo-bar :autoIndex="index" @toIndex="toIndex"></foo-bar>
	</view>
</template>

<script>
	import mine from '../mine/mine'
	import wait from '../wait/wait'
	import home from '../home/home'
	import fooBar from '../../components/fooBar'
	export default {
		components: {
			home,
			// cate,
			wait,
			mine,
			fooBar
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				index: 0, // 待删除
				isScendBack: false,
				timer: null,
			}
		},
		onShow() {
			console.log('main show');
			this.index = 0
		},
		onBackPress() {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			// 当前是默认已经登陆，还是在判断一下登陆状态？
			if (this.isScendBack) {
				this.isScendBack = false;
				// 退出app 不支持ios
				plus.runtime.quit();
			} else {
				uni.showToast({
					title: '再按一次退出应用',
					icon: 'none'
				});
				this.isScendBack = true;
				this.timer = setTimeout(() => {
					this.isScendBack = false;
				}, 1500);
				return true
			}
		},
		methods: {
			toIndex(index) {
				if (index === 1) {
					this.index = "null"; // 为了触发fooBar里的watch监听
					uni.navigateTo({
						url: `/pages/tiktok/tiktok`
					});
					return;
				}
				// index 当前页面的索引
				this.index = index
			},
			// 在swiper上加跳转到信息广告详情页，传递消息id 
			// 给代办事项加上跳转，新建页面
			toNewsDetail(e) {
				uni.navigateTo({
					url: `/pages/newsDetail/newsDetail?id=${this.testId}`
				});
			},
			toLine(e) {
				uni.navigateTo({
					url: `/pages/lineList/lineList`,
					// animationType: 'pop-in',
					// animationDuration: 2000
				});
			},
			toLineEdit(e) {
				uni.navigateTo({
					url: `/pages/lineEdit/lineEdit`
				});
			},
			toJob(e) {
				uni.navigateTo({
					url: `/pages/job/job`
				});
			},
			toNFC() {
				uni.navigateTo({
					url: `/pages/nfc/nfc`
				});
			}
		}
	}
</script>
<style lang="scss">
	.main {
		// height: 95vh;
		height: calc(100vh - 55px);
		background-color: #f4f4f4;
	}
</style>
