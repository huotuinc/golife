<template>
  <div class="_full_router ddbg">
    <div class="_full_inner">
      <subLoading :loading="errorStatus.loading" :isShowImage="errorStatus.isShowImage" :message="errorStatus.message"></subLoading>
      <div class="qbxiaozu scrollable-content">
        <ul>
          <li v-for='item in suggestList'>
            <a :href="item.url">
              <div class='custom-image-mask'>
                <span class="bn"></span>
                <span class="bna">{{item.num}}人已关注</span>
                <div class="masksd"></div>
                <img :src="item.pictureUrl" :alt="item.title" style="width:100%;">
              </div>
            </a>
          </li>
          <!--<li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/a1.jpg" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>-->
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

    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true);
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
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
