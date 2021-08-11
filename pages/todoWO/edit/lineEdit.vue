<template>
	<view class="produceEdit">
		<l-file ref="lFile" @up-success="upSuccess"></l-file>
		<view class="uni-container">
			<!-- ===================================================有工单步骤=================================================== -->
			<uni-table v-if="tableData.length>0" ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="120">工作名称</uni-th>
					<uni-th width="120">工作内容</uni-th>
					<uni-th width="90">工作方法</uni-th>
					<uni-th width="90">检查工具</uni-th>
					<uni-th width="90">是否上传文件</uni-th>
					<uni-th width="70">实际工作内容</uni-th>
					<uni-th width="60">状态</uni-th>
					<uni-th class="sticky-right" width="60">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>
						<view @click="taptext($event,item.bzmc)" :class="{'ellipsis':item.bzmc && item.bzmc.length>8}">
							{{ item.bzmc }}
						</view>
					</uni-td>
					<uni-td>
						<view @click="taptext($event,item.jcnr)" :class="{'ellipsis':item.jcnr && item.jcnr.length>8}">
							{{ item.jcnr }}
						</view>
					</uni-td>
					<uni-td>{{ item.jcff }}</uni-td>
					<uni-td>{{ item.jcgj }}</uni-td>
					<uni-td>{{ item.sfsctp }}</uni-td>
					<uni-td>{{ item.sjgznr }}</uni-td>
					<uni-td>{{ item.sjgznr && item.sjgznr.length>0 ? '已填写' : '未填写' }}</uni-td>
					<uni-td class="btn-td sticky-right">
						<view class="btn-box" @click="fillOut(index)">
							<text class="btn">填写</text>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>

			<!-- ===================================================以下 无工单步骤=================================================== -->
			<view v-if="tableData.length===0" class="no-steps-box">
				<view class="popup-inner">
					<view class="header">
						<view class="left">
							<view class="bar blue-bar">
							</view>
							<text>工单执行</text>
						</view>
					</view>

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
								<textarea class="textarea" v-model="wcqk" placeholder="请输入完成情况" auto-height="true" />
							</view>
						</view>

						<view class="bottom-box">
							<view class="operation-box btn-box">
								<view @click="commitOfNoSteps()" class="btn commit-btn">
									提交
								</view>
							</view>

							<view class="bottom" @click="toCreate()">
								<text class="bottom-text">发现故障时，点击我发起故障工单</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 弹窗 -->
		<view class="pop-box">
			<uni-popup ref="popup" :mask-click="false">
				<view class="popup-inner">
					<view class="header">
						<view class="left">
							<view class="bar blue-bar">
							</view>
							<text>{{currentItem.bzmc}}</text>
						</view>
						<view @click="close()" class="close">
							关闭
						</view>
					</view>
					<popup-scroll ref="popupScroll" class="popup-scroll"
						style="height:77vh;  width: 700rpx;position: relative; background-color: #F6F7F8;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;padding: 8px 0;">
						<view class="inner">

							<view class="info-box">
								<view class="info info-text">
									<text class="left">检查工具:</text>
									<text class="right">{{currentItem.jcgj}}</text>
								</view>
								<view class="info info-textarea">
									<text class="left">工作方法:</text>
									<textarea class="textarea" v-model="currentItem.jcff" disabled="true"
										auto-height="true" />
								</view>
								<view class="info info-textarea info-no-line">
									<text class="left">工作内容:</text>
									<textarea class="textarea" v-model="currentItem.jcnr" disabled="true"
										auto-height="true" />
								</view>
							</view>

							<view class="info-box">
								<view v-if="currentItem.sfdwzb==='是'" class="info info-location">
									<text class="left">定位坐标:</text>
									<view class="right">
										<text class="coordinate">{{currentItem.dwzb}}</text>
										<text @click="getLocation()" class="btn btn-location">定位</text>
									</view>
								</view>

								<view v-if="currentItem.sfdwzb==='是'" class="info">
									<text class="left">定位地址:</text>
									<view class="right">
										<text class="address">{{currentItem.dwdz}}</text>
									</view>
								</view>

								<view v-if="currentItem.sfdwzb==='是'" class="info info-textarea info-no-line">
									<text class="left">实际地址:</text>
									<textarea class="textarea" v-model="currentItem.sjdz" auto-height="true"
										placeholder="请输入实际地址" />
								</view>
							</view>

							<view class="info-box">
								<view v-if="currentItem.sfsctp==='是'" class="info info-no-line">
									<text class="left">图片:</text>
									<uploadImg style="justify-content: flex-end;
    display: flex;" ref='uploadImg' :maxCount="3" :mode="imgList" @chooseFile='chooseImg' @imgDelete='imgDelete'
										:control='control' :columnNum="columnNum" />
								</view>
							</view>

							<view class="info-box">
								<!-- ======= =======添加五个控件的切换======= ======= -->
								<view class="info info-textarea info-no-line">
									<text class="left">实际工作内容:</text>
									<!-- 输入框 -->
									<textarea v-if="currentItem.kjlx==='dwbk'" class="textarea"
										v-model="currentItem.sjgznr" auto-height="true" />

									<!-- 单选 -->
									<radio-group v-if="currentItem.kjlx==='dxk'" @change="radioChange">
										<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in radioList"
											:key="item.value">
											<view>
												<radio :value="item.value"
													:checked="item.value === currentItem.sjgznr" />
												<!-- <radio :value="item.value" /> -->
											</view>
											<view>{{item.name}}</view>
										</label>
									</radio-group>

									<!-- 复选 -->
									<checkbox-group v-if="currentItem.kjlx==='dxks'" @change="checkboxChange">
										<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxList"
											:key="item.value">
											<view>
												<checkbox :value="item.value" :checked="item.checked" />
											</view>
											<view>{{item.name}}</view>
										</label>
									</checkbox-group>

									<!-- 日期选择 -->
									<picker v-if="currentItem.kjlx==='sjkj'" mode="date" :value="currentItem.sjgznr"
										:start="startDate" :end="endDate" @change="bindDateChange">
										<view class="uni-input">{{currentItem.sjgznr}}</view>
									</picker>

									<!-- 下拉框 -->
									<view v-if="currentItem.kjlx==='xlk'"
										style="width: 100%; margin: auto; margin-bottom: 20px;">
										<xfl-select ref="myselect" :list="selectList" :clearable="false"
											:showItemNum="5" :listShow="false" :isCanInput="false"
											:style_Container="'height: 40px; font-size: 14px;'"
											:selectHideType="'hideAll'" :initValue="currentItem.sjgznr"
											@change="selectChange($event)">
										</xfl-select>
									</view>

								</view>

								<!-- ======= =======以上 添加五个控件的切换======= ======= -->
							</view>


							<view class="info-box">
								<view v-if="currentItem.sfwjsc==='是'" class="info info-upload-img info-no-line">
									<text class="left">选择多文件:</text>
									<view class="upload-btn">
										<text @click="myUploadFile()" class="btn">上传</text>
									</view>
								</view>

								<view v-if="currentItem.sfwjsc==='是'" class="info-table info-no-line">

									<uni-table ref="table" :loading="loading" stripe emptyText="暂无更多数据">
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

							<view class="bottom-box">
								<view class="operation-box btn-box">
									<view @click="last()" :class="{'disabled-btn':this.currentIndex===0}"
										class="btn last-btn">
										上一步
									</view>
									<view @click="commit()" class="btn commit-btn">
										提交
									</view>
									<view @click="next()"
										:class="{'disabled-btn':this.currentIndex===this.tableData.length-1}"
										class="btn next-btn">
										下一步
									</view>
								</view>

								<view class="bottom" @click="toCreate()">
									<text class="bottom-text">发现故障时，点击我发起故障工单</text>
								</view>
							</view>
						</view>
					</popup-scroll>
				</view>

			</uni-popup>
		</view>
		<!-- 气泡 查看省略号内容 -->
		<chunLei-popups v-model="isShowPopup" :x="x" :y="y" dynamic>
			<view>{{popupText}}</view>
		</chunLei-popups>
	</view>
</template>

<script>
	// 点击执行的时候，赋值index 弹出pop
	// 所有步骤都公用的一个全量的弹窗dom。
	// 点击的时候，拿到当前index 然后在数组里面取值，拿到对应的item，点击下一步的时候切换index，检测到index为数组长度减一的时候
	// 下一步按钮禁止点击，检测到当前index为0时，上一步不能点击，
	// 点击上一步下一步时，要做的是切换index，然后dom那些东西都是一直存在的，只是v-if而已，判断条件是array[index].xx来判断展示
	// 缺少班队长的判断？还有啥判断？


	// 引入vuex 然后增加全局变量 请求路径，替换上传图片和上传文件以及api.js中所使用的请求路径 把下载文件的地址也要搞到全局变量中
	// 增加一个无步骤的工单

	// 搞一下实际工作内容匹配的是多种表格，
	// 在切换和点击填写的时候，把页面撑满！！！！
	// 将fileTableData push的逻辑提炼出来，然后再添加一个下载地址字段
	// 然后再dealUuidAndFile方法中根据获取到的文件列表，去push fileTableData，然后在渲染时，在点击下载按钮时
	// 使用uni的下载方法，然后再保存到应用到私有目录吧；提示用户保存到哪里了！！！！！！30min


	// 考虑一下，是否在点击填写或者上一个下一个按钮时，也更新tableData
	// 得测一下，上传的文件在保存的时候是否真的绑定好了；
	// 搞定下一步按钮，5min
	// 搞定按钮禁用5min 
	// 点击填写、切换上一个下一个按钮时，都要进行判断，有uid则取获取图片列表去展示，没有uid则直接生成新的即可；30min
	// 看下是否要先清空imgList呢？ 应该要的；5min  然后再接入请求文件渲染文件，并提交




	// 登陆失效这个得搞一下 先测试两分钟得，然后再测试俩小时的；！！！！！！！！！！！！！！！！！～～～～～～～～～～～～～～～～～～
	// 登陆失效这个得搞一下 先测试两分钟得，然后再测试俩小时的；！！！！！！！！！！！！！！！！！～～～～～～～～～～～～～～～～～～
	// 登陆失效这个得搞一下 先测试两分钟得，然后再测试俩小时的；！！！！！！！！！！！！！！！！！～～～～～～～～～～～～～～～～～～
	// 当前用户信息要获取！！！！！！！～～～～～～～～～～～～～～～～～～～～～～～～
	// 当前用户信息要获取！！！！！！！～～～～～～～～～～～～～～～～～～～～～～～～
	// 当前用户信息要获取！！！！！！！～～～～～～～～～～～～～～～～～～～～～～～～


	// 测一下，搞定后，咋看是否提交的数据是对的，是在已完成列表查看详情吧？？？？？？？～～～～～～
	// 测一下如果有步骤的table，超过十条咋展示的，因为我没加分页功能？？?
	// 测一下，两个步骤都要定位的场景，应该会导致数据切换没变化；？？
	// 测一下 图片切换时，填充和提交				// 图片和文件是通过传入uuid到tableData里面，
	// 测一下下拉框 如果数目过多，是滚动还是会被隐藏；
	// 测试一下，textarea的高度点击范围和字数限制问题；看一下文档有啥；
	// pop弹窗滚动逻辑有问题，看下是换还是改；
	// 生成故障工单的跳转逻辑
	// 3. 操作按钮需要执行的是删除，点击文件名需要进行的是预览，还有个下载按钮。。

	// 树形图，的搜索功能，得用递归去写，查询当前是否有children，无则开始匹配当前姓名字段和搜索字段，剔除没匹配上的，然后再渲染一下；
	import utils from '@/common/utils.js'
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import popupScroll from '@/components/popup-scroll/popup-scroll.vue'
	import uploadImg from "../../../components/xiaohuang-uploadImg/uploadImg.vue"
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import {
		v4 as uuidv4
	} from 'uuid';
	import {
		deleteFile,
		getLineContent,
		saveLineContent,
		queryAttachementByUUID,
		submitLineContent,
		reallySaveFile,
		getAttachmentByMid
	} from '../../../common/api.js'; //引入需要的api 

	export default {
		components: {
			popupScroll,
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
				currentParams: {}, // 根据是否有工单步骤判断要传递的提交工单接口的参数
				gdzj: '', // 工单主键
				bzbh: '', // 步骤编号
				xtbm: '', // 系统编码 或 系统编号
				lx: '', // 工单类型
				wcqk: '', // 完成情况
				bzmc: '', // 标准名称
				gznr: '', // 工作内容
				loading: false,
				control: true,
				columnNum: 4,
				imgList: [], // 用于渲染已经上传的图片
				fileTableData: [], // 表示上传文件的table的数据
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
			// 在切换的时候清理掉之前的文件数据；在保存时，是否能成功保存；
			clearData() {
				this.imgList = [];
				this.fileTableData = [];
			},
			// 点击填写，弹出弹窗 
			fillOut(index) {
				this.clearData();
				this.currentIndex = index;
				this.currentItem = this.tableData[index];
				if (typeof this[`${this.currentItem.kjlx}Deal`] === 'function') {
					this[`${this.currentItem.kjlx}Deal`]();
				}
				// 赋值完currentItem后，立刻判断是否有uuid，无则生成新的。
				this.dealUuidAndFile();
				this.open();
			},
			// 如果没有文件uid 则生成新的，如果有uid，则获取该uid对应的文件数据数组并渲染；提交时，也在此基础上；
			dealUuidAndFile() {
				if (this.currentItem.wjuuid.length === 0) {
					this.currentItem.wjuuid = uuidv4();
				} else {
					// 其实可以把文件地址直接拼好 就不用每次点击下载的时候，还要再请求一个接口了
					// 如果有uuid 说明有可能之前上传过，那么就尝试获取一次文件列表，获取完后，要咋then进行地址的拼接处理
					// console.log('看我看我看我 16242770031992'+this.currentItem.wjuuid);
					this.getFileList(this.currentItem.wjuuid).then(res => {
						console.log(JSON.stringify(res));
						for (let item of res.uploadFiles) {
							this.pushOneFile(item);
						}
						// console.log('fileTableData====' + JSON.stringify(this.fileTableData));
					});
				}
				if (this.currentItem.tpuuid.length === 0) {
					this.currentItem.tpuuid = uuidv4();
				} else {
					this.getFileList(this.currentItem.tpuuid).then(res => {
						// console.log(JSON.stringify(res));
						this.imgList = this.dealFileUrl(res.uploadFiles);
						// console.log('imgList====' + JSON.stringify(this.imgList));
					});
				}
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
			// http://www.hbcoal.cn:8999/document/check?fileId=sbgl/M00/00/1C/CgEJ42DRRqqATvokAAS_smS3PoA928.jpg&userId=225885&attname=Screenshot_20210615_160457_io.dcloud.HBuilder.jpg
			// 下一个
			next() {
				// 切换index 然后切换currentItem   小于数组长度-1 则 可以加加 ；否则return
				if (this.currentIndex < this.tableData.length - 1) {
					this.currentIndex++;
				} else {
					return;
				}
				this.save();
				this.clearData();
				this.currentItem = this.tableData[this.currentIndex];
				if (typeof this[`${this.currentItem.kjlx}Deal`] === 'function') {
					this[`${this.currentItem.kjlx}Deal`]();
				}
				// 赋值完currentItem后，立刻判断是否有uuid，无则生成新的。
				this.dealUuidAndFile();
				utils.popupScrollHoming(this.$refs.popupScroll);
			},
			// 上一个
			last() {
				if (this.currentIndex > 0) {
					this.currentIndex--;
				} else {
					return;
				}
				this.save();
				this.clearData();
				this.currentItem = this.tableData[this.currentIndex];
				if (typeof this[`${this.currentItem.kjlx}Deal`] === 'function') {
					this[`${this.currentItem.kjlx}Deal`]();
				}
				// 赋值完currentItem后，立刻判断是否有uuid，无则生成新的。
				this.dealUuidAndFile();
				utils.popupScrollHoming(this.$refs.popupScroll);
			},
			// 提交
			commit() {
				// 做个判断，最少填写一条限制sjgznr 才能提交
				let isAllow = false;
				for (let item of this.tableData) {
					if (item.sjgznr.length > 0) {
						isAllow = true;
					}
				}
				if (!isAllow) {
					uni.showToast({
						title: `请至少填写一个实际工作内容`,
						icon: 'none'
					})
					return;
				}
				this.save().then(res => {
					// gdzj:工单主键，bzbh:步骤编号，xtbh:系统编号，wcqk:完成情况，lx:工单类型
					submitLineContent(
						this.currentParams
					).then((res) => {
						if (res.flag === 2) {
							uni.showToast({
								title: `提交失败,缺少班队长`,
								icon: 'none'
							})
						} else if (res.flag === 1) {
							uni.showToast({
								title: `提交成功`,
								icon: 'none'
							})
							// 隐藏pop
							this.$refs.popup.close()
							uni.navigateBack();
						}
					});
				});
			},
			// 无工单步骤的提交
			commitOfNoSteps() {
				if (this.wcqk.length === 0) {
					uni.showToast({
						title: `请填写完成情况`,
						icon: 'none'
					})
					return;
				}
				this.currentParams = {
					gdzj: this.gdzj,
					wcqk: this.wcqk,
				}
				submitLineContent(
					this.currentParams
				).then((res) => {
					if (res.flag === 2) {
						uni.showToast({
							title: `提交失败,缺少班队长`,
							icon: 'none'
						})
					} else if (res.flag === 1) {
						uni.showToast({
							title: `提交成功`,
							icon: 'none'
						})
						uni.navigateBack();
					}
				});
			},
			// 保存
			save() {
				return new Promise((resolve, reject) => {
					console.log("当前保存对象：" + JSON.stringify(this.currentItem))
					// 保存时，得删除日期插件默认值。。后面想办法优化；
					if (this.currentItem.sjgznr === "YYYY-MM-DD") {
						this.currentItem.sjgznr = "";
					}
					saveLineContent(
						JSON.stringify({
							data: this.currentItem
						})
					).then(data => {
						// 刷新列表，防止重复提交
						this.getData();
						resolve(200);
						console.log('data', JSON.stringify(data));
					}).catch(err => {
						uni.showToast({
							title: `保存失败，请稍后重试`,
							icon: 'none'
						})
						reject(-1);
					});
				});
			},
			// 发起创建故障工单
			toCreate() {
				uni.navigateTo({
					url: `/pages/todoWO/edit/breakdownCreate?gzlx=生产系统工单&sbzj=${this.gdzj}&gzsb=${this.bzmc}`
				});
			},
			// 查看省略号文字的气泡弹窗
			taptext(e, data) {
				this.x = e.touches[0].clientX
				this.y = e.touches[0].clientY

				this.popupText = data;
				this.isShowPopup = !this.isShowPopup;
			},
			// ================================= 以下 可选控件 ==================================
			radioChange(evt) {
				// 这个可以处理渲染选中的结果；
				// for (let i = 0; i < this.radioList.length; i++) {
				// 	if (this.radioList[i].value === evt.detail.value) {
				// 		this.current = i;
				// 		break;
				// 	}
				// } 
				this.currentItem.sjgznr = evt.detail.value;
			},
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

				this.currentItem.sjgznr = e.detail.value.toString();
				console.log(this.currentItem.sjgznr)
			},
			// 下拉框选择事件
			selectChange(e) {
				console.log(JSON.stringify(e));
				// 将值赋值给
				this.currentItem.sjgznr = e.newVal;
			},
			// 渲染单选框勾选状态
			dxkDeal() {
				// 处理可选值，@@分割为数组，然后根据kjlx类型 赋值单选多选下拉框的数据list 即可
				let array = this.currentItem.kxz.split('@@');
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
				let array = this.currentItem.kxz.split('@@');
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
					values = this.currentItem.sjgznr.split(',');
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
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
				this.selectList = this.currentItem.kxz.split('@@');

				// 需要等渲染出来后才能获取到，所以加一个延迟
				setTimeout(() => {
					this.$refs.myselect.selectText = this.currentItem.sjgznr;
				}, 200)
			},
			// 渲染日期插件状态
			sjkjDeal() {
				// 日期插件，切换tab时，如果无历史值，则赋值当前日期，如果有历史值，则填充之；
				if (this.currentItem.kjlx === 'sjkj') {
					this.currentItem.sjgznr = this.currentItem.sjgznr.length > 0 ? this.currentItem.sjgznr : 'YYYY-MM-DD';
				}
			},
			// ================================= 以上 可选控件 ==================================
			// 上传文件成功的回掉逻辑
			upSuccess(data) {
				// console.log('成功上传文件：' + JSON.stringify(name));
				console.log('成功上传文件：' + JSON.stringify(data));
				// this.pushOneFile(data);

				// 持久化保存文件上传
				let tmp = data;
				reallySaveFile({
					type: 'db',
					uid: this.currentItem.wjuuid,
					filename: tmp.data.document.fileName,
					fileext: tmp.data.document.fileExtent,
					filesize: tmp.data.document.size,
					filestorename: tmp.data.filename,
					uploadPath: tmp.data.fileid,
					uploadUsername: this.currentUserName,
				}).then(data => {
					// console.log(data);
					console.log(JSON.stringify(data));
					this.commonGetFileList();
				});

			},
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
			myUploadFile() {
				/*
				选择文件并上传
				
				currentWebview=当前窗口，仅app端需要传，且必传
				
				url=上传服务器地址，必填
				name=上传文件的key(选填，默认为file)
				header=请求头(选填) 16242770031992 16242770031992
				*/
				console.log(
					`文件上传地址== http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.currentItem.wjuuid}`
				);
				this.$refs.lFile.upload({
					currentWebview: this.$mp.page.$getAppWebview(),
					url: `http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.currentItem.wjuuid}`, //你的上传附件接口地址
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
			deleteWj(item) {
				console.log(JSON.stringify(item));
				this.deleteFile(item).then(res => {
					this.commonGetFileList();
				}).catch(err => {
					console.log(JSON.stringify(err));
					uni.showToast({
						title: `1异常，请稍后重试`,
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
			// 如下是图片访问地址
			// http://www.hbcoal.cn:8999/document/check?fileId=sbgl/M00/00/19/CgEJ42DKpQyABMbhAAS_smS3PoA023.jpg&userId=290674&attname=CgEJ42DKpQyABMbhAAS_smS3PoA023.jpg

			// 上传图片
			chooseImg(list, v) {
				console.log("上传图片_list：", list);
				console.log("上传图片_v：", v);

				let that = this;
				var uper = uni.uploadFile({
					// 需要上传的地址 
					url: `http://www.hbcoal.cn:8115/FileUpLoadByYearServlet?opt=add&path=uploadfile&subpath=suggest&uid=${this.currentItem.tpuuid}`,
					// filePath  需要上传的文件
					filePath: v,
					name: 'file',
					success(res) {
						// console.log(this.currentItem.tpuuid)
						// 显示上传信息
						console.log(JSON.stringify(res.data));
						console.log(res.data);
						let tmp = JSON.parse(res.data);
						reallySaveFile({
							type: 'db',
							uid: that.currentItem.tpuuid,
							filename: tmp.data.document.fileName,
							fileext: tmp.data.document.fileExtent,
							filesize: tmp.data.document.size,
							filestorename: tmp.data.filename,
							uploadPath: tmp.data.fileid,
							uploadUsername: that.currentUserName,
						}).then(data => {
							console.log(data);
							console.log(JSON.stringify(data));
						});

						// 查一下主键接口，看看返回的和之前的有啥不一样，看看是不是下次进入时，用于下载有用？？？
						// 接下来继续搞定渲染，和切换的渲染，然后就搞定一下保存，然后提交
						// 先获取到文件列表，然后拼接地址，push到imgList中， 这一行步骤得在填写和上一步下一步中都每次触发；
						// 然后再看下，附件文件都列表咋
						// 
						// "/FileUpLoadByYearServlet?type=db&uid=" +
						// 									uuid + "&filename=" + document.fileName + "&fileext=" + document
						// 									.fileExtent + "&filesize=" + document.size + "&filestorename=" + res
						// 									.data.filename + "&uploadPath=" + res.data.fileid +
						// 									"&uploadUsername="


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
			// 打开弹窗
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.save();
				this.$refs.popup.close()
			},
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
			// 获取坐标和地址信息
			getLocation() {
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: (res) => {
						this.currentItem.dwzb = `${res.latitude},${res.longitude}`;

						let tmp = res.address;
						this.currentItem.dwdz = tmp.province + tmp.city + tmp.district + tmp.street + tmp
							.streetNum

						// console.log('当前位置的经度：' + res.longitude);
						// console.log('当前位置的纬度：' + res.latitude);
						// console.log('当前位置的地址：' + JSON.stringify(res.address));
					},
					fail: (res) => {
						console.log('当前位置的经度：' + res.longitude);
					},
					complete: (res) => {}
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
			// 获取数据
			getData() {
				this.loading = true

				getLineContent({
					gdzj: this.gdzj, // 是从数据item中获取，那得把item整个参数传过来 zj
					bzbh: this.bzbh, // 是从数据item中获取，那得把item整个参数传过来 bzbh
					xlbh: this.xtbm, // xlbh：线路编号 值就是系统编号
				}).then(data => {
					console.log('data', JSON.stringify(data));
					// 这里得判断是否有工单步骤，根据数组长度；
					if (data.data && data.data.length) {
						this.currentParams = {
							gdzj: this.gdzj,
							bzbh: this.bzbh,
							xtbh: this.xtbm,
							// wcqk: , // 这个是无步骤时，传入的，根据查询工单步骤的长度来判断展示哪个模板，然后
							lx: this.lx
						}
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
							"sjgznr": ""
						}

						// 循环处理tableData的每个值
						this.tableData = this.tableData.map(item => {
							let tmp = JSON.parse(JSON.stringify(obj));
							return item = Object.assign(tmp, item);
						})
						console.log('data22', JSON.stringify(this.tableData));




						// // 待删除三行～～！！！！！！
						// this.currentItem = this.tableData[0];
						// this.dealUuidAndFile();
						// this.open();
					} else {

						this.currentParams = {
							gdzj: this.gdzj,
							wcqk: this.wcqk, // 这个是无步骤时，传入的，根据查询工单步骤的长度来判断展示哪个模板，然后
						}
					}
				}).catch(err => {});
			},
		}
	}
</script>

<style lang="scss">
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

	// 弹窗样式
	.popup-inner {
		margin-top: -5vh;
		background-color: #F6F7F8;
		overflow: hidden;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-radius: 10px;

		.header {
			display: flex;
			justify-content: space-between;
			padding: 10px 8px 8px 0px;
			background-color: #ffffff;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.1);
			margin-bottom: 8px;

			.left {
				display: flex;
				flex-direction: row;
				align-items: center;

			}

			.close {
				font-size: 14px;
				color: #FA7268;
			}

		}


		.inner {
			.info-box {
				margin: 0 8px;
				border-radius: 6px;
				// overflow: hidden;
				box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
				margin-bottom: 16px;
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
					background-color: #F6F7F8;
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
				padding: 0 4px 8px;
				margin-bottom: 8px;
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

	.bar {
		margin-right: 12px;
		width: 5px;
		height: 18px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	.blue-bar {
		background-color: #387CF9;
		box-shadow: 1px 0px 3px 0px rgba(56, 124, 249, 0.5);
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
