import store from '../../store'
import _app from '@/common/request/app.js';
import interfaces from '@/common/request/interfaces.js';
import {
	mock
} from './mock.js';

export function QSRequest({
	urlField,
	sendData,
	checkType,
	field,
	check,
	filterFn,
	hasLoading
} = {}) {
	return new Promise((resolve, reject) => {
		if (hasLoading) _app.showLoading('请稍候');
		const hasFilterFn = _app.isFn(filterFn);
		const url = getField(interfaces, urlField);
		//为了便于示例
		let fn;
		// if(mock) {
		// 	fn = mock;
		// }else{
		fn = request;
		// }
		_app.log('准备访问接口:' + JSON.stringify(sendData));
		fn({
			url,
			...sendData
		}).then(res => {
			_app.log('访问接口成功:' + JSON.stringify(res));
			console.log('访问接口成功:' + JSON.stringify(sendData));
			if (hasLoading) _app.hideLoading();
			let checkResult = true;
			// 不检查返回的数据健壮性～～～～～～～～～～～～～～～～～～～～～～～～～？？？？
			// if (check !== false) {
			// 	console.log(11111);
			// 	checkResult = checkRes({
			// 		res,
			// 		type: checkType
			// 	})
			// }

			if (checkResult) {
				const data = getField(res, field);
				// resolve(hasFilterFn ? filterFn(data) : data);
				// 注释掉了分页的各种判断检测～～～～～～～～～～～～～～～～～～～～？？？？？
				resolve(res);
			} else {
				reject(res);
			}

		}).catch(err => {
			if (hasLoading) _app.hideLoading();
			reject(err);
		})
	})
}

function checkRes(obj) { //对于返回数据的健壮性判断
	let {
		res,
		type
	} = obj;
	if (!res) return false;
	type = type !== undefined ? type : 'msgAndCode';
	switch (type) {
		case 'msgAndCode':
			if (res) {
				if (res.msg === 'success' && res.code === 0) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		default:
			return false;
			break;
	}
}

export function getField(data, fields, pattern) { //字符串.获取指定字段数据
	if (!fields) return data;
	var arr = fields.split('.');
	var key = arr.shift();
	var value = data[key];

	if (value == null) {
		return value;
	} else if (arr.length == 0) {
		if (!pattern) return value;
		var type = Object.prototype.toString.call(value).replace('[object ', '').replace(']', '');
		if (pattern === true) {
			return type;
		} else if (!pattern) {
			return value;
		} else {
			return type == pattern;
		}
	}

	var result = getField(value, arr.join('.'), pattern);
	return result;
}

function request(obj) {
	// console.log(JSON.stringify(obj))
	let _this = this;
	return new Promise((resolve, reject) => {
		try {
			const config = {
				header: {}
			};
			if (obj.contentType === 'json') {
				config.header['Content-type'] = 'application/json'
			} else {
				config.header['Content-type'] = 'application/x-www-form-urlencoded'
			}
			if (!obj.method) {
				obj.method = 'POST'
			}
			// console.log(
			// 	`访问接口 url: ${obj.url}, data: ${JSON.stringify(obj.data)}, method: ${obj.method}, header: ${JSON.stringify(config.header)}`
			// );

			// 在这里看下请求的路径是咋判断切换的～～～～～～～～～～～～～～～～～
			obj.url = `${store.state.hostUrl}/com.hbky.basedata.HKDY.queryWDGZ.biz.ext`;
			// 这里改为包含关注
			obj.data = {
				type: obj.tabId.indexOf('关注') !== -1 ? '' : 1,
				userid: obj.userId !=='undefined' ? obj.userId : ''
			};
			console.log("当前类别～～～～" + JSON.stringify(obj.data));
			uni.request({
				...obj,
				...config,
				success(res) {
					// if (res.statusCode === 200) {
					resolve(res);
					// }else{
					// 	reject(res);
					// }
				},
				fail(err) {
					reject(err)
				}
			});
		} catch (e) {
			//TODO handle the exception
			reject(e)
		}
	})
}
