<template>
<div class="convert-input">
  <input ref="input" autocomplete="off" type="text" v-on:keypress="numbersOnly" :value="$props.value"  @input="handleInput">

  <div class="convert-input__currency">
    <button class="selected-currency" @click="showList = !showList">
      {{ currency }} <IconSmallArrow :direction="showList ? 'top' : 'bottom'" />
    </button>

    <perfect-scrollbar tag="ul" v-if="showList" v-click-outside="closeList" class="convert-input__currency--list">
      <li v-for="(c, i) in $props.currencyList" :key="i">
        <button @click="selectFiat(c)">{{ c }}</button>
      </li>
    </perfect-scrollbar>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import vClickOutside from 'v-click-outside';

import IconSmallArrow from '@/common/icons/IconSmallArrow.vue';

export default Vue.extend({
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    IconSmallArrow,
  },
  props: {
    selectedFiat: String,
    value: [String, Number],
    currencyList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showList: false,
      currency: '',
    }
  },
  methods: {
    numbersOnly(evt: any) {
      let keyCode = (evt.keyCode ? evt.keyCode : evt.which);

      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) evt.preventDefault()
    },
    selectFiat(c: string): void {
      this.closeList();

      this.currency = c;

      this.$emit('fiat', c);
    },
    handleInput(): void {
      this.$emit('input', (this.$refs.input as HTMLInputElement).value);
    },
    closeList(): void {
      this.showList = false;
    }
  },
  mounted() {
    this.currency = this.$props.selectedFiat;
  }
})
</script>

<style lang="scss">
.convert-input {
  display: flex;
  align-items: center;

  width: 100%;

  input {
    border: 1px solid #d4dadf;
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    padding: 0 15px;

    width: 100%;

    @include strict_size(38px, false);
  }

  button.selected-currency {
    display: flex;
    align-items: center;
    justify-content: center;

    @include strict_size(40px, 95px);

    background-color: $blue;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    color: $white;

    font-weight: 600;

    svg {
      transition: $trs;

      @include strict_size(12px, 12px);

      margin: {
        left: 5px;
      };
    }
  }

  &__currency {
    position: relative;

    &--list {
      position: absolute;
      top: 45px;
      right: 0;
      z-index: 5;

      width: 100%;
      max-width: 200px;

      max-height: 200px;

      border-radius: 4px;
      background-color: #fff;
      border: 1px solid $grey;

      padding: 15px 0;

      li {
        &:not(:last-child) {
          padding: 0 15px;

          margin: {
            bottom: 5px;
          };
        }

        button {
          width: 100%;

          &:hover {
            color: $blue;
          }
        }
      }
    }
  }
}
</style>
