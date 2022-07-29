<template lang="pug">
aside
  nav.app-pages
    li(v-for='(l, i) in appLinks' :key='i')
      NuxtLink(:to='l.link' :class="{ active: l.active }")
        .app-pages--icon
          component(:is='l.icon')
        | {{ l.title }}
  .contacts
    p.title
      b Контакти
    a.email.c-blue(href="mailto:support@coinloan.io" target="_blank") support@coinloan.io

    nav.contacts-pages
      li(v-for='(l, i) in contactsLinks' :key='i')
        NuxtLink(:to='l.link') {{ l.title }}
    p.copyright CoinLoan O&Uuml;
      br
      | Kaupmehe tn 7-9, Tallinn, 10114, Estonia
    p.copyright © 2022 CoinLoan

</template>

<script lang="ts">
import Vue from 'vue'

import IconWallet from '@/common/icons/IconWallet.vue';
import IconAccumulationAccount from '@/common/icons/IconAccumulationAccount.vue';
import IconInstantPosition from '@/common/icons/IconInstantPosition.vue';
import IconCredits from '@/common/icons/IconCredits.vue';
import IconExchange from '@/common/icons/IconExchange.vue';
import IconInviteFriend from '@/common/icons/IconInviteFriend.vue';

export default Vue.extend({
  name: 'SideMenu',
  components: {
    IconWallet,
    IconAccumulationAccount,
    IconInstantPosition,
    IconCredits,
    IconExchange,
    IconInviteFriend,
  },
  data() {
    return {
      appLinks: [
        {
          icon: 'IconWallet',
          title: 'Гаманець',
          link: '/wallet',
        },
        {
          icon: 'IconAccumulationAccount',
          title: 'Накопичувальний рахунок',
          link: '/accumulation-account',
        },
        {
          icon: 'IconInstantPosition',
          title: 'Миттєва позика',
          link: '/instant-position',
        },
        {
          icon: 'IconCredits',
          title: 'Кредити',
          link: '/credits',
        },
        {
          icon: 'IconExchange',
          title: 'Обмін',
          link: '/exchange',
        },
        {
          icon: 'IconInviteFriend',
          title: 'Запросіть друга',
          link: '/invite-friend',
        },
      ],
      contactsLinks: [
        {
          title: 'Питання та відповіді',
          link: '/',
        },
        {
          title: 'Тарифи',
          link: '/',
        },
        {
          title: 'Політика конфіденційності',
          link: '/',
        },
        {
          title: 'Умови використання',
          link: '/',
        },
        {
          title: 'Регламент GDPR',
          link: '/',
        },
        {
          title: 'Політика AML',
          link: '/',
        },
      ]
    }
  }
})
</script>

<style lang="scss">
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 2px 4px rgb(220 220 220 / 50%);
  background-color: $white;

  padding: {
    top: 38px;
    bottom: 34px;
  };

  nav.app-pages {
    li {
      &:not(:last-child) {
        margin: {
          bottom: 17px;
        };
      }

      a {
        display: inline-flex;
        align-items: center;

        font-weight: 600;
        font-size: 14px;
        line-height: 19px;

        width: 100%;

        padding: {
          left: 24px;
        };

        &, & * {
          transition: $trs;
        }

        &:hover {
          color: $blue;
        }

        &.nuxt-link-active {
          color: $blue;

          .app-pages--icon svg path { fill: $blue; }
        }

        .app-pages--icon {
          display: flex;
          align-items: center;
          justify-content: center;

          margin: {
            right: 13px;
          };

          @include strict_size(41px, 41px);

          svg {
            @include strict_size(16px, 16px);

            path {
              fill: #c6c6c6;

              &.secondary {
                opacity: 0.4;
              }
            }
          }
        }
      }
    }
  }

  .contacts {
    border-top: 1px solid $border_color;

    margin: {
      top: 30px;
      left: 24px;
      right: 24px;
    };

    padding: {
      top: 12px;
    };

    p.title {
      margin: {
        bottom: 6px;
      };
    }

    a.email {
      display: inline-block;

      margin: {
        bottom: 16px;
      };
    }

    nav.contacts-pages {
      margin: {
        bottom: 24px;
      };

      li {
        &:not(:last-child) {
          margin: {
            bottom: 9px;
          };
        }
      }
    }

    p.copyright {
      color: $dark_grey;

      font-size: 10px;
      line-height: 14px;
    }
  }
}
</style>