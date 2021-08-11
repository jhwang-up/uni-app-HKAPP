<template>
	<view class="produce">
		<uni-transition ref="ani" custom-class="transition" :mode-class="'fade'" :styles="styles" :show="show">
			<span class="tree-box">
				<uni-data-menu :localdata="treeData" :unique-opened="false" v-model="activeUrl"
					active-text-color="#007aff" @select="select"></uni-data-menu>
			</span>
		</uni-transition>
		<view v-show="!show" @click="showTree" class="">
			菜单
		</view>
	</view>
</template>

<script>
	/**
	 * -1. 搞一个自定义的bar ，然后把所有字体颜色都加上#333333；
	 * 0. 优化登录页样式，加上按钮阴影以及看下是否有登陆模板可以使用，或者增加动效；
	 * 风格上面，这块如果做好了，可以其他地方照搬，要不就顶部给蓝色渐变色；菜单展示出来时一定加上黑色莫泰层
	 * 1. 选个合适的icon，作为展示菜单的icon，然后展示带蓝色柱子的总览信息；
	 * 2. 后面应该不会有很多类别，所以使用unimenu这个组件作为侧边栏吧；
	 * 3. 处理侧边栏数组数据，20min，搞定侧边栏动画10min；
	 * 3a. 搞定侧边icon；10min
	 * 5. 数据拿到之后，就可以把处理接口数据，分析一波20min;
	 * 6. 卡片布局设计30min；顶部放一个tab，然后把基本信息和其他信息分开俩，以及文件列表；
	 */
	import {
		getProduceSummaryInfo, // 生产系统查询总览展示接口
		getProduceSummaryFiles, // 生产系统总览文档接口
		getBreakdownSystem, // 故障工单生产系统选择树数据
	} from '@/common/api.js'; // 引入需要的api 
	import utils from '@/common/utils.js'
	export default {
		data() {
			return {
				treeData: [],
				activeUrl: '',
				show: true,
				styles:{}
			}
		},
		onLoad() {},
		onShow() {
			this.getTree();
		},
		methods: {
			showTree(){
				this.show = !this.show;
			},
			select(e) {
				console.log('----select value:', JSON.stringify(e))
				this.getData(e.menu_id);
				this.show = !this.show;
				this.runToLeft();
				// 如果是show 是true 则点击后再隐藏
				// 
			},
			runToLeft() {
				this.$refs.ani.step(
					{
						translateX: '-100px'
					},
					{
						timingFunction: 'ease-in',
						duration: 100
					}
				)
				console.log('执行动画～～～～～～～～～～～～～～～～～～');
				this.$refs.ani.run();
			},
			// 搞完之后再把icon替换了，然后再加上左侧隐藏动画，20min
			// 然后先能点击子元素 再请求一下右侧的数据，10min

			// 动画需要把
			getTree() {
				getBreakdownSystem().then(res => {
					console.log('获取树形数据==' + JSON.stringify(res));
					let tempArray = [];
					for (let item of res.systemInfo) {
						let temp = {};
						temp.id = item.flbm;
						temp.menu_id = item.flbm;
						temp.parentid = item.fjdid;
						temp.label = item.flmc;
						temp.name = item.flmc;
						temp.text = item.flmc;
						temp.value = item.flmc;
						temp.icon = 'uni-icons-list'; // 待使用递归赋值icon
						tempArray.push(temp);
					}
					this.treeData = utils.translateDataToTree(tempArray);
					console.log(JSON.stringify(this.treeData));
					// 还需要把数组给整到
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			},
			getData(data) {
				getProduceSummaryInfo({
					bm: data
				}).then(res => {
					console.log(JSON.stringify(res));
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.produce {
		min-height: 100vh;
		background-color: $uni-bg-color-grey;

		.tree-box {
			// box-shadow: inset 0px 15px 15px -15px #000000;
			width: auto;
			display: inline-block;
			min-height: 100vh;
			background-color: #ffffff;
		}
	}
</style>
