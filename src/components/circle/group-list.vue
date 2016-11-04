<template>
  <div>
    <scrollerPager :nextMethod="nextMethod" ref="scrollerPager">
      <div v-for="item in data.list" class="cont-zhbox">
        <div class="cont-zhbox-t">
          <router-link to="/circle/content/10" class="bz">
            <p class="cont-zhbox-a"><b>{{item.name}}</b></p>
            <p class="cont-zhbox-img"><img v-bind:src="item.pictureUrl"></p>
            <p class="cont-zhbox-nav">后台返回的数据缺少这部分信息222</p>
          </router-link>
          <div class="zhbox">
            <div class="zh-tx">
              <img v-bind:src="item.userHeadUrl">
            </div>
            <div class="zh-wz">
              <div class="zh-wz-x">
                <p class="zh-wz-name"> {{item.userName}}<img src="/static/images/ddbm.png" class="zh-wz-name-ico"></p>
              </div>
              <div class="njk" style="display: none">
                <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
              </div>
              <div class="zh-wz-time">
                <span style="float:left">{{item.time | timeToNow }}</span>
                <span style="float:right">回复{{item.commentsAmount}}</span>
                <span style="float:right; margin-right:10px">浏览{{item.viewAmount}}</span>
                <p style="clear:both"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scrollerPager>
  </div>
</template>
<script>

    import {fetchList} from '../../apis/circle.js'
    import scrollerPager from '../../components/pager/scrollerPage.vue'

    export default {
        data(){
            return {
                type:0,
                data:{
                    list:[]
                    },
            }
        },
        components:{
            scrollerPager,
        },
        methods:{   
            setType(type){
                this.type = type;
            },
            loadTop:function( parent , type, id ){
                this.type = type;
                this.$refs.scrollerPager.refreshPager(parent,this,id);
            },
            nextMethod:function(lastId){
                let circleId = this.$route.params.id;
                return fetchList(circleId,this.type, lastId);
            },
        },
        created(){
        },
        mounted(){
            this.data.list = this.$refs.scrollerPager.data.list;
        }
    }
</script>
<style>


</style>
