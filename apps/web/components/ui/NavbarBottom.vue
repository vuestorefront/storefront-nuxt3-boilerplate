<template>
  <nav class="w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden" data-testid="navbar-bottom">
    <SfButton
      v-for="{ label, icon, link } in items"
      :key="label"
      variant="tertiary"
      :class="[
        '!p-1 !pt-3 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900 !text-xs !font-base',
        { 'text-white bg-primary-900': $route.path === link },
      ]"
      size="sm"
      :tag="NuxtLink"
      :to="link"
    >
      <template #prefix>
        <div class="relative">
          <component :is="icon" />
          <SfBadge
            v-if="label === 'cart'"
            :content="cartLineItemsCount"
            class="outline-white bg-white !text-neutral-900 translate-x-[5px] translate-y-[-3px]"
          />
        </div>
      </template>
      {{ label }}
    </SfButton>
  </nav>
</template>

<script setup lang="ts">
import { SfButton, SfBadge, SfIconShoppingCart, SfIconHome, SfIconMenu, SfIconPerson } from '@storefront-ui/vue';

const { t } = useI18n();
const { data: cart } = useCart();

const items = [
  {
    label: t('home'),
    icon: SfIconHome,
    link: paths.home,
  },
  {
    label: t('products'),
    icon: SfIconMenu,
    link: paths.category,
  },
  {
    label: t('cart'),
    icon: SfIconShoppingCart,
    link: paths.cart,
  },
  {
    label: t('account.navBarBottomHeading'),
    icon: SfIconPerson,
    link: paths.account,
  },
];

const cartLineItemsCount = computed(
  () => cart.value?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0,
);
const NuxtLink = resolveComponent('NuxtLink');
</script>
