<template>
  <div class="title-xz">
    <img src="/static/images/hot/zzz.png" width="100%">
    <div class="box">
      <p class="leftname"><i>属性：</i>健康分类</p>
      <p class="leftname"><i>组名：</i>头昏脑涨感冒求解决</p>
      <p class="leftname" style="float:left"><i>组长：</i>
        <div class="zhbox">
          <div class="zh-tx" style="position: inherit;">
            <img src="/static/images/imgsss.png">
          </div>
          <div class="zh-wz" style="margin-left: 0px;">
            <div class="zh-wz-x">
              <p class="zh-wz-name">
                <span>Dr-left</span>
                <img src="/static/images/ddbm.png" class="zh-wz-name-ico"/>
              </p>
            </div>
          </div>
        </div>
      </p>
      <p style="clear:both"></p>
      <p class="leftname"><i>关注：</i>3217126人</p>
      <p class="leftname"><i>帖子：</i>332条</p>
      <p class="leftname"><i>简介：</i>不爱吃药爱养身</p>
      <p class="leftname"><i>始于：</i>2015-01-03</p>
  </div>
  <div style="margin:0 auto; text-align:center">
    <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">退出组</a>
  </div>
  </div>
</template>
<script>
  import store from '../../../vuex/store';
  export default {
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'app-content-color-white');
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
<style>
  @import "/static/css/weui.min-rsgghot-diy.css";
</style>
