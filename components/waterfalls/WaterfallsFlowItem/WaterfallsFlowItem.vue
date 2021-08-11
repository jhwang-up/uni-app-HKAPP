<template>
	<view class="wf-item-page" v-if="item">
		<view class="main-box">
			<image :src="item.image" mode="widthFix" class="item-img" />
		</view>
		<view class="item-info">
			<view class="text">
				{{item.content}}
			</view>
			<div class="tag-box">
				<text v-for="a in item.tag" class="tag">{{a}}</text>
			</div>
			<view class="bottom">
				<view class="left">
					<image :src="item.avatar" mode="aspectFill" class="info-avatar" />
					<view class="info-nickname">{{ item.nickName }}</view>
				</view>
				<view class="right">
					<image src="../../../static/img/tiktok/like.png" mode="aspectFill" class="info-like" />
					<view class="info-num">{{item.like}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				require: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wf-item-page {
		position: relative;
		overflow: hidden;
		border-radius: 5px;
		border: 0.5px solid #ffffff;
	}

	.main-box {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 260px;
		background-color: #333333;
	}

	.item-img {
		width: 100%;
	}

	.item-info {
		position: absolute;
		bottom: 0;
		width: 100%;
		background-image: linear-gradient(to bottom right, rgba(0,0,0,0.05), rgba(0,0,0,0.1));

		.text {
			margin-bottom: 5px;
			padding: 0 5px;
			/* 超过了就隐藏 */
			overflow: hidden;
			/* 超过了就显示省略号 */
			text-overflow: ellipsis;

			/* webkit内核的浏览器 */
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;

			color: #FFFFFF;
			font-size: 14px;
		}
		.tag-box {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			margin-left: 4px;
			margin-bottom: 4px;
		}
		
		.tag {
			font-size: 10px;
			color: #EFEFEF;
			background-color: rgba(255, 255, 255, 0.2);
			margin-right: 6px;
			padding: 1px 4px;
		}
	}

	.bottom {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.left {
			display: flex;
		}

		.right {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.info-num {
			width: 32px;
			font-size: 12px;
			color: #ffffff;
			margin-right: 5px;
		}

		.info-like {
			vertical-align: middle;
			width: 16px;
			height: 16px;
			margin-right: 3px;
		}
	}

	.info-avatar {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 5px;
		margin-left: 5px;
		margin-bottom: 5px;
	}

	.info-nickname {
		font-size: 12px;
		color: #e6e3e9;
	}
</style>
