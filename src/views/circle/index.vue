<!--suppress ALL -->
<template>
  <div>
    <!--<div class="_full_inner fonthui animated slideInRight" :class="{'animated slideOutLeft':decline}">-->
    <div class="fonthui">
      <circleHeader v-show="isShowHeader"></circleHeader>
      <circleSearch v-show="isShowSearchbar"></circleSearch>
      <div class="scrollable-content" ref="circle" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore @top-status-change="handleTopChange" top-Distance="20" :top-method="loadTop"
                     :bottom-all-loaded="loadStatus.allLoaded" ref="loadmore">
            <circleBanner ref="circleBanner"></circleBanner>
            <circleGroup ref="circleGroup"></circleGroup>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="loadStatus.topStatus !== 'loading'" :class="{ 'is-rotate': loadStatus.topStatus === 'drop' }">↓</span>
            <span v-show="loadStatus.topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
    </div>
    <!--<transition name="custome-fade"-->
                <!--enter-active-class="animated slideInRight"-->
                <!--leave-active-class="animated slideOutLeft">-->
    <transition>
      <keep-alive>
        <router-view  v-on:update-decline="update" v-on:update-header='updateHeader' v-on:update-searchbar='updateSearchbar'  class="cover-transition"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  import circleBanner from '../../components/circle/circle-banner'
  import circleGroup from '../../components/circle/circle-group'
  import circleHeader from '../../components/circle/header'
  import circleSearch from '../../components/circle/search'
  import {Loadmore} from 'mint-ui';
  export default {
    data() {
      return {
        decline: false,
        wrapperHeight: '',
        loadStatus:{
          topStatus: '',
          allLoaded: false,
        },
        isShowHeader:true,
        isShowSearchbar:true,
      }
    },
    methods:{
      /**
      * 控制header头部的显示隐藏
      */
      updateHeader:function(_isShowHeader){
        this.isShowHeader = _isShowHeader;
      },
      /**
      * 控制搜索组件的显示隐藏
      */
      updateSearchbar:function(_isShowSearchbar){
        this.isShowSearchbar = _isShowSearchbar;
      },
      update:function (_decline) {
        this.decline=_decline
      },
      handleTopChange(status) {
        this.loadStatus.topStatus = status;
      },
      /**
       * 下拉刷新
       * @param id
       */
      loadTop:function (id) {
        let $this=this;
        this.$refs.circleBanner.initBanner()
          .then(function () {
            $this.$refs.loadmore.onTopLoaded(id);
          })
        this.$refs.circleGroup.loadTop(this,id)
      },     

    },
    components: {
      circleHeader,
      circleBanner,
      circleGroup,
      circleSearch,
      Loadmore
    },
    mounted() {
      window.console.log(this.$route)
      this.wrapperHeight = document.documentElement.clientHeight - (this.$refs.circle.getBoundingClientRect().top + 50);
    },
  }
</script>
<!--<style scoped>-->
  <!--@import "../../../static/css/animate.css";-->
<!--</style>-->
