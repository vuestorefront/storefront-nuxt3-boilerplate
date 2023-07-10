<template>
  <UiNavbarTop filled>
    <SfButton
      class="hidden lg:flex text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 lg:mr-4"
      type="button"
      variant="tertiary"
      :tag="NuxtLink"
      :to="paths.category"
    >
      <template #suffix>
        <SfIconExpandMore class="hidden lg:block" />
      </template>
      <span class="hidden lg:flex whitespace-nowrap">{{ $t('allProductsLinkText') }}</span>
    </SfButton>
    <UiSearch class="hidden md:block flex-1" />
    <nav class="hidden md:flex md:flex-row md:flex-nowrap">
      <SfButton
        class="group relative text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 mr-2 -ml-0.5 rounded-md"
        :tag="NuxtLink"
        :to="paths.cart"
        :aria-label="$t('numberInCart', cartLineItemsCount)"
        variant="tertiary"
        square
      >
        <template #prefix>
          <SfIconShoppingCart />
          <SfBadge
            :content="cartLineItemsCount"
            class="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900 flex justify-center"
            data-testid="cart-badge"
          />
        </template>
      </SfButton>
    </nav>
  </UiNavbarTop>
  <main>
    <slot />
  </main>
  <UiNavbarBottom />
  <UiFooter />
</template>

<script lang="ts" setup>
import { SfBadge, SfButton, SfIconExpandMore, SfIconShoppingCart } from '@storefront-ui/vue';

usePageTitle();

const NuxtLink = resolveComponent('NuxtLink');
const cartLineItemsCount = computed(() => 1);
</script>
