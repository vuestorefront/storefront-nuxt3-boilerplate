<template>
  <section
    class="p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20"
    data-testid="purchase-card"
  >
    <UiTag variant="secondary" strong class="mb-4">
      <SfIconSell size="sm" class="mr-1" />
      <span class="mr-1">{{ $t(`sale`) }}</span>
    </UiTag>
    <h1 class="mb-1 font-bold typography-headline-4" data-testid="product-name">{{ product.name }}</h1>
    <div class="my-1">
      <span class="mr-2 text-secondary-700 font-bold font-headings text-2xl" data-testid="price">
        ${{ product.price?.value.amount }}
      </span>
      <span class="text-base font-normal text-neutral-500 line-through">
        ${{ product.price?.regularPrice.amount }}
      </span>
    </div>
    <div class="inline-flex items-center mt-4 mb-2">
      <SfRating size="xs" :value="product.rating?.average" :max="5" />
      <SfCounter class="ml-1" size="xs">{{ product.rating?.count }}</SfCounter>
      <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500">
        {{ $t('reviewsCount', { count: product.rating?.count }) }}
      </SfLink>
    </div>
    <p class="mb-4 font-normal typography-text-sm" data-testid="product-description">
      {{ product.description }}
    </p>
    <div class="py-4 mb-4 border-gray-200 border-y">
      <UiTag class="w-full mb-4">
        <SfIconShoppingCartCheckout />
        {{ $t('numberInCart', { count: 1 }) }}
      </UiTag>
      <div class="flex flex-col md:flex-row flex-wrap gap-4">
        <UiQuantitySelector :value="quantitySelectorValue" class="min-w-[145px] flex-grow flex-shrink-0 basis-0" />
        <SfButton size="lg" class="flex-grow-[2] flex-shrink basis-auto whitespace-nowrap">
          <template #prefix>
            <SfIconShoppingCart size="sm" />
          </template>
          {{ $t('addToCart') }}
        </SfButton>
      </div>
      <div class="flex justify-center mt-4 gap-x-4">
        <SfButton size="sm" variant="tertiary">
          <template #prefix>
            <SfIconCompareArrows size="sm" />
          </template>
          {{ $t('compare') }}
        </SfButton>
        <WishlistButton>
          <template #content="{ active }">
            <span v-if="!active">
              {{ $t('addToList') }}
            </span>
            <span v-else>
              {{ $t('removeFromWishlist') }}
            </span>
          </template>
        </WishlistButton>
      </div>
    </div>
    <div class="flex first:mt-4">
      <SfIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        <i18n-t keypath="additionalInfo.shipping">
          <template #addAddress>
            <SfLink href="#" variant="secondary">{{ $t('additionalInfo.addAddress') }}</SfLink>
          </template>
        </i18n-t>
      </p>
    </div>
    <div class="flex mt-4">
      <SfIconWarehouse size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        <i18n-t keypath="additionalInfo.pickup">
          <template #checkAvailability>
            <SfLink href="#" variant="secondary">{{ $t('additionalInfo.checkAvailability') }}</SfLink>
          </template>
        </i18n-t>
      </p>
    </div>
    <div class="flex mt-4">
      <p class="text-sm">
        <SfIconSafetyCheck size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
        <i18n-t keypath="additionalInfo.returns">
          <template #details>
            <SfLink href="#" variant="secondary">{{ $t('additionalInfo.details') }}</SfLink>
          </template>
        </i18n-t>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  SfButton,
  SfCounter,
  SfLink,
  SfRating,
  SfIconSafetyCheck,
  SfIconCompareArrows,
  SfIconWarehouse,
  SfIconPackage,
  SfIconSell,
  SfIconShoppingCartCheckout,
  SfIconShoppingCart,
} from '@storefront-ui/vue';
import type { PurchaseCardProps } from '~/components/ui/PurchaseCard/types';

defineProps<PurchaseCardProps>();

const quantitySelectorValue = ref(1);
</script>
