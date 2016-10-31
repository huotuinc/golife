<!--suppress ALL -->
<template>
  <div>
    <div class="weui_cells weui_cells_access xia" style="margin-top:0px; font-size:14px">
      <router-link :to="{ path: 'groupList/10',query:{ customerId:getCustomerID} }" append class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
          <p>我的小组</p>
        </div>
        <div class="weui_cell_ft" style="font-size:12px"></div>
      </router-link>
    </div>
    <scrollerPager :nextMethod="nextMethod" ref="scrollerPager">
      <div class="cont-zhbox" v-for="item in data.list">
        <div class="cont-zhbox-t" style="padding:5px 0px">
          <div class="cont-zhbox-t" style="border:0px; padding:5px 10px 10px 10px">
            <div class="zhbox">
              <div class="zh-tx">
                <img src="/static/images/j2.jpg">
              </div>
             <div class="zh-wz">
                <div class="zh-wz-x">
                  <p class="zh-wz-name" style="color:#333">{{item.name}}</p>
                </div>
                <div class="njk fkfk">
                  <a href="javascript:void(0)" class="guanzudian" v-on:click="open">
                    <div class="weui_btn weui_btn_mini weui_btn_default" style="padding:0px 4px">
                      <img src="/static/images/ddicon/iconfont-gengduo-b.png" style="width:30px; margin-top:-6px"></div>
                  </a>
                </div>
                <div class="zh-wz-time">
                  <span style="float:left">3小时前</span>
                  <span style="float:right"></span>
                  <span style="float:right; margin-right:10px"></span>
                  <p style="clear:both"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="weui_cells wala" style="margin-top:0px">
            <div class="weui_cell" v-for="list in item.list">
              <router-link :to="{ path: 'content/10',query:{ customerId:getCustomerID} }" append class="weui_cell_bd weui_cell_primary">
                <p class="cont-zhbox-a sm">{{list.name}}</p>
                <div class="zhbox mtt">
                  <div class="zh-wz-time">
                    <span style="float:left">{{list.userName}}</span>
                    <span style="float:right">回复{{list.commentsAmount}}</span>
                    <span style="float:right; margin-right:10px">浏览{{list.viewAmount}}</span>
                    <p style="clear:both"></p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </scrollerPager>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <!--<div style="display: none">-->
      <!--<div class="weui_mask weui_actions_mask weui_mask_visible"></div>-->
      <!--<div class="weui_actionsheet  weui_actionsheet_toggle" id="weui_actionsheet"><div class="weui_actionsheet_title">选择操作</div><div class="weui_actionsheet_menu"><div class="weui_actionsheet_cell quxiaoguanzu">取消关注</div><div class="weui_actionsheet_cell jubao">简介</div><div class="weui_actionsheet_cell jubao">举报</div><div class="weui_actionsheet_cell quanbutiezi">更多帖子</div></div><div class="weui_actionsheet_action"><div class="weui_actionsheet_cell weui_actionsheet_cancel">取消</div></div></div>-->
    <!--</div>-->
  </div>
</template>
<script>
  import { getGroupList } from '../../apis/circle'
  import { Actionsheet } from 'mint-ui'
  import scrollerPager from '../../components/pager/scrollerPage'
  import { mapGetters} from 'vuex'
  export default {
    data () {
      return {
        sheetVisible:true,
        actions: [],
        data:{
          list:[]
        }
      }
    },
    computed: mapGetters([
      'getCustomerID'
    ]),
    components: {
      scrollerPager,
      Actionsheet
    },
    methods: {
      open:function () {
        this.actions = [{
          name: '取消关注'
        }, {
          name: '简介'
        }];
        this.actions2 = [{
          name: '举报'
        }, {
          name: '更多帖子'
        }];
      },
      nextMethod:function (lastId) {
        return getGroupList(lastId)
      },
      /**
       * 上拉分页滚动
       * @param parent 上拉组件vue 实例
       * @param id id
       */
      loadTop: function (parent,id) {
        this.$refs.scrollerPager.refreshPager(parent,this,id)
      },
    },
    mounted() {
      this.data.list=this.$refs.scrollerPager.data.list
    }
  }
</script>
