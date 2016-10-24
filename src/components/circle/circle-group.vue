<!--suppress ALL -->
<template>
  <div>
    <div class="weui_cells weui_cells_access xia" style="margin-top:0px; font-size:14px">
      <router-link :to="{ path: 'groupList/10' }" append class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
          <p>我的小组</p>
        </div>
        <div class="weui_cell_ft" style="font-size:12px"></div>
      </router-link>
    </div>
    <subLoading :loading="loading" :isShowImage="isShowImage" :message="message"></subLoading>
    <div class="cont-zhbox" v-for="item in groupData">
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
          </div></div>
        <div class="weui_cells wala" style="margin-top:0px">
          <div class="weui_cell" v-for="list in item.list">
            <div class="weui_cell_bd weui_cell_primary">
              <p class="cont-zhbox-a sm">{{list.name}}</p>
              <div class="zhbox mtt">
                <router-link :to="{ path: 'content/10' }" append class="zh-wz-time">
                  <span style="float:left">{{list.userName}}</span>
                  <span style="float:right">回复{{list.commentsAmount}}</span>
                  <span style="float:right; margin-right:10px">浏览{{list.viewAmount}}</span>
                  <p style="clear:both"></p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: none">
      <div class="weui_mask weui_actions_mask weui_mask_visible"></div>
      <div class="weui_actionsheet  weui_actionsheet_toggle" id="weui_actionsheet"><div class="weui_actionsheet_title">选择操作</div><div class="weui_actionsheet_menu"><div class="weui_actionsheet_cell quxiaoguanzu">取消关注</div><div class="weui_actionsheet_cell jubao">简介</div><div class="weui_actionsheet_cell jubao">举报</div><div class="weui_actionsheet_cell quanbutiezi">更多帖子</div></div><div class="weui_actionsheet_action"><div class="weui_actionsheet_cell weui_actionsheet_cancel">取消</div></div></div>
    </div>
  </div>
</template>
<script>
  import { getGroup } from '../../apis/circle'
  import subLoading from '../../components/common/loading'
  import { hideLoading,errorTip } from '../../apis/common/actions'
  export default {
    data () {
      return {
        groupData:[],
        loading:true,
        isShowImage:true,
        message:""
      }
    },
    components: {
      subLoading
    },
    methods: {
      open:function () {
        require("../../../static/js/jquery-weui")
        $.actions({
          title: "选择操作",
          onClose: function() {
            console.log("close");
          },
          actions: [
            {
              text: "取消关注",
              className: "quxiaoguanzu",
            },
            {
              text: "简介",
              className: "jubao",

            },
            {
              text: "举报",
              className: "jubao",

            },
            {
              text: "更多帖子",
              className: 'quanbutiezi',
            }
          ]
        });
      }
    },
    created () {
      let $this=this
      getGroup()
        .then(function (data) {
          $this.groupData=data;
          hideLoading($this)
        })
        .catch(function (error) {
          errorTip($this)
        })
    },
  }
</script>
