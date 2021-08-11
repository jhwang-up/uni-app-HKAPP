import request from './request.js'
export function login(data) {
	return request({
		url: '/sbjsgl/base.lcdd.loginVerification.biz.ext',
		method: 'GET',
		data
	})
}
// 获取用户信息
export function getJob(data) {
	return request({
		url: '/com.hbky.basedata.ProfessionalLedger.gwkbUser.biz.ext',
		method: 'GET',
		data
	})
}
// 获取运行中的工单
export function getWO(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.queryWorksOrderPerson.biz.ext',
		method: 'GET',
		data
	})
}
// 获取生产系统执行步骤内容
export function getProduceWorkContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.queryWorkContent.biz.ext',
		method: 'GET',
		data
	})
}
// 保存生产系统工单步骤 
export function saveProduceWorkContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.InsertWorkerContent.biz.ext',
		method: 'POST',
		data
	})
}
// 提交生产系统工单
export function submitProduceWorkContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.submitWorkOrder.biz.ext',
		method: 'POST',
		data
	})
}

// 生产系统工单审核人员树数据
export function getProduceWorkContentTree(data) {
	return request({
		url: '/com.hbky.basedata.ProfessionalLedger.querybdkqz.biz.ext',
		method: 'POST',
		data
	})
}
// ====================== 以下 通讯线路 ====================

// 获取通讯线路执行步骤内容
export function getLineContent(data) {
	return request({
		url: '/com.hbky.basedata.LineAccount.queryWorkContent.biz.ext',
		method: 'GET',
		data
	})
}

// 保存通讯线路工单步骤 
export function saveLineContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.InsertWorkerContent.biz.ext',
		method: 'POST',
		data
	})
}

// 提交通讯线路工单
export function submitLineContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.submitWorkOrder.biz.ext',
		method: 'POST',
		data
	})
}
// ====================== 以下 故障 =======================
// 获取故障维修人员_选择树数据
export function getBreakdownStaff(data) {
	return request({
		url: '/com.hbky.basedata.ProfessionalLedger.queryBjr.biz.ext',
		method: 'GET',
		data
	})
}

// 36.获取故障维修人员班组_选择树数据 		请求参数 maindeptid：单位或科区id（不传的话获取登录人所在单位id）
// 返回值 ：systemInfo：数据信息
export function getBreakdownStaffBZ(data) {
	return request({
		url: '/com.hbky.basedata.ProfessionalLedger.queryBjrBZ.biz.ext',
		method: 'GET',
		data
	})
}

// 38.故障工单生产系统选择树数据
export function getBreakdownSystem(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.queryAllSystemInfo.biz.ext',
		method: 'POST',
		data
	})
}

// 获取故障工单信息
export function getBreakdownContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.getFault.biz.ext',
		method: 'POST',
		data
	})
}

// 获取故障工单故障点数据
export function getBreakdownPointListContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.getMaintains.biz.ext',
		method: 'POST',
		data
	})
}

// 保存故障工单信息
export function saveBreakdownContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.saveFault.biz.ext',
		method: 'POST',
		data
	})
}

// 提交故障工单信息
export function submitBreakdownContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.saveFaultTj.biz.ext',
		method: 'POST',
		data
	})
}

// 获取故障点数据
export function getBreakdownPointContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.getMaintain.biz.ext',
		method: 'POST',
		data
	})
}

// 保存故障点数据
export function saveBreakdownPointContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.saveMaintain.biz.ext',
		method: 'POST',
		data
	})
}

// 删除故障点数据
export function deleteBreakdownPointContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.deleteMaintain.biz.ext',
		method: 'POST',
		data
	})
}

// 驳回故障工单
export function rejectBreakdownPointContent(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.saveFaultBh.biz.ext',
		method: 'POST',
		data
	})
}

// ========================================= 以下 机电隐患和机电基层隐患接口 ========================================
// 机电隐患工单查询
export function getElectromechanicalContent(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.queryYH.biz.ext',
		method: 'POST',
		data
	})
}

// 获取机电班队长_选择树数据
export function getElectromechanicalBdzTree(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.queryBjrbdz.biz.ext',
		method: 'POST',
		data
	})
}


// 获取机电整改人_选择树数据
export function getElectromechanicalZgrTree(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.queryBjrzgr.biz.ext',
		method: 'POST',
		data
	})
}

// 机电隐患工单科区长发布
export function releaseElectromechanical(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.fbyh.biz.ext',
		method: 'POST',
		data
	})
}


// 机电隐患班组长整改提交完成 
export function submitElectromechanical(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.zgyh.biz.ext',
		method: 'POST',
		data
	})
}

// 机电隐患工单阅办提交  短语： read over：审阅
export function readOverElectromechanical(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.createYHYB.biz.ext',
		method: 'POST',
		data
	})
}

// 获取隐患阅办人提交选择人数据_选择树数据
export function getElectromechanicalBjrTree(data) {
	return request({
		url: '/com.hbky.basedata.JDYH.queryBjr.biz.ext',
		method: 'POST',
		data
	})
}


// 机电基层隐患工单查询
export function getBaseElectromechanicalContent(data) {
	return request({
		url: '/com.hbky.basedata.JDYHJC.queryYH.biz.ext',
		method: 'POST',
		data
	})
}


// 机电基层隐患工单科区长发布
export function releaseBaseElectromechanical(data) {
	return request({
		url: '/com.hbky.basedata.JDYHJC.fbyh.biz.ext',
		method: 'POST',
		data
	})
}

// 机电基层隐患班组长整改提交完成
export function submitBaseElectromechanical(data) {
	return request({
		url: '/com.hbky.basedata.JDYHJC.zgyh.biz.ext',
		method: 'POST',
		data
	})
}

// ========================================= 以下 设备巡检 接口 ========================================

// 设备巡检工单步骤查询
export function getEquipmentContent(data) {
	return request({
		url: '/com.hbky.basedata.jdjssbxj.getPollingApp.biz.ext',
		method: 'POST',
		data
	})
}
// 设备巡检工单保存
export function saveEquipmentContent(data) {
	return request({
		url: '/com.hbky.basedata.jdjssbxj.saveBdCardSjzxApp.biz.ext',
		method: 'POST',
		data
	})
}
// 设备巡检工单提交
export function submitEquipmentContent(data) {
	return request({
		url: '/com.hbky.basedata.jdjssbxj.addBdCardSjzxApp.biz.ext',
		method: 'POST',
		data
	})
}
// ========================================= 以下 延期 和 延期审核 接口 ========================================
// 生产系统过期工单延期申请
export function delayProduceWorkContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.yqsqWorkOrder.biz.ext',
		method: 'GET',
		data
	})
}

// 生产系统过期工单延期审核
export function auditDelayProduceWorkContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.yqshWorkOrder.biz.ext',
		method: 'GET',
		data
	})
}

// 获取科区长人员_选择树数据  （可以通用，在故障维修和重修时也用到了？）
export function getProfessionalLedgerTree(data) {
	return request({
		url: '/com.hbky.basedata.ProfessionalLedger.querykqz.biz.ext',
		method: 'POST',
		data
	})
}

// 生产系统工单审核退回接口
export function rejectOrPassProduceWorkContent(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.checkSubmit.biz.ext',
		method: 'POST',
		data
	})
}
// 待做 线路隐患延期和审核

// ========================================= 以下 文件相关接口 ========================================
// 通过uuid查询文档图片列表
export function queryAttachementByUUID(data) {
	return request({
		url: '/com.lmkh.scgl.base.multiFileUploadBiz.queryAttachementByUUID.biz.ext',
		method: 'GET',
		data
	})
}

// 通过主键获取文档图片信息
export function getAttachmentByMid(data) {
	return request({
		url: '/com.lmkh.scgl.base.multiFileUploadBiz.getAttachmentByMid.biz.ext',
		method: 'GET',
		data
	})
}

// 持久化保存上传的文件
export function reallySaveFile(data) {
	return request({
		url: '/FileUpLoadByYearServlet',
		method: 'GET',
		data
	})
}

// 删除文件
export function deleteFile(data) {
	return request({
		url: '/FileUpLoadByYearServlet',
		method: 'GET',
		data
	})
}



//================================  视频相关  ====================================
// 49.淮矿抖音视频播放接口 首页获取视频列表接口
export function getVideos(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.querySPALL.biz.ext',
		method: 'POST',
		data
	})
}

// 视频发布修改接口
export function releaseVideo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.saveSPXX.biz.ext',
		method: 'POST',
		data
	})
}

// 视频删除接口
export function deleteVideo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.deleteSPXX.biz.ext',
		method: 'POST',
		data
	})
}

// 51.淮矿抖音我的视频（用户发布的视频）接口
export function myVideo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.queryUSERWDSP.biz.ext',
		method: 'POST',
		data
	})
}

// 50.淮矿抖音视频收藏接口
export function getLikeVideos(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.queryUSERSCSP.biz.ext',
		method: 'POST',
		data
	})
}

// 52.淮矿抖音是否收藏判断接口
export function isLikeVideo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.sfSCSP.biz.ext',
		method: 'POST',
		data
	})
}

// 54.淮矿抖音添加移除收藏接口
export function addOrDeleteLikeVideo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.addUSERSPSC.biz.ext',
		method: 'POST',
		data
	})
}

// 55.淮矿抖音修改头像接口  请求参数 ： mid 头像图片主键
export function editAvatar(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.saveYHTX.biz.ext',
		method: 'POST',
		data
	})
}

// 56.淮矿抖音用户信息查询接口 请求参数 ： userid 用户工号(string)（为空查询本人信息，传值为所传用户信息）
export function getUserInfo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.getYHXX.biz.ext',
		method: 'POST',
		data
	})
}

// 57.淮矿抖音用户记录已刷视频接口
export function hadSeen(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.YSSP.biz.ext',
		method: 'POST',
		data
	})
}

// 58.淮矿抖音视频类型接口
export function getVideoTypeList(data) {
	return request({
		url: '/com.hbky.bps.FunctionUtil.getDictByDictID.biz.ext',
		method: 'POST',
		data
	})
}


// 59.淮矿抖音我关注的人和关注我的人查询接口    		参数：type int类型（为空查询我关注的人，传值1为关注我的人）
export function getFansOrAttentionList(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.queryWDGZ.biz.ext',
		method: 'POST',
		data
	})
}

// 60.淮矿抖音关注用户取消关注接口    		请求参数 ： type 类型（为空关注用户，传值1为取消关注）
// Userid 关注（取消）人工号
export function attentionYesOrNo(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.YHGZQX.biz.ext',
		method: 'POST',
		data
	})
}

// 61.淮矿抖音搜索视频接口   		请求参数 ： page 页码，limit 条数，title 视频标签、视频简介、视频所属人姓名、时间模糊搜索，工号为精确搜索
export function searchVideos(data) {
	return request({
		url: '/com.hbky.basedata.HKDY.queryHKDYSPApp.biz.ext',
		method: 'POST',
		data
	})
}

// 74.设备信息（是否可看）接口    		请求参数 ： code:设备主键
export function getDeviceInfo(data) {
	return request({
		url: '/com.hbky.basedata.EquipmentLedger.querytycisf.biz.ext',
		method: 'POST',
		data
	})
}

// 83.生产系统查询总览展示接口	 		请求参数 ： bm:系统编码
// 返回值 ：data  所有参数值
// data1  系统信息
// data2  有层级的父节点
// data3  组成父节点 
// data4  组成子节点
export function getProduceSummaryInfo(data) {
	return request({
		url: '/com.hbky.basedata.SystemInfo.queryScxtZlCs.biz.ext',
		method: 'POST',
		data
	})
}

// 84.生产系统总览文档接口	 		请求参数 ： uuid:系统编码
// 返回值 ：uploadFiles:文档信息
export function getProduceSummaryFiles(data) {
	return request({
		url: '/com.lmkh.scgl.base.multiFileUploadBiz.queryScxtZlFile.biz.ext',
		method: 'POST',
		data
	})
}

// 88.更新设备NFC编号接口    		请求参数 ： zj:设备主键，nfcid：nfc编号
// 返回值 ：f:1绑定成功，f:2已绑定其他设备，f:3已绑定该设备
export function updateAndBindNFC(data) {
	return request({
		url: '/com.hbky.basedata.EquipmentLedger.updateBdCardNFCUUID.biz.ext',
		method: 'POST',
		data
	})
}

// 
// 89.通过NFC编码查设备信息（是否可看）接口			请求参数 ： code:nfc编码
// 返回值 ：f:0 设备不可看，f:2 nfc未绑定设备 ; bdcardinfo：设备信息
export function getDeviceInfoByNfc(data) {
	return request({
		url: '/com.hbky.basedata.EquipmentLedger.querytycisfNFC.biz.ext',
		method: 'POST',
		data
	})
}

// 90.通过技术编码查设备列表接口 	请求参数 ： page:页码，limit:条数，lbbm:技术类别编码，sbmc:设备名称
export function getDeviceList(data) {
	return request({
		url: '/com.hbky.basedata.EquipmentLedger.queryAllBasicJCAPP.biz.ext',
		method: 'POST',
		data
	})
}

// 91.设备技术类别树数据 	请求参数 ： page:页码，limit:条数，lbbm:技术类别编码，sbmc:设备名称
export function getAllTechTypeTree(data) {
	return request({
		url: '/com.hbky.basedata.TechType.queryAllTechTypeAPP.biz.ext',
		method: 'POST',
		data
	})
}

// 92.设备技术类别树数据（分层次查询） 	请求参数 ：id 父级id
export function getAllTechTypeTreeById(data) {
	return request({
		url: '/com.hbky.basedata.TechType.queryAllTechType1.biz.ext',
		method: 'POST',
		data
	})
}

// 93.设备巡检生成巡检工单  	请求参数 ：sbzj 设备主键，lx 传固定值‘设备’
// f：2 成功，zj：任务主键，sbzj：设备主键
export function createEquipmentWO(data) {
	return request({
		url: '/com.hbky.basedata.EquipmentLedger.createBdCardPollingWorkXJ.biz.ext',
		method: 'POST',
		data
	})
}

// 94.设备巡检标准查询		请求参数 ：sbzj 设备主键
export function getEquipmentStandard(data) {
	return request({
		url: '/com.hbky.basedata.jdjssbxj.queryBdCardSjzxbzs.biz.ext',
		method: 'POST',
		data
	})
}

// 95.设备巡检工单删除		请求参数 ：zj 工单主键
export function deleteEquipmentWO(data) {
	return request({
		url: '/com.hbky.basedata.EquipmentLedger.deleteTycCardXjjhrw.biz.ext',
		method: 'POST',
		data
	})
}

// 96.通过设备主键查询故障列表接口  	 请求参数 ：Page:页码，limit:条数，sbzj:设备主键
export function getBreakdownListBySbzj(data) {
	return request({
		url: '/com.hbky.basedata.bdFault.queryFaultWorksweixin.biz.ext',
		method: 'POST',
		data
	})
}
