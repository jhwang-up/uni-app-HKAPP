<template>
	<view class="breakdown">
		<l-file ref="lFile" @up-success="upSuccess"></l-file>
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
				<!-- 此处是有点击事件 -->
				<button class="wxr-btn" type="default"
					@click="showTree">{{myData.gzshr && myData.gzshr.length>0?myData.gzshr:'点击选择审核人'}}</button>
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
							<button @click="maintainGzPoint(item)" class="btn edit" type="default">故障维修</button>
						</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>

		<!-- 文件列表 -->
		<view class="file-box">
			<view class="info-box overflow">
				<view class="info info-upload-img info-no-line">
					<text class="left">选择多文件:</text>
					<view class="upload-btn">
						<text @click="myUploadFile()" class="btn">上传</text>
					</view>
				</view>

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
								<view class="btn-box" @click="deleteWj(item)">
									<text class="btn small-btn">删除</text>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>

				</view>
			</view>
		</view>

		<!-- 保存和提交 按钮 -->
		<view class="bottom-box">
			<view class="operation-box btn-box">
				<button @click="rejectBreakdown()" size="mini" class="btn" type="default">驳回</button>
				<button @click="submitBreakdown()" size="mini" class="btn" type="primary">提交</button>
			</view>
		</view>




		<!-- 树形图 弹窗 -->
		<uni-popup ref="popup">
			<popup-scroll
				style="min-height: 100px;max-height: 68vh;height: auto; width: 700rpx; background-color: #fff;border-radius: 8px;">
				<view class="popup-inner">
					<ly-tree ref="tree" :tree-data="treeData" :ready="ready" node-key="id"
						:defaultExpandAll="defaultExpandAll" @check="handleCheck" show-radio checkOnlyLeaf>
					</ly-tree>
				</view>
			</popup-scroll>
		</uni-popup>

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
						<text class="left">图片:</text>
						<uploadImg :maxCount="3" :mode="imgList" :deleteBtn="noDeleteBtn" :control="noControl"
							:columnNum="columnNum" style="justify-content: flex-end;
					display: flex;" ref='uploadImg' />
					</view>
					<view class="info info-textarea">
						<text class="left">解决方案:</text>
						<textarea class="textarea" v-model="gzPointData.jsfa" auto-height="true" />
					</view>
					<view class="info info-column">
						<text class="left">维修结果:</text>
						<view style="width: 100%; margin: auto; margin: 12px 0;">
							<xfl-select ref="myselect" :list="maintainSelectList" :clearable="false" :showItemNum="5"
								:listShow="false" :isCanInput="false"
								:style_Container="'height: 40px; font-size: 14px;'" :selectHideType="'hideAll'"
								:initValue="gzPointData.wxjg" @change="maintainselectChange($event)">
							</xfl-select>
						</view>
					</view>
					<view class="info info-no-line" style="min-height: 12vh;">
						<text class="left">维修图片:</text>
						<uploadImg :maxCount="3" :mode="maintainImgList" @chooseFile='chooseImg' @imgDelete='imgDelete'
							:control='control' :columnNum="columnNum" style="justify-content: flex-end;
					display: flex;" ref='uploadImg' />
					</view>
					<view class="bottom-box">
						<view class="operation-box btn-box">
							<button @click="cancel()" size="mini" class="btn" type="default">返回</button>
							<button @click="saveBreakdownPoint()" size="mini" class="btn" type="primary">保存</button>
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
		getBreakdownPointContent, // 获取故障点数据
		getProfessionalLedgerTree, // 获取科区长人员_选择树数据
		rejectBreakdownPointContent, // 驳回故障工单
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
				maintainSelectList: ['未解决', '已解决', '待解决'], // 维修结果下拉框数据
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				treeData: [],
				defaultExpandAll: true,
				maintainImgList: [], // 维修图片
				imgList: [], // 故障图片
				control: true,
				noControl: false,
				noDeleteBtn: false,
				columnNum: 4,
				// currentUserName: '',
				// currentUserId: '',
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
			maintainGzPoint(item) {
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
				// 要先判断 jjtpuuid 是否有值 没值时得重新生成
				if (!this.gzPointData.jjtpuuid) {
					this.gzPointData.jjtpuuid = uuidv4();
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
						`http://www.hbcoal.cn:8999/document/check?fileId=${item.filepath}&userId=${this.$store.state.userInfo.userId}&attname=${item.filename}&mid=${item.mid}`;
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
			// 保存故障点的时候，不做任何限制填写，为空也可以提交，然后
			// 保存故障点数据
			saveBreakdownPoint() {
				console.log(JSON.stringify(this.gzPointData));
				saveBreakdownPointContent(
					JSON.stringify({
						data: this.gzPointData
					})
				).then(res => {
					// 执行获取故障点列表，
					this.getGzTableData();
					console.log('保存故障点= ' + JSON.stringify(res));
					// 关闭故障点弹窗
					this.$refs.gzPopup.close();
					// 还需要重新获取故障点数据，就是渲染故障点列表的逻辑。。。搞完这个后，就可以放开return和注释，测试一下；

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
			// 提交故障工单
			submitBreakdown() {
				// 这块全部都是有值的，只需要判断故障审核人是一定要提交的，即可；
				if (!this.myData.gzshr) {
					uni.showToast({
						title: `请先选择故障审核人`,
						icon: 'none'
					});
					return;
				}

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
			chooseImg(list, item) {
				console.log("上传图片_list：", list);
				console.log("上传图片_item：", item);

				let that = this;
				var uper = uni.uploadFile({
					// 需要上传的地址 
					url: `http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.gzPointData.jjtpuuid}`,
					// filePath  需要上传的文件
					filePath: item,
					name: 'file',
					success(res) {
						// 显示上传信息
						console.log(res.data);
						let tmp = JSON.parse(res.data);
						reallySaveFile({
							type: 'db',
							uid: that.gzPointData.jjtpuuid,
							filename: tmp.data.document.fileName,
							fileext: tmp.data.document.fileExtent,
							filesize: tmp.data.document.size,
							filestorename: tmp.data.filename,
							uploadPath: tmp.data.fileid,
							uploadUsername: that.$store.state.userInfo.userName,
						}).then(data => {
							console.log(JSON.stringify(data));
							// 获取图片列表 为了替换更新上传组件内部存储的本地路径为文件网络访问路径
							that.dealGzPoint();
						});
					}
				});
			},
			// / 删除图片： list：返回删除后剩余的图片数组 eq：返回删除的数组 deleteUrl: 返回删除的图片地址/
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
			// =============================== 以上 添加故障点 ===============================

			//================================ 以下是树形 =======================================
			// 设置节点选中状态
			// setCheckedKeys(keys) {
			// 	this.$refs.tree.setCheckedKeys(keys);
			// },
			// 展示树形选择弹窗Î
			showTree() {
				// // 清空审核人编号
				// this.currentShrgh = '';
				// this.currentShr = '';
				getProfessionalLedgerTree().then(res => {
					console.log(JSON.stringify(res));
					this.treeData = utils.translateDataToTree(res.data);
					this.ready = true;
					//打开popup弹窗
					this.$refs.popup.open();
					// this.$nextTick(function() {
					// 	this.setCheckedKeys(this.currentShrgh);
					// });

				}).catch(err => {
					console.log(JSON.stringify(err));
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					})
				});
			},
			// 只有在"点击"修改的指定节点会触发(也就是说这个方法只会触发一次)，obj中包含当前选中
			handleCheck(obj) {
				// obj: {
				// 	checkedKeys: [9, 5], // 当前选中节点的id数组
				// 	checkedNodes: [{...}, {...}], // 当前选中节点数组
				// 	data: {...}, // 当前节点的数据
				// 	halfCheckedKeys: [1, 4, 2], // 半选中节点的id数组
				// 	halfCheckedNodes: [{...}, {...}, {...}], // 半选中节点的数组
				// 	node: Node {...} // 当前节点实例
				// }

				// 需要删除 有children的节点，这样就只剩下最底层的节点；
				// let tempLabel = [];
				// let tempId = [];
				// for (let s of obj.checkedNodes) {
				// 	if (s.children === undefined) {
				// 		tempLabel.push(s.label);
				// 		tempId.push(s.id);
				// 	}
				// }

				this.myData.gzshr = obj.checkedNodes[0].label;
				this.myData.gzshrgh = obj.checkedNodes[0].id;
				// 保存选中的节点key数组，用于渲染选中
				// this.myData.gzshrIdArray = tempId;
				// this.currentShr = obj.checkedNodes[0].label;
				// this.currentShrgh = obj.checkedNodes[0].id;
				console.log('handleCheck===', JSON.stringify(obj));
				console.log('=========================================');
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
			// 上传文件成功的回掉逻辑
			upSuccess(data) {
				// console.log('成功上传文件：' + JSON.stringify(name));
				console.log('成功上传文件：' + JSON.stringify(data));
				// this.pushOneFile(data);

				// 持久化保存文件上传 后再获取最新文件列表数据
				let tmp = data;
				reallySaveFile({
					type: 'db',
					uid: this.myData.wjuuid,
					filename: tmp.data.document.fileName,
					fileext: tmp.data.document.fileExtent,
					filesize: tmp.data.document.size,
					filestorename: tmp.data.filename,
					uploadPath: tmp.data.fileid,
					uploadUsername: this.$store.state.userInfo.userName,
				}).then(data => {
					// console.log(data);
					console.log(JSON.stringify(data));
					this.commonGetFileList();
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
			myUploadFile() {
				/*
				选择文件并上传
				
				currentWebview=当前窗口，仅app端需要传，且必传
				
				url=上传服务器地址，必填
				name=上传文件的key(选填，默认为file)
				header=请求头(选填) 16242770031992 16242770031992
				*/
				console.log(
					`文件上传地址== http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.myData.wjuuid}`
				);
				this.$refs.lFile.upload({
					currentWebview: this.$mp.page.$getAppWebview(),
					url: `http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.myData.wjuuid}`, //你的上传附件接口地址
					name: 'file',
					// header: {
					// 	'Authorization': 'token'
					// },
					// body参数直接写key,value,如：
					// key1: 'value1',
					// key2: 'value2',
				});
			},
			// 预览文件，待测试多个文件类型的效果
			previewFile(item, e, fileName) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = fileName;
				this.isShowPopup = !this.isShowPopup;


				console.log('dainji yulan' + JSON.stringify(item));
				let url =
					`http://www.hbcoal.cn:8999/document/check?fileId=${item.fileId}&userId=${this.$store.state.userInfo.userId}&attname=${item.fileName}`;
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
			// 维修结果下拉框选择事件
			maintainselectChange(e) {
				console.log(JSON.stringify(e));
				// 将值赋值给
				this.gzPointData.wxjg = e.newVal;
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
