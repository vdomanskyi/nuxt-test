<template lang="pug">
section.wrapper
  .empty-page
    Spinner
    h1 Сторінка в розробці
</template>

<script lang="ts">
import Vue from 'vue'

import Spinner from '@/common/Spinner.vue';

export default Vue.extend({
  name: 'EmptyPage',
  components: {
    Spinner,
  }
})
</script>

<style lang="scss">
.empty-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  h1 {
    margin: {
      top: 16px;
    };
  }
}
</style>