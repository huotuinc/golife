<template>
  <div class="wihtab _full_router _full_inner ddbg">
    <div class="weui_navbar" style="position:initial; top:0px; z-index:999; margin-bottom: 1px;">
      <a href="javascript:void(0)" v-on:click="changeTab('newTab')" v-bind:class="{weui_bar_item_on:newTab}" class="weui_navbar_item"> 最新 </a>
      <a href="javascript:void(0)" v-on:click="changeTab('hotTab')" v-bind:class="{weui_bar_item_on:hotTab}" class="weui_navbar_item"> 最热 </a>
    </div>
    <div class='scrollable-content' ref="group" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore top-Distance="20" @top-status-change="handleTopChange" :top-method="loadTop" :bottom-all-loaded="loadStatus.allLoaded"
        ref="loadmore">
        <groupTop ref="groupTop"></groupTop>
        <groupList ref="groupList"></groupList>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="loadStatus.topStatus !== 'loading'" :class="{ 'is-rotate': loadStatus.topStatus === 'drop' }">↓</span>
          <span v-show="loadStatus.topStatus === 'loading'"><mt-spinner type="snake"></mt-spinner></span>
        </div>
      </mt-loadmore>
    </div>
  </div>
  </div>
  <!--<div class="wihtab _full_router _full_inner ddbg">
          <div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
            <a class="weui_navbar_item weui_bar_item_on"> 最新 </a>
            <a class="weui_navbar_item"> 最热 </a>
          </div>
          <div style="position: fixed; top:42px; z-index:999;width:100%;">
            <div class="cont-zhbox-t diyi">
              <div class="zhbox">
                <div class="zh-tx">
                  <img src="/static/images/j2.jpg">
                </div>
                <div class="zh-wz">
                  <div class="zh-wz-x">
                    <p class="zh-wz-name" style="color:#333">养生馆</p>
                  </div>
                  <div class="njk">
                    <a href="javascript:void(0)" class="guanzudian-nei" v-on:click="open">
                      <div class="weui_btn weui_btn_mini weui_btn_default"><img src="/static/images/ddicon/iconfont-gengduo-b.png" style="width:26px"></div>
                    </a>
                  </div>
                  <div  class="zh-wz-time">
                    <span style="float:left">3小时前</span>
                    <span style="float:right"></span>
                    <span style="float:right; margin-right:10px"></span>
                    <p style="clear:both"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="scrollable-content">
              <p style="height: 84px;"></p>
              <div class="cont-zhbox">
                <div class="cont-zhbox-t">
                  <router-link to="/circle/content/10" class="cont-zhbox-a bz">
                    <b>
                      <span class="zhbox-zm">[公告]&nbsp;</span>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨
                    </b>
                  </router-link>
                </div>
              </div>
              <div class="cont-zhbox">
                <div class="cont-zhbox-t">
                  <router-link to="/circle/content/10" class="bz">
                    <p class="cont-zhbox-a">
                      <b>
                        <span class="zhbox-zd">[置顶]&nbsp;</span>
                        <span class="zhbox-zm">[热门]&nbsp;</span>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨
                      </b>
                    </p>
                    <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                    <p class="cont-zhbox-nav">瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</p>
                  </router-link>
                  <div class="zhbox">
                    <div class="zh-tx">
                      <img src="/static/images/imgsss.png">
                    </div>
                    <div class="zh-wz">
                      <div class="zh-wz-x">
                        <p class="zh-wz-name"> 官方发布<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
                      </div>
                      <div class="njk">
                        <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
                      </div>
                      <div  class="zh-wz-time">
                        <span style="float:left">23小时前</span>
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
                  <router-link to="/circle/content/10" class="bz">
                    <p class="cont-zhbox-a"><b>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
                    <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                    <p class="cont-zhbox-nav">瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</p>
                  </router-link>
                  <div class="zhbox">
                    <div class="zh-tx">
                      <img src="/static/images/imgsss.png">
                    </div>
                    <div class="zh-wz">
                      <div class="zh-wz-x">
                        <p class="zh-wz-name"> 官方发布<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
                      </div>
                      <div class="njk" style="display:none">
                        <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
                      </div>
                      <div  class="zh-wz-time">
                        <span style="float:left">09-10 22:00</span>
                        <span style="float:right">回复32</span>
                        <span style="float:right; margin-right:10px">浏览38281</span>
                        <p style="clear:both"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </div>-->
</template>
<script>
  import {Loadmore} from 'mint-ui'
  import groupTop from '../../../components/circle/group-top.vue'
  import groupList from './../../../components/circle/group-list.vue'

  export default {
    data(){
      return {
        newTab:true,
        hotTab:false,
        currentTab:'newTab',   
        wrapperHeight:'',    
        type: 0, 
        loadStatus:{
          topStatus: '',          
          allLoaded: false,
        },   
      }
    },
    components:{
      groupTop,
      groupList,
      Loadmore,
    },
    methods:{
      changeTab:function(tab){
        this.newTab = tab == 'newTab';
        this.hotTab = tab == 'hotTab';
        this.currentTab = tab;
        this.type = tab =='newTab'? 0:1;
        this.$refs.groupList.setType(this.type);
        this.loadTop()
      },
      handleTopChange(status){
        this.loadStatus.topStatus = status;
      },
      loadTop:function(id){
        this.$refs.groupTop.init().then(()=>{this.$refs.loadmore.onTopLoaded(id)});
        this.$refs.groupList.loadTop(this , this.type , id );
      },
    },      
    created(){
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true);
    },
    deactivated() {
      this.$emit('update-decline', false)
    },
    mounted(){
      this.wrapperHeight = document.documentElement.clientHeight - (this.$refs.group.getBoundingClientRect().top );
    }
  }
</script>
