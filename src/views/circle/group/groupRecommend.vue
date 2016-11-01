<template>
  <div class="_full_router ddbg">
    <div class="_full_inner">
      <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage" :message="errorStatus.message"></subLoading>
      <div class="qbxiaozu scrollable-content">
        <ul>
          <li v-for='item in suggestList'>
            <a :href="item.url">
              <div class='custom-image-mask'>
                <span class="bn">{{item.title}}</span>
                <span class="bna">{{item.num}}人已关注</span>
                <div class="masksd"></div>
                <img :src="item.pictureUrl" :alt="item.title" style="width:100%;" />
              </div>
            </a>
          </li>      
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {fetchSuggestList} from '../../../apis/circle';
  import subLoading from '../../../components/common/loading';
  import {hideLoading, errorTip,errorTipMessage} from '../../../apis/common/actions';

  //import {mapGetters,mapActions} from 'vuex';

  export default{
    data:function(){
      return{    
        errorStatus:{
          loading:true,
          isShowImage:true,
          message:"",
        },
        suggestList:[],
      }
    },
    components:{
      subLoading,
    },
    computed:{
      //...mapGetters({suggestList:'getSuggestList'})
    },
    methods:{
      //...mapActions({fetchSuggestList:'fetchSuggestList'})
    },

    created() {
      let $this = this;

      fetchSuggestList()
      .then(
        (response)=>{
          this.suggestList= response;
          hideLoading($this);
        })
      .catch(error=>{
        //alert(error);
        //$this.errorStatus.message = error.message;
        //hideLoading($this);
        errorTipMessage($this,error.message);
        });

    },
    activated(){
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true);    
      this.$emit('update-searchbar',false);
      this.$emit('update-header',false);
    },
    deactivated() {
      this.$emit('update-decline', false);
      this.$emit('update-searchbar',true);
      this.$emit('update-header',true);
    },

  }
</script>
