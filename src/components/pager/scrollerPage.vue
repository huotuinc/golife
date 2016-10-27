<template>
  <div ref="pager">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="scrollStatus.disabled"
         infinite-scroll-distance="100">
      <slot></slot>
    </div>
    <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage"
                :message="errorStatus.message"></subLoading>
    <p v-show="scrollStatus.loading" class="page-infinite-loading" style="text-align: center">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
</template>
<script>
  import {Loadmore} from 'mint-ui';
  import subLoading from '../../components/common/loading'
  import {getScienceList} from '../../apis/science'
  import {hideLoading, errorTip, errorTipMessage} from '../../apis/common/actions'
  import {disabledScroll, undisabledScroll} from '../../assets/pager'
  export default {
    props: ['nextMethod'],
    data() {
      return {
        scrollStatus: {
          disabled: false,
          loading: false,
        },
        errorStatus: {
          loading: true,
          isShowImage: true,
          message: ""
        },
        data: {
          list: [],
          lastId: 0
        }
      }
    },
    components: {
      Loadmore,
      subLoading
    },
    methods: {
      /**
       * 下拉刷新
       */
      refresh:function (parent,id) {
        let $this = this
        undisabledScroll($this);
        $this.data.lastId = 0
        this.nextMethod($this.data.lastId)
          .then(function (data) {
            if (data == null) {
              disabledScroll($this)
              if ($this.data.lastId == 0) {
                errorTipMessage($this, '没有数据')
              }
              parent.loadStatus.allLoaded = true
              parent.$refs.loadmore.onTopLoaded(id);
            } else {
              hideLoading($this)
              $this.data.lastId = data.lastId
              $this.data.list = data.list
              parent.data.list=data.list
              parent.$refs.loadmore.onTopLoaded(id);
            }
          })
          .catch(function (error) {
            errorTip($this)
            parent.loadStatus.allLoaded = true
            parent.$refs.loadmore.onTopLoaded(id);
          })
      },
      /**
       * 上啦滚动分页
       */
      loadMore: function () {
        let $this = this
        this.nextMethod($this.data.lastId)
          .then(function (data) {
            if (data == null) {
              disabledScroll($this)
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
    }
  }
</script>
