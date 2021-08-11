<template>
	<view class="editUserInfo">
		<avatar selWidth="200px" selHeight="400upx" @upload="myUpload" :avatarSrc="url"
			avatarStyle="width: 200upx; height: 200upx; border-radius: 100%;margin-top: 88px;">
		</avatar>
	</view>

</template>

<script>
	import utils from '@/common/utils.js'
	import {
		editAvatar,
		getUserInfo,
		getAttachmentByMid,
		queryAttachementByUUID,
		reallySaveFile,
	} from '@/common/api.js'; //引入需要的api 
	import {
		v4 as uuidv4
	} from 'uuid';
	import avatar from "@/components/yq-avatar/yq-avatar.vue";
	export default {
		components: {
			avatar
		},
		data() {
			return {
				url: "",
				currentMid: '', // 用于更新头像时，删除旧的头像文件
			}
		},
		onShow() {
			// 获取头像
			utils.reallyGetAvatar().then(res => {
				this.url = res.url;
				this.currentMid = res.mid;
			})
		},
		// 然后开始搞点赞；1h
		// 然后开始搞一个loading黑屏，然后再展示首页；
		// 再来个20mb的限制，低于的不压缩，然后打包发布版本
		methods: {
			// 逻辑：每次上传新的头像都要生成新的uuid, 因为头像图片只用mid来获取，所以uuid每次都变化，也无所谓
			myUpload(rsp) {
				uni.showLoading({
					title: '上传中...'
				});
				let filePath = rsp.path;
				let fileUuid = uuidv4();
				console.log(JSON.stringify(rsp));
				let that = this;
				var uper = uni.uploadFile({
					// 需要上传的地址 
					url: `${this.$store.state.hostUrl}/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${fileUuid}`,
					// filePath  需要上传的文件
					filePath: filePath,
					name: 'file',
					success(res) {
						// 显示上传信息
						console.log(JSON.stringify(res.data));
						let tmp = JSON.parse(res.data);
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
							console.log('持久化==' + JSON.stringify(data));
							// 修改头像
							editAvatar({
								mid: data
							}).then(response => {
								console.log("touxiang===" + JSON.stringify(response));
								if (response.flag === 1) {
									that.url = rsp.path;
									// 修改头像全局变量
									that.$store.commit('setAvatar', {
										url: that.url,
										mid: data
									});
								}
								uni.hideLoading();
							}).catch(err => {
								uni.hideLoading();
								uni.showToast({
									title: `异常，请稍后重试`,
									icon: 'none'
								});
							})
						});
					}
				});
			},
			
		},

	}
</script>

<style lang="scss">
	.editUserInfo {
		width: 100vw;
		height: 100vh;
		background-color: #171724;
		display: flex;
		justify-content: center;
	}
</style>
