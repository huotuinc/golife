<template>
    <div class="wihtab _full_router _full_inner ddbg">
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
              <div class="cont-zhbox">
                <div class="cont-zhbox-t">
                  <router-link to="/circle/content/10" class="cont-zhbox-a">
                    <b>
                      <span class="zhbox-zm">[公告]&nbsp;</span>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨
                    </b>
                  </router-link>
                </div>
              </div>
              <div class="cont-zhbox">
                <div class="cont-zhbox-t">
                  <p class="cont-zhbox-a"><b><span class="zhbox-zd">[置顶]&nbsp;</span><span class="zhbox-zm">[热门]&nbsp;</span>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
                  <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                  <p class="cont-zhbox-nav">瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</p>
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
                  <p class="cont-zhbox-a"><b>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
                  <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                  <p class="cont-zhbox-nav">瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</p>
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
    </div>
</template>
<script>
  import store from '../../../vuex/store'
  export default {
    methods:{
      open:function () {
         require("../../../../static/js/jquery-weui")
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
       }
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
