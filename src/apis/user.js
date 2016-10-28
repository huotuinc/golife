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
