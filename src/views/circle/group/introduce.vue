<template>
  <div>
    <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage" :message="errorStatus.message"></subloading>
  <div class="title-xz">
    <img :src="model.pictureUrl" width="100%">
    <div class="box">
      <p class="leftname"><i>属性：</i>{{model.categoryName}}</p>
      <p class="leftname"><i>组名：</i>{{model.name}}</p>
      <p class="leftname" style="float:left"><i>组长：</i>
        <div class="zhbox">
          <div class="zh-tx" style="position: inherit;">
            <img v-bind:src="model.leaderHeadUrl">
          </div>
          <div class="zh-wz" style="margin-left: 0px;">
            <div class="zh-wz-x">
              <p class="zh-wz-name">
                <span>{{model.leaderName}}</span>
                <img src="/static/images/ddbm.png" class="zh-wz-name-ico" />
              </p>
            </div>
          </div>
        </div>
      </p>
      <p style="clear:both"></p>
      <p class="leftname"><i>关注：</i>{{model.concermAmount}}人</p>
      <p class="leftname"><i>帖子：</i>{{model.articleAmount}}条</p>
      <p class="leftname"><i>简介：</i>{{model.summary}}</p>
      <p class="leftname"><i>始于：</i>{{model.date | timeToNow }}</p>
    </div>
    <div style="margin:0 auto; text-align:center">
      <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">退出组</a>
    </div>
  </div>
  </div>
</template>
<script>
  //import store from '../../../vuex/store';
  import {introduce} from '../../../apis/circle.js';
  import subLoading from '../../../components/common/loading.vue';
  import {hideLoading,errorTipMessage} from '../../../apis/common/actions.js';


  export default {
    data(){
      return{
        circleId:0,
        model:{},
        errorStatus:{
                      loading:true,
                      isShowImage:true,
                      message:'',
                },
      }
    },
    components:{
      subLoading,
    },
    created(){
       this.circleId = this.$route.params.id;
       introduce(this.circleId)
       .then( json=>{hideLoading(this); this.model = json;})
       .catch(error=>{hideLoading(this); window.console.log(error); errorTipMessage(this,error.message);})
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'app-content-color-white');
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    },
  }
</script>
<style>
  @import "/static/css/weui.min-rsgghot-diy.css";

</style>
