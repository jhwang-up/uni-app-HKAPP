<template>
	<view class="zwyMusic">
		<view class="bubble zwyRotate" style="animation-duration: 10s;">气泡</view>
		<view class="after">
			<text>♩</text>
		</view>
		<view class="before">
			<text>♫</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.zwyMusic {
		width: 99rpx;
		height: 99rpx;
		background-color: red;
		position:relative;
		z-index: 9999;
		left: 100px;
	}
	.before,.after{
		position: absolute;
		left: -10%;
		bottom: -30%;
		color: #ffffff;
		z-index: 9998;
		opacity: 0;
		transform: translateY(0) translateX(0) scale(0);
	}
	.after{
		//#ifndef APP-PLUS-NVUE
		animation: zwyMusic 2.5s 1.25s linear infinite;
		//#endif
	}
	.before{
		//#ifndef APP-PLUS-NVUE
		animation: zwyMusic 2.5s linear infinite;
		//#endif
	}
	
	@keyframes zwyMusic {
		0% {
			transform: translateX(0) translateY(0) scale(0);
			opacity: 0;
		}
	
		5% {
			transform: translateY(0) translateX(0) scale(.6);
			opacity: 1;
		}
	
		50% {
			transform: translateX(-40rpx) translateY(-50rpx) scale(1);
			opacity: 1;
		}
	
		90% {
			transform: translateX(-50rpx) translateY(-100rpx) scale(1);
			opacity: 0;
		}
	
		93% {
			transform: translateX(-50rpx) translateY(-100rpx) scale(0);
			opacity: 0;
		}
	
		100% {
			transform: translateX(0) translateY(0) scale(0);
			opacity: 0;
		}
	}
	
	
</style>
