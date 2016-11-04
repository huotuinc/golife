<template>
  <div>
    <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage" :message="errorStatus.message"></subLoading>
    <div v-if="!errorStatus.loading">
      <div style="top:0px;margin-top: 0px; z-index:999;width:100%;">
        <div class="cont-zhbox-t diyi">
          <div class="zhbox">
            <div class="zh-tx">
              <img v-bind:src="data.data.pictureUrl">
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
              <img :src="data.top.userHeadUrl">
            </div>
            <div class="zh-wz">
              <div class="zh-wz-x">
                <p class="zh-wz-name"> {{data.top.userName}}<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
              </div>
              <div v-if="!data.top.concerned" class="njk">
                <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
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
    import {fetchTop} from '../../apis/circle';
    import { hideLoading, errorTip } from '../../apis/common/actions.js'
    import subLoading from '../../components/common/loading'
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return{
                data:{
                    circleId:0,
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
                    },
                    {
                    text: "简介",
                    className: "jianjie",

                    },
                    {
                    text: "举报",
                    className: "jubao",

                    }
                ]
                });
            },           

        },
        created(){
            this.init();
        },    
    }

</script>
<style>


</style>
