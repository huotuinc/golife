<template>
  <div>
    <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage" :message="errorStatus.message"></subLoading>
    <div v-if="!errorStatus.loading">
      <div style="top:0px;margin-top: 0px; z-index:999;width:100%;">
        <div class="cont-zhbox-t diyi">
          <div class="zhbox">
            <div class="zh-tx">
              <router-link :to="{path:'/introduce/'+ circleId , query:{customerId:getCustomerID}}">
                <img v-bind:src="data.data.pictureUrl">
              </router-link>
            </div>
            <div class="zh-wz">
              <div class="zh-wz-x">
                <p class="zh-wz-name" style="color:#333">{{data.data.name}}</p>
              </div>
              <div class="njk">
                <a href="javascript:void(0)" class="guanzudian-nei" v-on:click="open">
                  <div class="weui_btn weui_btn_mini weui_btn_default"><img src="/static/images/ddicon/iconfont-gengduo-b.png" style="width:26px"></div>
                </a>
              </div>
              <div class="zh-wz-time">
                <span style="float:left">{{data.data.date | timeToNow}}</span>
                <span style="float:right"></span>
                <span style="float:right; margin-right:10px"></span>
                <p style="clear:both"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont-zhbox">
        <div class="cont-zhbox-t">
          <router-link v-for="item in data.noticeList" :to="item.url" class="cont-zhbox-a bz">
            <b>
                <span class="zhbox-zm">[公告]&nbsp;</span>{{item.name}}
            </b><br/>
          </router-link>
        </div>
      </div>
      <div class="cont-zhbox">
        <div class="cont-zhbox-t">
          <router-link :to="{path:'/circle/content/'+data.top.pid, query:{customerId: getCustomerID }}" class="bz">
            <p class="cont-zhbox-a">
              <b>
                        <span class="zhbox-zd">[置顶]&nbsp;</span>
                        <span class="zhbox-zm">[热门]&nbsp;</span>{{data.top.name}}
                      </b>
            </p>
            <p class="cont-zhbox-img"><img :src="data.top.pictureUrl"></p>
            <!--<p class="cont-zhbox-nav">瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</p>-->
          </router-link>
          <div class="zhbox">
            <div class="zh-tx">
              <router-link :to="{path:'/admin/'+data.top.userId , query:{customerId: getCustomerID} }">
                <img :src="data.top.userHeadUrl">
              </router-link>
            </div>
            <div class="zh-wz">
              <div class="zh-wz-x">
                <p class="zh-wz-name"> {{data.top.userName}}<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
              </div>
              <div class="njk">
                <a href="javascript:void(0);" v-on:click="concernOrCancel" class="weui_btn weui_btn_mini weui_btn_default">{{ data.top.concerned? '取消关注':'关注'}}</a>
              </div>
              <div class="zh-wz-time">
                <span style="float:left">{{data.top.time | timeToNow }}</span>
                <span style="float:right"></span>
                <span style="float:right; margin-right:10px"></span>
                <p style="clear:both"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
    import {fetchTop} from '../../apis/circle'
    import {concern,report,concernUser,cancelUser} from '../../apis/user.js'
    import { hideLoading, errorTip } from '../../apis/common/actions.js'
    import subLoading from '../../components/common/loading'
    import {mapGetters} from 'vuex'
    //import 

    export default {
        data(){
            return{
                circleId:0,
                data:{                    
                    data:{},
                    noticeList:[],
                    top:{},                   
                },
                errorStatus:{
                      loading:true,
                      isShowImage:true,
                      message:'',
                },
            }
        },
        computed:{
          ...mapGetters(['getCustomerID']),
        },
        components:{
          subLoading,
        },
        methods:{
            init:function(){

                this.errorStatus.loading = true;
                this.errorStatus.isShowImage = true;
                this.errorStatus.message= '';

                this.circleId = this.$route.params.id;
     
                return fetchTop(this.circleId)
                .then(response=>{ 
                    hideLoading(this);
                    this.data = response;
                    })
                .catch(error=>{ 
                  window.console.log(error.message); 
                  this.errorStatus.message= error.messaga;
                  errorTip(this);
                  //Promise.reject( error); 
                  });

            },

            open:function () {
              let $this = this;
              require("../../../static/js/jquery-weui")
                $.actions({
                title: "选择操作",
                onClose: function() {
                    console.log("close");
                },
                actions: [
                    {
                      text: "关注",
                      className: "guanzu",
                      onClick:function(){
                        $.showLoading('关注中...');
                        concern($this.circleId)
                        .then(json=>{
                          $.hideLoading();
                          $.toast('关注成功','text');
                        })
                        .catch(error=>{
                          $.hideLoading();
                          $.toast('关注失败','text');
                        })
                      },
                    },
                    {
                      text: "简介",
                      className: "jianjie",
                      onClick:function(){
                      $this.$router.push({path:'/introduce/'+$this.circleId, query:{customerId:$this.getCustomerID}});
                      },
                    },
                    {
                      text: "举报",
                      className: "jubao",
                      onClick:function(){
                        $.showLoading('举报中...');
                        let type = 0;
                        let note = '圈子中有不健康的内容';

                        report(type , $this.circleId, note)
                        .then(json=>{
                          $.hideLoading();
                          $.toast('举报成功','text');
                        })
                        .catch(error=>{
                          $.hideLoading();
                          $.toast('举报失败','text');
                        })
                      }
                    }
                ]
                });
            },           

            concernOrCancel:function(){
              if(this.data.top.concerned){
                this.cancelUser();
              }else{
                this.concernUser();
              }
            },

            //关注用户
            concernUser:function(){
              require('../../../static/js/jquery-weui');
               $.showLoading('关注中...');
               let userId =this.data.top.userId;
               window.console.log("userid="+userId);
               concernUser(userId)
               .then(json=>{
                 $.hideLoading();
                 $.toast('关注成功','text');
                 this.data.top.concerned=true;
               })
               .catch(error=>{
                  $.hideLoading();
                  $.toast('关注失败','text');
               })
            },

            cancelUser:function(){
                require('../../../static/js/jquery-weui');
                $.showLoading('取消关注中...');
                let userId =this.data.top.userId;
                window.console.log("userid="+userId);
                cancelUser(userId)
                .then(json=>{
                  $.hideLoading();
                  $.toast('取消关注成功','text');
                  this.data.top.concerned=false;
                })
                .catch(error=>{
                  $.hideLoading();
                  $.toast('取消关注失败','text');
                })
            },

        },
        created(){
            this.init();
        },    
    }

</script>
<style>


</style>
