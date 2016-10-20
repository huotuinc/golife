<template>
  <div class="_full component-scoller">
    <div class="weui_search_bar" id="search_bar">
      <form class="weui_search_outer">
        <div class="weui_search_inner">
          <i class="weui_icon_search"></i>
          <input type="search" class="weui_search_input" id="search_input" placeholder="搜索" required/>
          <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
        </div>
        <label for="search_input" class="weui_search_text" id="search_text">
          <i class="weui_icon_search"></i>
          <span>搜索圈子、话题</span>
        </label>
      </form>
      <a href="javascript:" class="weui_search_cancel" id="search_cancel">取消</a>
    </div>
    <div class="con">
      <div class="msg">点击选择栏目</div>
      <ul class="list">
        <li class="fixed">
          <a>推荐</a>
        </li>
        <li>
          <a>娱乐</a>
        </li>
        <li>
          <a>汽车</a>
        </li>
        <li>
          <a>体育</a>
        </li>
        <li>
          <a>财经</a>
        </li>
        <li>
          <a>军事</a>
        </li>
        <li>
          <a>时尚</a>
        </li>
        <li>
          <a>游戏</a>
        </li>
        <li>
          <a>旅游</a>
        </li>
        <li>
          <a>探索</a>
        </li>
        <li>
          <a>热点</a>
        </li>
        <li>
          <a>科技</a>
        </li>
        <li>
          <a>育儿</a>
        </li>
        <li>
          <a>国际</a>
        </li>
        <li>
          <a>美食</a>
        </li>
      </ul>
      <div class="msg tip" disabled-message="最多#n#个分类,请先删除一些" origin-message="点击选择分类">点击选择分类</div>
      <ul class="list" data-toggle="menu-unselected">
        <li>
          <a>历史</a>
        </li>
        <li>
          <a>养生</a>
        </li>
        <li>
          <a>故事</a>
        </li>
        <li>
          <a>美文</a>
        </li>
        <li>
          <a>社会</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '../vuex/store';
  export default {
    created () {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'');
      require("../../static/js/jquery-weui")
    },
  }
</script>
<style scoped>
  @import "/static/css/weui.min-rsgghot-diy.css";
</style>
