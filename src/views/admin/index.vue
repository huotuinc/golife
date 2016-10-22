<template>
  <div class="_full_router ddbg scrollable-content">
    <div class="help-tipgg on">
      <p class="liuliu">
        <a href="#">举报</a>
      </p>
    </div>
    <div class="fonthui" style="position:relative">
      <div class="grs">
        <a href="javascript:void(0);" class="z"><img src="/static/images/ddicon/juss.png"  style="width:100%"></a>
        <a href="javascript:void(0);" class="y"><img src="/static/images/ddicon/jubao.png" style="width:100%"></a>
      </div>
      <div class="grsbg" style="background-image: url(/static/images/bolang2.jpg); background-repeat:no-repeat; background-size:100% 100%; background-position:top center">
        <div class="grsjz">
          <div class="grstx">
            <img src="/static/images/mrtx.jpg">
          </div>
        </div>
        <div class="grsname">
          <p style="color:#111; font-size:16px"><b>小猫猫</b></p>
          <p>写句签名吧，让大家更了解你~</p>
        </div>
        <div class="gzann">
          <a href="javascript:;"  class="weui_btn weui_btn_mini weui_btn_default"><img src="/static/images/ddicon/sixin.png">私信</a>
          <a href="javascript:;" style="display:none" class="weui_btn weui_btn_mini weui_btn_default"><img src="/static/images/ddicon/jia.png">关注</a>
          <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default"><img src="/static/images/ddicon/gou.png">已关注</a>
        </div>
        <div class="weui_navbar dfd" style="z-index:12; position: static">
          <a class="weui_navbar_item"> 99999+ 发帖 </a>
          <router-link to="/userCenter/fans/attention" class="weui_navbar_item"> 5 关注 </router-link>
          <router-link to="/userCenter/fans/index" class="weui_navbar_item"> 52213 粉丝 </router-link>
        </div>
      </div>
    </div>
    <!--end-->
    <div class="cont-zhbox">
      <div class="cont-zhbox-t">
        <p class="cont-zhbox-a"><b><span class="zhbox-zd">[置顶]&nbsp;</span><span class="zhbox-zm">[热门]&nbsp;</span>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
        <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
        <p class="cont-zhbox-nav"></p>
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
              <span style="float:left">23小时前</span>
              <span style="float:right">回复329</span>
              <span style="float:right; margin-right:10px">浏览3232</span>
              <p style="clear:both"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont-zhbox">
      <div class="cont-zhbox-t">
        <p class="cont-zhbox-a"><b><span class="zhbox-zd"></span><span class="zhbox-zm">[热门]&nbsp;</span>韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</b></p>
        <p class="cont-zhbox-img"></p>
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
    <!--end-->
  </div>
</template>
<script>
  import store from '../../vuex/store'
  export default {
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
