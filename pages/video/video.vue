<template>
	<view style="margin-top: 100px;">
		<!-- <uni-file-picker v-model="imageValue" fileMediatype="video" mode="grid" @select="select" @progress="progress"
			@success="success" @fail="fail" /> -->

		<!-- <button @tap="test">click me</button> -->
		<video :src="src"></video>

		<view class="select-video">
			<button type="default" @click="chooseFileOnlyOne" size="mini">选择视频{{compressSize}}</button>
		</view>
		<view class="progress-box">
			<progress :percent="progress" active active-mode="forwards" activeColor="#387CF9" stroke-width="10" />
		</view>
		<view class="progress-box">
			<text>大小：{{compressSize}}</text>
		</view>
		<view class="">
			进度：{{progress}}
		</view>
	</view>
</template>

<script>
	// 现在可以压缩了，
	// 压缩OK了
	// 引入抖音主界面 1h，
	// 
	export default {
		components: {},
		data() {
			return {
				// imageValue: [],
				src: '',
				oriInfo: '',
				compressSize: 0,
				progress: 0,
			}
		},
		methods: {
			// 节流
			throttle(fn, delay) {
				let valid = true
				return function() {
					if (!valid) {
						//休息时间 暂不接客
						return false
					}
					// 工作时间，执行函数并且在间隔期内把状态位设为无效
					valid = false
					setTimeout(() => {
						fn()
						valid = true;
					}, delay)
				}
			},
			/**
			 * 单选，只允许选择1个文件；选择文件，不允许选择文件夹；右下角按钮为“发送”
			 */
			chooseFileOnlyOne() {
				const plugin = uni.requireNativePlugin("K-ChooseFilesModule");
				plugin.chooseFileAction({
					maxNum: 1,
					fileTypes: ['mp4'],
					isNeedDetail: true,
					// filterIsGreater: true,
					// filterFileSize: 10 * 1024 * 1024
				}, result => {
					console.log(JSON.stringify(result));
					// 将选择的文件压缩
					this.content = JSON.stringify(result);
					this.compress("file://" + result.data[0]);
				});
			},
			// 压缩
			compress(oriPath) {
				var self = this;
				const plugin = uni.requireNativePlugin('K-VideoCompressModule');
				console.log(oriPath);
				plugin.compressAction({
					oriPath: oriPath
				}, result => {
					if (result && result.code === '0' && result.path && result.path.length > 0) {
						//压缩成功回调
						//若result.path无法被uni识别，如在uni的video中无法播放，uni.uploadFile无法识别路径，请在本路径前加"file://""后再使用
						console.log(result.path);
						self.src = "file://" + result.path;
						// console.log(self.src);
						uni.saveFile({
							tempFilePath: self.src,
							success: function(res) {
								var savedFilePath = res.savedFilePath;
								console.log(savedFilePath);
								uni.getSavedFileInfo({
									filePath: savedFilePath, // 仅做示例用，非真正的文件路径
									success: function(res) {
										console.log(res.size);
										console.log(res.createTime);
										self.compressSize = self.change(res.size);
									}
								});
							}
						});
					} else if (result && result.progress && result.progress > 0) {
						//压缩进度回调   
						self.progress = result.progress * 100;

					}
				});
			},
			// 字节B转化成KB，MB，GB
			change(limit) {
				var size = "";
				if (limit < 0.1 * 1024) { //小于0.1KB，则转化成B
					size = limit.toFixed(2) + "B"
				} else if (limit < 0.1 * 1024 * 1024) { //小于0.1MB，则转化成KB
					size = (limit / 1024).toFixed(2) + "KB"
				} else if (limit < 0.1 * 1024 * 1024 * 1024) { //小于0.1GB，则转化成MB
					size = (limit / (1024 * 1024)).toFixed(2) + "MB"
				} else { //其他转化成GB
					size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
				}

				var sizeStr = size + ""; //转成字符串
				var index = sizeStr.indexOf("."); //获取小数点处的索引
				var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
				if (dou == "00") { //判断后两位是否为00，如果是则删除00               
					return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
				}
				return size;
			},
			// test: function() {
			// 	var self = this;
			// 	uni.chooseVideo({
			// 		count: 1,
			// 		sourceType: ['camera', 'album'],
			// 		success: function(res) {
			// 			console.log(JSON.stringify(res));
			// 			// self.src = res.tempFilePath;
			// 			self.compress(res.tempFilePath)
			// 		}
			// 	});
			// },
			// // 获取上传状态
			// select(e) {
			// 	console.log('选择文件：', e)
			// },
			// // 获取上传进度
			// progress(e) {

			// 	// console.log('上传进度：', e)
			// },

			// // 上传成功
			// success(e) {
			// 	console.log('上传成功') 
			// },

			// // 上传失败
			// fail(e) {
			// 	console.log('上传失败：', e)
			// }
		}
	}
</script>

<style>
</style>
