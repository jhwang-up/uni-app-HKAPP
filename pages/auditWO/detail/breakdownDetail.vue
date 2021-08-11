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
				<text class="right">{{myData.gzwxr}}</text>
			</view>
			<view class="info">
				<text class="left">故障所属单位:</text>
				<text class="right">{{myData.gzssdw}}</text>
			</view>
			<view class="info">
				<text class="left">发现时间:</text>
				<text class="right">{{myData.gzfxsj}}</text>
			</view>
			<view class="info">
				<text class="left">指定完成时间:</text>
				<text class="right">{{myData.gzgdwcsj}}</text>
			</view>
			<view class="info">
				<text class="left">维修完成时间:</text>
				<text class="right">{{myData.wxwcsj}}</text>
			</view>
			<view class="info info-textarea info-no-line">
				<text class="left">审核意见:</text>
				<textarea class="textarea" v-model="myData.shyj" disabled="true" auto-height="true" />
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
						<uni-th width="100">故障描述</uni-th>
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
							<button @click="seeGzPoint(item)" class="btn see" type="default">查看</button>
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
						</uni-tr>
						<uni-tr v-for="(item, index) in fileTableData" :key="index">
							<uni-td>
								<view @click="previewFile(item,$event,item.fileName)"
									:class="{'ellipsis':item.fileName && item.fileName.length>15}">
									{{ item.fileName }}
								</view>
							</uni-td>
							<uni-td>{{ item.size }}</uni-td>
						</uni-tr>
					</uni-table>

				</view>
			</view>
		</view>

		<!-- 详情故障点 弹窗 -->
		<uni-popup ref="gzDetailPopup">
			<popup-scroll
				style="max-height:66vh;height: auto;width: 700rpx; background-color: #fff;border-radius: 8px;">
				<view class="popup-inner">
					<view class="info info-flex-start">
						<text class="left">故障点:</text>
						<text class="right">{{gzPointData.gzd}}</text>
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
	// 搞定table的逻辑思考 10min     :loading="loading"  等获取故障点数据确定了
	// 加一个提交限制，就是要所有值都不为空，且要清空日期插件的默认值yymmdd！！～～
	// 待询问问题：
	// 1. 添加新的页面，就是点击隐患俩页面的时候；页面搭建大概，之后再完善；
	// 2. 整个保存和提交的data是不是和生产系统一样 空的对象asign  
	// https://ask.dcloud.net.cn/article/38689 用这个搞定缓存试试！！～～～～～～～～～～～
	import utils from '@/common/utils.js'
	import uploadImg from "../../../components/xiaohuang-uploadImg/uploadImg.vue"
	import {
		v4 as uuidv4
	} from 'uuid';
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import LyTree from '@/components/ly-tree/ly-tree.vue';
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
		saveBreakdownContent, // 保存故障工单信息
		submitBreakdownContent, // 提交故障工单信息
		saveBreakdownPointContent, // 保存故障点数据
		deleteBreakdownPointContent, // 删除故障点数据
		getBreakdownPointContent, // 获取故障点数据
	} from '../../../common/api.js';
	export default {
		components: {
			LyTree,
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
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				treeData: [],
				defaultExpandAll: true,
				maintainImgList: [], // 维修图片
				imgList: [], // 故障图片
				control: true,
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
				gzlx: '',
				gzsb: '',
				gzsbzj: '',
				wxrlx: '',
				gzwxr: '',
				gzwxrgh: '',
				gzwxrIdArray: [], // 用于保存选中的节点的key，这个只本地自己使用
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
					// 判断是否已经有wjuuid值？?？无则生成新的uuid, 在点击添加附件按钮时，判断？？？？？

					this.myData.gzwxrIdArray = (this.myData.gzwxrgh || '').split(',');
				}).catch(err => {
					uni.showToast({
						title: `a 异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 查看故障点数据
			seeGzPoint(item) {
				// 弹出新的弹窗 input替换为text标签
				this.$refs.gzDetailPopup.open();
				this.dealGzPoint(item);
			},
			// 返回
			cancel() {
				this.$refs.gzDetailPopup.close();
			},
			dealGzPoint(item) {
				console.log(JSON.stringify(item));
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
			// 删除故障点数据
			deleteGzPoint(item) {
				// 需要的是，调用删除接口
				deleteBreakdownPointContent(
					JSON.stringify({
						zj: item.zj
					})
				).then(res => {
					console.log('删除接口= ' + JSON.stringify(res));
					this.getGzTableData();
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
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

			// 打开弹窗
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			},
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


				console.log('dainji yulan' + JSON.stringify(item));
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
				// let url =
				// 	'http://www.hbcoal.cn:8999/document/check?fileId=sbgl/M00/00/19/CgEJ42DKvt2AeFMaAAAAPian9nk182.txt&userId=290674&attname=CgEJ42DKvt2AeFMaAAAAPian9nk182.txt';

			},
			deleteWj(item) {
				console.log(JSON.stringify(item));
				this.deleteFile(item).then(res => {
					this.commonGetFileList();
				}).catch(err => {
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
			// 下拉框选择事件
			selectChange(e) {
				console.log(JSON.stringify(e));
				// 将值赋值给
				this.myData.wxrlx = e.newVal;
			},
			// 日期控件操作  发现时间
			gzfxsjDateChange(e) {
				console.log(JSON.stringify(e));
				this.myData.gzfxsj = e.target.value;
			},
			// 日期控件操作  指定完成时间
			gzgdwcsjDateChange(e) {
				this.myData.gzgdwcsj = e.target.value;
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
