/*
 * 版权所有:杭州火图科技有限公司
 * 地址:浙江省杭州市滨江区西兴街道阡陌路智慧E谷B幢4楼
 *
 * (c) Copyright Hangzhou Hot Technology Co., Ltd.
 * Floor 4,Block B,Wisdom E Valley,Qianmo Road,Binjiang District
 * 2013-2016. All rights reserved.
 *
 * description:公共处理模块
 * author:xhl
 */

/**
 * 隐藏局部加载Loading
 * @param $this 实例对象
 */
export const hideLoading=($this) => {
  $this.loading=false;
  $this.isShowImage=false;
  $this.message=""
}

/**
 * 显示请求API接口异常提示(局部Loading方式)
 * @param $this .vue 实例对象
 */
export const errorTip=($this) => {
  $this.loading=true;
  $this.isShowImage=false;
  $this.message="网络异常";
}
