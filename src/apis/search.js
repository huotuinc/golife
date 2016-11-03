/*
 * 版权所有:杭州火图科技有限公司resultCode
 * 地址:浙江省杭州市滨江区西兴街道阡陌路智慧E谷B幢4楼
 *
 * (c) Copyright Hangzhou Hot Technology Co., Ltd.
 * Floor 4,Block B,Wisdom E Valley,Qianmo Road,Binjiang District
 * 2013-2016. All rights reserved.
 *
 * author:lhb
 */
import * as bases from '../apis/base'

/**
 * 获得圈子页面圈子首页幻灯及推荐
 * @param $this vue文件this对象用于控制加载提示的
 */
export default (searchId) => {
  let uri = '/app/wiki/getCatalogList'
  return bases.get({uri,searchId})
  .then((json) => {
    if(json.systemResultCode == 1 && json.resultCode == 1){
      return json.resultData.catalogList;
    }
  }).then((json) =>{
    return json;
  }).catch(function(){
    return Promise.reject(new Error('网络异常'));
  })
}

// export default (searchId) => {
//   let uri = '/app/wiki/getCatalogList'
//   return bases.get({uri,searchId})
//   .then((json) => {
//     if(json.systemResultCode == 1 && json.resultCode == 1){
//       return json.resultData.catalogList;
//     }
//   }).catch(function(){
//     return Promise.reject(new Error('网络异常'));
//   })
// }
