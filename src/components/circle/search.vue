<template>
  <div class="fudongs">
    <router-link :to="'/search?customerId='+getCustomerID"><img src="/static/images/bjss.png"></router-link>
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
