<template>
	<view class="location" style="padding:180px 10px;">
		<view class="">
			<text>当前位置的经度:{{longitude}}</text>
		</view>
		<view class="">
			<text>当前位置的纬度:{{latitude}}</text>
		</view>
		<button style="margin-top: 20px;" type="default" @click="getLocation()">获取位置</button>
	</view>

</template>

<script>
	// 在test.vue页面接受参数
	export default {
		data() {
			return {
				longitude: '',
				latitude: '',
				nfcData: '',
				stringByNFC: '',
			}
		},
		onLoad: function() {
		},
		methods: {
			getLocation() {
				uni.getLocation({
					type: 'gcj02',
					success: (res) => {
						this.longitude = res.longitude;
						this.latitude = res.latitude;
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					},
					fail: (res) => {
						console.log('当前位置的经度：' + res.longitude);
					},
					complete: (res) => {}
				});
			},
		}
	}
</script>

<style>
</style>
