<template>
	<view class="container">
		<l-file ref="lFile" @up-success="upSuccess"></l-file>

		<view class="info info-upload-img info-no-line">
			<text class="left">选择多文件:</text>
			<view v-if="!isOnlyRead" class="upload-btn">
				<text @click="myUploadFile()" class="btn">上传</text>
			</view>
		</view>

		<view class="info-table info-no-line">

			<!-- <uni-table ref="table" :loading="loading" stripe emptyText="暂无更多数据"> -->
			<uni-table ref="table" stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="70">文件名</uni-th>
					<uni-th width="50">大小</uni-th>
					<uni-th width="50">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in fileTableData" :key="index">
					<uni-td>
						<view @click="previewFile(item,$event,item.fileName)"
							:class="{'ellipsis':item.fileName && item.fileName.length>15}">
							{{ item.fileName }}
						</view>
					</uni-td>
					<uni-td>{{ item.size }}</uni-td>
					<uni-td class="btn-td">
						<view class="btn-box" v-if="!isOnlyRead" @click="deleteWj(item)">
							<text class="btn delete-btn">删除</text>
						</view>
						<view class="btn-box" v-if="isOnlyRead" @click="downloadFile(item)">
							<text class="btn download-btn">下载</text>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>

		</view>
		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	/*
		组件说明：
			0. uuid需要外部传入，如果外部传入的不可用则直接在组件内部生成新的uuid，在上传文件成功后，会将新的uuid传出去；	
			1. 
			2. 待开发：下载：拷贝下载方法；
	*/
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import store from '../../store'
	import {
		deleteFile,
		queryAttachementByUUID,
		reallySaveFile,
	} from '../../common/api.js'; //引入需要的api 
	import {
		v4 as uuidv4
	} from 'uuid';
	export default {
		props: {
			uuid: {
				type: String,
				default: ""
			},
			isOnlyRead: { // 为详情页时，按钮为下载，且无上传按钮
				type: Boolean,
				default: false
			},
		},
		components: {
			chunLeiPopups
		},
		data() {
			return {
				fileUuid: '',
				fileTableData: [],
				x: 0, // 气泡
				y: 0, // 气泡
				isShowPopup: false, // 气泡
				popupText: '', // 气泡内容
			}
		},
		mounted() {
			// 判断uuid传入的是否有值，否则自己生成新的，并在上传成功后emit出去
			// 生成新的uuid
			this.fileUuid = !this.uuid ? uuidv4() : this.uuid;
			// 初始化文件列表
			this.initFileList();
		},
		methods: {
			// wjuuid 是需要外部传入的，内部判断，如果传入的uuid无意义，则自己生成，然后在uploadSuccess的时候，emit出去；
			myUploadFile() {
				/*
				选择文件并上传
				
				currentWebview=当前窗口，仅app端需要传，且必传
				
				url=上传服务器地址，必填
				name=上传文件的key(选填，默认为file)
				header=请求头(选填) 16242770031992 16242770031992
				*/
				console.log(
					`文件上传地址== ${this.$store.state.hostUrl}/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.fileUuid}`
				);
				this.$refs.lFile.upload({
					currentWebview: this.$mp.page.$getAppWebview(),
					url: `${this.$store.state.hostUrl}/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.fileUuid}`, //你的上传附件接口地址
					name: 'file',
					// header: {
					// 	'Authorization': 'token'
					// },
					// body参数直接写key,value,如：
					// key1: 'value1',
					// key2: 'value2',
				});
			},
			// 上传文件成功的回掉逻辑
			upSuccess(data) {
				console.log('成功上传文件：' + JSON.stringify(data));
				// 持久化保存文件上传
				let tmp = data;
				console.log('持久上传=' + JSON.stringify({
					type: 'db',
					uid: this.fileUuid,
					filename: tmp.data.document.fileName,
					fileext: tmp.data.document.fileExtent,
					filesize: tmp.data.document.size,
					filestorename: tmp.data.filename,
					uploadPath: tmp.data.fileid,
					uploadUsername: this.$store.state.userInfo.userName,
				}));

				reallySaveFile({
					type: 'db',
					uid: this.fileUuid,
					filename: tmp.data.document.fileName,
					fileext: tmp.data.document.fileExtent,
					filesize: tmp.data.document.size,
					filestorename: tmp.data.filename,
					uploadPath: tmp.data.fileid,
					uploadUsername: this.$store.state.userInfo.userName,
				}).then(data => {
					// console.log(data);
					console.log(JSON.stringify(data));
					// 需要把uid暴露出去
					this.$emit('get-file-uuid', {
						fileUuid: this.fileUuid
					});
					this.initFileList();
				});

			},
			initFileList() {
				this.getFileList(this.fileUuid).then(res => {
					// 先清空文件列表再赋值新的；
					this.fileTableData = [];
					console.log(JSON.stringify(res));
					for (let item of res.uploadFiles) {
						this.pushOneFile(item);
					}
					console.log('fileTableData====' + JSON.stringify(this.fileTableData));
				});
			},
			// 获取文件列表，在点击填写，上一步下一步时均要调用; 且返回的是文件列表，然后处理文件地址写一个方法；
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
			// 兼容处理两种字段的文件data
			pushOneFile(data) {
				let tmp = {};
				tmp.mid = data.mid;
				tmp.fileName = data.fileName || data.filename;
				tmp.fileId = data.data && data.data.document && data.data.document.fileId || data.filepath;
				tmp.size = this.formatFileSize(data.data && data.data.document && data.data.document.size || data
					.filesize);
				this.fileTableData.push(tmp);
			},
			// 预览文件，待测试多个文件类型的效果
			previewFile(item, e, fileName) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY
				this.popupText = fileName;
				this.isShowPopup = !this.isShowPopup;

				let url =
					`http://www.hbcoal.cn:8999/document/check?fileId=${item.fileId}&userId=${store.state.userInfo.userId}&attname=${item.fileName}`;
				console.log(url)
				/* 下载返回临时路径（退出应用失效） */
				this.$refs.lFile.download({
						url
					})
					.then(path => {
						/* 预览 */
						this.$refs.lFile.open(path);
					});
			},
			deleteWj(item) {
				console.log(JSON.stringify(item));
				this.deleteFile(item).then(res => {
					this.initFileList();
				}).catch(err => {
					console.log(JSON.stringify(err));
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					})
				});
			},
			// 删除文件  
			deleteFile(item) {
				// 调用delete的接口即可，
				return new Promise((resolve, reject) => {
					deleteFile({
						opt: 'delete',
						mid: item.mid,
					}).then(res => {
						resolve(200);
					}).catch(err => {
						reject(-1);
					})
				})
			},
			// 下载附件
			downloadFile(data) {
				// 只要拿到地址即可吧？？ 
				console.log(JSON.stringify(data));
				let url =
					`http://www.hbcoal.cn:8999/document/check?fileId=${data.fileId}&userId=${store.state.userInfo.userId}&attname=${data.fileName}`;
				/**
				 * 保存到本地
				 * type 非save为临时下载
				 * customName 仅type=save生效 附件自定义名称需带后缀，自定义目录需以/结尾
				 * DownloadOptions 仅type=save生效 可选参数(http://www.html5plus.org/doc/zh_cn/downloader.html#plus.downloader.DownloadOptions)
				 * 默认下载到_downloads/files/ 可通过DownloadOptions自定义
				 */
				// utils里面分业务和公共逻辑？ 
				this.$refs.lFile.download({
					url: url, //必填，附件网络地址
					type: 'save', //选填，非save为临时下载
					customName: data.fileName,
					//...DownloadOptions直接写key:value   
					// 例如：
					method: 'GET'
				}).then(path => {
					this.localPath = path;
					uni.showToast({
						title: `文件已保存至: 内部存储/Android/data/io.dcloud.HBuilder/${this.localPath}`,
						icon: 'none'
					})
					console.log('下载成功' + JSON.stringify(path));
					// 下载本地目录：内部存储\Android\data\io.dcloud.HBuilder\downloads\files
				});
			},
			formatFileSize(fileSize) {
				if (fileSize < 1024) {
					return fileSize + 'B';
				} else if (fileSize < (1024 * 1024)) {
					var temp = fileSize / 1024;
					temp = temp.toFixed(2);
					return temp + 'KB';
				} else if (fileSize < (1024 * 1024 * 1024)) {
					var temp = fileSize / (1024 * 1024);
					temp = temp.toFixed(2);
					return temp + 'MB';
				} else {
					var temp = fileSize / (1024 * 1024 * 1024);
					temp = temp.toFixed(2);
					return temp + 'GB';
				}
			},
		},
	}
</script>

<style lang="scss">
	.container {
		background-color: #ffffff;
	}

	.info {
		display: flex;
		flex-direction: row;
		padding: 12px 0px 12px;
		margin: 0 12px;
		border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

		.left {
			flex-shrink: 0;
			font-size: 14px;
			padding-right: 8px;
		}

		.upload-btn {
			width: 100%;
			display: flex;
			justify-content: flex-end;

			.btn {
				font-size: 12px;
				border-radius: 2px;
				color: #FFFFFF;
				background-color: #387CF9;
				padding: 1px 2px;
			}
		}

	}

	.info-table {
		background-color: #ffffff;
		width: auto;
		padding: 0 4px 8px;
		margin-bottom: 8px;
		overflow: hidden;

		.btn-box {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			.btn {
				font-size: 16px;
				border-radius: 2px;
				color: #FFFFFF;
				background-color: #387CF9;
				padding: 4px 8px;
			}

			.delete-btn {
				color: #ffffff;
				padding: 1px 2px;
				background-color: #FA7268;
				font-size: 10px;
			}

			.download-btn {
				color: #ffffff;
				padding: 1px 2px;
				font-size: 10px;
				background-color: #387CF9;
			}
		}
	}

	.ellipsis {
		overflow: hidden !important;
		text-overflow: ellipsis !important;
		display: -webkit-box !important;
		-webkit-line-clamp: 1; //文字上限行
		-webkit-box-orient: vertical;
		word-break: break-all;
	}
</style>
