/*
 * 版权所有:杭州火图科技有限公司
 * 地址:浙江省杭州市滨江区西兴街道阡陌路智慧E谷B幢4楼
 *
 * (c) Copyright Hangzhou Hot Technology Co., Ltd.
 * Floor 4,Block B,Wisdom E Valley,Qianmo Road,Binjiang District
 * 2013-2016. All rights reserved.
 *
 * author:xhl
 */
import * as bases from '../apis/base'

/**
 * 获得圈子页面圈子首页幻灯及推荐
 * @param $this vue文件this对象用于控制加载提示的
 */
export const getBanner = () => {
  let uri = '/app/circle/indexTop'
  return bases.get({uri}).then((json) => {
    let hotData = {
      banner: [],
      recommended: []
    }
    hotData.banner = json.resultData.slideList;
    hotData.recommended = json.resultData.suggestList
    return hotData;
  }).catch((error) => {
    return Promise.reject(new Error('网络异常'));
  });
  // let slideList=[{},{},{}]
  // let suggestList=[
  //   {
  //     title:'测试',
  //     num:200
  //   },
  //   {
  //     title:'测试',
  //     num:200
  //   },
  //   {
  //     title:'测试',
  //     num:200
  //   },
  //   {
  //     title:'测试',
  //     num:200
  //   },
  //   {
  //     title:'测试',
  //     num:200
  //   },
  //   {
  //     title:'测试',
  //     num:200
  //   }
  // ]
  // $this.bannerData=slideList
  // $this.hot=suggestList
}

/**
 * 获得我的小组列表,后面需要改成下来刷新方式
 * @param $this vue文件this对象用于控制加载提示的
 */
export const getGroup = ()=> {
  let uri = '/app/circle/indexList';
  return bases.get({uri}).then((json) => {
    return json.resultData.circlelist;
  }).catch((error) => {
    return Promise.reject(error);
  });
}


/**
 * 获得我的小组列表(分页)
 * @param $this 当前页最后一条数据ID
 */
export const getGroupList = (lastId) => {
  let uri = '/app/circle/indexList'
  let query=`lastId=${lastId}`
  return bases.get({uri,query}).then((json) => {
    let data = {
      list: [],
      lastId: 0
    }
    if (json.resultData.circlelist != null && json.resultData.circlelist.length > 0) {
      data.list = json.resultData.circlelist;
      data.lastId = json.resultData.circlelist[json.resultData.circlelist.length - 1].pid
    } else {
      return null
    }
    return data;
  }).catch((error) => {
    return Promise.reject(new Error('网络异常'));
  });
}
