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
          <input class="weui_input" type="tel" v-model="phone" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="weui_cell">
        <div class="weui_cell_hd margt"><label class="weui_label"><img src="/static/images/mima@3.png" width="25px;"></label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="password" v-model="passWord" placeholder="输入密码">
        </div>
      </div>
      <!--<div class="weui_cell weui_vcode">-->
        <!--<div class="weui_cell_hd margt">-->
          <!--<label class="weui_label">-->
            <!--<img src="/static/images/yzm@3.png" width="25px;">-->
          <!--</label>-->
        <!--</div>-->
        <!--<div class="weui_cell_bd weui_cell_primary">-->
          <!--<input class="weui_input" type="number" v-model="code" placeholder="请输入验证码">-->
        <!--</div>-->
        <!--<div class="weui_cell_ft">-->
          <!--<a href="javascript:;" id="js-login-sendCode" class="weui_btn weui_btn_mini weui_btn_primary">获取验证码</a>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <p class="nomessage">
      <router-link :to="{ path: 'register',query:{ customerId:getCustomerID} }" >没有帐号?立即注册</router-link>
    </p>
    <p style="height:35px"></p>
    <a href="javascript:;" v-on:click="login" class="weui_btn weui_btn_primary anniu ">登录</a>
    <!--<div style="display:block">-->
      <!--<a  href="javascript:;" class="weui_btn weui_btn_plain_default  anniu">-->
        <!--<img style="vertical-align:middle;" src="/static/images/w.png" width="20px">-->
        <!--&nbsp;微信登录-->
      <!--</a>-->
    <!--</div>-->
  </div>
</template>
<script>
  import { mapGetters} from 'vuex'
  import store from '../vuex/store'
  import { loginByMobile } from '../apis/user'
  import * as utils from '../assets/utils'
  export default {
    data(){
      return{
        phone:'',
        passWord:''
      }
    },
    computed: mapGetters([
      'getCustomerID',
      'getWxOAuherInfo'
    ]),
    methods:{
      validation:function () {
        if(utils.isEmpty(this.phone)){
          $.toptip("请输入手机号码", 'warning');
          return false
        }
        if(!utils.isMobile(this.phone)){
          $.toptip("手机号码格式不正确", 'warning');
          return false
        }
        if(utils.isEmpty(this.passWord)){
          $.toptip("请输入密码", 'warning');
          return false
        }
        if(!utils.isPassWord(this.passWord)){
          $.toptip("密码在6至16个字符内", 'warning');
          return false
        }
        return true
      },
      login:function () {
        if(this.validation()){
          let OAuthObject=this.getWxOAuherInfo
          let openId=OAuthObject.openId,nickName=OAuthObject.wxNick,imageUrl=OAuthObject.wxHeader
          loginByMobile(
            this.customerId,
            this.phone,
            this.passWord,
            openId,
            nickName,
            imageUrl
          ).then(function (data) {
            if(data.code==status.SUCCESS){
              $.toptip("登录成功", 'success');
              //TODO 做跳转操作
            }else{
              $.toptip(data.message, 'warning');
            }
          }).catch(function (error) {
            window.console.log(error)
            $.toptip('服务器异常,请稍后再试', 'error');
          })
        }
      }
    },
    created (){
      require("../../static/js/weui-0.8.2/jquery-weui");
    },
    activated () {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'app-content-color-white');
    },
  }
</script>
<style scoped>
  @import "/static/css/weui.min-rsgghot-diy.css";
</style>
