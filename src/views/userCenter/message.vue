<template>
  <div class="_full_router">
    <div class="_full_inner app-content-color-white scrollable-content">
        <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg j">
          <div class="weui_media_hd zjtouxiangs ">
            <img class="weui_media_appmsg_thumb" src="/static/images/hj1.jpg" alt="">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">通知消息</h4>
            <p class="weui_media_desc">我是最新一条标题消息。</p>
            <p class="weui_media_desc" style="color:#999; margin-top:5px">16/10/10</p>
          </div>
        </a>
        <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg j">
          <div class="weui_media_hd zjtouxiangs">
            <img class="weui_media_appmsg_thumb" src="/static/images/hj2.jpg" alt="">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">订单消息</h4>
            <p class="weui_media_desc">我是最新一条标题消息。</p>
            <p class="weui_media_desc" style="color:#999; margin-top:5px">16/10/10</p>
          </div>
        </a>
        <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg j">
          <div class="weui_media_hd zjtouxiangs">
            <img class="weui_media_appmsg_thumb" src="/static/images/hj3.jpg" alt="">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">互动消息</h4>
            <p class="weui_media_desc">我是最新一条标题消息。</p>
            <p class="weui_media_desc" style="color:#999; margin-top:5px">16/10/10</p>
          </div>
        </a>
        <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg j">
          <div class="weui_media_hd zjtouxiangs">
            <img class="weui_media_appmsg_thumb" src="/static/images/hj4.jpg" alt="">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">我的私信</h4>
            <p class="weui_media_desc">我是最新一条标题消息。</p>
            <p class="weui_media_desc" style="color:#999; margin-top:5px">16/10/10</p>
          </div>
        </a>
    </div>
  </div>
</template>
<script>
  import store from '../../vuex/store'
  export default {
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
