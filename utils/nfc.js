// 包路径
const package_NdefRecord = 'android.nfc.NdefRecord';
const package_NdefMessage = 'android.nfc.NdefMessage';
const package_TECH_DISCOVERED = 'android.nfc.action.TECH_DISCOVERED';
const package_Intent = 'android.content.Intent';
const package_Activity = 'android.app.Activity';
const package_PendingIntent = 'android.app.PendingIntent';
const package_IntentFilter = 'android.content.IntentFilter';
const package_NfcAdapter = 'android.nfc.NfcAdapter';
const package_Ndef = 'android.nfc.tech.Ndef';
const package_NdefFormatable = 'android.nfc.tech.NdefFormatable';
const package_Parcelable = 'android.os.Parcelable';
const package_String = 'java.lang.String';

import {
	updateAndBindNFC,
} from '@/common/api.js'; //引入需要的api  

let NfcAdapter;
let NdefRecord;
let NdefMessage;
let readyWriteData = false;
let readyRead = false;
let noNFC = false;
let techListsArray = [
	['android.nfc.tech.IsoDep'],
	['android.nfc.tech.NfcA'],
	['android.nfc.tech.NfcB'],
	['android.nfc.tech.NfcF'],
	['android.nfc.tech.Nfcf'],
	['android.nfc.tech.NfcV'],
	['android.nfc.tech.NdefFormatable'],
	['android.nfc.tech.MifareClassi'],
	['android.nfc.tech.MifareUltralight']
];
// 要写入的数据
// let text = '{id:123,name:nfc,stie:cssmini.com}';
let text = '';

let readResult = '';
let nfcId = '';
// 初始化前，需传入的设备主键
let zj = '';

export default {
	init: function(data) {
		zj = data;
	},
	listenNFCStatus: function() {
		let that = this;
		try {
			let main = plus.android.runtimeMainActivity();
			let Intent = plus.android.importClass('android.content.Intent');
			let Activity = plus.android.importClass('android.app.Activity');
			let PendingIntent = plus.android.importClass('android.app.PendingIntent');
			let IntentFilter = plus.android.importClass('android.content.IntentFilter');
			NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');
			let nfcAdapter = NfcAdapter.getDefaultAdapter(main);

			if (nfcAdapter == null) {
				uni.showToast({
					title: '设备不支持NFC！',
					icon: 'none'
				})
				noNFC = true;
				return;
			}

			if (!nfcAdapter.isEnabled()) {
				uni.showToast({
					title: '请在系统设置中先启用NFC功能！',
					icon: 'none'
				});
				noNFC = true;
				return;
			} else {
				noNFC = false;
			}

			let intent = new Intent(main, main.getClass());
			intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
			let pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);
			let ndef = new IntentFilter("android.nfc.action.TECH_DISCOVERED");
			ndef.addDataType("*/*");
			let intentFiltersArray = [ndef];
			// plus.runtime.arguments
			plus.globalEvent.addEventListener('newintent', function() {
				console.log('newintent running');
				// 监听 NFC
				setTimeout(function() {
					return that.nfcRuning()
				}, 1000)
				// setTimeout(that.nfcRuning(), 1000);
			});
			plus.globalEvent.addEventListener('pause', function(e) {
				console.log('pause running');
				if (nfcAdapter) {
					//关闭前台调度系统
					//恢复默认状态
					nfcAdapter.disableForegroundDispatch(main);
				}
			});
			plus.globalEvent.addEventListener('resume', function(e) {
				console.log('resume running');
				if (nfcAdapter) {
					//开启前台调度系统
					nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray,
						techListsArray);
				}
			});
			nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);
		} catch (e) {
			console.error(e);
		}
	},
	stopListenNFCStatus: function() {
		try {
			plus.globalEvent.removeEventListener('newintent');
			plus.globalEvent.removeEventListener('pause');
			plus.globalEvent.removeEventListener('resume');
		} catch (e) {
			console.log("error 取消监听NFC～～～～～～=====" + e);
			//TODO handle the exception
		}
		console.log('取消监听NFC～～～～～～');
	},
	nfcRuning: function() {
		NdefRecord = plus.android.importClass("android.nfc.NdefRecord");
		NdefMessage = plus.android.importClass("android.nfc.NdefMessage");
		let main = plus.android.runtimeMainActivity();
		let intent = main.getIntent();
		let that = this;

		console.log("action type:" + readyRead + intent.getAction());

		if (package_TECH_DISCOVERED == intent.getAction()) {
			if (readyWriteData) {
				that.write(intent);
				readyWriteData = false;
			} else if (readyRead) {
				that.read(intent);
				// ？？？？？需要在离开页面时重置false
				// readyRead = false;
			}
		}
	},
	write(intent) {
		try {
			toast('请勿移开标签 正在写入...');
			console.log("text=" + text);

			let textBytes = plus.android.invoke(text, "getBytes");
			// image/jpeg text/plain  
			let textRecord = new NdefRecord(NdefRecord.TNF_MIME_MEDIA,
				plus.android.invoke("text/plain", "getBytes"),
				plus.android.invoke("", "getBytes"), textBytes);
			let message = new NdefMessage([textRecord]);
			let Ndef = plus.android.importClass('android.nfc.tech.Ndef');
			let NdefFormatable = plus.android.importClass('android.nfc.tech.NdefFormatable');
			let tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
			let ndef = Ndef.get(tag);

			if (ndef != null) {
				// 待写入的数据长度
				let size = message.toByteArray().length;
				ndef.connect();
				if (!ndef.isWritable()) {
					toast('tag不允许写入！');
					return;
				}
				if (ndef.getMaxSize() < size) {
					toast('文件大小超出容量！');
					return;
				}
				ndef.writeNdefMessage(message);
				toast('写入数据成功！');
				return;
			} else {
				let format = NdefFormatable.get(tag);
				if (format != null) {
					try {
						format.connect();
						format.format(message);
						toast('格式化tag并且写入message');
						return;
					} catch (e) {
						toast('格式化tag失败.');
						return;
					}
				} else {
					toast('Tag不支持NDEF');
					return;
				}
			}
		} catch (e) {
			toast('写入失败');
			console.log("error=" + e);
		}

	},
	read(intent) {
		// toast('请勿移开标签正在读取数据');
		let that = this;
		// NFC id
		let bytesId = intent.getByteArrayExtra(NfcAdapter.EXTRA_ID);
		let nfc_id = that.byteArrayToHexString(bytesId);
		console.log('nfc_id:', nfc_id);
		let Parcelable = plus.android.importClass("android.os.Parcelable");
		// let rawmsgs = intent.getParcelableArrayExtra("android.nfc.extra.NDEF_MESSAGES");
		//let rawmsgs = intent.getParcelableArrayExtra();

		var rawmsgs = intent.getParcelableArrayExtra(NfcAdapter.EXTRA_NDEF_MESSAGES);

		if (rawmsgs != null && rawmsgs.length > 0) {
			let records = rawmsgs[0].getRecords();
			let result = records[0].getPayload();
			let data = plus.android.newObject("java.lang.String", result);
			toast('NFC_id：' + nfc_id + '， NFC_data：' + data);

			console.log('NFC 数据：', data);
			readResult = data;
			nfcId = nfc_id;
		} else if (nfc_id) {
			// toast('NFC_id：' + nfc_id);
			if(!zj){	// 如果传入的zj为空，则表示是读取设备信息,携带nfcId跳转到设备详情页
			    uni.navigateTo({
			    	url: `/pages/deviceInfo/deviceInfo?nfcCode=${nfc_id}`
			    });			
			} else if (zj) {   // 如果传入了zj说明是绑定NFC卡
				// 通过在nfc页面注入zj，在此处js增加一个接受主键到方法
				updateAndBindNFC({
					zj: zj,
					nfcid: nfc_id
				}).then(res => {
					console.log(JSON.stringify(res))
					if (res.f === 1) {
						uni.showToast({
							title: '绑定成功',
							icon: 'none'
						})
					} else if (res.f === 2) {
						uni.showToast({
							title: '抱歉，此卡已绑其他设备',
							icon: 'none'
						})
					} else if (res.f === 3) {
						uni.showToast({
							title: '已与此设备绑定',
							icon: 'none'
						})
					}
				}).catch(err => {
					uni.showToast({
						title: `异常，请稍后重试`,
						icon: 'none'
					});
				})
			}
		} else {
			toast('没有读取到数据');
		}
	},
	byteArrayToHexString: function(inarray) { // converts byte arrays to string  
		let i, j, inn;
		let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		let out = "";

		for (j = 0; j < inarray.length; ++j) {
			inn = inarray[j] & 0xff;
			i = (inn >>> 4) & 0x0f;
			out += hex[i];
			i = inn & 0x0f;
			out += hex[i];
		}
		return out;
	},
	writeData: function(nfcData) {
		if (noNFC) {
			toast('请检查设备是否支持并开启 NFC 功能！');
			return;
		}
		// 监听事件，触发条件
		readyWriteData = true;
		text = JSON.stringify(nfcData);
		toast('请将NFC标签靠近！');
	},
	readData: function() {
		if (noNFC) {
			toast('请检查设备是否支持并开启 NFC 功能！');
			return;
		}
		// 监听事件，触发条件
		readyRead = true;
		// toast('请将NFC标签靠近！');
	},
	getNFCData: function() {
		return {
			id: nfcId,
			data: readResult
		};
	},
	stopNfc: function() {
		readyRead = false;
	}
}

function toast(content) {
	uni.showToast({
		title: content,
		icon: 'none'
	})
}
