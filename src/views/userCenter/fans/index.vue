<template>
  <div class="_full_router _effect">
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
      <div class="scrollable-content padding-bottom-42">
        <fansAttention v-if="fans.isAttention" :active="fans.tab"></fansAttention>
        <fansFans  v-if="fans.isFans" :active="fans.tab"></fansFans>
        <fansPerson v-if="fans.isPerson" :active="fans.tab"></fansPerson>
      </div>
    </div>
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
      }
    },
    components: {
      fansAttention,
      fansFans,
      fansPerson
    },
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
  }
</script>
<style scoped>
  @import "/static/css/weui.min-rsgghot-diy.css";
  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .35s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
