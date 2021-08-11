<template>
	<view class="setting">
		<view class="item" @click="toJob()">
			<text>
				岗位“3+1”
			</text>
			<image class="arrow" src="../../static/img/mine/arrow.png" mode=""></image>
		</view>
		<view class="bottom-line"></view>
		<view class="item" @click="toStep()">
			<text>
				标准化作业流程
			</text>
			<image class="arrow" src="../../static/img/mine/arrow.png" mode=""></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onShow() {

		},
		methods: {
			toJob() {
				uni.navigateTo({
					url: `/pages/job/job`
				});
			},
			toStep() {
				uni.navigateTo({
					url: `/pages/job/step`
				});
			},
		}
	}
</script>

<style lang="scss">
	.setting {
		width: 100vw;
		// height: calc(100vh - 69px);
		height: 100vh;
		display: flex;
		flex-direction: column;
		font-size: 14px;
		color: #5d5c5e;
		background-color: #F4F4F4;

		.item {
			// width: 100%;
			display: flex;
			padding: 12px;
			background-color: #ffffff;
			justify-content: space-between;
			align-items: center;
		}

		.bottom-line {
			height: 0.5px;
			width: calc(100% - 16px);
			margin: 0 12px;
			background-color: rgba(0, 0, 0, 0.05);
		}

		.arrow {
			width: 12px;
			height: 12px;
		}
	}
</style>
