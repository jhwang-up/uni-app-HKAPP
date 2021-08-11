<template>
	<view class="container">
		<!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<uni-link :href="href" :text="href"></uni-link> -->
		<view v-if="isShowLogin" class="uni-btn-v uni- uni-common-mt">
			<view class="logo-box">
				<image class="logo-img" src="../../static/img/index/logo.png" mode=""></image>
			</view>
			<label for="userId">账号</label>
			<input class="account-input" name="userId" type="text" placeholder="请输入账号" v-model="userId" />
			<label for="cpassword">密码</label>
			<input class="password-input" name="cpassword" type="password" placeholder="请输入密码"
				@input="inputChange($event)" />
			<button class="login-btn" type="primary" @click="tologin()">
				立即登录
			</button>
		</view>
		<view v-if="!isShowLogin" class="loading">
			<view>loading...</view>
		</view>
	</view>
</template>

<script>
	var longyoungAutoLauncher;
	import utils from '@/common/utils.js'
	import {
		login,
		getJob
	} from '../../common/api.js'; //引入需要的api
	export default {
		data() {
			return {
				isShowLogin: false,
				userId: '',
				cpassword: '',
			}
		},
		// computed: {
		// 	hasLogin() {
		// 		return this.$store.state.hasLogin
		// 	}
		// },
		onShow() {
			// 读取用户登陆状态 判断是否直接跳转首页 
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					console.log('读取的数据= ' + JSON.stringify(res.data));
					if (res.data && res.data.hasLogin === true) {
						// 赋值vuex
						this.$store.commit('login', res.data);
						utils.getAvatar().then(res => {
							this.$store.commit('setAvatar', res);
							this.isShowLogin = false;
							uni.navigateTo({
								url: '/pages/main/main'
							});
						})

					} else {
						// 未登录则展示登陆页面
						this.isShowLogin = true;
					}
				},
				fail: () => {
					console.log('读取的数据= fail ');
					// 未登录则展示登陆页面
					this.isShowLogin = true;
				}
			});
		},
		methods: {
			inputChange(evt) {
				this.cpassword = evt.target.value;
				console.log(JSON.stringify(this.cpassword));
			},
			tologin() {
				login({
					userId: this.userId, // 290674
					cpassword: this.cpassword // 000000
				}).then(data => {
					console.log('用户信息：' + JSON.stringify(data))
					if (data.flag === true) {
						console.log('用户信息：' + JSON.stringify(data))
						// 接口可能返回的没有姓名、部门等信息，做以下补查接口规避
						if (!data.userName || !data.mainDeptName || !data.deptName) {
							getJob({
								userid: this.userId
							}).then(res => {
								console.log(JSON.stringify(res));
								let temp = {
									userName: res.data && res.data.a00100n,
									mainDeptName: res.mainDeptName,
									deptName: res.deptName,
								}
								this.dealLogin(temp);
							}).catch(err => {
								uni.showToast({
									title: `异常，请稍后重试`,
									icon: 'none'
								});
							})
						} else {
							this.dealLogin(data);
						}

					} else {
						uni.showToast({
							title: `账户或密码错误`,
							icon: 'none'
						})
					}
				});
			},
			dealLogin(data) {
				utils.getAvatar(this.userId).then(res => {
					// console.log("头像～～～～～～～～ "+JSON.stringify(res));
					// 存入姓名和部门信息，到obj
					let obj = {
						userId: this.userId,
						userName: data.userName,
						mainDeptName: data.mainDeptName,
						deptName: data.deptName,
						hasLogin: true,
					}
					// 这块默认存入成功？？?
					this.$store.commit('login', obj);
					this.$store.commit('setAvatar', res);
					uni.navigateTo({
						url: '/pages/main/main'
					});
				});
			},

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 50px 55px 0;
		font-size: 14px;

		.logo-box {
			width: 73px;
			height: 73px;
			margin: 65px auto 50px;
			// background-color: #387CF9;
			border-radius: 10px;

			.logo-img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.account-input {
		padding: 6px 20px;
		border-bottom: 1px solid #F4F4F4;
		padding-left: 0;
		margin-bottom: 18px;
	}

	.password-input {
		padding: 6px 20px;
		border-bottom: 1px solid #F4F4F4;
		padding-left: 0;
	}

	.login-btn {
		background-color: #387CF9;
		margin-top: 40px;
		height: 35px;
		border-radius: 70px;
		line-height: 35px;
		font-size: 13px;
	}

	.loading {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
