<template lang="pug">
svg.icon-small-arrow( :class="direction" viewbox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg')
  <path d="M113.769 275.978L341.615 503.821C346.885 509.095 353.92 512 361.421 512C368.922 512 375.957 509.095 381.226 503.821L398.006 487.045C408.924 476.115 408.924 458.349 398.006 447.434L206.677 256.106L398.218 64.5656C403.488 59.2916 406.398 52.2611 406.398 44.7643C406.398 37.2592 403.488 30.2286 398.218 24.9504L381.439 8.17945C376.165 2.90548 369.134 1.97537e-05 361.633 1.90979e-05C354.132 1.84422e-05 347.098 2.90547 341.828 8.17945L113.769 236.23C108.487 241.52 105.585 248.584 105.602 256.094C105.585 263.632 108.487 270.692 113.769 275.978Z" fill="white"/>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IconSmallArrow',
  props: {
    direction: String,
  },
})
</script>

<style lang="scss">
.icon-small-arrow {
  @include rotate_element;
}
</style>