<template>
	<view class="addvideo">
		<view class="content">
			<view class="top">
				<view class="info-box">
					<textarea class="textarea" maxlength="50" placeholder-style="color:#9291A1;" v-model="spjj"
						placeholder="写标题并使用合适的标签, 能让更多的人看到～" />
					<view @click="clickLabel" class="add-label">
						<span><e style="font-size: 16px;font-weight: bold;padding-right: 4px;">#</e>选择标签</span>
					</view>
				</view>

				<view class="video-box">
					<video class="video" :src="src" controls :poster="poster" v-if="poster != ''"></video>
					<!-- loading动画 -->
					<div v-if="poster === ''" id="loader7" class="loader-container">
						<div class="loader seven"></div>
					</div>
				</view>
			</view>

			<!-- 展示已经选择的标签 -->
			<view class="label-list" @click="clickLabel">
				<span v-show="spbq.length>0" v-for="item in (spbq.split(','))" class="label-item">
					{{item}}
				</span>
			</view>

			<uni-transition ref="ani2" custom-class="transition" :mode-class="'fade'" :show="showLabel">
				<view class="label-btn">
					<span @click="okLabel" class="btn">
						返回
					</span>
				</view>
				<view class="label-box">

					<checkbox-group @change="checkboxChange">
						<label class="item" v-for="item in checkboxList" :key="item.value">
							<view>
								<checkbox :value="item.value" :checked="item.checked" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</checkbox-group>
				</view>
			</uni-transition>
		</view>


		<view class="btn-box">
			<uni-transition ref="ani" custom-class="transition" :mode-class="'fade'" :styles="styles" :show="show">
				<view @click="releaseVideo" class="btn big-btn ok-btn" style="margin-bottom: 12px;">
					确认
				</view>
				<view @click="cancel" class="btn big-btn no-btn">
					返回
				</view>
			</uni-transition>

		</view>

	</view>
</template>
<script>
	/*
	// 增加连续点击的限制；；
		// //添加点击添加标签事件，将底部按钮向下淡出，将复选框列表从右侧滑入，然后右上角有个确定按钮
		// 选中复选框后 每次点击都会在上面标签增加展示数组，然后点击确定后隐藏列表；
		
		
		2. 这个页面需要做的是，上传完视频后，需要把视频给绑定到接口，所以需要一个确认按钮，且视频都很大，所以不能上传完就持久保存
		3. 需要在点击确认按钮到时候，进行持久化保存，然后继续在回调中进行绑定uid和用户的关系； 
		3a. 接口得等，先写到确认按钮的点击逻辑和取消按钮的逻辑；
		
		// 上传图片 以及上传附件 都是用的
	*/
	import {
		releaseVideo,
		deleteFile,
		reallySaveFile,
		queryAttachementByUUID,
		getVideoTypeList,
	} from '@/common/api.js'; //引入需要的api 
	import utils from '@/common/utils.js'
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import MyProgress from "@/components/my-components/my-progress.vue"
	import {
		v4 as uuidv4
	} from 'uuid';
	export default {
		components: {
			MyProgress,
			xflSelect
		},
		data() {
			return {
				progress: 0, // 压缩进度
				src: '', // video地址
				firstCover: '', // video第一帧 做封面 本地路径
				poster: '', // 封面图网络地址
				spjj: '', // 视频简介
				spbq: '', // 视频标签
				imgMid: '',
				videoMid: '',
				currentImgUuid: '',
				currentVideoUuid: '',
				checkboxList: [], // 复选框内容{value: 'xx',name: 'xx',checked:true}
				tempFilePath: '', // 传递过来的临时文件路径
				sourceType: '', // 是打开相册还是摄像头
				styles: {},
				show: true,
				showLabel: false,
			}
		},
		onLoad(options) {
			this.sourceType = options.sourceType;
			var self = this;
			uni.chooseVideo({
				count: 1,
				sourceType: [this.sourceType],
				compressed: true,
				success: function(res) {
					console.log(res.tempFilePath);
					self.tempFilePath = res.tempFilePath;
					self.getPosterAndUpload();
				},
				fail: function(res) {
					// 如果取消选择视频，则后退一步
					uni.navigateBack({});
					console.log('error选择视频=========' + JSON.stringify(res));
				}
			});

			this.styles = {}


			getVideoTypeList({
				dictTypeID: 'HKDYSPLX'
			}).then(res => {
				console.log("当前video的类别=" + JSON.stringify(res));
				for (let s of res.dict) {
					let temp = {
						name: s.dictName,
						value: s.dictID
					};
					this.checkboxList.push(temp);
				}
			}).catch(err => {
				uni.showToast({
					title: `异常，请稍后重试`,
					icon: 'none'
				});
			})
		},
		onReady() {

		},
		onBackPress() {
			// 监听返回事件，以删除未提交的文件
			// 判断是否已经有视频上传了，判断src的值
			if (this.src !== '' && this.isRelease !== true) {
				//删除 当前对应的图片和视频；
				this.deleteFile(this.imgMid);
				this.deleteFile(this.videoMid);
			}
		},
		methods: {
			// 点击标签 隐藏按钮，展示标签列表，可以滚动，有滚动条，然后有按钮可以点击确定，按钮在右上角，点击就反转状态，展示隐藏标签列表
			clickLabel() {
				if (this.show) {
					this.show = !this.show;
					setTimeout(() => {
						this.showLabel = !this.showLabel;
					}, 300);
				} else {
					this.showLabel = !this.showLabel;
					setTimeout(() => {
						this.show = !this.show;
					}, 300);
				}
			},
			// 点击标签确认按钮
			okLabel() {
				if (this.show) {
					this.show = !this.show;
					setTimeout(() => {
						this.showLabel = !this.showLabel;
					}, 300);
				} else {
					this.showLabel = !this.showLabel;
					setTimeout(() => {
						this.show = !this.show;
					}, 300);
				}
			},
			// 逻辑介绍：点击添加的按钮拉起选择视频，然后紧接着自动压缩，获取到临时文件，然后上传临时文件视频和图片，最后调持久保存接口

			// 添加发布介绍；在压缩后查到视频时长（拿不到）

			// 获取封面图并上传视频
			getPosterAndUpload() {
				console.log('进入随拍页面===onReady==' + this.tempFilePath);
				// 已经压缩过了，那就直接传入上传吧 可以获取封面 ；在手动添加里面再压缩视频，可以设置一个按钮，是否压缩，不压缩就是用三方的压缩软件；
				// 获取封面，在回调中赋值封面图，隐藏进度条；
				const dyVideoCompress = uni.requireNativePlugin('K-VideoCompressModule');
				dyVideoCompress.getVideoFrame({
					oriPath: this.tempFilePath
				}, result => {
					this.poster = "file://" + result.framePicPath;
					this.src = this.tempFilePath;
					this.currentImgUuid = uuidv4(); // 图片uuid
					this.currentVideoUuid = uuidv4(); // 视频uuid
					uni.showLoading({
						title: '视频上传中...',
						mask: true
					});
					// 上传视频
					this.uploadFile(this.currentVideoUuid, this.src).then(res => {
						this.videoMid = res;
						uni.hideLoading();
						console.log("视频mid= " + this.videoMid);
					});

					// 上传封面图  先压缩封面图
					let that = this;
					uni.compressImage({
						src: that.poster,
						quality: 18,
						success: res => {
							console.log('先压缩封面图=' + res.tempFilePath)
							that.uploadFile(that.currentImgUuid, res.tempFilePath).then(res => {
								that.imgMid = res;
								console.log("图片mid= " + that.imgMid);
								// 获取封面图
								that.getPoster();
							});
						}
					})

				});
			},
			// 发布视频
			releaseVideo() {
				// console.log("请将信息填写完整" + JSON.stringify({
				// 	spmid: this.videoMid,
				// 	tpmid: this.imgMid,
				// 	spbq: this.spbq,
				// 	spjj: this.spjj
				// }));
				if (!this.videoMid || !this.imgMid || !this.spbq || !this.spjj) {
					uni.showToast({
						title: '请将信息填写完整',
						icon: 'none'
					})
					return;
				}
				releaseVideo(JSON.stringify({
					data: {
						spmid: this.videoMid,
						tpmid: this.imgMid,
						spbq: this.spbq,
						spjj: this.spjj
					}
				})).then(res => {
					if (res.flag === 1) {
						uni.showToast({
							title: `上传成功`,
							icon: 'none'
						});
						setTimeout(() => {
							this.isRelease = true;
							uni.navigateBack({});
						}, 1000)
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 取消
			cancel() {
				uni.navigateBack({});
			},
			// 复选框选择事件
			checkboxChange(e) {
				var items = this.checkboxList,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				// 能拿到最新的所有已选项，然后将数组渲染到上面标签下面，其实要放到视频和编辑的下面一个大dom里面
				// 然后其实提交的赋值逻辑都没变，只是把spbq渲染一下改动而已
				this.spbq = e.detail.value.toString();
				console.log(this.spbq)
			},

			// 上传文件
			uploadFile(fileUuid, filePath) {
				let that = this;
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						// 需要上传的地址 
						url: `${this.$store.state.hostUrl}/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${fileUuid}`,
						filePath: filePath,
						name: 'file',
						success(res) {
							// 显示上传信息
							console.log("返回到上传文件信息=" + JSON.stringify(res.data));
							let tmp = JSON.parse(res.data);
							// 可以上传了，然后拿到mid
							// 还差上传1h 然后我的页面，3h，
							// 作品和喜欢 也就俩接口，2h
							// 编辑我的资料，一天；
							console.log("参数=" + JSON.stringify({
								type: 'db',
								uid: fileUuid,
								filename: tmp.data.document.fileName,
								fileext: tmp.data.document.fileExtent,
								filesize: tmp.data.document.size,
								filestorename: tmp.data.filename,
								uploadPath: tmp.data.fileid,
								uploadUsername: that.$store.state.userInfo.userName,
							}));
							reallySaveFile({
								type: 'db',
								uid: fileUuid,
								filename: tmp.data.document.fileName,
								fileext: tmp.data.document.fileExtent,
								filesize: tmp.data.document.size,
								filestorename: tmp.data.filename,
								uploadPath: tmp.data.fileid,
								uploadUsername: that.$store.state.userInfo.userName,
							}).then(data => {
								// 把mid返回出去
								// console.log("mid=="+ JSON.stringify(data));
								resolve(data)
							});
						},
						fail(err) {
							reject(err);
						}
					});
				})
			},
			// 删除文件
			deleteFile(mid) {
				// 调用delete的接口即可，
				return new Promise((resolve, reject) => {
					deleteFile({
						opt: 'delete',
						mid: mid,
					}).then(res => {
						resolve(200);
					}).catch(err => {
						reject(-1);
					})
				})
			},
			// 获取视频封面图
			getPoster() {
				this.getFileList(this.currentImgUuid).then(res => {
					let item = res.uploadFiles[0]; // 一个uuid只会上传一个封面
					this.poster =
						`http://www.hbcoal.cn:8999/document/check?fileId=${item&&item.filepath}&userId=${this.$store.state.userInfo.userId}&attname=${item&&item.filename}`;
					// console.log(this.poster);
					this.$forceUpdate();
				});
			},
			getFileList(uuid) {
				return new Promise((resolve, reject) => {
					queryAttachementByUUID({
						uuid: uuid
					}).then(res => {
						resolve(res);
					}).catch(err => {
						reject(err);
					})
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	
	
	
	/* #ifndef APP-NVUE */
	.btn-box ::v-deep .transition {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* #endif */


	.addvideo {
		width: 100%;
		min-height: calc(100vh - 32px);
		padding-bottom: 32px;
		background: #171724;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.content {
			width: 100vw;
			padding: 24px 0 32px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			.top {
				width: 100vw;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.info-box {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 60vw;
					height: 46vw;
					margin-left: 3vw;

					.add-label {
						span {
							padding: 4px 8px;
							border-radius: 2px;
							background-color: #3A3947;
							font-size: 14px;
							color: #ffffff;
						}
					}

					.textarea {
						width: 100%;
						height: 116px;
						color: #dddddd;
					}
				}

				.progress {
					margin-bottom: 0px;
				}

				.video-box {
					margin-right: 3vw;
					width: 29vw;
					height: 46vw;
					border: 1px solid #dddddd;
					margin-bottom: 12px;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.video {
					width: 29vw;
					height: 46vw;
				}
			}
		
		
			.label-btn {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				width: 100vw;
				margin-bottom: 8px;
			
				.btn {
					margin-right: 10px;
					padding: 4px 8px;
					border-radius: 2px;
					color: #ffffff;
				}
			}
			
			.label-box {
				display: flex;
				flex-direction: column;
				width: 90vw;
				color: #FFFFFF;
				width: calc(100vw - 20px);
				margin:0 10px;
			
				.item {
					margin: 12px 0;
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
			}
		}

		.label-list {
			display: flex;
			flex-direction: row;
			color: #FFFFFF;
			min-height: 30px;
			margin-left: 10px;

			.label-item {
				margin-right: 8px;
				height: 18px;
				line-height: 18px;
				padding: 2px 8px;
				border-radius: 2px;
				background-color: #3A3947;
				font-size: 12px;
				color: #dddddd;
			}
		}

		.btn {
			text-align: center;
			color: #dddddd;
			background-color: #333333;
		}

		.big-btn {
			height: 38px;
			width: 80vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn-box {
			margin-top: 16px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.ok-btn {
				border-radius: 2px;
				background-color: #FE2C59;
			}

			.no-btn {
				border-radius: 2px;
				background-color: #3A3949;
			}
		}

	}

	// loading动画
	.loader {
		position: relative;
		width: 50px;
		height: 50px;
		margin: 10px;
	}

	.loader-container {
		display: inline-block;
		height: 75px;
		width: 100px;
	}

	.seven {
		border: solid #fff 2px;
		width: 75px;
		height: 10px;
		border-radius: 7px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 35px;
	}

	.seven:before {
		content: "";
		position: absolute;
		width: 73px;
		height: 8px;
		top: 1px;
		left: 1px;
		background-color: #fff;
		border-radius: 4px;
		animation: loader7AnimationBefore 2s linear infinite;
	}

	.seven:after {
		content: "压缩中...";
		position: absolute;
		width: 75px;
		color: #fff;
		top: -28px;
		font-family: Marvel;
		font-size: 10pt;
		text-align: center;
		animation: loader7AnimationAfter 2s linear infinite;
	}

	@keyframes loader7AnimationBefore {
		0% {
			width: 0%;
		}

		15% {
			width: 0%;
		}

		85% {
			width: 73px;
		}

		100% {
			width: 73px;
		}
	}

	@keyframes loader7AnimationAfter {
		0% {
			content: "压缩中";
		}

		25% {
			content: "压缩中.";
		}

		50% {
			content: "压缩中..";
		}

		75% {
			content: "压缩中...";
		}

		100% {
			content: "压缩中...";
		}
	}
</style>
