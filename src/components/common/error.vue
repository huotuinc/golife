<template>
  <div class="baocuo app-content-color-white">
    <img class="baocuotb" src="../../../static/images/error/baocuo_tu_9.png"/>
    <p class="baocuo_tishi">
      {{message}}
    </p>
  </div>
</template>
<script>
  import store from '../../vuex/store';
  import * as errors from '../../assets/error-type'
  import { clearCookie } from '../../assets/cookie/cookie'
  export default {
    data () {
      return {
        message:""
      }
    },
    methods:{
      init:function () {
        let code=this.$route.params.code
        if(code==errors.ERROR_PARAMETER){
          this.message='参数错误'
        }else if(code==errors.ERROR_CONFIG){
          this.message='获取配置错误'
        }
      }
    },
    created(){
      clearCookie()
      this.init()
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
    },
  }
</script>
<style scoped>
 @import "../../../static/css/404.css";
</style>
