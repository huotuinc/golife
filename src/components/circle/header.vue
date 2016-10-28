<template>
  <div class="wihtab">
    <div class="weui_tab">
      <div class="weui_navbar" style="position: fixed; top:0px; z-index:999">
        <router-link :to="'/hot?customerId='+getCustomerID"  active-class="weui_bar_item_on"  class="weui_navbar_item">热门</router-link>
        <router-link :to="'/circle?customerId='+getCustomerID" active-class="weui_bar_item_on" class="weui_navbar_item"> 圈子 </router-link>
        <router-link :to="'/attention?customerId='+getCustomerID" active-class="weui_bar_item_on" class="weui_navbar_item"> 关注 </router-link>
        <router-link :to="'/science?customerId='+getCustomerID" active-class="weui_bar_item_on" class="weui_navbar_item"> 科普 </router-link>
      </div>
      <p style="height:42px"></p>
    </div>
  </div>
  </div>
</template>
<script>
  import { mapGetters} from 'vuex'
  export default {
    computed: mapGetters([
      'getCustomerID'
    ])
  }
</script>
