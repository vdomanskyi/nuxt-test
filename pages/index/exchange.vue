<template>
<section class="wrapper">
  <Modal
    v-if="showModal"
    class="modal-exchange-successful"
    @close="closeModal"
  >
    <img class="icon-successful" src="~@/assets/succsessful.svg" alt="" srcset="">
    <h2 class="m-top-10">Обмін успішний!</h2>

    <button class="btn m-top-20 w-full" @click="closeModal">Закрити</button>
  </Modal>

  <div class="section-title">
    <IconExchange />
    <h1>Обмін</h1>
  </div>

  <div class="exchange-container">
    <div class="white-block">
      <div class="white-block--title">
        <h1>Обмін {{ base }} на {{ quote }}</h1>
      </div>

      <p class="m-bottom-5"><b>Ви сплатете</b></p>
      <ConvertInput
        class="m-bottom-25"
        :currencyList="getAccessibleFiatMoney()"
        :selectedFiat="base"
        @fiat="base = $event"
        v-model="baseCount"
        @input="handleChangeBase"
      />

      <p class="m-bottom-5"><b>Ви отримаєте</b></p>
      <ConvertInput
        :currencyList="getAccessibleFiatMoney()"
        :selectedFiat="quote"
        @fiat="quote = $event"
        v-model="quoteCount"
        @input="handleChangeQuote"
      />

      <p class="m-top-25"><b>Наступне оновлення: {{ timer }} сек.</b></p>

      <button class="btn w-full m-top-25" @click="showModal = true">Обмінять</button>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue'

import { FIAT_MONEY, getCommission, getRates } from '@/mock';

import Modal from '@/common/base/Modal.vue';

import ConvertInput from '@/common/base/ConvertInput.vue';

import IconExchange from '@/common/icons/IconExchange.vue';
import IconSuccessful from '@/common/icons/IconSuccessful.vue';

interface ExchangePageData {
  FIAT_MONEY: typeof FIAT_MONEY;
  base: string;
  baseCount: number;
  quote: string;
  quoteCount: number;
  rates: { [x: string]: number };
  commission: { [x: string]: number };
  interval: number;
  showModal: boolean;
  timer: number;
}

export default Vue.extend({
  name: 'ExchangePage',
  components: {
    Modal,
    ConvertInput,
    IconExchange,
    IconSuccessful,
  },
  data(): ExchangePageData {
    return {
      FIAT_MONEY,
      base: '',
      baseCount: 0,
      quote: '',
      quoteCount: 0,
      rates: {},
      commission: {},
      interval: -1,
      showModal: false,
      timer: -1,
    }
  },
  methods: {
    getAccessibleFiatMoney(): string[] {
      return FIAT_MONEY.filter((m) => m !== this.base && m !== this.quote);
    },
    updateRates() {
      this.rates = getRates();
    },
    handleChangeBase() {
      const pair = `${this.base}/${this.quote}`;
      const rate = this.rates[pair];
      const commission = this.commission[pair];

      const sumRate = (rate * this.baseCount);

      const sum = Number((sumRate - (sumRate * (commission / 100))).toFixed(2));

      this.quoteCount = sum;
    },
    handleChangeQuote() {
      const pair = `${this.base}/${this.quote}`;
      const rate = this.rates[pair];
      const commission = this.commission[pair];

      const sumRate = Number((Number(this.quoteCount) + (Number(this.quoteCount) * (commission / 100))));

      const sum = Number((sumRate / rate).toFixed(2));

      this.baseCount = sum;
    },
    closeModal() {
      this.showModal = false;

      this.baseCount = 0;
      this.quoteCount = 0;
    },
    startTimer() {
      this.timer = 30;

      this.interval = setInterval(this.handleTimer, 1000) as any;
    },
    handleTimer() {
      this.timer -= 1;

      if (this.timer === 0) {
        clearInterval(this.interval);

        this.handleChangeBase();
        this.handleChangeQuote();

        this.updateRates();

        this.startTimer();
      }
    }
  },
  created() {
    this.base = FIAT_MONEY[0];
    this.quote = FIAT_MONEY[1];

    this.commission = getCommission();
    this.updateRates();

    this.startTimer();
  },
  destroyed() {
    clearInterval(this.interval);
  }
})
</script>

<style lang="scss">
.exchange-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  margin: {
    top: 30px;
  };

  .white-block {
    width: 100%;

    max-width: 420px;

    &:not(:last-child) {
      margin: {
        right: 16px;
      };
    }
  }
}

.modal-exchange-successful {
  .modal__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    max-width: 350px;

    .icon-successful {
      @include strict_size(75px, 75px);
    }

    button.btn {
      max-width: 250px;
    }
  }
}
</style>