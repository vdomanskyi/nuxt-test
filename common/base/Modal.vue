<template>
  <div class="modal">
    <div class="modal__content" v-click-outside="closeModal">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import vClickOutside from 'v-click-outside';

export default Vue.extend({
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    closeModal(): void {
      this.$emit('close');
    }
  }
})
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;

  overflow-y: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: {
    top: 5.5rem;
    left: 2.75rem;
    right: 2.75rem;
    bottom: 1.75rem;
  };

  background-color: rgba(0,0,0,.7);

  &__content {
    width: auto;

    margin: auto;

    border-radius: 4px;

    min-height: 150px;
    min-width: 150px;

    padding: 20px;

    background-color: $white;

    &--close {
      display: flex;
      justify-content: flex-start;

      width: 100%;

      button {
        @include strict_size($modal_close_size, $modal_close_size);

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
