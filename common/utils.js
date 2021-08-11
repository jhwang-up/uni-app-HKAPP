import store from '../store'
import {
	getUserInfo,
	getAttachmentByMid,
} from '@/common/api.js'; //引入需要的api 
let utils = {
	setLocalStorage(key, value) {
		return new Promise((resolve, reject) => {
			try {
				if (Object.prototype.toString.call(value) === '[object Object]') {
					value = JSON.stringify(value);
				}
				uni.setStorage({
					key: key,
					data: value,
					success: () => {
						resolve(200);
					},
					fail: () => {
						reject(-1);
					}
				});
			} catch (e) {
				reject(e)
			}

		})
	},
	getLocalStorage(key) {
		return new Promise((resolve, reject) => {
			uni.getStorage({
				key: key,
				success: (res) => {
					resolve(res.data);
				},
				fail: () => {
					reject(-1);
				}
			});
		})
	},
	// 处理树形结构
	translateDataToTree(data) {
		let start=new Date().getTime();
		// 先处理name为label字段；因为插件使用的是label展示
		for (let s of data) {
			s.label = s.name;
		}
		// 先筛选顶级层级父级, 如果一个parentid 在所有里面的id都取不到 则为顶级父级
		let parents = [];
		for (let a of data) {
			let temp = a.parentid;
			let isTopNode = true;
			for (let b of data) {
				if (temp === b.id) {
					isTopNode = false;
				}
			}
			if (isTopNode) {
				parents.push(a);
			}
		}
		// let parents = data.filter(value => value.parentid == 'undefined' || value.parentid == null)
		console.log(JSON.stringify(parents));
		let children = data.filter(value => value.parentid !== 'undefined' && value.parentid != null)
		// console.log(JSON.stringify(children));
		
		console.log(JSON.stringify(parents));
		// 默认取第一个为顶级父级 且判断一下是否该值的parentid用indexof取不到（在剔除了首项之后 ）？？？～～～～～～
		let translator = (parents, children) => {
			parents.forEach((parent) => {
				children.forEach((current, index) => {
					if (current.parentid === parent.id) {
						let temp = JSON.parse(JSON.stringify(children))
						temp.splice(index, 1)
						translator([current], temp)
						typeof parent.children !== 'undefined' ? parent.children.push(
							current) : parent.children = [current]
					}
				})
			})
		}
		translator(parents, children)
		let  end = new Date().getTime()
		console.log(end-start);
		return parents
	},
	// 执行popup-scroll组件的归位方法
	popupScrollHoming(obj) {
		// 执行组件到归位方法
		setTimeout(() => {
			obj.touchStart();
			setTimeout(() => {
				obj.homing();
			}, 200);
		}, 200);
	},
	// 字节B转化成KB，MB，GB
	dealSize(limit) {
		var size = "";
		if (limit < 0.1 * 1024) { //小于0.1KB，则转化成B
			size = limit.toFixed(2) + "B"
		} else if (limit < 0.1 * 1024 * 1024) { //小于0.1MB，则转化成KB
			size = (limit / 1024).toFixed(2) + "KB"
		} else if (limit < 0.1 * 1024 * 1024 * 1024) { //小于0.1GB，则转化成MB
			size = (limit / (1024 * 1024)).toFixed(2) + "MB"
		} else { //其他转化成GB
			size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
		}

		var sizeStr = size + ""; //转成字符串
		var index = sizeStr.indexOf("."); //获取小数点处的索引
		var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
		if (dou == "00") { //判断后两位是否为00，如果是则删除00               
			return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
		}
		return size;
	},
	dealInternetUrl(filepath, filename, userId) {
		return `http://www.hbcoal.cn:8999/document/check?fileId=${filepath}&userId=${userId?userId:store.state.userInfo.userId}&attname=${filename}`;
	},
	// 获取头像地址
	getAvatar(userId) {
		return new Promise((resolve, reject) => {
			// 不传参数，查询本人信息
			let tempUrl = {
				url: '../../static/img/mine/user.png',
				mid: ''
			};
			getUserInfo().then(res => {
				console.log(JSON.stringify(res));
				if (res.data.txmid) {
					tempUrl.mid = res.data.txmid;
					// 根据头像mid获取头像地址 拼接地址
					getAttachmentByMid({
						mid: res.data.txmid
					}).then(data => {
						console.log(JSON.stringify(data));
						tempUrl.url = this.dealInternetUrl(data.spupload.filepath, data
							.spupload.filename, userId);
						resolve(tempUrl);
					}).catch(err => {
						resolve(tempUrl);
					})
				}else{
					resolve(tempUrl);
				}
			}).catch(err => {
				resolve(tempUrl);
			})
		})

	},
	// 查漏补缺式获取头像地址(要在登陆之后调用，否则store.state.userInfo.userId还未赋值)
	reallyGetAvatar() {
		return new Promise((resolve, reject) => {
			// 如果登陆时，获取头像失败了，则此处单独获取；
			if (!store.state.avatar.url) {
				this.getAvatar().then(res => {
					store.commit('setAvatar', res);
					resolve(res);
				});
			} else {
				console.log('不用重新获取啦 头像');
				resolve(store.state.avatar);
			}
		})

	},
}
module.exports = utils;
