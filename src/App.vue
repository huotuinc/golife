<!--suppress ALL -->
<template>
  <div id="app"  :class="getBackClass">
    <div class="main app-content" :class="{'app-content-box-sizing':isFooter}">
      <cfooter v-if="isFooter"></cfooter>
      <!--router-->
      <router-view  transition="cover"  class="app-scroll" :class="getBackClass" keep-alive></router-view>
    </div>
    <cloading v-show='getLoading'></cloading>
  </div>
</template>
<script>
  //  import cfooter from './components/footer'
  //  import cloading from './components/loading'
  //建议使用下面这种方式来加载组件,这样可以实现路由懒加载,分js打包,按需加载
  const cfooter = resolve => require(['./components/footer'], resolve)
  const cloading = resolve => require(['./components/loading'], resolve)

  import store from './vuex/store';
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      cfooter,
      cloading
    },
    computed: mapGetters([
      'getLoading',
      'isFooter',
      'getBackClass'
    ]),
    methods: mapActions([
      'updateLoading'
    ]),
    created () {
      this.updateLoading(false)
    },
    store
  }
</script>
<style>
  @import "../static/css/weui.min-gggeren-diy.css";
  @import "../static/css/basic.css";
  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .35s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
