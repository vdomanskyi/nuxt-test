<template lang="pug">
  header
    Logo
</template>

<script lang="ts">
import Vue from 'vue'

import Logo from '@/common/icons/Logo.vue';

export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    Logo,
  }
})
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;

  position: relative;
  z-index: 10;

  box-shadow: 0 2px 4px rgb(166 166 166 / 50%);

  background-color: $blue;

  padding: 12px 34px;

  svg.logo {
    @include strict_size(32px, 130px);

    path {
      fill: $white;
    }
  }
}
</style>