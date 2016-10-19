<template>
  <div class="_full_router _effect component-find">
    <div class="_full_inner">
      <fansHeader  v-on:changeTab="changeTab" ></fansHeader>
      <fansAttention v-show="fans.isAttention" :active="fans.tab"></fansAttention>
      <fansFans  v-show="fans.isFans" :active="fans.tab"></fansFans>
      <fansPerson v-show="fans.isPerson" :active="fans.tab"></fansPerson>
    </div>
      <!-- router -->
    <!--<transition name="fade">-->
      <!--<keep-alive>-->
        <!--<router-view  v-on:update-decline="update" class="cover-transition"></router-view>-->
      <!--</keep-alive>-->
    <!--</transition>-->
  </div>
</template>
<script>
  import store from '../../../vuex/store'
  import fansHeader from '../../../components/fans/header'
  import fansAttention from '../../../components/fans/attention'
  import fansFans from '../../../components/fans/fans'
  import fansPerson from '../../../components/fans/persons'
  export default {
    data() {
      return {
        decline: false,
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
      fansHeader,
      fansAttention,
      fansFans,
      fansPerson
    },
    created() {
      this.$store.dispatch("updateFooter",false);
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      let tab=this.$route.params.tab
      window.console.log(this.$route.params.tab)
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
