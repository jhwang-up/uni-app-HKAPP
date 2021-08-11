<template>
	<view class="search">
		<!-- 空白占位 -->
		<view style="width: 100vw;background-color: #171724;height: 40px;">
		</view>
		<!-- 搜索框 -->
		<view class="search-box">
			<!-- 原样式 如果使用原样式，恢复下方注销代码 -->

			<view class="input-box">
				<input type="text" :adjust-position="true" :placeholder="defaultKeyword" @input="inputChange"
					v-model="keyword" @confirm="doSearch(false)" @focus="focus()" auto-blur="true"
					placeholder-class="placeholder-class" confirm-type="search">
			</view>
			<view class="search-btn" @tap="doSearch(isShowList?'取消':false)">{{isShowList?'取消':'搜索'}}</view>

			<!-- 原样式 end -->
		</view>
		<!-- 搜索框下方内容 -->
		<view v-show="!isShowList" class="search-keyword">
			<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
				<block v-for="(row,index) in keywordList" :key="index">
					<view class="keyword-entry" hover-class="keyword-entry-tap">
						<view class="keyword-text" @tap.stop="doSearch(keywordList[index].keyword)">
							<rich-text :nodes="row.htmlStr"></rich-text>
						</view>
						<view class="keyword-img" @tap.stop="setKeyword(keywordList[index].keyword)">
							<image src="/static/HM-search/back.png"></image>
						</view>
					</view>
				</block>

			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>历史搜索</view>
						<view>
							<image @tap="oldDelete" src="../../static/img/tiktok/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">
							{{keyword}}
						</view>
					</view>
				</view>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>标签</view>
						<view>
							<image @tap="hotToggle" :src="'../../static/img/tiktok/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">
							{{keyword}}
						</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜标签已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 瀑布流 -->
		<view v-if="isShowList" class="">
			<WaterfallsFlow :wfList="wfList" :updateNum="updateNum" @itemTap="itemTap"></WaterfallsFlow>
		</view>
		<!-- 返回顶部 -->
		<wppengtop :scrollTop="scrollTop"></wppengtop>
	</view>
</template>

<script>
	/**
	 *  0. 将列表放到搜索框下面，用isShowList控制，开始到结束30min，然后修改小问题，增加自动登录，上午出包；
	 * 下午开始搞企业账号；
	 * 	1. 点击搜索按钮后，隐藏历史记录等，展示瀑布流；
	 * 	2. 
	 */
	import wppengtop from '@/components/wppeng-top/wppeng-top.vue';
	import WaterfallsFlow from '@/components/waterfalls/WaterfallsFlow/WaterfallsFlow.vue';
	import utils from '@/common/utils.js'
	import {
		searchVideos,
		getVideoTypeList,
	} from '@/common/api.js'; //引入需要的api 
	export default {
		components: {
			WaterfallsFlow,
			wppengtop
		},
		data() {
			return {
				wfList: [], //
				updateNum: 10,
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false,
				isShowList: false, // 控制是否显示视频列表
				currentPage: 1, // 当前查询第几页
				scrollTop: 0,
			}
		},
		onLoad() {
			this.init();
		},
		//监听页面滚动
		onPageScroll(res) {
			this.scrollTop = res.scrollTop
			
		},
		onReachBottom() {
			if (!this.isShowList) {
				return;
			}
			console.log('触底刷新');
			// 这个得判断传入是页码几，所以；得传进去；
			// 如何判断页码，搜索时，默认传入页码0，
			// 在下拉时，自增一，然后传入；
			// 那就得搞个变量存着，在doSearch时 赋值为0；
			// 在上拉时，触发为自增
			this.currentPage++;
			this.getData(this.keyword, this.currentPage);
		},
		methods: {
			init() {
				this.loadDefaultKeyword();
				this.loadOldKeyword();
				this.loadHotKeyword();

			},
			// 点击视频列表的某一项
			itemTap(item) {
				console.log(JSON.stringify(item));
				// 跳转到详情页；
				uni.navigateTo({
					url: `/pages/tiktok/videoDetail?userId=${item.userId}&tag=${item.tag}&src=${encodeURIComponent(JSON.stringify(item.videoUrl))}&like=${item.like}&at=${item.nickName}&content=${item.content}&attention=${item.attention}&check=${item.check}&avatar=${encodeURIComponent(JSON.stringify(item.avatar))}&zj=${item.zj}`
				});
			},
			// 点击的时候就是focus时 隐藏列表，点击完成时 失去焦点 隐藏键盘
			blur() {
				uni.hideKeyboard();
			},
			focus() {
				this.isShowList = false;
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "请输入";
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载标签
			loadHotKeyword() {
				// 获取标签列表
				getVideoTypeList({
					dictTypeID: 'HKDYSPLX'
				}).then(res => {
					console.log("当前video的类别=" + JSON.stringify(res));
					for (let s of res.dict) {
						this.hotKeywordList.push(s.dictName);
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			//监听输入
			inputChange(event) {
				console.log('监听输入');
				// 暂时用不到关键字匹配功能

				// //兼容引入组件时传入参数情况
				// var keyword = event.detail ? event.detail.value : event;
				// if (!keyword) {
				// 	this.keywordList = [];
				// 	this.isShowKeywordList = false;
				// 	return;
				// }
				// this.isShowKeywordList = true;
				// //以下示例截取淘宝的关键字，请替换成你的接口
				// uni.request({
				// 	url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + keyword, //仅为示例
				// 	success: (res) => {
				// 		this.keywordList = [];
				// 		this.keywordList = this.drawCorrelativeKeyword(res.data.result, keyword);

				// 	}
				// });
			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				var len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					//定义高亮#9f9f9f
					var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row[0],
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			//顶置关键字
			setKeyword(index) {
				this.keyword = this.keywordList[index].keyword;
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//标签开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(keyword) {
				// console.log('执行搜索');
				if (keyword === '取消') {
					this.isShowList = false;
					return;
				}
				this.blur();
				this.isShowList = true;
				keyword = keyword === false ? this.keyword : keyword;
				this.keyword = keyword;
				this.saveKeyword(keyword); //保存为历史 
				this.currentPage = 1;
				this.getData(keyword, this.currentPage);
				// uni.showToast({
				// 	title: keyword,
				// 	icon: 'none',
				// 	duration: 2000
				// });
				//以下是示例跳转淘宝搜索，可自己实现搜索逻辑
				/*
				//#ifdef APP-PLUS
				plus.runtime.openURL(encodeURI('taobao://s.taobao.com/search?q=' + keyword));
				//#endif
				//#ifdef H5
				window.location.href = 'taobao://s.taobao.com/search?q=' + keyword
				//#endif
				*/
			},
			// 点击focus时，就隐藏列表
			getData(title, page) {
				searchVideos({
					page: page,
					limit: 10,
					title: title
				}).then(res => {
					if (page === 1) {
						this.wfList = [];
					}
					console.log(JSON.stringify(res));
					for (let item of res.datas) {
						let temp = {
							videoUrl: utils.dealInternetUrl(item.SPDZ),
							image: utils.dealInternetUrl(item.TPDZ),
							avatar: utils.dealInternetUrl(item.TXDZ),
							nickName: item.yhxm,
							like: item.spdzs,
							tag: item.spbq.split(','),
							content: item.spjj,
							attention: item.SFGZYH === 0 ? false : true,
							check: item.SFSCSP === 0 ? false : true,
							userId:item.yhgh,
							zj: item.zj,
						}
						this.wfList.push(temp);
						this.isShowList = true;
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(keyword);
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			}
		}
	}
</script>
<style>
	.search {
		background-color: #171724;
		min-height: 100vh;
		width: 100vw;
	}

	view {
		display: block;
	}

	.search-box {
		width: 95%;
		background-color: #171724;
		padding: 15upx 2.5%;
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
	}



	.search-box .input-box {
		width: 85%;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
	}

	.search-box .search-btn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 28upx;
		color: #fff;
		background-color: #3A3A44;
		border-radius: 60upx;
	}

	.search-box .input-box>input {
		width: 100%;
		height: 60upx;
		font-size: 32upx;
		border: 0;
		border-radius: 60upx;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		padding: 0 3%;
		margin: 0;
		background-color: #3A3A44;
	}

	.placeholder-class {
		color: $uni-text-color-placeholder;
	}

	.search-keyword {
		width: 100%;
		background-color: #171724;
	}

	.keyword-list-box {
		height: calc(100vh - 110upx);
		padding-top: 10upx;
		border-radius: 20upx 20upx 0 0;
		background-color: #171724;
	}

	.keyword-entry-tap {
		background-color: #171724;
	}

	.keyword-entry {
		width: 94%;
		height: 80upx;
		margin: 0 3%;
		font-size: 30upx;
		color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1upx #e7e7e7;
	}

	.keyword-entry image {
		width: 60upx;
		height: 60upx;
	}

	.keyword-entry .keyword-text,
	.keyword-entry .keyword-img {
		height: 80upx;
		display: flex;
		align-items: center;
	}

	.keyword-entry .keyword-text {
		width: 90%;
	}

	.keyword-entry .keyword-img {
		width: 10%;
		justify-content: center;
	}

	.keyword-box {
		height: calc(100vh - 110upx);
		border-radius: 20upx 20upx 0 0;
		background-color: #171724;
	}

	.keyword-box .keyword-block {
		padding: 10upx 0;
	}

	.keyword-box .keyword-block .keyword-list-header {
		width: 94%;
		padding: 10upx 3%;
		font-size: 27upx;
		color: #ffffff;
		display: flex;
		justify-content: space-between;
	}

	.keyword-box .keyword-block .keyword-list-header image {
		width: 40upx;
		height: 40upx;
	}

	.keyword-box .keyword-block .keyword {
		width: 94%;
		padding: 3px 3%;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}

	.keyword-box .keyword-block .hide-hot-tis {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: #ffffff;
	}

	.keyword-box .keyword-block .keyword>view {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 60upx;
		padding: 0 20upx;
		margin: 10upx 20upx 10upx 0;
		height: 60upx;
		font-size: 28upx;
		/* background-color: rgb(242, 242, 242); */
		background-color: #3A3A44;
		color: #ffffff;
	}
</style>
