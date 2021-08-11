<template>
	<view class="cards">
		<view class="top">
			<!-- 日期 问候语、天气  然后矿井名称在右侧，前面加上定位icon -->
			<view class="left">
				<view class="weather">
					今日天气：{{weatherInfo}}
				</view>

				<view class="hello">
					您好！{{userName}}
				</view>
				<view class="date-box">
					<image class="date-img" src="../../static/img/cards/date.png" mode=""></image>
					{{date}}
				</view>
				<view class="address-box">
					<image class="address-img" src="../../static/img/cards/address.png" mode=""></image>
					<text>{{address}}</text>
				</view>
			</view>
		</view>

		<!-- 六张卡片，骑线展示，样式 ，内容 1h 上面头部20min -->
		<view class="items">
			<view class="row">
				<view class="item">
					<view class="leaders-title">
						矿领导带班人员
					</view>
					<view class="leaders">
						{{leaders}}
					</view>
					<view class="sum-title">
						井下总人数
					</view>
					<view class="sum">
						{{sum}}
					</view>
				</view>
				<view class="item">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '张三',
				date: "",
				weatherInfo: "",
				address: '某矿',
				leaders: "周宏平、陶志勇",
				sum: "256"
			}
		},
		onLoad() {
			this.date = this.getNowFormatDate();
		},
		onShow() {
			this.getWeather();
		},
		methods: {
			getWeather() {
				// 2
				uni.request({
					//请求数据
					// url: 'http://www.hbcoal.cn:8115/cornServlet',
					url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=340600&key=f66df10b402db708b473b1e6f511b4e2',
					method: 'GET',
					success: (res) => {
						console.log(res)
						let tmp = res.data.lives[0];
						this.weatherInfo =
							`${tmp.city} ${tmp.temperature} ${tmp.weather} ${tmp.winddirection}风 ${tmp.windpower}级`
					}
				})
			},
			getNowFormatDate() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate;
			}
		}
	}
</script>

<style lang="scss">
	.cards {

		.top {
			display: flex;
			padding: 35px 0 8px;
			background-color: blue;
			background-image: linear-gradient(to top, #3D76E6 0%, #3d78ee 100%);
			height: 156px;
			color: #ffffff;

			.left {
				.date-box {
					display: flex;
					align-items: center;
					font-size: 13px;

					.date-img {
						margin: 0 8px 0 16px;
						width: 14px;
						height: 14px;
					}
				}

				.hello {
					padding: 12px 0 16px 16px;
					font-size: 22px;
				}

				.weather {
					padding-left: 16px;
					font-size: 12px;
				}
			}

			.address-box {
				display: flex;
				align-items: center;
				font-size: 13px;
				margin: 6px 0;

				.address-img {
					width: 20px;
					height: 20px;
					margin: 0 8px 0 13px;
				}
			}



		}

		.items {

			.row {
				margin-top: -32px;
				display: flex;
				justify-content: space-between;
				padding: 0 16px;

				.item {
					width: 45vw;
					height: 200px;
					box-shadow: 0px 5px 18px 3px rgba(0, 0, 0, 0.04);
					background-color: #ffffff;
					border-radius: 10px;
				}
			}
		}
	}
</style>
