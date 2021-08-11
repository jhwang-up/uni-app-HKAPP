<template>
	<view class="addvideo">
		<view class="content">
			<MyProgress v-show="isShowProgress" class="progress" :nowD="100" :sumD="100" :content='progress'
				:contentColor='"#dddddd"' :contentBacColor='"#333333"' :time="3000" :wid="300" :type='"linear"'>
			</MyProgress>
			<view class="video-box">
				<video class="video" :src="src" controls :poster="poster" v-if="poster != ''"></video>
			</view>
			<view @click="addvideo" class="btn big-btn">
				<text>{{src===''?'上传视频':'重新上传'}}</text>
			</view>
			<view class="info-box">
				<textarea class="textarea" maxlength="50" placeholder-style="color:#dddddd;" v-model="spjj"
					placeholder="请输入视频简介" />
			</view>

			<view class="info-box">
				<view style="width: 80%; margin: auto; margin-bottom: 20px;color: #ffffff;">
					<checkbox-group @change="checkboxChange"
						style="width:100%;display: flex;justify-content: space-between;">
						<label class="" v-for="item in checkboxList" :key="item.value">
							<view>
								<checkbox :value="item.value" :checked="item.checked" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</checkbox-group>
				</view>

			</view>
			<view class="btn-box">
				<view @click="releaseVideo" class="btn big-btn ok-btn" style="margin-bottom: 12px;">
					确认
				</view>
				<view @click="cancel" class="btn big-btn no-btn">
					返回
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	/*
		-3. 所有页面的背景图出一个，直接抄抖音的设计颜色
		-2. 把视屏置顶（除去自定义bar的高度），把按钮们置于底部
		0. 要不封面先上传？如果点击取消就删除这个图就是，也行哎；！！！2h 以及个人页面3h
		1. 进度条尝试加上渐变颜色？？在自定义进度条中
		2. 这个页面需要做的是，上传完视频后，需要把视频给绑定到接口，所以需要一个确认按钮，且视频都很大，所以不能上传完就持久保存
		3. 需要在点击确认按钮到时候，进行持久化保存，然后继续在回调中进行绑定uid和用户的关系； 
		3a. 接口得等，先写到确认按钮的点击逻辑和取消按钮的逻辑；
		5. 点击上传视频，然后执行选择 压缩和临时上传 以及视频第一帧
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
				isShowProgress: false, // 控制展示进度条
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
			}
		},
		onLoad() {
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
			// 逻辑介绍：点击添加的按钮拉起选择视频，然后紧接着自动压缩，获取到临时文件，然后上传临时文件视频和图片，最后调持久保存接口

			// 添加发布介绍；在压缩后查到视频时长（拿不到）

			// 发布视频
			releaseVideo() {
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
			// 下拉框选择事件
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
				this.spbq = e.detail.value.toString();
				console.log(this.spbq)
			},
			// 添加视频
			addvideo() {
				// 判断是否已经有视频上传了，判断src的值
				if (this.src !== '') {
					//删除 当前对应的图片和视频；
					this.deleteFile(this.imgMid);
					this.deleteFile(this.videoMid);
				}
				// 点击加号需要跳转到某一专门页面，方便展示视频的信息，顺便也解决了页面跳转逻辑的问题
				const plugin = uni.requireNativePlugin("K-ChooseFilesModule");
				plugin.chooseFileAction({
					maxNum: 1,
					fileTypes: ['mp4'],
					isNeedDetail: true,
					// filterIsGreater: true,
					// filterFileSize: 10 * 1024 * 1024
				}, result => {
					this.isShowProgress = true;
					console.log("选择的文件=======" + JSON.stringify(result));
					// 将选择的文件压缩
					this.content = JSON.stringify(result);
					this.compress("file://" + result.data[0]);

					// ，先获取视频的比特率，以及根据视频的大小，来选择压缩比例啊！！！！！！！！！？？？
				});
			},
			// 压缩视频
			compress(oriPath) {
				var self = this;
				const plugin = uni.requireNativePlugin('K-VideoCompressModule');
				// console.log(oriPath);
				plugin.compressAction({
					oriPath: oriPath,
					isNeedFramePic: true,
				}, result => {
					if (result && result.code === '0' && result.path && result.path.length > 0) {
						//压缩成功回调
						//若result.path无法被uni识别，如在uni的video中无法播放，uni.uploadFile无法识别路径，请在本路径前加"file://""后再使用
						self.isShowProgress = false;
						self.progress = 0;
						self.src = "file://" + result.path;
						self.firstCover = "file://" + result.framePicPath;
						self.currentImgUuid = uuidv4(); // 图片uuid
						self.currentVideoUuid = uuidv4(); // 视频uuid
						uni.showLoading({
							title: '视频上传中...',
							mask: true
						});
						// 上传视频
						self.uploadFile(self.currentVideoUuid, self.src).then(res => {
							self.videoMid = res;
							uni.hideLoading();
							console.log("视频mid= " + self.videoMid);
						});
						
						// 上传封面图  先压缩封面图
						uni.compressImage({
						  src: self.firstCover,
						  quality: 18,
						  success: res => {
						    console.log('先压缩封面图='+res.tempFilePath)
							self.uploadFile(self.currentImgUuid, res.tempFilePath).then(res => {
								self.imgMid = res;
								console.log("图片mid= " + self.imgMid);
								// 获取封面图
								self.getPoster();
							});
						  }
						})
						
						
					} else if (result && result.progress && result.progress > 0) {
						//压缩进度回调   
						self.progress = Math.floor(result.progress * 100);
					}
					// else if (result && result.code !== '0') {
					// 	uni.showToast({
					// 		title: `压缩失败, ${result.msg}`,
					// 		icon: 'none'
					// 	});
					// }
				});
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
							console.log("上传文件=" + JSON.stringify(res.data));
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
			// 获取下拉框数据
			getSelectList() {
				name().then(res => {
					if (res.flag === 1) {
						// this.selectList=res.data;
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
		}
	}
</script>

<style lang="scss">
	.addvideo {
		width: 100%;
		min-height: 100vh;
		background: #171724;
		display: flex;
		justify-content: center;
		align-items: center;

		.content {
			width: 100vw;
			padding: 24px 0 32px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.info-box {
				display: flex;
				flex-direction: row;
				justify-content: center;
				width: 100%;
				margin-top: 32px;

				.textarea {
					height: 116px;
					color: #dddddd;
					background-color: #666666;
				}
			}

			.progress {
				margin-bottom: 0px;
			}

			.video-box {
				width: 300px;
				height: 225px;
				border: 1px solid #dddddd;
				margin-bottom: 12px;
			}

			.video {}

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

				.no-btn {
					background-color: #555555;
				}
			}
		}


	}
</style>
