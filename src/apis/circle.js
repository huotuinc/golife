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
  * 获得我的小组列表(分页)
  * @param $this 当前页最后一条数据ID
  */
export const getGroupList = (lastId) => {
  let uri = '/app/user/indexList'
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

/**
 * 获得 圈子热门推荐列表
 * @param lastId 圈子id
 * @returns {*|Promise|Promise.<T>}
 */
export const fetchSuggestList = ( lastId) => {
  // if(bases.debug){
  //     let suggestList={list:[],lastId:7};
  //    suggestList.list.push({circleId:0,num:660,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    suggestList.list.push({circleId:1,num:454,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    suggestList.list.push({circleId:2,num:454,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    suggestList.list.push({circleId:3,num:454,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    suggestList.list.push({circleId:4,num:454,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    suggestList.list.push({circleId:5,num:454,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    suggestList.list.push({circleId:6,num:454,title:'测试数据',pictureUrl:'https://vuefe.cn/images/logo.png'"});
  //    return Promise.resolve(suggestList)
  // }else{
  let uri = '/app/circle/circleIndexSuggestList';
  let query = `lastId=${lastId}`;
  let data = {list: [], lastId: 0};
  return bases.get({uri, query})
    .then((json) => {
      if (json.systemResultCode != 1) return Promise.reject(new Error('code:' + json.systemResultCode + ' message:' + json.systemResultDescription));
      if (json.resultCode != 1) return Promise.reject(new Error('code:' + json.resultCode + "message:" + json.resultDescription));
      if (json.resultData == null || json.resultData.suggestList == null || json.resultData.suggestList.length < 1) return Promise.resolve(null);
      data.list = json.resultData.suggestList;
      data.lastId = json.resultData.suggestList[json.resultData.suggestList.length - 1].circleId;
      return Promise.resolve(data);
    })
    .catch(error => Promise.reject(error));
  // }
}

/**
 * 获得 圈子公告及置顶
 * circleId 圈子Id
 */
export const fetchTop = (circleId)=> {
  // if (bases.debug) {
  //   let data = {data: null, noticeList: [], top: null};
  //   data.data = {
  //     date: new Date().getTime() - 36000,
  //     name: '人参果果',
  //     pictureUrl: 'https://vuefe.cn/images/logo.png',
  //     url: 'http://www.baidu.com'
  //   };
  //   data.noticeList.push({name: '微软Surface之父：备受好评的Dial按钮只是个开始', url: '/circle/content/1?customerId=3447'});
  //   data.noticeList.push({name: '小米MIX店内首摔：边框和屏幕都出现损坏', url: '/circle/content/2?customerId=3447'});
  //   data.noticeList.push({name: '珍贵的6.25T数据：新视野号是如何把它传回地球的', url: '/circle/content/3?customerId=3447'});
  //   data.noticeList.push({name: '暴雪25岁了 创造有故事的游戏世界是成功的关键', url: '/circle/content/4?customerId=3447'});
  //   data.noticeList.push({name: '乐视网今日下跌超7% 复牌后已经跌去32.8%', url: '/circle/content/5?customerId=3447'});
  //   data.top = {
  //     commentsAmount: 3452,
  //     concerned: false,
  //     name: '揭开阿里动物园之谜：为啥都用动物命名',
  //     pictureUrl: 'https://images2015.cnblogs.com/news_topic/20161027234046765-2075674400.png',
  //     pid: 1,
  //     time: new Date().getTime() - 360000,
  //     userHeadUrl: 'https://images2015.cnblogs.com/news_topic/20161027234046765-2075674400.png',
  //     userId: 1,
  //     userLevel: 8,
  //     userName: '新闻小白',
  //     viewAmount: '3422'
  //   };
  //
  //   return Promise.resolve(data);
  // } else {
    let uri = "/app/circle/top";
    let query = `id=${circleId}`;
    return bases.get({uri, query})
      .then(json=> {
        if (json.systemResultCode != 1) {
          return Promise.reject(new Error("code=" + json.systemResultCode + ",message=" + json.systemResultDescription));
        }
        if (json.resultCode != 1) {
          return Promise.reject( new Error( "code=" + json.resultCode + ",message=" + json.resultDescription ));
        }
        let data = {data: null, noticeList: [], top: null};
        data.data = json.data;
        data.noticeList = json.noticeList;
        data.top = json.top;
        Promise.resolve(data);
      })
      .catch(error=> {
        return Promise.reject(error)
      });
  // }
}

/**
 * 获得 圈子文章列表
 * circleId 圈子id
 * type 0最新 1最热 (默认0)
 * lastId 上一个文章Id或热度(浏览量)
 */
export const fetchList =(circleId , type = 0  , lastId=0)=>{
  // if(bases.debug){
  //   let articleList = {
  //     list: [],
  //     lastId: 0
  //   }

   //  if( type == 0){
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'美国交通部长：美国的未来同自动驾驶技术休戚相关',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/20150522141805682.png',pid:lastId,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://images2015.cnblogs.com/news_topic/20161027234046765-2075674400.png',userId:1,userLevel:8,userName:'新闻小白',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'特斯拉10月出货暴跌八成，它成了按财报节点造车的公司',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/tesla.png',pid:lastId+1,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://news.cnblogs.com/images/logo.gif',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'高通第四财季净利润16亿美元 同比增长51%',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/qualcomm.gif',pid:lastId+2,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://news.cnblogs.com/images/logo.gif',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'Visual Studio 15改进C++工程加载',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/12-08-24%2023-47-29.gif',pid:lastId+3,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://news.cnblogs.com/images/logo.gif',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'美股500强前5名首次被科技企业包揽 苹果五年来一直居首',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/apple.png',pid:lastId+4,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://news.cnblogs.com/images/logo.gif',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'阿里回应SEC调查及做空事件：每年双11都有各种攻击 习惯了',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/20150529141337860.png',pid:lastId+5,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://news.cnblogs.com/images/logo.gif',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'Facebook第三季度收入、利润双双爆表 但开支太多让投资人很不满意',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/facebook.gif',pid:lastId+6,time:new Date().getTime()-360000,
   //    userHeadUrl:'https://news.cnblogs.com/images/logo.gif',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //  }else{
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'混改前夕 联通签约百度引发三大猜想：集团业务引入民资？',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/baidu.jpg',pid:lastId,time:new Date().getTime()-720000,
   //    userHeadUrl:'http://common.cnblogs.com/images/ghs.png',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'10年前就做出了“微信小程序”的他打算帮开发者用H5开发原生应用',
   //    pictureUrl:'https://images2015.cnblogs.com/news_topic/20161102173917471-1531128049.png',pid:lastId+1,time:new Date().getTime()-360000,
   //    userHeadUrl:'http://common.cnblogs.com/images/ghs.png',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'阿里上市8位敲钟人之一 最牛快递员现在干啥？',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/20150529141337860.png',pid:lastId+2,time:new Date().getTime()-360000,
   //    userHeadUrl:'http://common.cnblogs.com/images/ghs.png',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'iOS 10.1.1新功能：App Store支持支付宝了',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/20150709134830408.png',pid:lastId+3,time:new Date().getTime()-360000,
   //    userHeadUrl:'http://common.cnblogs.com/images/ghs.png',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //    articleList.list.push({commentsAmount:3452,concerned:false,name:'430万部回收Note 7该如何处理？绿色和平组织有话说',
   //    pictureUrl:'https://images0.cnblogs.com/news_topic/samsung.png',pid:lastId+4,time:new Date().getTime()-360000,
   //    userHeadUrl:'http://common.cnblogs.com/images/ghs.png',userId:1,userLevel:8,userName:'itwriter',viewAmount:'3422'});
   //
   //  }
   // return Promise.resolve(articleList);
   // }else{
    let uri = '/app/circle/list';
    let query = `id=${circleId}&type=${type}&lastId=${lastId}`;
    return bases.get({uri ,query})
    .then(json=>{
      if (json.systemResultCode != 1) {
        return Promise.reject(new Error("code=" + json.systemResultCode + ",message=" + json.systemResultDescription));
      }
      if (json.resultCode != 1) {
        return Promise.reject( new Error( "code=" + json.resultCode + ",message=" + json.resultDescription ));
      }

      return Promise.resolve(json.resultData);
    })
    .catch(error => Promise.reject(error));
    // }
}


/**
 * 圈子介绍
 * circleId 圈子id
 */
export const introduce= (circleId)=> {
  if (bases.debug) {
    let data = {
      articleAmount: 3432,
      categoryName: '健康分类',
      concermAmount: 123,
      date: new Date().getTime() - 454000,
      leaderHeadUrl: 'https://images0.cnblogs.com/news_topic/12-08-24%2023-47-29.gif',
      leaderLevel: 2,
      leaderName: '金向东',
      name: '保健',
      pictureUrl: 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCztdqn6AEQrAIY-gEyCJUbj9FaQJnw',
      summary: 'Visual Studio Code 1.7.1 发布啦！更新内容：水平布局-按纵向或横向组织编辑器；键盘快捷键参考-新键盘快捷键可打开 PDF 备忘单；调试命中的计数控制-设置断',
    };

    return Promise.resolve(data);

  } else {
    let uri = '/app/circle/introduce';
    let query = `id=${circleId}`;
    return bases.get(uri, query).then(json=> {
      return Promise.resolve(json.resultData);
    }).catch(error=>Promise.reject(error));

  }
}
