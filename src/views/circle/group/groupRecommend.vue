<template>
  <div class="_full_router ddbg">
    <div class="_full_inner">

      <!--<subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage" :message="errorStatus.message"></subLoading>-->
      
      <div ref='wrapper' class="qbxiaozu scrollable-content" :style="{height: wrapperHeight + 'px' }">
          <mt-loadmore top-Distance="20" @top-status-change="handleTopChange" :top-method="loadTop" :bottom-all-loaded="loadStatus.allLoaded" ref="loadmore">
          
          <scrollPager :nextMethod="loadMore" ref='scrollPager'>
              <ul>
                <li v-for='item in data.list'>
                  <router-link :to="item.url">
                    <div class='custom-image-mask'>
                      <span class="bn">{{item.title}}</span>
                      <span class="bna">{{item.num}}人已关注</span>
                      <div class="masksd"></div>
                      <img :src="item.pictureUrl" :alt="item.title" style="width:100%;" />
                    </div>
                  </router-link>
                </li>
              </ul>
          </scrollpager>

          <div slot="top" class="mint-loadmore-top">
            <span v-show="loadStatus.topStatus !== 'loading'" :class="{ 'is-rotate': loadStatus.topStatus === 'drop' }">↓</span>
            <span v-show="loadStatus.topStatus === 'loading'"><mt-spinner type="snake"></mt-spinner></span>
          </div>

          </mt-loadmore>
      </div>
    </div>
  </div>
</template>
<script>
  import {fetchSuggestList} from '../../../apis/circle';
  import {getCustomerID} from '../../../vuex/getters.js';
  import {mapGetters} from 'vuex';
  import subLoading from '../../../components/common/loading';
  import scrollPager from '../../../components/pager/scrollerPage.vue';
  import {hideLoading, errorTip,errorTipMessage} from '../../../apis/common/actions';

  //import {mapGetters,mapActions} from 'vuex';

  export default{
    data:function(){
      return{
        // errorStatus:{
        //   loading:true,
        //   isShowImage:true,
        //   message:"",
        // },
        wrapperHeight:0,
        loadStatus:{
          topStatus: '',          
          allLoaded: false,
        },  
        data:{
          list:[],
          
        },
      }
    },
    components:{
      subLoading,
      scrollPager,
    },
    computed:{
      ...mapGetters({getCustomerID}),
    },
    methods:{

      handleTopChange(status){
        this.loadStatus.topStatus = status;
      },

      loadTop:function(id){        
        window.console.log("loadTop");
        this.$refs.scrollPager.refreshPager(this,this,id);        
      },

      loadMore:function(lastId){
        window.console.log("loadMore");          
        //window.console.log("customerId="+customerId);
        return fetchSuggestList( lastId);
        //.then(
        //(response)=>{
        //  this.suggestList= response;
        //  hideLoading($this);
        //})
        //.catch(error=>{
        //  errorTipMessage($this,error.message);
        //});

      },
    },

    activated(){
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true);
    },
    deactivated() {
      this.$emit('update-decline', false);
    },
    mounted(){
      window.console.log('mounted');
      this.wrapperHeight = document.documentElement.clientHeight - (this.$refs.wrapper.getBoundingClientRect().top );     
      this.data.list = this.$refs.scrollPager.data.list;
    },

  }
</script>
