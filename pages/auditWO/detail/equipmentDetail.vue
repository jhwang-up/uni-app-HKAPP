<template>
	<view>
		<view class="info-box">
			<block v-for="(item,index) in myData">
				<!-- 如果是wbk 则还需要继续分为三类 -->
				<!-- 在下面增加专用的事件做判断 -->
				<view v-if="item.cslx==='wbk'" class="info info-text">
					<text class="left">{{item.xjcs}}:</text>
					<text class="right">{{item.csz}}</text>
				</view>

				<view v-if="item.cslx==='dwbk'" class="info info-textarea">
					<text class="left">{{item.xjcs}}:</text>
					<textarea class="textarea" v-model="item.csz" disabled="true" auto-height="true" />
				</view>

				<view v-if="item.cslx==='sjkj'" class="info info-text">
					<text class="left">{{item.xjcs}}:</text>
					<text class="right">{{item.csz}}</text>
				</view>

				<!-- 下拉框 -->
				<view v-if="item.cslx==='xlk'" class="info info-text">
					<text class="left">{{item.xjcs}}:</text>
					<text class="right">{{item.csz}}</text>
				</view>

				<!-- 单选框 -->
				<view v-if="item.cslx==='dxk'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<radio-group>
						<label class="uni-list-cell uni-list-cell-pd" v-for="(obj, index) in item.csxzArray"
							:key="obj.value">
							<view>
								<radio disabled="true" :value="obj.value" :checked="obj.value === item.csz" />
							</view>
							<view>{{obj.name}}</view>
						</label>
					</radio-group>
				</view>

				<!-- 复选 -->
				<view v-if="item.cslx==='dxks'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<checkbox-group>
						<label class="uni-list-cell uni-list-cell-pd" v-for="obj in item.csxzArray" :key="obj.value">
							<view>
								<checkbox disabled="true" :value="obj.value" :checked="obj.checked" />
							</view>
							<view>{{obj.name}}</view>
						</label>
					</checkbox-group>
				</view>

				<!-- 定位坐标 -->
				<view v-if="item.cslx==='wzzb'" class="info info-location">
					<text class="left">定位坐标:</text>
					<view class="right">
						<text class="coordinate">{{item.wzzb}}</text>
						<!-- <text @click="getLocation()" class="btn btn-location">定位</text> -->
					</view>
				</view>

				<view v-if="item.cslx==='wzzb'" class="info">
					<text class="left">定位地址:</text>
					<view class="right">
						<text class="address">{{item.wzdz}}</text>
					</view>
				</view>

				<view v-if="item.cslx==='wzzb'" class="info info-textarea">
					<text class="left">实际地址:</text>
					<textarea class="textarea" v-model="item.csz" auto-height="true" disabled='true' placeholder="请输入实际地址" />
				</view>

				<!-- 图片上传 -->
				<view v-if="item.cslx==='tp'" class="info">
					<text class="left">{{item.xjcs}}:</text>
					<my-img-upload :uuid="item.csz" :isOnlyRead="isOnlyRead" :index="index"></my-img-upload>
				</view>
				<!-- 图片多个的渲染，imgList可以在getData中先获取图片列表，然后赋值每个item的imgList的值， -->
				<!-- 每个的tpuuid不一样啊，在何处生成，可以赋值给item储存，在chooseImg的时候item穿进去，即可获得uuid -->
				<!-- 如果是封装的组件，那么弹出的uuid如何区别？可以把序号传进去，到时候传出来；其他场景要是也使用呢？？ -->
				<!-- 如果是用不到多个上传，则可以在方法里不处理传出来的index -->
			</block>
		</view>
		<!-- 文件上传 -->
		<my-file-table v-if="isFileUpload" :isOnlyRead="isOnlyRead" :uuid="fileUuid"></my-file-table>

		<!-- 保存和提交 按钮 -->
		<view class="bottom-box">
			<view class="operation-box btn-box">
				<button @click="back()" size="mini" class="btn" type="default">返回</button>
			</view>
		</view>

	</view>
</template>

<script>
	// 输入框类别测试 10min 测试复制功能会出错吗
	// 得添加一些propos，来表示详情的文件列表和图片列表
	/*
		0. 测一下多个下拉框；多个日期控件；多个单选；多个单选；多个上传图片；多个的话 可以尝试index传入change事件
		1. 文件上传是需要检测到类型里有文件时，就在最下面展示一个文件上传的组件（自己封装）
		3a. 如何先实现上传文件组件呢/？可以先自己生成uuid 存一下，然后再取出来渲染 3h
		5. 多个组件使用同一个方法？
		6. 实验一下，mock一个数组，然后循环出来俩组件，然后绑定同一个方法，可以再添加一个属性，传入父组件的this，（函数带入参）
		然后在子组件内部生成新的uuid 然后在子组件内部将生成的uuid传进传入的函数，在getFileUuid中打印一下父级的此uuid变了没
		
		
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
				currentDwzb: '', // 定位坐标 因为后台限制了只会有一套地址定位控件 所以可以单独拎出来
				currentDwdz: '', // 定位地址 因为后台限制了只会有一套地址定位控件 所以可以单独拎出来
				isOnlyRead: true, // 是否只读组件
			}
		},
		onLoad(options) {
			console.log(JSON.stringify(options))
			this.sbzj = options.bzbh;
			this.rwzj = options.zj;
			this.getData();
		},
		methods: {
			back() {
				uni.navigateBack({});
			},
			// 获取设备巡检工单步骤数据
			getData() {
				getEquipmentContent({
					sbzj: this.sbzj,
					rwzj: this.rwzj
				}).then(res => {
					this.myData = res.datas;
					for (let item of this.myData) {
						// 位置坐标处理
						if (item.cslx === 'wzzb') {
							// this.currentDwdz=item.
						}
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
							var items = (item.csxzArray || []),
								values = (item.csz || "").split(',');
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
		}
	}
</script>

<style lang="scss">
	.info-box {
		margin: 0 8px;
		border-radius: 6px;
		// overflow: hidden;
		box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
		margin-bottom: 16px;
		background-color: #ffffff;

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
</style>
