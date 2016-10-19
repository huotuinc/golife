<template>
  <div class="wihtab ">
    <div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
      <a href="javascript:void(0)" v-on:click="changeTab('person')" class="weui_navbar_item" :class="{'weui_bar_item_on':isPerson}"> 推荐关注 </a><!--未选中样式-->
      <a href="javascript:void(0)" v-on:click="changeTab('attention')" class="weui_navbar_item" :class="{'weui_bar_item_on':isAttention}"> 我的关注 </a><!--选中样式-->
      <a href="javascript:void(0)" v-on:click="changeTab('index')" class="weui_navbar_item" :class="{'weui_bar_item_on':isFans}">粉丝 </a>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isPerson:false,
        isAttention:false,
        isFans:false
      }
    },
    props:["active"],
    created() {
      this.$store.dispatch("updateFooter",false);
    },
    methods: {
      changeTab:function (tab) {
        this.$emit('changeTab', tab)
      }
    },
    activated() {
      let tab=this.active
      window.console.log(tab)
      this.isAttention=tab=='attention'
      this.isFans=tab=='index'
      this.isPerson=tab=='person'
      window.console.log("isAttention-->"+this.isAttention)
      window.console.log("isFans-->"+this.isFans)
      window.console.log("isPerson-->"+this.isPerson)
    },
  }
</script>
