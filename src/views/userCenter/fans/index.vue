<template>
  <div class="_full_router">
    <!--<div class="_full_inner _effect" :class="{'_effect&#45;&#45;30':decline}">-->
    <div class="_full_inner">
      <div class="wihtab">
        <div class="weui_tab">
          <div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
            <a href="javascript:void(0)" v-on:click="changeTab('person')" class="weui_navbar_item" :class="{'weui_bar_item_on':fans.isPerson}"> 推荐关注 </a><!--未选中样式-->
            <a href="javascript:void(0)" v-on:click="changeTab('attention')" class="weui_navbar_item" :class="{'weui_bar_item_on':fans.isAttention}"> 我的关注 </a><!--选中样式-->
            <a href="javascript:void(0)" v-on:click="changeTab('index')" class="weui_navbar_item" :class="{'weui_bar_item_on':fans.isFans}">粉丝 </a>
          </div>
          <!--占位高度-->
          <p style="height:42px"></p>
        </div>
      </div>
      <div class="scrollable-content" ref="fans" :style="{ height: wrapperHeight + 'px' }">
        <fansAttention v-if="fans.isAttention" :active="fans.tab"></fansAttention>
        <fansFans  v-if="fans.isFans" :active="fans.tab"></fansFans>
        <fansPerson v-if="fans.isPerson" :active="fans.tab"></fansPerson>
      </div>
    </div>
    <!--<transition name="custome-fade"-->
                <!--enter-active-class="animated slideInRight"-->
                <!--leave-active-class="animated slideOutLeft">-->
    <transition>
      <keep-alive>
        <router-view  v-on:update-decline="update" class="cover-transition"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  import store from '../../../vuex/store'
  import fansAttention from '../../../components/fans/attention'
  import fansFans from '../../../components/fans/fans'
  import fansPerson from '../../../components/fans/persons'
  export default {
    data() {
      return {
        decline: false,
        wrapperHeight: '',
        fans:{
          isAttention:false,
          isFans:false,
          isPerson:false,
          tab:''
        }
      }
    },
    methods: {
      changeTab:function (tab) {

        this.fans.isAttention=tab=='attention'
        this.fans.isFans=tab=='index'
        this.fans.isPerson=tab=='person'
        this.fans.tab=tab
      },
      update:function (_decline) {
        this.decline=_decline
      }
    },
    components: {
      fansAttention,
      fansFans,
      fansPerson
    },
//    created() {
//      window.console.log('=============fans create==============')
//      this.$store.dispatch("updateFooter",false);
//    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      let tab=this.$route.params.tab
      this.fans.isAttention=tab=='attention'
      this.fans.isFans=tab=='index'
      this.fans.isPerson=tab=='person'
      this.fans.tab=tab;
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - (this.$refs.fans.getBoundingClientRect().top);
    }
  }
</script>
<style scoped>
  @import "/static/css/weui.min-rsgghot-diy.css";
  @import "/static/css/animate.css";
</style>
