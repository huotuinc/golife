/*
 * 版权所有:杭州火图科技有限公司
 * 地址:浙江省杭州市滨江区西兴街道阡陌路智慧E谷B幢4楼
 *
 * (c) Copyright Hangzhou Hot Technology Co., Ltd.
 * Floor 4,Block B,Wisdom E Valley,Qianmo Road,Binjiang District
 * 2013-2016. All rights reserved.
 *
 */
import * as bases from '../apis/base'
import * as apiStatus from '../apis/common/apiStatus'
import store from '../vuex/store';

/**
 * 获得圈子页面圈子首页幻灯及推荐
 * @param $this vue文件this对象用于控制加载提示的
 */
export const login = (userName,password) => {
  let uri = '/app/web/userLogin'
  let query=`userName=${userName}&password=${password}`
  return bases.get({ uri, query }).then((json) => {
    window.console.log(json.resultData.data)
    verifyToken(json.resultData.data)
  }).catch((error) => {
    return Promise.reject(new Error('网络异常'));
  });
}

/**
 * 微信授权登录,如果登录openId 登录成功则直接获得token,
 * 返回的20002 说明openId 没有存在帐号,后期需要跳转到登录页面登录
 * @param openId 微信OpenId
 * @param nickName 微信昵称
 * @param wxHeader 微信头像
 */
export const loginByWx = (customerId,openId,nickName,wxHeader) => {
  let uri='/app/security/weixinLogin'
  let params={
    customerId:customerId,
    openId:openId,
    nickName:nickName,
    imageUrl:wxHeader
  }
  return bases.post({ uri, params})
    .then(function (json) {
      if(json.resultCode==apiStatus.SUCCESS){//登录成功
        store.dispatch("updateToken",json.resultData.data)
      }else if(json.resultCode==apiStatus.NO_EXISTES_OPENID_ACCOUNT){//微信没有关联帐号

      }else{//其他错误异常

      }
    })
}

/**
 * 获得我的关注文章列表(分页)
 * @param $this 当前页最后一条数据ID
 */
export const getConcernArticle = (lastId) => {
  let uri = '/app/user/concernIndex'
  let query=`lastId=${lastId}`
  return bases.get({ uri, query }).then((json) => {
    let data = {
      list: [],
      lastId: 0
    }
    if (json.resultData!=null&&json.resultData.articleList != null && json.resultData.articleList.length > 0) {
      data.list = json.resultData.articleList;
      data.lastId = json.resultData.articleList[json.resultData.articleList.length - 1].pid
    } else {
      return null
    }
    return data;
  }).catch((error) => {
    return Promise.reject(new Error('网络异常'));
  });
}


/**
 * 关注圈子
 * circleId 圈子id
 */
export const concern = (circleId) => {

  if (bases.debug) {

    return Promise.resolve( {status:true,message:''});

  } else {

    let uri = '/app/user/concern';
    let query = `id=${circleId}`;
    return bases.get({
        uri,
        query
      }).then(json => {
        return Promise.resolve(json);
      })
      .catch(error => {
        return Promise.reject(new Error(error.message));
      });
  }
}

/**
 * 举报
 * type 举报类型
 * id 类型对应 id
 * note 说明
 */
export const report =(type , id , note )=>{
   if( bases.debug){

     return Promise.resolve( {status:true,message:''});

   }else{
      let uri = '/app/user/report';
      let query = `type=${type}&id=${id}&note=${note}`;
      return bases.get({uri,query}).then(json=> Promise.resolve(json) );
   }

}

/**
 * 关注用户
 * userid 用户id
 */
export const concernUser = (userId)=>{
    if(bases.debug){

        return Promise.resolve({status:true,message:'' });
    }else{
      let uri ='/app/user/concernUser';
      let query = `id=${userId}`;
      return bases.get({uri,query}).then(json=>Promise.resolve(json));
    }
}

/**
 * 取消关注用户
 * userid 用户id
 */
export const cancelUser = (userId)=>{
    if(bases.debug){

        return Promise.resolve({status:true,message:'' });
    }else{
      let uri ='/app/user/cancelUser';
      let query = `id=${userId}`;
      return bases.get({uri,query}).then(json=>Promise.resolve(json));
    }
}
/**
 * 发送验证码
 * @param customerId 商户号
 * @param phone 手机号码
 * @param type 类型1：注册 2：忘记密码 3:绑定(更换)手机
 * @returns {Promise.<T>|*|Promise}
 */
export const sendCode = (customerId, phone, type) =>{
  let uri='/app/security/sendCode'
  let params={
    customerId:customerId,
    phone:phone,
    type:type,
    codeType:0
  }
  return bases.post({uri,params}).then((json) => {
    let data={};
    data.code=json.resultCode
    if(json.resultCode==null||json.resultCode==''){
      data.message='服务器内部异常'
    }else{
      if(json.resultCode==apiStatus.SUCCESS){//登录成功
        data.message="发送验证码成功"
      }else if(json.resultCode==apiStatus.EXCEED_TIME_ERROR){
        data.message="发送频繁,请稍后再发送"
      }else if(json.resultCode==apiStatus.PARAMETER_PHONE_ERROR){
        data.message='手机号码格式不正确'
      }else if(json.resultCode==apiStatus.PARAMETER_PHONE_EXISTS_ERROR){
        data.message='手机号已经存在'
      }else if(json.resultCode==apiStatus.SERVER_MESSAGE_ERROR){
        data.message='短信发送通道不稳定，请重新尝试'
      }else if(json.resultCode==apiStatus.SERVER_MESSAGE_NOSUPPORT_ERROR){
        data.message='短信还不支持语音验证码'
      }else{
        data.message='其他异常'
      }
    }
    return data
  }).catch((error) => {
    window.console.log(error)
    return Promise.reject(new Error('网络异常'));
  })
}

/**
 * 手机号码注册并且登录
 * @param customerId 商户号
 * @param phone 手机号码
 * @param code 验证码
 * @param password 密码
 * @param openId openId
 * @param nickName 昵称
 * @param imageUrl 微信头像
 * @returns {*|Promise|Promise.<T>}
 */
export const registerByMobile =(customerId,phone, code, password, openId, nickName, imageUrl) =>{
  let uri='/app/security/mobileRegister'
  let params={
    customerId:customerId,
    phone:phone,
    code:code,
    password:password,
    openId:openId,
    nickName:nickName,
    imageUrl:imageUrl
  }
  return bases.post({uri,params}).then((json) => {
    let data={};
    data.code=json.resultCode
    if(json.systemResultCode==apiStatus.SYSTEM_SERVER_ERROR){
      data.message='服务器内部异常'
      data.code=apiStatus.SYSTEM_SERVER_ERROR
    }else {
      if (json.resultCode == apiStatus.SUCCESS) {//登录成功
        store.dispatch("updateToken", json.resultData.data)
        data.message = "注册成功"
      } else if (json.resultCode == apiStatus.PARAMETER_PHONE_ERROR) {
        data.message = '手机号码格式不正确'
      } else if (json.resultCode == apiStatus.PARAMETER_PHONE_EXISTS_ERROR) {
        data.message = '手机号已经存在'
      } else if (json.resultCode == apiStatus.PARAMETER_PASSWORD_FORMATTER_ERROR) {
        data.message = '密码格式有误'
      } else if (json.resultCode == apiStatus.PARAMETER_CODE_ERROR) {
        data.message = '验证码错误'
      } else if (json.resultCode == apiStatus.PARAMETER_CODE_PAST) {
        data.message = '验证码失效'
      } else {
        data.message = '其他异常'
      }
    }
    return data
  }).catch((error) => {
    window.console.log(error)
    return Promise.reject(new Error('网络异常'));
  })
}

/**
 * 手机号登录
 * @param customerId 商户ID
 * @param phone 手机号码
 * @param passWord 密码
 * @param openId openId
 * @param nickName 微信昵称
 * @param imageUrl 微信头像
 */
export const loginByMobile =(customerId,phone,passWord, openId, nickName, imageUrl) =>{
  let uri='/app/security/mobileLogin'
  let params={
    customerId:customerId,
    phone:phone,
    password:passWord,
    openId:openId,
    nickName:nickName,
    imageUrl:imageUrl
  }
  return bases.post({uri,params}).then((json) => {
    let data={};
    data.code=json.resultCode
    if(json.systemResultCode==apiStatus.SYSTEM_SERVER_ERROR){
      data.message='服务器内部异常'
      data.code=apiStatus.SYSTEM_SERVER_ERROR
    }else {
      if (json.resultCode == apiStatus.SUCCESS) {//登录成功
        window.console.log(json.resultData.data)
        store.dispatch("updateToken", json.resultData.data)
        data.message = "注册成功"
      } else if (json.resultCode == apiStatus.PARAMETER_PHONE_ERROR) {
        data.message = '手机号码格式不正确'
      } else if (json.resultCode == apiStatus.ACCOUNT_ERROR) {
        data.message = '用户名或者密码错误'
      } else if (json.resultCode == apiStatus.PARAMETER_PASSWORD_FORMATTER_ERROR) {
        data.message = '密码格式有误'
      } else if (json.resultCode == apiStatus.ACCOUNT_PHONE_NOFIND) {
        data.message = '手机号码不存在'
      }else {
        data.message = '其他异常'
      }
    }
    return data
  }).catch((error) => {
    window.console.log(error)
    return Promise.reject(new Error('网络异常'));
  })
}
