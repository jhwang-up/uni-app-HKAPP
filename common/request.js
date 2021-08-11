//把配置项单独处理
import store from '../store'
// import store from '/store/index.js'; //vuex  
let server_url = store.state.hostUrl; //请求地址
// let token = ' ';  凭证
// process.env.NODE_ENV === 'development' ? '192.168.0.1' : 'http://***/api' ; //环境配置
function service(options = {}) {
	// store.state.token && (token = store.state.token); //从vuex中获取登录凭证
	options.url = `${server_url}${options.url}`;
	console.log(`发起请求的参数们：${JSON.stringify(options)}`)
	//配置请求头
	options.header = {
		// 'content-type': 'application/x-www-form-urlencoded',
		// 'accessToken': `${token}` //Bearer 
	};

	return new Promise((resolve, reject) => {
		//成功
		options.success = (res) => {
			if (Number(res.statusCode) == 200) { //请求成功
				// console.log(JSON.stringify(res.data))
				// 登录失效时
				if (res.data && res.data.exception && res.data.exception.code === '12101001') {
					uni.showToast({
						icon: 'none',
						title: `登陆失效或者用户未登陆，请重新登录`
					});
					// 登陆失效时，执行退出逻辑
					setTimeout(() => {
						store.commit('logout');
					}, 1500);
					reject(res.data); //错误
					return;
				}
				resolve(res.data);
			} else {
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.data}`
				});
				reject(res.data.msg); //错误
			}

		}
		//错误
		options.fail = (err) => {
			reject(err); //错误
		}
		uni.request(options);

	});
}

export default service;
