<template>
  <div class="wihtab ">
    <div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
      <router-link to="/userCenter/fans/persons" active-class="weui_bar_item_on"  class="weui_navbar_item"> 推荐关注 </router-link><!--未选中样式-->
      <router-link to="/userCenter/fans/attention" active-class="weui_bar_item_on" class="weui_navbar_item"> 我的关注 </router-link><!--选中样式-->
      <router-link to="/userCenter/fans/index" active-class="weui_bar_item_on" class="weui_navbar_item  ">粉丝 </router-link>
    </div>
  </div>
</template>
