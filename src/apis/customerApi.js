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

/**
 * 获得商家商城根地址
 * @param customerId 商户号
 */
export const getRootUriByCustomerId = (customerId) => {
  let uri = '/app/security/getSecondDomain'
  let query=`customerId=${customerId}`
  if(bases.debug){
    return Promise.resolve('http://cosytest.51flashmall.com');
  }else{
    return bases.get({ uri, query }).then((json) => {
      return json.resultData.data //TODO 还是测试数据
    }).catch((error) => {
      return Promise.reject(new Error('网络异常'));
    });
  }
}
