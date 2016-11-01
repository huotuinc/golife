<template>
  <div class="fudongs">
    <router-link :to="'/write?customerId='+getCustomerID"><img src="/static/images/bjbj.png"></router-link>
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
