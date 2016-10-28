<template>
  <div ref="pager">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="scrollStatus.disabled"
         infinite-scroll-distance="50">
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
       * 下拉组件和数据组件是统一vue 实例
       *  @param parent 下拉组件(mint-ui 的loadMore组件)或者数据承接的当前vue 实例组件
       *  @param id 下拉组件(mint-ui 的loadMore组件) 的标识ID
       * */
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
       * 下拉刷新分页数据,该方法是当下拉组件和数据对象组件不在同一的vue 实例中
       *  @param loadMoreObject 下拉组件(mint-ui 的loadMore组件)
       *  @param dataObject 数据承接的当前vue 实例组件
       *  @param id 下拉组件(mint-ui 的loadMore组件) 的标识ID
       * */
      refreshPager:function (loadMoreObject,dataObject,id) {
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
              dataObject.loadStatus.allLoaded = true
              loadMoreObject.$refs.loadmore.onTopLoaded(id);
            } else {
              hideLoading($this)
              $this.data.lastId = data.lastId
              $this.data.list = data.list
              dataObject.data.list=data.list
              loadMoreObject.$refs.loadmore.onTopLoaded(id);
            }
          })
          .catch(function (error) {
            errorTip($this)
            dataObject.loadStatus.allLoaded = true
            loadMoreObject.$refs.loadmore.onTopLoaded(id);
          })
      },
      /**
       * 上啦滚动分页
       */
      loadMore: function () {
        let $this = this
        this.scrollStatus.loading=true
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
