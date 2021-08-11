<template>
	<view class="wait" style="">
		<view class="block">
		</view>
		<view class="text">敬请期待</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.wait{
		// display: flex;
		// justify-content: center;
		// align-items: center;
		width: 100vw;
		height: 100vh;
		.block{
			width: 100vw;
			height: 68px;
			background-color: #3F70E6;
		}
		.text{
			height: 80vh;
			width: 100vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
