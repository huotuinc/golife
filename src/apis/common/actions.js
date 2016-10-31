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
  $this.errorStatus.loading=false;
  $this.errorStatus.isShowImage=false;
  $this.errorStatus.message=""
}

/**
 * 显示请求API接口异常提示(局部Loading方式)
 * @param $this .vue 实例对象
 */
export const errorTip=($this) => {
  $this.errorStatus.loading=true;
  $this.errorStatus.isShowImage=false;
  $this.errorStatus.message="网络异常";
}

/**
 * 显示请求API接口异常提示(局部Loading方式)
 * @param $this  .vue 实例对象
 * @param message 提示消息
 */
export const errorTipMessage=($this,message) => {
  $this.errorStatus.loading=true;
  $this.errorStatus.isShowImage=false;
  $this.errorStatus.message=message;
}
