<template>
	<view class="equipment">
		<view class="info-box">
			<block v-for="(item,index) in myData">
				<!-- 如果是wbk 则还需要继续分为三类 -->
				<!-- 在下面增加专用的事件做判断 -->
				<view v-if="item.cslx==='wbk'" class="info info-text">
					<text class="left">{{item.xjcs}}:</text>
					<input v-if="item.cslb==='1'" type="number" class="right" v-model="item.csz" placeholder="请输入整数" />
					<input v-if="item.cslb==='2'" type="number" @input="decimalInput($event,index)"
						@blur="decimalBlur($event,index)" class="right" v-model="item.csz" placeholder="请输入两位小数" />
					<input v-if="item.cslb==='3'" type="text" class="right" v-model="item.csz" />
				</view>

				<view v-if="item.cslx==='dwbk'" class="info info-textarea">
					<text class="left">{{item.xjcs}}:</text>
					<textarea class="textarea" v-model="item.csz" auto-height="true" />
				</view>

				<view v-if="item.cslx==='sjkj'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<!-- 日期选择 -->
					<picker mode="date" :value="item.csz" :start="startDate" :end="endDate"
						@change="bindDateChange($event,index)">
						<view class="uni-input">{{item.csz}}</view>
					</picker>
				</view>

				<!-- 下拉框 -->
				<view v-if="item.cslx==='xlk'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<view style="width: 100%; margin: auto; margin-bottom: 20px;">
						<xfl-select ref="myselect" :list="(item.csxz.split('@@'))" :clearable="false" :showItemNum="5"
							:listShow="false" :isCanInput="false" :style_Container="'height: 40px; font-size: 14px;'"
							:selectHideType="'hideAll'" :initValue="item.csz" @change="selectChange($event,index)">
						</xfl-select>
					</view>
				</view>

				<!-- 单选框 -->
				<view v-if="item.cslx==='dxk'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<radio-group @change="radioChange($event,index)">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(obj, index) in item.csxzArray"
							:key="obj.value">
							<view>
								<radio :value="obj.value" :checked="obj.value === item.csz" />
							</view>
							<view>{{obj.name}}</view>
						</label>
					</radio-group>
				</view>

				<!-- 复选 -->
				<view v-if="item.cslx==='dxks'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<checkbox-group @change="checkboxChange($event,item)">
						<label class="uni-list-cell uni-list-cell-pd" v-for="obj in item.csxzArray" :key="obj.value">
							<view>
								<checkbox :value="obj.value" :checked="obj.checked" />
							</view>
							<view>{{obj.name}}</view>
						</label>
					</checkbox-group>
				</view>

				<!-- 定位坐标 -->
				<view v-if="item.cslx==='wzzb'" class="info info-location">
					<text class="left">定位坐标:</text>
					<view class="right">
						<text class="coordinate">{{currentDwzb}}</text>
						<!-- <text @click="getLocation()" class="btn btn-location">定位</text> -->
					</view>
				</view>

				<view v-if="item.cslx==='wzzb'" class="info">
					<text class="left">定位地址:</text>
					<view class="right">
						<text class="address">{{currentDwdz}}</text>
					</view>
				</view>

				<view v-if="item.cslx==='wzzb'" class="info info-textarea">
					<text class="left">实际地址:</text>
					<textarea class="textarea" v-model="item.csz" auto-height="true" placeholder="请输入实际地址" />
				</view>

				<!-- 图片上传 -->
				<!-- v-if="item.cslx==='tp'" -->
				<view v-if="item.cslx==='tp'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<my-img-upload :uuid="item.csz" :index="index" v-on:get-img-info="getImgInfo"></my-img-upload>
				</view>
				<!-- 图片多个的渲染，imgList可以在getData中先获取图片列表，然后赋值每个item的imgList的值， -->
				<!-- 每个的tpuuid不一样啊，在何处生成，可以赋值给item储存，在chooseImg的时候item穿进去，即可获得uuid -->
				<!-- 如果是封装的组件，那么弹出的uuid如何区别？可以把序号传进去，到时候传出来；其他场景要是也使用呢？？ -->
				<!-- 如果是用不到多个上传，则可以在方法里不处理传出来的index -->
			</block>
		</view>
		<!-- 文件上传 -->
		<my-file-table v-if="isFileUpload" :uuid="fileUuid" v-on:get-file-uuid="getFileUuid"></my-file-table>

		<view>
			<view v-if="isCreated==='true'" class="breakdown-box" @click="toCreate()">
				<text class="text">发现故障时，点击我发起故障工单</text>
			</view>

			<!-- 保存和提交 按钮 -->
			<view class="bottom-box">
				<view class="operation-box btn-box">
					<button @click="save(true)" size="mini" class="btn" type="primary">保存</button>
					<button @click="submit()" size="mini" class="btn" type="primary">提交</button>
					<button @click="back()" size="mini" class="btn" type="default">返回</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	// 输入框类别测试 10min 测试复制功能会出错吗
	/*
		-3. 需要测一下实际地址的输入 是否添加成功？？
		-2. 需要将单选多选下拉框日期插件的渲染的逻辑拷贝过来；
		-1. selectList  radioList 尝试用item.csxz
		0. 测一下多个下拉框；多个日期控件；多个单选；多个单选；多个上传图片；多个的话 可以尝试index传入change事件
		1. 文件上传是需要检测到类型里有文件时，就在最下面展示一个文件上传的组件（自己封装）
		2. 文本输入框 针对整数和精确度2位，拷贝java里规则
		3. 坐标block 包围三个输入框
		3a. 如何先实现上传文件组件呢/？可以先自己生成uuid 存一下，然后再取出来渲染 3h
		5. 多个组件使用同一个方法？
		6. 实验一下，mock一个数组，然后循环出来俩组件，然后绑定同一个方法，可以再添加一个属性，传入父组件的this，（函数带入参）
		然后在子组件内部生成新的uuid 然后在子组件内部将生成的uuid传进传入的函数，在getFileUuid中打印一下父级的此uuid变了没
		
		1. 整个卡片是上面一体，下面是一个文件上传组件
		2. 把所有类型在info-box列编写，然后每个类型都加上if 然后循环展示
		3. 在拿到数据后，先根据f字段判断是否展示文件上传
		4. 后面提交也得循环赋值类型为文件上传的那项 值为fileUuid；
		5. bc 有没有保存过 需要做什么处理？？
		
		业务逻辑：
		1. 每个步骤单独拥有一个uuid
		2. 步骤的类型是文件上传时，共用一个文件上传uuid
		3. 在查看页面时，得单独处理取出cslx为wzzb的那一项的wzzb wzdz
	*/
	import myFileTable from '@/components/my-components/my-file-table.vue';
	import myImgUpload from '@/components/my-components/my-img-upload.vue';
	import {
		v4 as uuidv4
	} from 'uuid';
	import {
		getEquipmentContent, // 设备巡检工单步骤查询
		saveEquipmentContent, // 设备巡检工单保存
		submitEquipmentContent, // 设备巡检工单提交
		deleteEquipmentWO, // 设备巡检工单删除
	} from '../../../common/api.js'; //引入需要的api 
	export default {
		components: {
			myFileTable,
			myImgUpload
		},
		data() {
			return {
				myData: [],
				sbzj: "",
				rwzj: "",
				fileUuid: "", // 文件uuid
				isFileUpload: false, // 是否上传文件
				isSaved: "", // 是否保存过
				currentDwzb: '', // 定位坐标 因为后台限制了只会有一套地址定位控件 所以可以单独拎出来
				currentDwdz: '', // 定位地址 因为后台限制了只会有一套地址定位控件 所以可以单独拎出来
				isCreated: '', // 用于判断本应用生成的设备巡检工单（nfc设备巡检功能使用这个）
				isDeleteSuccess: false, // 用于判断是否删除巡检工单成功了
				sbmc: '', // 设备名称（用于创建故障工单时使用）
				isWillSave: false, // 用于返回逻辑中，判断用户是否执行了保存或者提交逻辑；就不删除了；
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
			this.isCreated = options.isCreated;
			this.sbmc = options.sbmc;
			console.log(JSON.stringify(options))
			this.sbzj = options.bzbh;
			this.rwzj = options.zj;
			this.getData();
			this.getLocation();
		},
		methods: {
			// 发起创建故障工单
			toCreate() {
				uni.navigateTo({
					url: `/pages/todoWO/edit/breakdownCreate?gzlx=设备巡检工单&sbzj=${this.sbzj}&gzsb=${this.sbmc}`
				});
			},
			// 两位小数得
			decimalInput(evt, index) {
				let str = evt.target.value;
				if (!/^\d+(\.\d{1,2})?$/.test(str)) {
					console.log('进入判断');
					this.myData[index].csz = '';
				}
				this.$forceUpdate();
			},
			// 传入index吧 再去修改值
			decimalBlur(evt, index) {
				let str = evt.target.value;
				if (!/^\d+(\.\d{1,2})?$/.test(str)) {
					this.myData[index].csz = '';
				}
				this.$forceUpdate();
			},
			// 保存
			save() {
				// 文件上传组件uuid能直接绑定到item上吗？还是只能通过index来赋值uuid
				for (let item of this.myData) {
					// 如果有文件上传，循环赋值给lx为wj的item
					if (this.isFileUpload && item.cslx === 'wj') {
						item.csz = this.fileUuid;
					}
					// 处理日期插件的YYYY-MM-DD
					if (item.cslx === 'sjkj') {
						item.csz = item.csz === 'YYYY-MM-DD' ? "" : item.csz;
					}
				}

				// console.log(JSON.stringify(this.myData));
				// 特殊处理地址俩字段
				let temp = {
					'wzdz': this.currentDwdz,
					'zb': this.currentDwzb,
				};
				// 处理myData为Map格式
				// （key:”csbm+zj”组成，value：参数值）
				for (let item of this.myData) {
					temp['csbm' + item.zj] = item.csz || "";
				}
				saveEquipmentContent(
					JSON.stringify({
						data: temp,
						sbzj: this.sbzj,
						rwzj: this.rwzj,
						bc: this.isSaved
					})
				).then(res => {
					console.log(JSON.stringify(res));
					if (res.f === '1') {
						this.isWillSave = true;
						if (this.isCreated === 'true') {
							uni.navigateTo({
								url: `/pages/todoWO/table?title=运行中工单&&WOType=running`
							});
						} else {
							uni.navigateBack({});
						}
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 提交
			submit() {
				// 文件上传组件uuid能直接绑定到item上吗？还是只能通过index来赋值uuid
				for (let item of this.myData) {
					// 如果有文件上传，循环赋值给lx为wj的item
					if (this.isFileUpload && item.cslx === 'wj') {
						item.csz = this.fileUuid;
					}
					// 处理日期插件的YYYY-MM-DD
					if (item.cslx === 'sjkj') {
						item.csz = item.csz === 'YYYY-MM-DD' ? "" : item.csz;
					}
				}


				console.log(JSON.stringify(this.myData));
				// 特殊处理地址俩字段
				let temp = {
					'wzdz': this.currentDwdz,
					'zb': this.currentDwzb,
				};
				// 处理myData为Map格式
				// （key:”csbm+zj”组成，value：参数值）
				for (let item of this.myData) {
					temp['csbm' + item.zj] = item.csz || "";
				}
				submitEquipmentContent(
					JSON.stringify({
						data: temp,
						sbzj: this.sbzj,
						rwzj: this.rwzj,
						bc: this.isSaved
					})
				).then(res => {
					if (res.f === '1') {
						this.isWillSave = true;
						uni.navigateBack({});
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			back() {
				uni.navigateBack({});
			},
			onBackPress() {
				// console.log('进入后退逻辑111111111111111111111');
				// 还要增加判断是否是isCreated
				if (this.isCreated !== 'true') {
					return false
				}
				// console.log('进入后退逻辑2222222222222222222222');
				// 以下逻辑只针对本应用生成巡检工单的场景 即扫码或nfc访问设备详情，并点击巡检按钮生成工单
				if (!this.isDeleteSuccess && this.isWillSave !== true) { // 未保存过且未删除过的工单 才进行删除
					deleteEquipmentWO({
						zj: this.rwzj
					}).then(res => {
						console.log('巡检工单已删除===========～～～～～～～');
						this.isDeleteSuccess = true;
						uni.navigateBack({});
					}).catch(err => {
						this.isDeleteSuccess = false;
						uni.showToast({
							title: `删除工单失败，请稍后重试`,
							icon: 'none'
						});
					})

					return true; // 不执行默认返回逻辑
				}

				// 先调用删除接口，如果失败了 则返回true
				// 根据是否删除成功来看是否返回true isDeleteSuccess一开始是false 则返回true，在接口返回里赋值为true 则不执行true
			},
			// 组件上传
			getFileUuid(data) {
				this.fileUuid = data.fileUuid;
				console.log('kan!!!!!!!_+++++++======' + JSON.stringify(data));
			},
			// 图片弹出
			getImgInfo(data) {
				console.log('========图片弹出=' + JSON.stringify(data));
				/*
				    1. 此处拿到index后 可以在myData里面赋值新的uuid，根据index赋值
				*/
				this.myData[data.index].csz = data.fileUuid;
				console.log(this.myData);
			},
			// 单选框
			radioChange(evt, index) {
				this.myData[index].csz = evt.detail.value;
				// this.currentItem.sjgznr = evt.detail.value;
				// console.log(JSON.stringify(item));
				// console.log(JSON.stringify(this.myData));
				// 实验一下 直接赋值item能否赋值成功？？？
			},
			// 下拉框选择事件
			selectChange(e, index) {
				console.log(JSON.stringify(e));
				// 将值赋值给
				this.myData[index].csz = e.newVal;
				// 实验一下 直接赋值item 下拉框能否成功
				console.log(JSON.stringify(this.myData));
			},
			checkboxChange(e, data) {
				var items = data.csxzArray,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				data.csz = e.detail.value.toString();
				console.log(this.myData);
			},
			// 获取坐标和地址信息
			getLocation() {
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: (res) => {
						this.currentDwzb = `${res.latitude},${res.longitude}`;

						let tmp = res.address;
						this.currentDwdz = tmp.province + tmp.city + tmp.district + tmp.street + tmp.streetNum;
					},
					fail: (res) => {
						console.log('当前位置的经度：' + res.longitude);
					},
					complete: (res) => {}
				});
			},
			// 获取设备巡检工单步骤数据
			getData() {
				getEquipmentContent({
					sbzj: this.sbzj,
					rwzj: this.rwzj
				}).then(res => {
					this.myData = res.datas;
					// 赋值是否保存过
					this.isSaved = res.bc;
					console.log('00000000000=' + JSON.stringify(this.isSaved));
					for (let item of this.myData) {
						// f值为“1”表示需要上传文件
						// 得先轮循环查到类型为文件上传的那一项，然后再看是否有旧的文件uuid，没有则生成新的；
						if (res.f === '1' && item.cslx === 'wj') {
							this.isFileUpload = true;
							this.fileUuid = !item.csz ? uuidv4() : item.csz;
						}
						// 处理一下单选框，多选框类型的csxz字段；@@
						if (item.cslx === 'dxk' || item.cslx === 'dxks') {
							item.csxzArray = [];
							for (let s of item.csxz.split('@@')) {
								let temp = {};
								temp.value = s;
								temp.name = s;
								item.csxzArray.push(temp);
							}
						}
						// 处理一下日期插件
						if (item.cslx === 'sjkj' && !item.csz) {
							item.csz = 'YYYY-MM-DD';
						}
						// 赋值渲染多选框
						if (item.cslx === 'dxks') {
							// 如果相等，则就设置为 true
							var items = item.csxzArray,
								values = item.csz.split(',');
							for (var i = 0, lenI = items.length; i < lenI; ++i) {
								const item = items[i]
								if (values.includes(item.value)) {
									this.$set(item, 'checked', true)
								} else {
									this.$set(item, 'checked', false)
								}
							}
						}
					}
					console.log("设备巡检工单步骤=" + JSON.stringify(this.myData));
					console.log(JSON.stringify("当前文件uuid=" + this.fileUuid));
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			// 日期控件操作
			bindDateChange(e, index) {
				this.myData[index].csz = e.target.value;
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
		}
	}
</script>

<style lang="scss">
	.equipment {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #F6F7F8;
	}

	.info-box {
		margin: 12px 8px 0;
		border-radius: 6px;
		// overflow: hidden;
		margin-bottom: 16px;
		background-color: #ffffff;
		box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);

		.info {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
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
	}

	.breakdown-box {
		// padding-top: 16px;
		text-align: center;
		font-size: 14px;
		color: #FA7268;

		.text {
			border-bottom: 1px solid #FA7268;
		}
	}

	.bottom-box {
		// position: relative;
		// bottom: 0;
		padding: 16px 0 24px;
		margin-top: 20px;
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
</style>
