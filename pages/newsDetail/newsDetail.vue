<template>
	<view class="newsDetail">
		<view class="content">
			<view class="title">备用1(钢丝绳)录入信息有误</view>
			<view class="time">发布时间：2021-06-03 09:01</view>
			<view class="article">应用开发部,地面地点的备用1(钢丝绳)的录入信息有误,检验 报告编号:1</view>
			<view class="author">(发布人：蒋慧志)</view>
		</view>
		<view class="copy-right">
			<view>Copyright © 2021 淮北矿业(集团)有限责任公司</view>
			<view>信息开发分公司提供技术支持</view>
		</view>
	</view>
</template>

<script>
	// 在test.vue页面接受参数
	export default {
		data() {
			return {
				id: ''
			}
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			this.id = option.id;
		}
	}
</script>

<style lang="scss">
	.newsDetail {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #F4F4F4;
		padding: 16px 8px 10px;
		height: calc(100vh - 26px);
		.content {
			height: 358px;
			padding: 20px 10px;
			background: #FFFFFF;
			border-radius: 7px;

			.title {
				font-size: 18px;
				font-weight: bold;
				color: #333333;
				text-align: center;
			}

			.time {
				font-size: 14px;
				font-weight: 400;
				color: #666666;
				text-align: center;
				margin: 15px 0;
			}

			.article {
				font-size: 16px;
				font-weight: 400;
				color: #666666;
				line-height: 18px;
			}

			.author {
				margin-top: 20px;
				text-align: right;
				font-size: 14px;
				font-weight: 400;
				color: #666666;
			}
		}
		.copy-right{
			text-align: center;
			font-size: 12px;
			font-weight: 400;
			color: #666666;
			line-height: 18px;
		}
	}
</style>
