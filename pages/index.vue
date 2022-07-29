<template lang="pug">
main
  HeaderComponent
  SideMenu
  RouterView
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderComponent from '@/layouts/HeaderComponent.vue';
import SideMenu from '@/layouts/SideMenu.vue';

export default Vue.extend({
  name: 'IndexPage',
  middleware: [
    ({ redirect, route }) => {
      if (route.name === 'index') redirect('/exchange');
    },
  ],
  components: {
    HeaderComponent,
    SideMenu,
  }
})
</script>

<style lang="scss">
main {
  display: grid;
  grid-template-areas:
    'header header'
    'aside wrapper';
  grid-template-columns: 224px 1fr;
  grid-template-rows: 64px 1fr;

  header {
    grid-area: header;
  }

  aside {
    grid-area: aside;
  }

  section.wrapper {
    grid-area: wrapper;
  }
}
</style>