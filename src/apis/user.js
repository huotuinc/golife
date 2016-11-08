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
export const login = (userName, password) => {
  let uri = '/app/web/userLogin'
  let query = `userName=${userName}&password=${password}`
  return bases.get({
    uri,
    query
  }).then((json) => {
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
export const loginByWx = (customerId, openId, nickName, wxHeader) => {
  let uri = '/app/security/weixinLogin'
  let params = {
    customerId: customerId,
    openId: openId,
    nickName: nickName,
    imageUrl: wxHeader
  }
  return bases.post({
      uri,
      params
    })
    .then(function (json) {
      if (json.resultCode == apiStatus.SUCCESS) { //登录成功
        store.dispatch("updateToken", json.resultData.data)
      } else if (json.resultCode == apiStatus.NO_EXISTES_OPENID_ACCOUNT) { //微信没有关联帐号

      } else { //其他错误异常

      }
    })
}

/**
 * 获得我的关注文章列表(分页)
 * @param $this 当前页最后一条数据ID
 */
export const getConcernArticle = (lastId) => {
  let uri = '/app/user/concernIndex'
  let query = `lastId=${lastId}`
  return bases.get({
    uri,
    query
  }).then((json) => {
    let data = {
      list: [],
      lastId: 0
    }
    if (json.resultData.articleList != null && json.resultData.articleList.length > 0) {
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