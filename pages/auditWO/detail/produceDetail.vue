<template>
	<view class="produceEdit">
		<l-file ref="lFile"></l-file>
		<view class="uni-container">
			<!-- ===================================================以下 无工单步骤=================================================== -->
			<view v-if="tableData.length===0" class="no-steps-box">
				<view class="popup-inner">
					<view class="inner">
						<view class="info-box">
							<view class="info info-text info-no-line">
								<text class="left">工作名称:</text>
								<text class="right">{{bzmc}}</text>
							</view>

							<view class="info info-textarea info-no-line">
								<text class="left">工作内容:</text>
								<textarea class="textarea" v-model="gznr" disabled="true" auto-height="true" />
							</view>
							<view class="info info-textarea info-no-line">
								<text class="left">完成情况:</text>
								<textarea class="textarea" v-model="wcqk" disabled="true" placeholder="请输入完成情况"
									auto-height="true" />
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>



		<!-- ===================================================以下 有工单步骤=================================================== -->
		<block v-for="(item, index) of tableData">
			<view class="inner">
				<view class="info-box" :class="{'info-no-bottom':index===tableData.length-1}">
					<view class="header">
						<view class="icon">
							<view class="bar blue-bar">
							</view>
						</view>
						<view>步骤{{index+1}}</view>
					</view>
					<view class="info info-text">
						<text class="left">检查工具:</text>
						<text class="right">{{item.jcgj}}</text>
					</view>
					<view class="info info-textarea">
						<text class="left">工作方法:</text>
						<textarea class="textarea" v-model="item.jcff" disabled="true" auto-height="true" />
					</view>
					<view class="info info-textarea">
						<text class="left">工作内容:</text>
						<textarea class="textarea" v-model="item.jcnr" disabled="true" auto-height="true" />
					</view>

					<view v-if="item.sfdwzb==='是'" class="info info-location">
						<text class="left">定位坐标:</text>
						<view class="right">
							<text class="coordinate">{{item.dwzb}}</text>
						</view>
					</view>

					<view v-if="item.sfdwzb==='是'" class="info">
						<text class="left">定位地址:</text>
						<view class="right">
							<text class="address">{{item.dwdz}}</text>
						</view>
					</view>

					<view v-if="item.sfdwzb==='是'" class="info info-textarea">
						<text class="left">实际地址:</text>
						<textarea class="textarea" v-model="item.sjdz" auto-height="true" placeholder="请输入实际地址" />
					</view>

					<view v-if="item.sfsctp==='是'" class="info">
						<text class="left">图片:</text>
						<uploadImg style="justify-content: flex-end;
				display: flex;" ref='uploadImg' :maxCount="3" :mode="item.imgList" :control='noControl' :deleteBtn='noDelete'
							:columnNum="columnNum" />
					</view>

					<!-- ======= =======添加五个控件的切换======= ======= -->
					<view v-if="item.kjlx==='dwbk'" class="info info-textarea">
						<text class="left">实际工作内容:</text>
						<!-- 输入框 -->
						<textarea class="textarea" disabled='true' v-model="item.sjgznr" auto-height="true" />
					</view>
					<view v-if="item.kjlx!=='dwbk'" class="info">
						<text class="left">实际工作内容:</text>
						<text class="right">{{item.sjgznr}}</text>
					</view>

					<!-- ======= =======以上 添加五个控件的切换======= ======= -->

					<view v-if="item.sfwjsc==='是'" class="info-table info-no-line">

						<uni-table ref="table" :loading="loading" stripe emptyText="暂无更多数据">
							<uni-tr>
								<uni-th width="70">文件名</uni-th>
								<uni-th width="50">大小</uni-th>
								<uni-th width="60">操作</uni-th>
							</uni-tr>
							<uni-tr v-for="(item, index) in item.fileTableData" :key="index">
								<uni-td>
									<view @click="previewFile(item,$event,item.fileName)"
										:class="{'ellipsis':item.fileName && item.fileName.length>15}">
										{{ item.fileName }}
									</view>
								</uni-td>
								<uni-td>{{ item.size }}</uni-td>
								<uni-td class="btn-td">
									<view class="btn-box" @click="downloadFile(item)">
										<text class="btn small-btn">下载</text>
									</view>
								</uni-td>
							</uni-tr>
						</uni-table>

					</view>
				</view>
			</view>
		</block>

		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	// 单选框 多选框 需要制造一下假数据，看看wx端是咋渲染的
	// 添加下载功能，增加最小高度；fileTableData；
	import utils from '@/common/utils.js'
	import uploadImg from "../../../components/xiaohuang-uploadImg/uploadImg.vue"
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import {
		getProduceWorkContent,
		queryAttachementByUUID,
	} from '../../../common/api.js'; //引入需要的api 

	export default {
		components: {
			uploadImg,
			chunLeiPopups
		},
		data() {
			return {
				tableData: [],
				currentItem: {}, // 当前步骤对象
				currentIndex: 0,
				currentUserId: '',
				currentUserName: '',
				gdzj: '', // 工单主键
				bzbh: '', // 步骤编号
				xtbm: '', // 系统编码 或 系统编号
				lx: '', // 工单类型
				wcqk: '', // 完成情况
				bzmc: '', // 标准名称
				gznr: '', // 工作内容
				loading: false,
				noControl: false,
				noDelete: false,
				columnNum: 4,
				x: 0,
				y: 0,
				isShowPopup: false,
				popupText: '', // 气泡内容
				radioList: [], // 单选框内容{value: 'xx',name: 'xx'}
				// current: 0, // 单选框的当前序号值；
				checkboxList: [], // 复选框内容{value: 'xx',name: 'xx',checked:true}
				selectList: [], // 下拉框数据
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
			console.log(JSON.stringify(options))
			this.gdzj = options.zj;
			this.bzbh = options.bzbh;
			this.xtbm = options.xtbm;
			this.lx = options.ordertype;
			this.bzmc = options.bzmc;
			this.gznr = options.gznr;
			this.wcqk = options.wcqk;
			this.getData();

			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					// 此处需要添加trycath的parse
					let obj = res.data;
					this.currentUserId = obj.userId;
					this.currentUserName = obj.userName;
				}
			});
		},
		methods: {
			// 下载附件
			downloadFile(data) {
				// 只要拿到地址即可吧？？ 
				console.log(JSON.stringify(data));
				let url =
					`http://www.hbcoal.cn:8999/document/check?fileId=${data.fileId}&userId=${this.currentUserId}&attname=${data.fileName}`;
				/**
				 * 保存到本地
				 * type 非save为临时下载
				 * customName 仅type=save生效 附件自定义名称需带后缀，自定义目录需以/结尾
				 * DownloadOptions 仅type=save生效 可选参数(http://www.html5plus.org/doc/zh_cn/downloader.html#plus.downloader.DownloadOptions)
				 * 默认下载到_downloads/files/ 可通过DownloadOptions自定义
				 */
				this.$refs.lFile.download({
					url: url, //必填，附件网络地址
					type: 'save', //选填，非save为临时下载
					customName: data.fileName,
					//...DownloadOptions直接写key:value 
					// 例如：
					method: 'GET'
				}).then(path => {
					this.localPath = path;
					console.log('下载成功' + JSON.stringify(path));
					// 下载本地目录：内部存储\Android\data\io.dcloud.HBuilder\downloads
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

			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},
			// ================================= 以下 可选控件 ==================================
			// 渲染单选框勾选状态
			dxkDeal() {
				// 处理可选值，@@分割为数组，然后根据kjlx类型 赋值单选多选下拉框的数据list 即可
				let array = this.currentItem.kxz && this.currentItem.kxz.split('@@');
				let tmpArray = [];
				for (let item of array) {
					tmpArray.push({
						name: item,
						value: item
					})
				}
				this.radioList = tmpArray;
				// for (let i = 0; i < this.radioList.length; i++) {
				// 	if (this.radioList[i].value === this.currentItem.sjgznr) {
				// 		this.current = i;
				// 		break;
				// 	}
				// }
			},
			// 渲染多选框勾选状态
			dxksDeal() {
				let array = this.currentItem.kxz && this.currentItem.kxz.split('@@');
				let tmpArray = [];
				for (let item of array) {
					tmpArray.push({
						name: item,
						value: item
					})
				}
				this.checkboxList = tmpArray;
				// 如果相等，则就设置为 true
				var items = this.checkboxList,
					values = this.currentItem.sjgznr && this.currentItem.sjgznr.split(',');
				for (var i = 0, lenI = items && items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			// 渲染下拉框选择状态
			xlkDeal() {
				// 下拉框现在搞不定的是缓存数据，每次都会执行当前这个方法，
				this.selectList = this.currentItem.kxz && this.currentItem.kxz.split('@@');

				// 需要等渲染出来后才能获取到，所以加一个延迟
				setTimeout(() => {
					this.$refs.myselect.selectText = this.currentItem.sjgznr;
				}, 200)
			},
			// 渲染日期插件状态
			sjkjDeal() {
				// 日期插件，切换tab时，如果无历史值，则赋值当前日期，如果有历史值，则填充之；
				if (this.currentItem.kjlx === 'sjkj') {
					this.currentItem.sjgznr = this.currentItem.sjgznr && this.currentItem.sjgznr.length > 0 ? this
						.currentItem.sjgznr : 'YYYY-MM-DD';
				}
			},
			// ================================= 以上 可选控件 ==================================

			commonGetFileList() {
				this.getFileList(this.currentItem.wjuuid).then(res => {
					// 先清空文件列表再赋值新的；
					this.fileTableData = [];
					console.log(JSON.stringify(res));
					for (let item of res.uploadFiles) {
						this.pushOneFile(item);
					}
					console.log('fileTableData====' + JSON.stringify(this.fileTableData));
				});
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
			},

			// 如下是图片访问地址
			// http://www.hbcoal.cn:8999/document/check?fileId=sbgl/M00/00/19/CgEJ42DKpQyABMbhAAS_smS3PoA023.jpg&userId=290674&attname=CgEJ42DKpQyABMbhAAS_smS3PoA023.jpg


			// 日期控件操作
			bindDateChange(e) {
				console.log(this.currentItem.sjgznr)
				this.currentItem.sjgznr = e.target.value;
				// this.date=e.target.value;
				console.log(this.currentItem.sjgznr)
				console.log(e.target.value)
				this.$forceUpdate()
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
			// 获取数据
			getData() {
				this.loading = true

				getProduceWorkContent({
					gdzj: this.gdzj, // 是从数据item中获取，那得把item整个参数传过来 zj
					bzbh: this.bzbh, // 是从数据item中获取，那得把item整个参数传过来 bzbh
					xtbh: this.xtbm, // 是从数据item中获取，那得把item整个参数传过来 xtbm
				}).then(data => {
					console.log('data', JSON.stringify(data));
					// 这里得判断是否有工单步骤，根据数组长度；
					if (data.data && data.data.length) {

						this.tableData = data.data
						// 判断字数，超过八个就省略号 
						this.loading = false
						// 命名一个包含所有提交字段的全量的obj
						let obj = {
							"zj": "",
							"gdzj": this.gdzj,
							"bzbh": "",
							"bzmc": "",
							"jcnr": "",
							"jcff": "",
							"jcgj": "",
							"ylzd1": "",
							"xtbm": "",
							"nrzj": "",
							"sx": 0,
							"kjlx": "",
							"sfwjsc": "",
							"wjuuid": "",
							"sfsctp": "",
							"sfdwzb": "",
							"tpuuid": "",
							"wjuuid": "",
							"dwzb": "",
							"dwdz": "",
							"sjdz": "",
							"tpuuid": "",
							"kxz": "",
							"sjgznr": "",
							"fileTableData": [],
							"imgList": [],
						}

						// 循环处理tableData的每个值
						this.tableData = this.tableData.map(item => {
							let tmp = JSON.parse(JSON.stringify(obj));
							return item = Object.assign(tmp, item);
						})
						console.log('data22', JSON.stringify(this.tableData));


						// 循环获取imgList 和fileList 获取到的放到tableData对象中， currentItem  那都只能传递了
						// 先获取到wjuuid 和 tpuuid 的数组  然后
						// 算了 简单点 就直接循环获取
						for (let i = 0; i < this.tableData.length; i++) {
							let item = this.tableData[i];

							if (item.tpuuid && item.tpuuid.length > 0) {
								this.getFileList(item.tpuuid).then(res => {
									item.imgList = this.dealFileUrl(res.uploadFiles);
									// console.log('imgList====' + JSON.stringify(this.imgList));
								});

							}
							if (item.wjuuid && item.wjuuid.length > 0) {
								this.getFileList(item.wjuuid).then(res => {
									console.log(JSON.stringify(res));
									item.fileTableData = [];
									for (let data of res.uploadFiles) {
										// t.pushOneFile(item);
										let tmp = {};
										tmp.mid = data.mid;
										tmp.fileName = data.fileName || data.filename;
										tmp.fileId = data.data && data.data.document && data.data.document
											.fileId || data.filepath;
										tmp.size = this.formatFileSize(data.data && data.data.document &&
											data.data.document.size || data
											.filesize);
										item.fileTableData.push(tmp);
									}
									console.log('fileTableData====' + JSON.stringify(item.fileTableData));
								});
							}
						}

						console.log('tableData====' + JSON.stringify(this.tableData));
					}
				}).catch(err => {});
			},
		}
	}
</script>

<style lang="scss">
	.produceEdit {
		padding: 16px 0 24px;
		background-color: #F6F7F8;
	}

	.uni-group {
		display: flex;
		align-items: center;
	}

	.uni-table-td {
		padding: 0;
	}

	.btn-td {
		display: flex;
		justify-content: center;
		align-items: center;

		.btn-box {
			display: flex;
			justify-content: center;
			align-items: center;

			.btn {
				margin-top: 2px; // 待改？
				font-size: 12px;
				border-radius: 2px;
				color: #FFFFFF;
				background-color: #387CF9;
				padding: 1px 2px;
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


	.no-steps-box {
		background-color: #ffffff;
		height: 100%;

		.popup-inner {
			background-color: #ffffff;
			height: 100%;
			margin-top: 0;

			.inner {
				background-color: #ffffff;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.bottom-box {
				margin-top: 0;
				box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.05);
				margin: 0 8px 5px;
				border-radius: 6px;
				// height: 100px;
				// background-color: gray;
			}
		}
	}




	.inner {

		.info-box {
			margin: 0 8px;
			border-radius: 6px;
			// overflow: hidden;
			box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
			margin-bottom: 32px;
			background-color: #ffffff;

			.header {
				display: flex;
				justify-content: flex-start;
				font-size: 18px;
				padding: 12px 0;
			}
		}

		.info-no-bottom {
			margin-bottom: 0;
		}

		.info {
			display: flex;
			flex-direction: row;
			padding: 12px 0px 12px;
			margin: 0 12px;
			border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);

			.left {
				flex-shrink: 0;
				font-size: 14px;
				padding-right: 8px;
			}

			.right {
				// width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #777777;

				.btn {
					font-size: 12px;
					border-radius: 2px;
					color: #FFFFFF;
					background-color: #387CF9;
					padding: 4px 8px;
				}


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

			.textarea {
				width: auto;
				padding: 8px;
				background-color: #f9f9f9;
				font-size: 14px;
				min-height: 70px;
				border-radius: 4px;
				color: #777777;
			}
		}

		.info-no-line {
			border-bottom: 0px solid rgba(0, 0, 0, 0);
		}

		.info-text {
			justify-content: space-between;
		}

		.info-textarea {
			flex-direction: column;

			.left {
				margin-bottom: 8px;
			}
		}

		.info-location {
			justify-content: space-between;

			// align-items: center;
			.right {
				width: 100%;
				justify-content: space-between;

				.btn-location {
					// margin-left:  8px;
				}
			}

		}

		.info-table {
			background-color: #ffffff;
			width: auto;
			min-height: 16vh;
			padding: 0 4px 8px;
			margin-bottom: 8px;
			margin-top: 16px;
			overflow: hidden;
		}

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


		.bottom-box {
			padding: 16px 0 24px;
			margin-top: 40px;
			background-color: #FFFFFF;
			box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.05);

			.operation-box {


				.disabled-btn {
					background-color: gray;
				}
			}

			.bottom {
				padding-top: 16px;
				text-align: center;
				font-size: 14px;
				color: #FA7268;
			}
		}
	}




	.icon {
		display: flex;
		justify-content: flex-start;
	}

	.bar {
		margin-right: 12px;
		width: 5px;
		height: 24px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	.blue-bar {
		background-color: #387CF9;
		box-shadow: 1px 0px 4px 0px rgba(56, 124, 249, 0.6);
	}

	.ellipsis {
		overflow: hidden !important;
		text-overflow: ellipsis !important;
		display: -webkit-box !important;
		-webkit-line-clamp: 1 !important; //文字上限行
		-webkit-box-orient: vertical !important;
	}

	.red {
		color: red !important;
	}
</style>
