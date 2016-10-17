<template>
  <div class="loding">
    <div class="weui_cells weui_cells_form">
      <div class="weui_cell">
        <div class="weui_cell_hd margt">
          <label class="weui_label">
            <img src="/static/images/sj@3.png" width="25px;">
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="tel" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="weui_cell weui_vcode">
        <div class="weui_cell_hd margt">
          <label class="weui_label">
            <img src="/static/images/yzm@3.png" width="25px;">
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="number" placeholder="请输入验证码">
        </div>
        <div class="weui_cell_ft">
          <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary">获取验证码</a>
        </div>
      </div>
    </div>
    <p class="nomessage">
      <a href="javascript:;" >未收到验证码</a>
    </p>
    <p style="height:35px"></p>
    <a href="javascript:;" class="weui_btn weui_btn_primary anniu ">登录</a>
    <div style="display:block">
      <a  href="javascript:;" class="weui_btn weui_btn_plain_default  anniu">
        <img style="vertical-align:middle;" src="/static/images/w.png" width="20px">
        &nbsp;微信登录
      </a>
    </div>
  </div>
</template>
<script>
  import store from '../vuex/store';
  export default {
    data () {
      return {
        edit:{
          open:'',
        }
      }
    },
    created () {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'');
    },
  }
</script>
<style>
  @import "/static/css/weui.min-rsgghot-diy.css";
</style>
