<template>
  <div>
    <div>
      <div class="swiper-container"  data-space-between='10' data-pagination='.swiper-pagination' data-autoplay="1000">
        <div class="swiper-wrapper" style="line-height:0px">
          <div class="swiper-slide" v-for="item in hotData.banner">
            <a href="geren-index8.html">
              <img src="/static/images/rrr.jpg" style="width:100%" alt="">
            </a>
          </div>
        </div>
        <div class="swiper-pagination" style="bottom:4px;" ></div>
      </div>
    </div>
    <div>
      <div class="weui_cells weui_cells_access" style="margin-top:0px; font-size:14px">
        <router-link class="weui_cell" :to="{ path: 'groupAll' }" append>
          <div class="weui_cell_bd weui_cell_primary">
            <p>热门推荐</p>
          </div>
          <div class="weui_cell_ft" style="font-size:12px">18个</div>
        </router-link>
      </div>
      <div class="custom-switch" style="padding:0px 0px; background-color:#fff; overflow:hidden">
        <div class="switch_slider" id="loopImgDiv" style="padding-bottom: 0px; padding-left: 2%; padding-top: 2%; padding-bottom: 2%; padding-right: 0px; background: #fff;">
          <div class="inner">
            <div class="switch-container">
              <div id="wrapperPanel" class="swiper-wrapper" style="height: auto;">
                <subLoading :loading="loading" :isShowImage="isShowImage" :message="message"></subLoading>
                <div class="swiper-slide" v-for="item in hotData.recommended" style="width: auto;">
                  <router-link  :to="{ path: 'groupList/10' }" append>
                    <div class="custom-image-mask">
                      <span class="bn">{{item.title}}</span>
                      <span class="bna">{{item.num}}人已关注</span>
                      <div class="masksd"></div>
                      <img  src="/static/images/a1.jpg" style="width:100%; "/>
                    </div>
                  </router-link>
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
  import Swiper from 'swiper'
  import { getBanner } from '../../apis/circle'
  import subLoading from '../../components/common/loading'
  import { hideLoading,errorTip } from '../../apis/common/actions'
  export default {
    data () {
      return {
        hotData:{
          banner:[],
          recommended:[]
        },
        loading:true,
        isShowImage:true,
        message:""
      }
    },
    components: {
      subLoading
    },
    created () {
      let $this=this
      getBanner()
        .then(function (data) {
          $this.hotData=data;
          hideLoading($this)
          $this.$nextTick(() => {
            let mySwiper = new Swiper('.swiper-container', {
              loop: true,
              autoplay: 3000
            })
            let mySwiper2 = new Swiper('.switch-container', {
              pagination: '.swiper-pagination',
              slidesPerView:2.5,
              paginationClickable: true,
              spaceBetween: 10,
              freeMode: true,
              onInit: function (mySwiper2) {

              }
            });
          })
        })
        .catch(function () {
          errorTip($this)
        })
    },
  }
</script>
<style>
  @import 'http://resali.huobanplus.com/cdn/swiper/3.3.1/css/swiper.min.css';
</style>
