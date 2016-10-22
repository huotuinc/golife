<!--suppress ALL -->
<template>
  <div id="app" class="scrollable-wrap" :class="getBackClass">
    <div class="main app-content" :class="{'app-content-box-sizing':isFooter}">
      <!--router-->
      <keep-alive>
        <router-view  class="scrollable"  :class="getBackClass"></router-view>
      </keep-alive>
    </div>
    <cfooter v-if="isFooter"></cfooter>
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
</style>
