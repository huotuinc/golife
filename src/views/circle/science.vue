<template>
  <div>
    <!--<div class="_full_inner fonthui _effect" :class="{'_effect&#45;&#45;30':decline}">-->
    <div class="fonthui">
      <circleSearch></circleSearch>
      <circle-header></circle-header>
      <div class="scrollable-content" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :auto-Fill="false"  top-Distance="20" @top-status-change="handleTopChange"
                     :top-method="loadTop"
                     ref="loadmore">
          <div slot="top" class="mint-loadmore-top">
            <span v-show="loadStatus.topStatus !== 'loading'" :class="{ 'is-rotate': loadStatus.topStatus === 'drop' }">↓</span>
            <span v-show="loadStatus.topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
          <scrollerPager :nextMethod="nextMethod" ref="scrollerPager">
            <div class="cont-zhbox" v-for="item in data.list">
              <div class="cont-zhbox-t">
                <router-link :to="{ path: 'content/10' }" append class="bz">
                  <p class="cont-zhbox-a"><b>{{item.name}}</b></p>
                  <p class="cont-zhbox-img"><img src="/static/images/j2.jpg"></p>
                  <p class="cont-zhbox-nav"></p>
                </router-link>
                <div class="zhbox">
                  <div class="zh-tx">
                    <img src="/static/images/imgsss.png">
                  </div>
                  <div class="zh-wz">
                    <div class="zh-wz-x">
                      <p class="zh-wz-name">{{item.userName}}<img src="/static/images/ddbm.png" class="zh-wz-name-ico">
                      </p>
                    </div>
                    <div class="njk" v-if="!item.concerned">
                      <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
                    </div>
                    <div class="zh-wz-time">
                      <span style="float:left">{{item.time | timeToNow}}</span>
                      <!--<span style="float:right">{{item.}}</span>-->
                      <span style="float:right; margin-right:10px">浏览{{item.viewAmount}}</span>
                      <p style="clear:both"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </scrollerPager>
        </mt-loadmore>
      </div>
    </div>
    <!--<transition name="custome-fade"-->
    <!--enter-active-class="animated slideInRight"-->
    <!--leave-active-class="animated slideOutLeft">-->
    <transition>
      <keep-alive>
        <router-view v-on:update-decline="update" class="cover-transition"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  import circleHeader from '../../components/circle/header'
  import circleSearch from '../../components/circle/search'
  import scrollerPager from '../../components/pager/scrollerPage'
  import { Loadmore } from 'mint-ui';
  import { getScienceList } from '../../apis/science'
  export default {
    data() {
      return {
        decline: false,
        loadStatus: {
          topStatus: '',
          allLoaded: true,
        },
        wrapperHeight: '',
        data: {
          list: []
        }
      }
    },
    components: {
      circleHeader,
      circleSearch,
      Loadmore,
      scrollerPager
    },
    methods: {
      nextMethod(lastId){
        return getScienceList(lastId)
      },
      handleTopChange(status) {
        this.loadStatus.topStatus = status;
      },
      update: function (_decline) {
        this.decline = _decline
      },
      /**
       * 下拉刷新
       * @param id
       */
      loadTop: function (id) {
        this.$refs.scrollerPager.refresh(this,id)
      },
    },
    mounted() {
      this.data.list=this.$refs.scrollerPager.data.list
      this.wrapperHeight = document.documentElement.clientHeight - (this.$refs.wrapper.getBoundingClientRect().top + 50);
    }
  }
</script>
<!--<style>-->
<!--@import "../../../static/css/animate.css";-->
<!--</style>-->
