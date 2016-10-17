<!--suppress ALL -->
<template>
  <div>
    <circleSearch></circleSearch>
    <circleHeader></circleHeader>
    <circleBanner></circleBanner>
    <circleGroup></circleGroup>
  </div>
</template>
<script>
  import circleBanner from '../../components/circle/circle-banner'
  import circleGroup from '../../components/circle/circle-group'
  import circleHeader from '../../components/circle/header'
  import circleSearch from '../../components/circle/search'
  export default {
    components: {
      circleHeader,
      circleBanner,
      circleGroup,
      circleSearch
    },
  }
</script>
