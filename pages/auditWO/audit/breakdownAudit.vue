<template>
	<view class="breakdown">
		<l-file ref="lFile"></l-file>
		<view class="info-box">
			<view class="info">
				<text class="left">发现人:</text>
				<text class="right">{{myData.gzfxr}}</text>
			</view>
			<view class="info">
				<text class="left">发现人工号:</text>
				<text class="right">{{myData.gzfxrgh}}</text>
			</view>
			<view class="info info-no-line">
				<text class="left">故障类型:</text>
				<text class="right">{{myData.gzlx}}</text>
			</view>
		</view>

		<view class="info-box">
			<view class="info">
				<text class="left">故障区域:</text>
				<text class="right">{{myData.gzsb}}</text>
			</view>
			<view class="info">
				<text class="left">维修人类型:</text>
				<text class="right">{{myData.wxrlx}}</text>
			</view>
			<view class="info">
				<text class="left">故障维修人:</text>
				<!-- 此处是有点击事件 -->
				<text class="right">{{myData.gzwxr}}</text>
			</view>
			<view class="info">
				<text class="left">发现时间:</text>
				<!-- 日期选择 -->
				<text class="right">{{myData.gzfxsj}}</text>
			</view>
			<view class="info">
				<text class="left">指定完成时间:</text>
				<text class="right">{{myData.gzgdwcsj}}</text>
			</view>
			<view class="info info-no-line">
				<text class="left">故障审核人:</text>
				<text class="right">{{myData.gzshr}}</text>
			</view>
		</view>
		<!-- 故障点列表 -->
		<view class="point-box">
			<!-- 故障点表格 -->
			<view class="info-table">
				<!-- <uni-table ref="table" :loading="loading" stripe emptyText="暂无更多数据"> -->
				<uni-table ref="table" stripe emptyText="暂无更多数据">
					<uni-tr>
						<uni-th width="70">故障点</uni-th>
						<uni-th width="70">故障描述</uni-th>
						<uni-th width="50">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in gzTableData" :key="index">
						<uni-td>
							<view @click="taptext($event,item.gzd)" :class="{'ellipsis':item.gzd && item.gzd.length>8}">
								{{ item.gzd }}
							</view>
						</uni-td>
						<uni-td>
							<view @click="taptext($event,item.gzms)"
								:class="{'ellipsis':item.gzms && item.gzms.length>8}">
								{{ item.gzms }}
							</view>
						</uni-td>
						<!-- <uni-td>{{ item.jsfa }}</uni-td> -->
						<uni-td class="btn-td">
							<button @click="seeGzPoint(item)" class="btn edit" type="default">查看</button>
						</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>

		<!-- 文件列表 -->
		<view class="file-box">
			<view class="info-box overflow">
				<view class="info-table info-no-line">
					<!-- <uni-table ref="table" :loading="loading" stripe emptyText="暂无更多数据"> -->
					<uni-table ref="table" stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-th width="70">文件名</uni-th>
							<uni-th width="50">大小</uni-th>
							<uni-th width="60">操作</uni-th>
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
								<view class="btn-box" @click="downloadWj(item)">
									<text class="btn small-btn">下载</text>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>

				</view>
			</view>
		</view>

		<!-- 驳回和通过 按钮 -->
		<view class="bottom-box">
			<view class="operation-box btn-box">
				<button @click="rejectBreakdown()" size="mini" class="btn" type="default">驳回</button>
				<button @click="okBreakdown()" size="mini" class="btn" type="primary">通过</button>
				<button @click="back()" size="mini" class="btn" type="default">返回</button>
			</view>
		</view>




		<!-- 添加故障点 弹窗 -->
		<uni-popup ref="gzPopup">
			<popup-scroll
				style="max-height:66vh;height: auto;width: 700rpx; background-color: #fff;border-radius: 8px;">
				<view class="popup-inner">
					<view class="info info-flex-start">
						<text class="left">故障点:</text>
						<text class="right">{{gzPointData.gzd}}</text>
						<!-- <input style="" class="right" v-model="gzPointData.gzd" /> -->
					</view>
					<view class="info info-textarea">
						<text class="left">故障描述:</text>
						<textarea class="textarea" v-model="gzPointData.gzms" disabled="true" auto-height="true" />
					</view>
					<view class="info" style="min-height: 12vh;">
						<text class="left">故障图片:</text>
						<uploadImg :maxCount="3" :mode="imgList" :deleteBtn="noDeleteBtn" :control="noControl"
							:columnNum="columnNum" style="justify-content: flex-end;
					display: flex;" ref='uploadImg' />
					</view>
					<view class="info info-textarea">
						<text class="left">解决方案:</text>
						<textarea class="textarea" v-model="gzPointData.jsfa" disabled="true" auto-height="true" />
					</view>
					<view class="info">
						<text class="left">维修结果:</text>
						<text class="right">{{gzPointData.wxjg}}</text>
					</view>
					<view class="info info-no-line" style="min-height: 12vh;">
						<text class="left">维修图片:</text>
						<uploadImg :maxCount="3" :mode="maintainImgList" :deleteBtn="noDeleteBtn" :control="noControl"
							:columnNum="columnNum" style="justify-content: flex-end;
					display: flex;" ref='uploadImg' />
					</view>
					<view class="bottom-box">
						<view class="operation-box btn-box">
							<button @click="cancel()" size="mini" class="btn" type="default">返回</button>
						</view>
					</view>
				</view>
			</popup-scroll>
		</uni-popup>



		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	// 删除多余接口和方法～～～～～???
	// 单选多选10min
	// 线路接入1h 四点了 五点优化完 出包；
	import utils from '@/common/utils.js'
	import uploadImg from "../../../components/xiaohuang-uploadImg/uploadImg.vue"
	import {
		v4 as uuidv4
	} from 'uuid';
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import popupScroll from '@/components/popup-scroll/popup-scroll.vue'
	import {
		reallySaveFile,
		deleteFile,
		getBreakdownStaff,
		getBreakdownStaffBZ,
		queryAttachementByUUID,
		getBreakdownContent, // 获取故障工单信息
		getBreakdownPointListContent, // 获取故障工单故障点数据
		getBreakdownPointContent, // 获取故障点数据
		getProfessionalLedgerTree, // 获取科区长人员_选择树数据
		rejectBreakdownPointContent, // 驳回故障工单
		submitBreakdownContent, //提交故障工单信息
	} from '../../../common/api.js';
	export default {
		components: {
			xflSelect,
			popupScroll,
			uploadImg,
			chunLeiPopups
		},
		data() {
			return {
				myData: {}, // 故障工单数据
				gzTableData: [], // 故障点列表
				gzPointData: {}, // 故障点单个点数据
				fileList: [], // 文件列表
				selectList: ['人员', '班组'], // 下拉框数据
				maintainSelectList: ['未解决', '已解决', '待解决'], // 维修结果下拉框数据
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				treeData: [],
				defaultExpandAll: true,
				maintainImgList: [], // 维修图片
				imgList: [], // 故障图片
				noControl: false,
				noDeleteBtn: false,
				columnNum: 4,
				currentUserName: '',
				currentUserId: '',
				fileTableData: [], // 表示上传文件的table的数据
				x: 0, //气泡用到
				y: 0, //气泡用到
				isShowPopup: false, // 气泡用到
				popupText: '', // 气泡内容
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(options) {
			this.myData = {
				zj: '',
				gzfxr: '',
				gzfxrgh: '',
				gzshr: '',
				gzshrgh: '',
				// gzshrIdArray: [], // 用于保存选中的节点的key，这个只本地自己使用
				gzlx: '',
				gzsb: '',
				gzsbzj: '',
				wxrlx: '',
				gzwxr: '',
				gzwxrgh: '',
				gzgdwcsj: 'YYYY-MM-DD',
				gzfxsj: 'YYYY-MM-DD',
				wjuuid: '', // 这个得在获取故障工单数据后，看下是否有历史uuid，无则生成新的；
			};
			// console.log(JSON.stringify(options))
			// 这一条zj先执行用于请求接口，下面的等页面dom初始化再赋值；
			this.myData.zj = options.zj;
			this.$nextTick(function() {
				this.myData.gzlx = options.gzlx;
				this.myData.gzsb = options.gzsb;
				this.myData.gzsbzj = options.sbzj; // 从生产系统传过来的，是其主键
			});

		},
		onShow() {
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					// console.log(JSON.stringify(res));
					// 此处需要添加trycath的parse～～～～～～～～～～～～～～～～～～
					let obj = res.data;
					this.currentUserId = this.myData.gzfxrgh = obj.userId;
					this.currentUserName = this.myData.gzfxr = obj.userName;
				}
			});
			// 初始化故障工单数据
			this.initBreakdownData();
		},
		methods: {
			// 初始化故障工单数据
			initBreakdownData() {
				getBreakdownContent({
					gzzj: this.myData.zj
				}).then(res => {
					console.log("获取故障工单数据" + JSON.stringify(res));
					let temp = res.data;
					this.myData = temp;
					// 初始化日期插件
					this.initDate();
					// 需要获取文件附件列表 接口
					this.commonGetFileList();
					// 获取故障点列表 接口
					this.getGzTableData();

					// this.myData.gzshrIdArray = (this.myData.gzshrgh || '').split(',');
					console.log(this.myData.gzshr);
				}).catch(err => {
					uni.showToast({
						title: `a 异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 维修故障点数据
			seeGzPoint(item) {
				this.maintainImgList = [];
				console.log(JSON.stringify(item));
				// 填充树形弹窗内容，点击修改时，展示之前弹窗即可；
				this.$refs.gzPopup.open();
				this.dealGzPoint(item);
			},
			dealGzPoint(item) {
				// 需要赋值当前 gzPointData
				if (item) {
					this.gzPointData = item;
				}

				// 获取图片列表
				this.getFileList(this.gzPointData.jjtpuuid).then(res => {
					console.log(JSON.stringify(res));
					this.maintainImgList = this.dealFileUrl(res.uploadFiles);
					console.log('maintainImgList====' + JSON.stringify(this.maintainImgList));
				});
				// 获取图片列表
				this.getFileList(this.gzPointData.gztpuuid).then(res => {
					console.log(JSON.stringify(res));
					this.imgList = this.dealFileUrl(res.uploadFiles);
					console.log('imgList====' + JSON.stringify(this.imgList));
				});
			},

			dealFileUrl(array) {
				// console.log(JSON.stringify(array));
				let tmpArray = [];
				for (let item of array) {
					let url =
						`http://www.hbcoal.cn:8999/document/check?fileId=${item.filepath}&userId=${this.currentUserId}&attname=${item.filename}&mid=${item.mid}`;
					tmpArray.push(url);
				}
				return tmpArray;
			},
			// 获取故障点列表数据
			getGzTableData() {
				getBreakdownPointListContent({
					gzzj: this.myData.zj,
				}).then(res => {
					this.gzTableData = [];
					console.log('获取故障点列表数据= ' + JSON.stringify(res));
					for (let item of res.data) {
						let temp = {};
						temp.zj = item.zj;
						temp.gzd = item.gzd;
						temp.gzms = item.gzms;
						temp.jsfa = item.jsfa;
						temp.wxjg = item.wxjg;
						temp.gzbzj = item.gzbzj;
						temp.gztpuuid = item.gztpuuid;
						temp.jjtpuuid = item.jjtpuuid;
						this.gzTableData.push(temp);
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},

			cancel() {
				this.$refs.gzPopup.close();
			},
			// 驳回故障工单
			rejectBreakdown() {
				rejectBreakdownPointContent(
					JSON.stringify({
						data: this.myData
					})
				).then(res => {
					console.log('驳回故障工单= ' + JSON.stringify(res));
					if (res.f === '1') {
						uni.navigateBack({})
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 通过
			okBreakdown() {
				console.log(JSON.stringify(this.myData));

				submitBreakdownContent(
					JSON.stringify({
						data: this.myData
					})
				).then(res => {
					console.log('提交故障工单= ' + JSON.stringify(res));
					// 判断是否有班队长
					if (res.f === '0') {
						uni.showToast({
							title: `未找到班队长`,
							icon: 'none'
						});
					} else if (res.f === '1') {
						// 成功后，需要执行的是返回
						uni.navigateBack();
					} else {
						uni.showToast({
							title: `提交失败，请稍后重试`,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// =============================== 以上 添加故障点 ===============================



			// // 打开弹窗
			// open() {
			// 	this.$refs.popup.open()
			// },
			// close() {
			// 	this.$refs.popup.close()
			// },

			// 获取文件列表，然后处理文件地址写一个方法；
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
			// 下载附件
			downloadWj(data) {
				// 只要拿到地址即可吧？？ 
				console.log(JSON.stringify(data));
				let url =
					`http://www.hbcoal.cn:8999/document/check?fileId=${data.fileId}&userId=${this.$store.state.userInfo.userId}&attname=${data.fileName}`;
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
			commonGetFileList() {
				this.getFileList(this.myData.wjuuid).then(res => {
					// 先清空文件列表再赋值新的；
					this.fileTableData = [];
					console.log(JSON.stringify(res));
					for (let item of res.uploadFiles) {
						this.pushOneFile(item);
					}
					console.log('fileTableData====' + JSON.stringify(this.fileTableData));
				});
			},
			// 处理附件列表（不是处理图片列表）
			pushOneFile(data) {
				let tmp = {};
				tmp.mid = data.mid;
				tmp.fileName = data.filename;
				tmp.fileId = data.filepath;
				tmp.size = this.formatFileSize(data.filesize);
				this.fileTableData.push(tmp);
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

			// 预览文件，待测试多个文件类型的效果
			previewFile(item, e, fileName) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = fileName;
				this.isShowPopup = !this.isShowPopup;

				let url =
					`http://www.hbcoal.cn:8999/document/check?fileId=${item.fileId}&userId=${this.currentUserId}&attname=${item.fileName}`;
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
			// 下拉框选择事件
			selectChange(e) {
				console.log(JSON.stringify(e));
				// 将值赋值给
				this.myData.wxrlx = e.newVal;
			},

			// 渲染日期插件
			initDate() {
				this.myData.gzfxsj = this.myData.gzfxsj ? this.myData.gzfxsj : 'YYYY-MM-DD';
				this.myData.gzgdwcsj = this.myData.gzgdwcsj ? this.myData.gzgdwcsj : 'YYYY-MM-DD';
			},
			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
		}
	}
</script>

<style lang="scss">
	.popup-inner {
		height: 100%;
	}

	.breakdown {
		padding: 16px 0 0;
		background-color: #F6F7F8;

		.info-box {
			margin: 0 8px;
			border-radius: 10px;
			box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
			margin-bottom: 16px;
			background-color: #ffffff;
			padding: 0 8px;
		}

		.info {
			display: flex;
			flex-direction: row;
			padding: 12px 0px 12px;
			margin: 0 12px;
			border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
			justify-content: space-between;

			.left {
				flex-shrink: 0;
				font-size: 14px;
				padding-right: 8px;
			}

			.right {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #777777;
			}

			.wxr-btn {
				margin-left: 0;
				margin-right: 0;
				font-size: 12px;
				color: #777777;
			}

			.picker {
				font-size: 12px;
				color: #777777;
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

		.info-flex-start {
			justify-content: flex-start;
		}

		.info-textarea {
			flex-direction: column;

			.left {
				margin-bottom: 8px;
			}

			.textarea {
				width: auto;
				padding: 8px;
				background-color: #F6F7F8;
				font-size: 14px;
				min-height: 70px;
				border-radius: 4px;
				color: #777777;
			}
		}

		.info-column {
			flex-direction: column;
		}

		.info-no-line {
			border-bottom: 0px solid rgba(0, 0, 0, 0);
		}

		.info-table {
			background-color: #ffffff;
			width: auto;
			padding: 0 4px 8px;
			margin-bottom: 8px;
			overflow: hidden;
			min-height: 100px;

			.btn-box {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;

				.btn {
					font-size: 16px;
					border-radius: 2px;
					color: #FFFFFF;
					background-color: #387CF9;
					padding: 4px 8px;
				}

				.small-btn {
					color: #ffffff;
					padding: 1px 2px;
					background-color: #FA7268;
					font-size: 10px;
				}
			}

			.btn-td {
				display: flex;
				justify-content: flex-start;

				.btn {
					margin: 0 2px;
					width: fit-content;
					font-size: 10px;
					color: #FFFFFF;
					padding: 2px 4px;
					line-height: inherit;
				}

				.edit {
					background-color: #FFC34D;
				}

				.delete {
					background-color: #FA7268;
				}

				.see {
					background-color: #387CF9;
				}
			}
		}

		.bottom-box {
			padding: 16px 0 24px;
			margin-top: 40px;
			background-color: #FFFFFF;
			box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.05);

			.operation-box {
				display: flex;
				justify-content: center;

				.save-btn {
					width: auto;
					font-size: 14px;
					color: #FFFFFF;
					background-color: #387CF9;
				}

				.disabled-btn {
					background-color: gray;
				}
			}

		}

		.point-box {
			border-radius: 10px;
			margin: 32px 8px;
			padding: 16px;
			background-color: #ffffff;
			box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);

			.btn-box {
				display: flex;
				flex-direction: row;
				margin-bottom: 8px;

				.btn {
					padding: 0 8px;
					line-height: 2;
					font-size: 12px;
					color: #FFFFFF;
					margin: 0;
					margin-right: 4px;
				}

				.edit {
					background-color: #FFC34D;
				}

				.delete {
					background-color: #FA7268;
				}

				.add {
					background-color: #387CF9;
				}
			}
		}

		.file-box {
			// padding: 0 8px;
		}

		.overflow {
			overflow: hidden;
		}

		.ellipsis {
			overflow: hidden !important;
			text-overflow: ellipsis !important;
			display: -webkit-box !important;
			-webkit-line-clamp: 1; //文字上限行
			-webkit-box-orient: vertical;
			word-break: break-all;
		}
	}
</style>
