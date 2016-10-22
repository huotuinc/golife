<template>
  <div>
    <!--<div class="_full_inner fonthui _effect" :class="{'_effect&#45;&#45;30':decline}">-->
    <div class="_full_inner fonthui">
      <circleSearch></circleSearch>
      <circle-header></circle-header>
      <div class="scrollable-content padding-bottom-100">
          <div class="cont-zhbox">
            <div class="cont-zhbox-t">
              <router-link :to="{ path: 'content/10' }" append class="bz" >
                <p class="cont-zhbox-a"><b>什么是科普？</b></p>
                <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                <p class="cont-zhbox-nav"></p>
              </router-link>
              <div class="zhbox">
                <div class="zh-tx">
                  <img src="/static/images/imgsss.png">
                </div>
                <div class="zh-wz">
                  <div class="zh-wz-x">
                    <p class="zh-wz-name"> 官方发布<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
                  </div>
                  <div class="njk">
                    <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
                  </div>
                  <div  class="zh-wz-time">
                    <span style="float:left">23小时前</span>
                    <!--<span style="float:right"></span>-->
                    <span style="float:right; margin-right:10px"></span>
                    <p style="clear:both"></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="cont-zhbox">
            <div class="cont-zhbox-t">
              <router-link :to="{ path: 'content/10' }" append class="bz" >
                <p class="cont-zhbox-a"><b>养生科普一</b></p>
                <p class="cont-zhbox-img"></p>
                <p class="cont-zhbox-nav">瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</p>
              </router-link>


              <div class="zhbox">
                <div class="zh-tx">
                  <img src="/static/images/imgsss.png">
                </div>
                <div class="zh-wz">
                  <div class="zh-wz-x">
                    <p class="zh-wz-name"> 官方发布<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
                  </div>
                  <div class="njk" style="display:none">
                    <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
                  </div>
                  <div  class="zh-wz-time">
                    <span style="float:left">09-10 22:00</span>
                    <!--<span style="float:right"></span>-->
                    <span style="float:right; margin-right:10px">浏览38281</span>
                    <p style="clear:both"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!--<transition name="custome-fade"-->
                <!--enter-active-class="animated slideInRight"-->
                <!--leave-active-class="animated slideOutLeft">-->
    <transition>
      <keep-alive>
        <router-view  v-on:update-decline="update"  class="cover-transition"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  import circleHeader from '../../components/circle/header'
  import circleSearch from '../../components/circle/search'
  export default {
    data() {
      return {
        decline: false,
      }
    },
    components: {
      circleHeader,
      circleSearch
    },
    methods:{
      update:function (_decline) {
        this.decline=_decline
      }
    }
  }
</script>
<style scoped>
  @import "../../../static/css/animate.css";
</style>
