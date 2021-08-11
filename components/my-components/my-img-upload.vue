<template>
	<view class="container">

		<uploadImg style="justify-content: flex-end;
		display: flex;" ref='uploadImg' :maxCount="3" :deleteBtn="isShowDeleteBtn" :mode="imgList" @chooseFile='chooseImg'
			@imgDelete='imgDelete' :control='control' :columnNum="columnNum" />
	</view>
	</view>
</template>

<script>
	import store from '../../store'
	import {
		deleteFile,
		queryAttachementByUUID,
		reallySaveFile,
	} from '../../common/api.js'; //引入需要的api 
	import {
		v4 as uuidv4
	} from 'uuid';
	import uploadImg from "@/components/xiaohuang-uploadImg/uploadImg.vue"
	export default {
		props: {
			uuid: {
				type: String,
				default: ""
			},
			index: {
				type: Number
			},
			isOnlyRead: { // 为详情页时，不能有删除按钮，不能有上传按钮
				type: Boolean,
				default: false
			},
		},
		components: {
			uploadImg,
		},
		data() {
			return {
				fileUuid: '',
				control: true,
				columnNum: 4,
				isShowDeleteBtn: true,
				imgList: [],
			}
		},
		mounted() {
			// 判断uuid传入的是否有值，否则自己生成新的，并在上传成功后emit出去
			// 生成新的uuid
			this.fileUuid = !this.uuid ? uuidv4() : this.uuid;
			this.control = this.isOnlyRead ? false : true;
			this.isShowDeleteBtn = this.isOnlyRead ? false : true;
			// 初始化文件列表
			this.initImgList();
		},
		methods: {
			initImgList() {
				this.getFileList(this.fileUuid).then(res => {
					console.log(JSON.stringify(res));
					this.imgList = this.dealFileUrl(res.uploadFiles);
					// console.log('imgList====' + JSON.stringify(this.imgList));
				});
			},
			dealFileUrl(array) {
				let tmpArray = [];
				for (let item of array) {
					let url =
						`http://www.hbcoal.cn:8999/document/check?fileId=${item.filepath}&userId=${store.state.userInfo.userId}&attname=${item.filename}&mid=${item.mid}`;
					tmpArray.push(url);
				}
				return tmpArray;
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
			// 上传图片
			chooseImg(list, v) {
				console.log("上传图片_list：", list);
				console.log("上传图片_v：", v);
				// console.log(JSON.stringify(
				// 	`${store.state.hostUrl}/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.fileUuid}`
				// 	));
				let that = this;
				var uper = uni.uploadFile({
					// 需要上传的地址 
					url: `${store.state.hostUrl}/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.fileUuid}`,
					// filePath  需要上传的文件
					filePath: v,
					name: 'file',
					success(res) {
						// 显示上传信息
						console.log(JSON.stringify(res.data));
						// console.log(res.data);
						let tmp = JSON.parse(res.data);
						reallySaveFile({
							type: 'db',
							uid: that.fileUuid,
							filename: tmp.data.document.fileName,
							fileext: tmp.data.document.fileExtent,
							filesize: tmp.data.document.size,
							filestorename: tmp.data.filename,
							uploadPath: tmp.data.fileid,
							uploadUsername: store.state.userInfo.userName,
						}).then(data => {
							// 需要把uid 和index 暴露出去
							that.$emit('get-img-info', {
								fileUuid: that.fileUuid,
								index: that.index
							});
							// console.log(data);
							console.log(JSON.stringify(data));
						});
					}
				});
			},
			// 删除图片： list：返回删除后剩余的图片数组 eq：返回删除的数组 deleteUrl: 返回删除的图片地址/
			imgDelete(list, eq, deleteUrl) {
				console.log("删除图片_deleteUrl：", JSON.stringify(deleteUrl));
				console.log("删除图片_eq：", eq);
				// 如果没有 ‘&mid=’  说明是临时图片，不需要调用接口删除
				if (deleteUrl.lastIndexOf('&mid=') !== -1) {
					let temp = deleteUrl.substring(deleteUrl.lastIndexOf('&mid=') + 5);
					console.log(temp);
					this.deleteFile({
						mid: temp
					});
				}
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
		}

	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		background-color: #ffffff;
	}

	.info {
		display: flex;
		flex-direction: row;
		padding: 12px 0px 12px;
		margin: 0 12px;
		// border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
	}
</style>
