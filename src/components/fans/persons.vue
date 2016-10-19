<template>
  <div class="_full_router _effect component-find">
    <div class="_full_inner">
    <div class="my-attention">
      <!--切换页卡-->
      <!--占位高度-->
      <p style="height:42px"></p>

      <!--搜索-->
      <div class="weui_search_bar" id="search_bar">
        <form class="weui_search_outer">
          <div class="weui_search_inner">
            <i class="weui_icon_search"></i>
            <input type="search" class="weui_search_input" id="search_input" placeholder="搜索用户、小组、话题" required/>
            <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
          </div>
          <label for="search_input" class="weui_search_text" id="search_text">
            <i class="weui_icon_search"></i>
            <span>搜索用户、小组、话题</span>
          </label>
        </form>
        <a href="javascript:" class="weui_search_cancel" id="search_cancel">取消</a>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz"--><!--未关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelz">专家</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz"--><!--已关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelp">普通</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz"--><!--已关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelp">普通</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz"--><!--未关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelz">专家</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz"--><!--未关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelz">专家</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz"--><!--未关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft wgz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelz">专家</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz"--><!--已关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelp">普通</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <!--图文组合列表-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd">
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz"--><!--已关注状态-->
          <!-- class="weui_media_box weui_media_appmsg weui_panel_ft ygz hxgz"--><!--互相关注状态-->
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg weui_panel_ft wgz">
            <div class="weui_media_hd">
              <img class="weui_media_appmsg_thumb" src="/static/images/hot/moren.png" alt="">
            </div>
            <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">昵称<i class="levelp">普通</i></h4>
              <ul class="weui_media_info">
                <li class="weui_media_info_meta">发帖数&nbsp;&nbsp;321</li>
                <li class="weui_media_info_meta weui_media_info_meta_extra">粉丝数&nbsp;&nbsp;3271万</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import store from '../../vuex/store'
  export default {
    created() {
      this.$store.dispatch("updateFooter",false);
      require("../../../static/js/jquery-weui")
    }
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
