<template>
	<view class="">
		<view class="personalList">
			<view v-for="item in list" class="item">
				<video 
				class="video" 
				:src="item.src" 
				:poster="item.poster"
				loop="true"
				autoplay="false"
				showCenterPlayBtn="false"
				:controls="false"
				></video>
				<view class="love-box">
					<text class="iconfont iconicon-test love-icon">12w</text>
				</view>
			</view>
		</view>
		<view class="more">
			没有更多了
		</view>
		<view class="ground">
			
		</view>
	</view>
	
</template>

<script>
	export default {
		props:['videoList'],
		data() {
			return {
				list:[],
			};
		},
		watch: {
			videoList() {
				this.list = this.videoList;
				console.log("videoList==" + JSON.stringify(this.list));
			}
		},
		mounted() {
			console.log(JSON.stringify(this.videolist));
		},
	}
</script>

<style>
.ground{
	width: 100%;
	height: 50px;
	background: #000000;
}
.personalList{
	width: 100%;
	overflow: hidden;
	background: #000000;
	padding: 0 0.5%;
}
.item{
	width: 33%;
	height: 170px;
	float: left;
	position: relative;
}
.love-box{
	position: absolute;
	bottom: 5px;
	left: 10px;
}
.video{
	width:100%;
	height:100%;
}
.love-icon{
	font-size: 14px;
	color: #FFFFFF;
}
.more{
	width: 100%;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 12px;
	color: #999999;
	background: #000000;
}
</style>
