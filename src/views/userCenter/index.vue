<template>
  <div>
    <div  class="_full_inner _effect component-find" :class="{'_effect--30':decline}">
      <div class="fonthui" style="position:relative">
        <div class="grs">
          <a href="javascript:void(0);" class="z"><img src="/static/images/ddicon/zzdxx.png"  style="width:100%"></a>
          <a href="javascript:void(0);" class="y"><img src="/static/images/ddicon/sszz.png" style="width:100%"></a>
        </div>
        <div class="grsbg" style="background-image: url(/static/images/bolang.jpg); background-repeat:no-repeat; background-size:100% 100%; background-position:top center">
          <div class="grsjz">
            <div class="grstx">
              <img src="/static/images/mrtx.jpg">
            </div>
          </div>
          <div class="grsname">
            <p style="color:#111; font-size:16px"><b>小猫猫</b></p>
            <p>写句签名吧，让大家更了解你~</p>
          </div>
          <div class="weui_navbar dfd" style="z-index:12; position: static">
            <a class="weui_navbar_item"> 99999+ 发帖 </a>
            <router-link to="/userCenter/fans/attention/" class="weui_navbar_item"> 5 关注 </router-link>
            <router-link to="/userCenter/fans/index" class="weui_navbar_item"> 52213 粉丝 </router-link>
          </div>
        </div>
      </div>
      <!--end-->
      <div class="gerendiy">
        <div class="weui_cells weui_cells_access">
          <a class="weui_cell" href="javascript:void(0);">
            <div class="weui_cell_bd weui_cell_primary">
              <p>我的钱包</p>
            </div>
            <div class="weui_cell_ft" style="font-size:12px">
              充值、提现
            </div>
          </a>
        </div>
        <div class="dailiren-s-ka duu">
          <ul class="dailiren-float-ul ka  pjf_4ge ">
            <li>
              <a href="javascript:void(0);">
                <p class="sj">3531<span style="font-size:0.5em">.93</span></p>
                <p>账户余额</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p class="sj">6530</p>
                <p>可用积分</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p class="sj">875</p>
                <p>待定积分</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p class="sj">3411<span style="font-size:0.5em">.00</span></p>
                <p>小金库</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="weui_cells weui_cells_access">
          <a class="weui_cell" href="javascript:void(0);">
            <div class="weui_cell_bd weui_cell_primary">
              <p>我的订单</p>
            </div>
            <div class="weui_cell_ft" style="font-size:12px">
              查看全部订单
            </div>
          </a>
        </div>
        <div class="dailiren-s-ka duu">
          <ul class="dailiren-float-ul ka  pjf_4ge ">
            <li>
              <a href="javascript:void(0);">
                <p>
                  <img src="/static/images/ddicon/g4.png" class="ccgg">
                </p>
                <p class="number b">50</p>
                <p>待付款</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p><img src="/static/images/ddicon/g3.png" class="ccgg">
                </p>
                <p class="number">0</p>
                <p>待收货</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p ><img src="/static/images/ddicon/g2.png" class="ccgg"></p>
                <p class="number ">0</p>
                <p>已收货</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p ><img src="/static/images/ddicon/g1.png" class="ccgg"></p>
                <p class="number b">5</p>
                <p>售后</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="weui_cells weui_cells_access">
          <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
              <p>常用功能</p>
            </div>
          </div>
        </div>
        <div class="dailiren-s-ka line">
          <ul class="dailiren-float-ul ka  pjf_4ge ">
            <li>
              <a href="javascript:void(0);">
                <p>
                  <img src="/static/images/ddicon/shouc.png" class="ccgg">
                </p>
                <p class="number zs"></p>
                <p>我的收藏</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p><img src="/static/images/ddicon/g.3.png" class="ccgg">
                </p>
                <p class="number zs"></p>
                <p>优惠券</p>
              </a>
            </li>
            <li>
              <router-link to="/userCenter/message">
                <p ><img src="/static/images/ddicon/g.5.png" class="ccgg"></p>
                <p class="number zs b">11</p>
                <p>最新消息</p>
              </router-link>
            </li>
            <li>
              <a href="javascript:void(0);">
                <p ><img src="/static/images/ddicon/x6.png" class="ccgg"></p>
                <p class="number zs"></p>
                <p>积分</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--end-->
    </div>
    <transition name="fade">
      <keep-alive>
      <router-view  v-on:update-decline="update" class="cover-transition"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        decline: false,
      }
    },
    methods:{
      update:function (_decline) {
        this.decline=_decline
      }
    },
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .35s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
