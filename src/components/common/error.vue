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
  export default {
    data () {
      return {
        message:""
      }
    },
    methods:{
      init:function () {
        let code=this.$route.params.code
        window.console.log(code)
        switch (code){
          case errors.ERROR_PARAMETER.toString():
            this.message="参数错误"
        }
      }
    },
    created(){
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
