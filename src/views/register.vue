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
          <input class="weui_input" type="tel" v-model="phone" name="phone" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="weui_cell weui_vcode">
        <div class="weui_cell_hd margt">
          <label class="weui_label">
            <img src="/static/images/yzm@3.png" width="25px;">
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="number" v-model="code" placeholder="请输入验证码">
        </div>
        <div class="weui_cell_ft">
          <a href="javascript:;" id="js-register-sendCode" v-on:click="send()" class="weui_btn weui_btn_mini weui_btn_primary">获取验证码</a>
        </div>
      </div>
      <div class="weui_cell">
        <div class="weui_cell_hd margt"><label class="weui_label"><img src="/static/images/mima@3.png" width="25px;"></label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="password" v-model="passWord" placeholder="输入密码">
        </div>
      </div>
      <div class="weui_cell">
        <div class="weui_cell_hd margt"><label class="weui_label"><img src="/static/images/mima@3.png" width="25px;"></label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="password" v-model="repeatPassWord" placeholder="确认密码">
        </div>
      </div>
    </div>
    <p class="nomessage">
      <router-link :to="{ path: 'login',query:{ customerId:getCustomerID} }" >已经有帐号?立即登录</router-link>
    </p>
    <p style="height:35px"></p>
    <a href="javascript:;" v-on:click="register" class="weui_btn weui_btn_primary anniu ">立即注册</a>
  </div>
</template>
<script>
  import { mapGetters} from 'vuex'
  import store from '../vuex/store'
  import * as utils from '../assets/utils'
  import { sendCode, registerByMobile } from '../apis/user'
  import * as status from '../apis/common/apiStatus'
  export default {
    data(){
      return{
        phone:'',
        code:'',
        passWord:'',
        repeatPassWord:'',
        customerId:''
      }
    },
    computed: mapGetters([
      'getCustomerID',
      'getWxOAuherInfo'
    ]),
    methods:{
      send:function () {
        if(utils.isEmpty(this.phone)){
          $.toptip("请输入手机号码", 'warning');
          return
        }
        if(!utils.isMobile(this.phone)){
          $.toptip("手机号码格式不正确", 'warning');
          return
        }
        sendCode(this.customerId,this.phone,1).then(function (data) {
           if(data.code==status.SUCCESS){
             let dom=$("#js-register-sendCode")
             utils.lastTime(dom,'weui_btn_disabled',90)
           }else{
             $.toptip(data.message, 'warning');
           }
        }).catch(function () {
          $.toptip('服务器异常,请稍后再试', 'error');
        })
      },
      validation:function () {
        if(utils.isEmpty(this.phone)){
          $.toptip("请输入手机号码", 'warning');
          return false
        }
        if(!utils.isMobile(this.phone)){
          $.toptip("手机号码格式不正确", 'warning');
          return false
        }
        if(utils.isEmpty(this.code)){
          $.toptip("请输入验证码", 'warning');
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
        if(utils.isEmpty(this.repeatPassWord)){
          $.toptip("请重新输入密码", 'warning');
          return false
        }
        if(utils.isEqual(this.repeatPassWord,this.passWord)){
          $.toptip("两次输入的密码不一致", 'warning');
          return false
        }
        return true
      },
      register:function () {
         if(this.validation()){
           let OAuthObject=this.getWxOAuherInfo
           let openId=OAuthObject.openId,nickName=OAuthObject.wxNick,imageUrl=OAuthObject.wxHeader
           registerByMobile(
             this.customerId,
             this.phone,
             this.code,
             this.passWord,
             openId,
             nickName,
             imageUrl
           ).then(function (data) {
              if(data.code==status.SUCCESS){
                $.toptip("注册成功", 'success');
                //TODO 做跳转操作
              }else{
                $.toptip(data.message, 'warning');
              }
           }).catch(function () {
             $.toptip('服务器异常,请稍后再试', 'error');
           })
         }
      }
    },
    created(){
      this.customerId=this.getCustomerID
      require("../../static/js/weui-0.8.2/jquery-weui");
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'app-content-color-white');
    },
  }
</script>
<style scoped>
  @import "/static/css/weui.min-rsgghot-diy.css";
</style>
