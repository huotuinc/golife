<template>
  <div>
    <!--<div class="_full_inner fonthui _effect" :class="{'_effect&#45;&#45;30':decline}">-->
    <div class="fonthui">
      <circleSearch></circleSearch>
      <circle-header></circle-header>
      <div class="scrollable-content" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :auto-Fill="false" bottom-Distance="20" top-Distance="20" @top-status-change="handleTopChange"
                     :top-method="loadTop"
                     ref="loadmore">
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="scrollStatus.disabled"
               infinite-scroll-distance="100">
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
          </div>
          <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage"
                      :message="errorStatus.message"></subLoading>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="loadStatus.topStatus !== 'loading'" :class="{ 'is-rotate': loadStatus.topStatus === 'drop' }">↓</span>
            <span v-show="loadStatus.topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
          <p v-show="scrollStatus.loading" class="page-infinite-loading" style="text-align: center">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
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
  import {Loadmore} from 'mint-ui';
  import subLoading from '../../components/common/loading'
  import { getScienceList } from '../../apis/science'
  import { hideLoading, errorTip, errorTipMessage} from '../../apis/common/actions'
  import { disabledScroll, undisabledScroll } from '../../assets/pager'
  export default {
    data() {
      return {
        decline: false,
        loadStatus: {
          topStatus: '',
          allLoaded: true,
        },
        scrollStatus: {
          disabled: false,
          loading: false,
        },
        errorStatus: {
          loading: true,
          isShowImage: true,
          message: ""
        },
        wrapperHeight: '',
        data: {
          list: [],
          lastId: 0
        }
      }
    },
    components: {
      circleHeader,
      circleSearch,
      Loadmore,
      subLoading
    },
    methods: {
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
        undisabledScroll(this);
        this.data.lastId = 0
        let $this = this
        $this.loadStatus.allLoaded = false
        getScienceList($this.data.lastId)
          .then(function (data) {
            if (data == null) {
              errorTipMessage($this, '没有数据')
              $this.loadStatus.allLoaded = true
            } else {
              hideLoading($this)
              $this.data.lastId = data.lastId
              $this.data.list = data.list
              $this.$refs.loadmore.onTopLoaded(id);
            }
          })
          .catch(function () {
            $this.loadStatus.topStatus = ''
            errorTip($this)
            $this.loadStatus.allLoaded = true
          })
      },
      /**
       * 滚动分页
       */
      loadMore: function () {
        let $this = this
        this.scrollStatus.loading = true;
        getScienceList($this.data.lastId)
          .then(function (data) {
            if (data == null) {
              $this.disabledScroll()
              if ($this.data.lastId == 0) {
                errorTipMessage($this, '没有数据')
              }
            } else {
              $this.data.lastId = data.lastId
              for (let i = 0; i < data.list.length; i++) {
                $this.data.list.push(data.list[i])
              }
              undisabledScroll($this);
              hideLoading($this)
            }
          })
          .catch(function (error) {
            if ($this.data.lastId == 0) {
              errorTip($this, '没有数据')
            }
            disabledScroll($this)
          })
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - (this.$refs.wrapper.getBoundingClientRect().top + 50);
    }
  }
</script>
<!--<style>-->
<!--@import "../../../static/css/animate.css";-->
<!--</style>-->
