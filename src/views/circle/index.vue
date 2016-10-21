<!--suppress ALL -->
<template>
  <div>
    <div class="_full_inner fonthui _effect" :class="{'_effect--30':decline}">
      <circleHeader></circleHeader>
      <circleSearch></circleSearch>
      <div class="scrollable-content padding-bottom-100">
            <circleBanner></circleBanner>
            <circleGroup></circleGroup>
      </div>
    </div>
    <transition name="fade">
      <keep-alive>
        <router-view  v-on:update-decline="update"  class="cover-transition"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  import circleBanner from '../../components/circle/circle-banner'
  import circleGroup from '../../components/circle/circle-group'
  import circleHeader from '../../components/circle/header'
  import circleSearch from '../../components/circle/search'
  export default {
    data() {
      return {
        decline: false,
      }
    },
    methods:{
      update:function (_decline) {
        this.decline=_decline
      }
    },
    components: {
      circleHeader,
      circleBanner,
      circleGroup,
      circleSearch
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .35s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
