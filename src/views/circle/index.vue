<!--suppress ALL -->
<template>
  <div>
    <!--<div class="_full_inner fonthui animated slideInRight" :class="{'animated slideOutLeft':decline}">-->
    <div class="_full_inner fonthui">
      <circleHeader></circleHeader>
      <circleSearch></circleSearch>
      <div class="scrollable-content padding-bottom-100">
            <circleBanner></circleBanner>
            <circleGroup></circleGroup>
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
  import circleBanner from '../../components/circle/circle-banner'
  import circleGroup from '../../components/circle/circle-group'
  import circleHeader from '../../components/circle/header'
  import circleSearch from '../../components/circle/search'
  export default {
    data() {
      return {
        decline: false,
      }
    },
    methods:{
      update:function (_decline) {
        this.decline=_decline
      }
    },
    components: {
      circleHeader,
      circleBanner,
      circleGroup,
      circleSearch
    }
  }
</script>
<style scoped>
  @import "../../../static/css/animate.css";
  .custome-fade{
    padding-left: 30%;
    opacity: 0;
  }
  .custome-fade-leave-active {
    padding-left: 100%;
    opacity: 0;
  }
  /*@-webkit-keyframes test-fade-enter-active {*/
    /*from {*/
      /*-webkit-transform: translate3d(100%, 0, 0);*/
      /*transform: translate3d(100%, 0, 0);*/
      /*visibility: visible;*/
    /*}*/

    /*to {*/
      /*-webkit-transform: translate3d(0, 0, 0);*/
      /*transform: translate3d(0, 0, 0);*/
    /*}*/
  /*}*/

  /*@keyframes test-fade-enter-active {*/
    /*from {*/
      /*-webkit-transform: translate3d(100%, 0, 0);*/
      /*transform: translate3d(100%, 0, 0);*/
      /*visibility: visible;*/
    /*}*/

    /*to {*/
      /*-webkit-transform: translate3d(0, 0, 0);*/
      /*transform: translate3d(0, 0, 0);*/
    /*}*/
  /*}*/

  /*.test-fade-enter-active {*/
    /*-webkit-animation-name: slideInRight;*/
    /*animation-name: slideInRight;*/
  /*}*/

  /*@-webkit-keyframes test-fade-leave-active {*/
    /*from {*/
      /*-webkit-transform: translate3d(0, 0, 0);*/
      /*transform: translate3d(0, 0, 0);*/
    /*}*/

    /*to {*/
      /*visibility: hidden;*/
      /*-webkit-transform: translate3d(-100%, 0, 0);*/
      /*transform: translate3d(-100%, 0, 0);*/
    /*}*/
  /*}*/

  /*@keyframes test-fade-leave-active {*/
    /*from {*/
      /*-webkit-transform: translate3d(0, 0, 0);*/
      /*transform: translate3d(0, 0, 0);*/
    /*}*/

    /*to {*/
      /*visibility: hidden;*/
      /*-webkit-transform: translate3d(-100%, 0, 0);*/
      /*transform: translate3d(-100%, 0, 0);*/
    /*}*/
  /*}*/

  /*.test-fade-leave-active {*/
    /*-webkit-animation-name: slideOutLeft;*/
    /*animation-name: slideOutLeft;*/
  /*}*/
  /*.test-fade-enter, .test-fade-leave-active {*/
    /*padding-left: 30%;*/
    /*opacity: 0;*/
  /*}*/
  /*@import "../../../static/css/animate.css";*/
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  /*.slide-fade-enter{*/
    /*padding-left: 30%;*/
    /*opacity: 0;*/
  /*}*/
  /*.slide-fade-enter-active {*/
    /*transition: padding-right .3s cubic-bezier((0.0, 0.0, 1.0, 1.0));*/
    /*opacity: 1;*/
  /*}*/
  /*.slide-fade-leave-active {*/
    /*transition: padding-left .8s cubic-bezier((0.0, 0.0, 1.0, 1.0));*/
    /*opacity: 1;*/
  /*}*/
  /*.slide-fade-leave-active {*/
    /*padding-left: 30%;*/
    /*opacity: 0;*/
  /*}*/

  /*.slide-fade-enter-active {*/
    /*transition: all .3s ease;*/
  /*}*/
  /*.slide-fade-leave-active {*/
    /*transition: all .8s cubic-bezier((0.0, 0.0, 1.0, 1.0));*/
  /*}*/
  /*.slide-fade-enter, .slide-fade-leave-active {*/
    /*padding-left: 10px;*/
    /*opacity: 0;*/
  /*}*/
  /*.fade-enter-active, .fade-leave-active {*/
    /*opacity: 1;*/
    /*transition: opacity .35s ease;*/
  /*}*/
  /*.fade-enter, .fade-leave-active {*/
    /*opacity: 0*/
  /*}*/
</style>
