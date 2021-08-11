import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	// http://www.hbcoal.cn:8115/com.hbky.basedata.HKDY.queryHKDYSPApp.biz.ext?page=3&limit=6
	// http://www.hbcoal.cn:8115
	state: {
		hostUrl: 'http://www.hbcoal.cn:8115',
		hasLogin: false,
		userInfo: {},
		avatar: {},
	},
	mutations: {
		setAvatar(state, obj) {
			console.log('设置头像全局变量'+JSON.stringify(obj));
			state.avatar = obj;
		},
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({ //缓存用户登陆状态
				key: 'userInfo',
				data: provider
			})
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({
				key: 'userInfo',
				success: function(res) {
					uni.navigateTo({
						url: '/pages/index/index'
					});
				},
				fail: function(res) {
					uni.navigateTo({
						url: '/pages/index/index'
					});
					console.log(JSON.stringify(res));
				}
			});
		}
	},
	actions: {

	}
})

export default store
