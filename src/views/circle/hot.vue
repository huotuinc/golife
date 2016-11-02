<template>
  <div>
    <!--<div class="_full_inner fonthui _effect" :class="{'_effect&#45;&#45;30':decline}">-->
    <div class="_full_inner fonthui" :class="{'_effect--30':decline}">
      <circleSearch></circleSearch>
      <circle-header></circle-header>
      <div class="scrollable-content padding-bottom-100">
        <div class="cont-zhbox">
            <div class="cont-zhbox-t">
              <router-link :to="{ path: 'content/10' }" append class="bz" >
                <p class="cont-zhbox-a"><b>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
                <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                <p class="cont-zhbox-nav" style="margin-bottom:0px"></p>
              </router-link>
              <div class="weui_panel_bd fgh">
                <router-link :to="{ path: 'content/10' }" append class="weui_media_box weui_media_appmsg">
                  <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="/static/images/a3.jpg" alt="" style="width:auto; height:40px">
                  </div>
                  <div class="weui_media_bd">
                    <p class="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>

                  </div>
                </router-link>
                <router-link :to="{ path: 'content/10' }" append class="weui_media_box weui_media_appmsg">
                  <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="/static/images/a2.jpg" alt=""  style="width:auto; height:40px">
                  </div>
                  <div class="weui_media_bd">

                    <p class="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                  </div>
                </router-link>
              </div>
            </div>
            <p style="text-align:center; font-size:12px; color:#ccc; margin-top:4px">2016-10-10 10:00</p>
          </div>
        <div class="cont-zhbox">
            <div class="cont-zhbox-t">
              <router-link :to="{ path: 'content/10' }" append class="bz" >
                <p class="cont-zhbox-a"><b>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
                <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                <p class="cont-zhbox-nav" style="margin-bottom:0px">阅读全文</p>
              </router-link>
            </div>
            <p style="text-align:center; font-size:12px; color:#ccc; margin-top:4px">2016-10-10 10:00</p>
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
