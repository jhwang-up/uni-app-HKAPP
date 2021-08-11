<template>
	<view class="electromechanical">
		<!-- 隐患信息 -->
		<view v-if="this.currentStatus!=='阅办'" class="info-box">
			<view class="header">
				<view class="bar blue-bar"></view>
				<view class="right">
					<text class="title">隐患详情</text>
					<text class="time">{{myData.LRSJTR ? myData.LRSJTR : ''}}</text>
				</view>
			</view>
			<view class="info">
				<text class="left">隐患矿井:</text>
				<text class="right">{{myData.YHBMNAME}}</text>
			</view>
			<view class="info">
				<text class="left">排查班次:</text>
				<text class="right">{{myData.pcbc}}</text>
			</view>
			<view class="info">
				<text class="left">检查项目:</text>
				<text class="right">{{myData.jcxm}}</text>
			</view>
			<view class="info">
				<text class="left">编号:</text>
				<text class="right">{{myData.yhbh}}</text>
			</view>
			<view class="info info-textarea">
				<text class="left">隐患内容:</text>
				<textarea class="textarea" v-model="myData.yhnr" disabled="true" auto-height="true" />
			</view>
			<view class="info">
				<text class="left">隐患等级:</text>
				<text class="right">{{myData.yhdj}}</text>
			</view>
			<view class="info">
				<text class="left">隐患状态:</text>
				<text class="right">{{myData.yhzt}}</text>
			</view>
			<view class="info">
				<text class="left">隐患地点:</text>
				<text class="right">{{myData.yhdd}}</text>
			</view>
			<view class="info">
				<text class="left">备注:</text>
				<text class="right">{{myData.yhbz}}</text>
			</view>
			<view class="info info-no-line" style="height:auto;min-height: 10vh;">
				<text class="left">隐患图片:</text>
				<uploadImg :maxCount="3" :mode="imgList" :control='noControl' :columnNum="columnNum"
					:deleteBtn="noDeleteBtn" style="justify-content: flex-end;
			display: flex;" ref='uploadImg' />
			</view>
		</view>

		<!-- 隐患办理 -->
		<view v-if="this.currentStatus!=='阅办'" class="info-box">
			<view class="header">
				<view class="bar blue-bar"></view>
				<view class="right">
					<text class="title">隐患办理</text>
					<text class="time">{{myData.FBSJSTR ? myData.FBSJSTR : ''}}</text>
				</view>
			</view>
			<view class="info">
				<text class="left">责任人:</text>
				<text class="right">{{myData.FBRNAME}}</text>
			</view>
			<!-- ========================= 办理 的dom ========================= -->
			<block v-if="currentStatus==='办理'">
				<view class="info">
					<text class="left">班队长:</text>
					<button class="wxr-btn" type="default" @click="showTree"
						:disabled="myData.ZRRNAME && myData.ZRRNAME.length===0">{{myData.ZRRNAME && myData.ZRRNAME.length > 0 ? myData.ZRRNAME : '请选择'}}</button>
				</view>
				<view class="info">
					<text class="left">整改时限:</text>
					<picker mode="date" :value="myData.zgsx" :start="startDate" :end="endDate" @change="zgsxDateChange">
						<view class="uni-input picker">{{myData.zgsx}}</view>
					</picker>
				</view>
				<view class="info info-textarea info-no-line">
					<text class="left">整改措施:</text>
					<textarea class="textarea" v-model="myData.zgcs" auto-height="true" />
				</view>
			</block>


			<!-- ========================= 整改中 以及 xxx 的dom ========================= -->
			<block v-if="currentStatus==='整改中'">
				<view class="info">
					<text class="left">班队长:</text>
					<text class="right">{{myData.ZRRNAME}}</text>
				</view>
				<view class="info">
					<text class="left">整改时限:</text>
					<text class="right">{{myData.zgsx}}</text>
				</view>
				<view class="info info-textarea info-no-line">
					<text class="left">整改措施:</text>
					<textarea class="textarea" v-model="myData.zgcs" disabled='true' auto-height="true" />
				</view>
			</block>
		</view>



		<!-- 隐患反馈  状态为 整改中 才展示-->
		<view v-if="currentStatus==='整改中'" class="info-box">
			<view class="header">
				<view class="bar blue-bar"></view>
				<view class="right">
					<text class="title">隐患反馈</text>
					<text class="time">{{myData.ZGLRJTR ? myData.ZGLRJTR : ''}}</text>
				</view>
			</view>
			<view class="info">
				<text class="left">整改人:</text>
				<button class="wxr-btn" type="default" @click="showTree"
					:disabled="myData.ZGRNAME && myData.ZGRNAME.length===0">{{myData.ZGRNAME && myData.ZGRNAME.length > 0 ? myData.ZGRNAME : '请选择'}}</button>
			</view>
			<view class="info">
				<text class="left">整改时间:</text>
				<picker mode="date" :value="myData.zgsj" :start="startDate" :end="endDate" @change="zgsjDateChange">
					<view class="uni-input picker">{{myData.zgsj}}</view>
				</picker>
			</view>
			<view class="info info-textarea">
				<text class="left">整改内容:</text>
				<textarea class="textarea" v-model="myData.zgnr" auto-height="true" />
			</view>
			<view class="info info-no-line" style="height:auto;min-height: 10vh;">
				<text class="left">图片上传:</text>
				<uploadImg :maxCount="3" :mode="zgzImgList" @chooseFile='zgzChooseImg' @imgDelete='zgzImgDelete'
					:control='control' :columnNum="columnNum" style="justify-content: flex-end;
			display: flex;" ref='uploadImg' />
			</view>
		</view>


		<!-- 阅办 -->
		<view v-if="currentStatus==='阅办'" class="info-box">
			<view class="info ">
				<text class="left">隐患矿井:</text>
				<text class="right">{{myData.YHBMNAME}}</text>
			</view>
			<view class="info ">
				<text class="left">检查项目:</text>
				<text class="right">{{myData.jcxm}}</text>
			</view>
			<view class="info ">
				<text class="left">排查班次:</text>
				<text class="right">{{myData.pcbc}}</text>
			</view>
			<view class="info info-textarea">
				<text class="left">隐患内容:</text>
				<textarea class="textarea" v-model="myData.yhnr" disabled="true" auto-height="true" />
			</view>
			<view class="info">
				<text class="left">隐患地点:</text>
				<text class="right">{{myData.yhdd}}</text>
			</view>
			<view class="info">
				<text class="left">隐患等级:</text>
				<text class="right">{{myData.yhdj}}</text>
			</view>
			<view class="info">
				<text class="left">备注:</text>
				<text class="right">{{myData.yhbz}}</text>
			</view>
			<view class="info info-no-line">
				<text class="left">责任单位负责人:</text>
				<button class="wxr-btn" type="default" @click="showTree"
					:disabled="myData.ZRRNAME && myData.ZRRNAME.length===0">{{myData.ZRRNAME && myData.ZRRNAME.length > 0 ? myData.ZRRNAME : '请选择'}}</button>
			</view>
		</view>

		<!-- 发布 按钮 -->
		<view class="bottom-box">
			<view class="operation-box btn-box">
				<button v-if="currentStatus==='办理'" @click="release()" size="mini" class="btn save-btn"
					type="default">发布</button>
				<button v-if="currentStatus==='整改中'" @click="submit()" size="mini" class="btn save-btn"
					type="default">提交完成</button>
				<button v-if="currentStatus==='阅办'" @click="readOver()" size="mini" class="btn save-btn"
					type="default">提交</button>
				<!-- 阅办 -->
			</view>
		</view>

		<!-- 树形图 弹窗 -->
		<uni-popup ref="popup">
			<popup-scroll
				style="min-height: 100px;max-height: 68vh;height: auto; width: 700rpx; background-color: #fff;border-radius: 8px;">
				<view class="popup-inner">
					<ly-tree ref="tree" :tree-data="treeData" :ready="ready" node-key="id" show-checkbox
						:defaultExpandAll="defaultExpandAll" @check="handleCheck" @check-change="handleCheckChange">
					</ly-tree>
				</view>
			</popup-scroll>
		</uni-popup>
	</view>
</template>

<script>
	/*
		已知的bug：
		1. 触发onshow时 zj 咋就为空了？？ 已经规避
	*/
	import {
		v4 as uuidv4
	} from 'uuid';
	import utils from '@/common/utils.js'
	import uploadImg from "../../../components/xiaohuang-uploadImg/uploadImg.vue";
	import LyTree from '@/components/ly-tree/ly-tree.vue';
	import {
		reallySaveFile,
		queryAttachementByUUID,
		getElectromechanicalContent, // 机电隐患工单查询
		getElectromechanicalBdzTree, // 获取机电班队长_选择树数据
		getElectromechanicalZgrTree, // 获取机电整改人_选择树数据
		getElectromechanicalBjrTree, // 获取隐患阅办人提交选择人_选择树数据
		releaseElectromechanical, // 机电隐患工单科区长发布
		submitElectromechanical, // 机电隐患班组长整改提交完成 
		readOverElectromechanical, // 机电隐患工单阅办提交
	} from '../../../common/api.js';
	export default {
		components: {
			LyTree,
			uploadImg
		},
		data() {
			return {
				myData: {}, // 工单数据
				ready: false, // 这里用于自主控制loading加载状态，避免异步正在加载数据的空档显示“暂无数据”
				treeData: [],
				defaultExpandAll: true,
				imgList: [], // 图片
				control: true,
				noControl: false,
				noDeleteBtn: false,
				zgzImgList: [], // 图片
				columnNum: 4,
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
		// 1. 排查人 等字段啥时候 展示 啥条件展示？？？？ 3h
		onLoad(options) {
			this.myData = {
				zj: '',
				YHBMNAME: '', // 隐患矿井
				PCRMNAME: '', // 排查人
				pcbc: '', // 排查班次
				jcxm: '', // 检查项目
				yhbh: '', // 隐患编号
				yhnr: '', // 隐患内容
				yhdj: '', // 隐患等级
				yhzt: '', // 隐患状态
				yhdd: '', // 隐患地点
				yhbz: '', // 备注
				yhimg: '', // 隐患图片
				zgfileid: '', // 整改图片
				FBRNAME: '', // 责任人
				ZRRNAME: '', // 班队长
				ZGRNAME: '', // 整改人
				zgsj: '', // 整改时间
				zgsx: '', // 整改时限
				zgcs: '', // 整改措施
				zgnr: '', // 整改内容
			};
			console.log('页面传递参数' + JSON.stringify(options));
			this.currentStatus = options.sfys; // 是否验收的首字母，也表示其他各种状态

			// 这一条zj先执行用于请求接口，下面的等页面dom初始化再赋值；
			this.currentZj = this.myData.zj = options.zj; // 不知为何，onshow
			// 不放在onshow 是因为 选择图片会触发onshow 然后之前选中的数据就被初始化了
			// 初始化机电隐患数据
			this.initElectromechanicalData();
		},
		onShow() {
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					// console.log(JSON.stringify(res));
					// 此处需要添加trycath的parse～～～～～～～～～～～～～～～～～～
					let obj = res.data;
					this.currentUserId = obj.userId;
					this.currentUserName = obj.userName;
				}
			});
		},
		methods: {
			// 初始化机电隐患数据
			initElectromechanicalData() {
				console.log(JSON.stringify(this.myData.zj));
				getElectromechanicalContent({
					zj: this.currentZj
				}).then(res => {
					this.myData = res.yh[0]; // 接口的不知名原因，返回的竟是数组，取第一项即可；
					// 初始化日期插件
					this.initDate();
					// 获取当前页面的所有图片数组
					this.initImgList();

					console.log("机电隐患数据：" + JSON.stringify(res.yh[0]));
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			initImgList() {
				// 获取图片列表
				this.getFileList(this.myData.yhimg).then(res => {
					console.log(JSON.stringify(res));
					this.imgList = this.dealFileUrl(res.uploadFiles);
					// console.log('imgList====' + JSON.stringify(this.imgList));
				});
				// 获取图片列表
				this.getFileList(this.myData.zgfileid).then(res => {
					console.log(JSON.stringify(res));
					this.zgzImgList = this.dealFileUrl(res.uploadFiles);
					// console.log('imgList====' + JSON.stringify(this.imgList));
				});
			},
			// 发布隐患
			release() {
				// 需要必传班队长和整改时限
				if (this.myData.zgsx === 'YYYY-MM-DD' || !this.myData.zrr) {
					uni.showToast({
						title: `请选择整改时限和班队长`, // ？？？描述对吗？？
						icon: 'none'
					});
					return;
				}
				this.myData.zgsx = this.myData.zgsx === 'YYYY-MM-DD' ? "" : this.myData.zgsx;
				console.log(JSON.stringify({
					zj: this.currentZj,
					yh: this.myData
				}));
				releaseElectromechanical(
					JSON.stringify({
						zj: this.currentZj,
						yh: this.myData
					})
				).then(res => {
					console.log(JSON.stringify(res));
					if (res.flag === 1) {
						uni.showToast({
							title: `发布成功`,
							icon: 'none'
						});
						uni.navigateBack({});
					} else if (res.flag === 0) {
						uni.showToast({
							title: `流程状态已改变`,
							icon: 'none'
						});
						uni.navigateBack({});
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 提交完成
			submit() {
				// 需要必传整改时间和整改人
				if (this.myData.zgsj === 'YYYY-MM-DD' || !this.myData.zgr) {
					uni.showToast({
						title: `请选择整改时间和整改人`, // ？？？描述对吗？？
						icon: 'none'
					});
					return;
				}

				console.log(JSON.stringify({
					zj: this.currentZj,
					yh: this.myData
				}));

				submitElectromechanical(
					JSON.stringify({
						zj: this.currentZj,
						yh: this.myData
					})
				).then(res => {
					if (res.flag === 1) {
						uni.showToast({
							title: `提交成功`,
							icon: 'none'
						});
						uni.navigateBack({});
					} else if (res.flag === 0) {
						uni.showToast({
							title: `流程状态已改变`,
							icon: 'none'
						});
						uni.navigateBack({});
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 阅办提交
			readOver() {
				// 请指定责任单位负责人
				if (!this.myData.zrr) {
					uni.showToast({
						title: `请指定责任单位负责人`, // ？？？描述对吗？？
						icon: 'none'
					});
					return;
				}

				console.log(JSON.stringify({
					zj: this.currentZj,
					zrr: this.myData.zrr
				}));

				readOverElectromechanical(
					JSON.stringify({
						zj: this.currentZj,
						zrr: this.myData.zrr
					})
				).then(res => {
					console.log(JSON.stringify(res));
					if (res.flag === 1) {
						uni.showToast({
							title: `提交成功`,
							icon: 'none'
						});
						uni.navigateBack({});
					} else if (res.flag === 2) {
						uni.showToast({
							title: `流程已办理`,
							icon: 'none'
						});
						uni.navigateBack({});
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 渲染日期插件
			initDate() {
				this.myData.zgsx = this.myData.zgsx ? this.myData.zgsx : 'YYYY-MM-DD';
				this.myData.zgsj = this.myData.zgsj ? this.myData.zgsj : 'YYYY-MM-DD';
			},
			// 上传图片
			zgzChooseImg(list, v) {
				console.log("上传图片_list：", list);
				console.log("上传图片_v：", v);
				if (!this.myData.zgfileid) {
					this.myData.zgfileid = uuidv4();
				}
				let that = this;
				var uper = uni.uploadFile({
					// 需要上传的地址 
					url: `http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.myData.zgfileid}`,
					// filePath  需要上传的文件 
					filePath: v,
					name: 'file',
					success(res) {
						// 显示上传信息
						console.log(res.data);
						let tmp = JSON.parse(res.data);
						reallySaveFile({
							type: 'db',
							uid: that.myData.zgfileid,
							filename: tmp.data.document.fileName,
							fileext: tmp.data.document.fileExtent,
							filesize: tmp.data.document.size,
							filestorename: tmp.data.filename,
							uploadPath: tmp.data.fileid,
							uploadUsername: that.currentUserName,
						}).then(data => {
							console.log(JSON.stringify(data));
						});
					}
				});
			},
			// / 删除图片： list：删除返回删除后剩余的图片数组 eq：返回删除的数组 /
			zgzImgDelete(list, eq) {
				console.log("删除图片_list：", list);
				console.log("删除图片_eq：", eq);
				this.deleteFile();
			},
			// 删除文件
			deleteFile(item) {
				// 调用delete的接口即可，
				deleteFile({
					opt: 'delete',
					mid: item.mid,
				}).then(res => {
					// 删除完毕后，要调一下获取数据的接口，哪个接口？？？？
					// this.commonGetFileList();
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					})
				})
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
			dealFileUrl(array) {
				// console.log(JSON.stringify(array)) ;
				let tmpArray = [];
				for (let item of array) {
					let url =
						`http://www.hbcoal.cn:8999/document/check?fileId=${item.filepath}&userId=${this.currentUserId}&attname=${item.filename}&mid=${item.mid}`;
					tmpArray.push(url);
				}
				return tmpArray;
			},
			//================================ 以下是树形 =======================================
			// 设置节点选中状态
			setCheckedKeys(keys) {
				this.$refs.tree.setCheckedKeys(keys);
			},
			// 展示树形选择弹窗Î
			showTree() {
				if (this.currentStatus === '办理') {
					getElectromechanicalBdzTree().then(res => {
						console.log("机电班队长_选择树= res" + JSON.stringify(res));
						this.treeData = utils.translateDataToTree(res.data);
						console.log("机电班队长_选择树= " + JSON.stringify(this.treeData));
						this.ready = true;
						//打开popup弹窗
						this.$refs.popup.open()
						this.$nextTick(function() {
							this.setCheckedKeys(this.myData.ZRRNAMEIdArray);
						})
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						})
					});
				} else if (this.currentStatus === '整改中') {
					// 可能是全选的树；
					getElectromechanicalZgrTree().then(res => {
						console.log("机电整改人_选择树= res" + JSON.stringify(res));
						this.treeData = utils.translateDataToTree(res.data);
						console.log("机电整改人_选择树= " + JSON.stringify(this.treeData));
						this.ready = true;
						// 打开popup弹窗
						this.$refs.popup.open()
						this.$nextTick(function() {
							this.setCheckedKeys(this.myData.ZGRNAMEIdArray);
						})
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						})
					});
				} else if (this.currentStatus === '阅办') {
					getElectromechanicalBjrTree().then(res => {
						console.log("阅办提交选择人_选择树= res" + JSON.stringify(res));
						this.treeData = utils.translateDataToTree(res.data);
						console.log("阅办提交选择人_选择树= " + JSON.stringify(this.treeData));
						this.ready = true;
						// 打开popup弹窗
						this.$refs.popup.open()
						this.$nextTick(function() {
							this.setCheckedKeys(this.myData.ZRRNAMEIdArray);
						})
					}).catch(err => {
						uni.showToast({
							title: `异常，请稍后重试`,
							icon: 'none'
						})
					});
				}
			},
			// 只有在"点击"修改的指定节点会触发(也就是说这个方法只会触发一次)，obj中包含当前选中
			handleCheck(obj) {
				// 需要删除 有children的节点，这样就只剩下最底层的节点；
				let tempLabel = [];
				let tempId = [];
				for (let s of obj.checkedNodes) {
					if (s.children === undefined) {
						tempLabel.push(s.label);
						tempId.push(s.id);
					}
				}
				if (this.currentStatus === '办理') {
					this.myData.ZRRNAME = tempLabel.toString();
					this.myData.zrr = tempId.toString();
					// 保存选中的节点key数组，用于渲染选中
					this.myData.ZRRNAMEIdArray = tempId;
				} else if (this.currentStatus === '整改中') {
					this.myData.ZGRNAME = tempLabel.toString();
					this.myData.zgr = tempId.toString();
					// 保存选中的节点key数组，用于渲染选中
					this.myData.ZGRNAMEIdArray = tempId;
				} else if (this.currentStatus === '阅办') {
					this.myData.ZRRNAME = tempLabel.toString();
					this.myData.zrr = tempId.toString();
					// 保存选中的节点key数组，用于渲染选中
					this.myData.ZRRNAMEIdArray = tempId;
				}


				console.log('handleCheck===', JSON.stringify(obj));
				console.log('=========================================');
			},
			// 只要节点的选中或半选中状态改变就触发（包括设置默认选中，点击选中/取消选中），其相关的所有父子节点都会触发（也就是说选中一个节点时，触发多次，父子节点的选中状态只要被修改就会触发）
			handleCheckChange(obj) {
				// obj: {
				// 	checked: true, // 节点是否选中
				// 	checkedall: false, // 当前树的所有节点是否全选中
				// 	data: {...}, // 节点数据
				// 	indeterminate: false, // 是否半选中
				// 	node: Node {...} // 节点实例
				// }

				// console.log('handleCheckChange', JSON.stringify(obj));
				// console.log('=========================================');
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
			// 日期控件操作  发现时间
			zgsxDateChange(e) {
				this.myData.zgsx = e.target.value;
				this.$forceUpdate(); // 这个页面好奇怪啊？？ 为啥要用到强制刷新？？
			},
			// 日期控件操作  整改时间
			zgsjDateChange(e) {
				this.myData.zgsj = e.target.value;
				this.$forceUpdate(); // 这个页面好奇怪啊？？ 为啥要用到强制刷新？？
			}
		}
	}
</script>

<style lang="scss">
	.electromechanical {
		padding: 16px 0 0;
		background-color: #F6F7F8;

		.info-box {
			margin: 0 8px;
			border-radius: 10px;
			box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
			margin-bottom: 16px;
			background-color: #ffffff;
			padding: 0 8px;

			.header {
				padding: 16px 0;
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;

				.right {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;

					.title {
						font-size: 18px;
					}

					.time {
						margin: 0 8px;
						font-size: 14px;
					}
				}

				.bar {
					margin-left: -8px;
					margin-right: 12px;
					width: 5px;
					height: 24px;
					border-top-right-radius: 2px;
					border-bottom-right-radius: 2px;
				}

				.blue-bar {
					background-color: #387CF9;
					box-shadow: 1px 0px 3px 0px rgba(56, 124, 249, 0.5);
				}
			}
		}
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
		box-shadow: 0px -1px 1px 1px rgba(0, 0, 0, 0.05);

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
</style>
