<template>
  <section
    class="p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20"
    data-testid="purchase-card"
  >
    <h1 class="mb-1 font-bold typography-headline-4" data-testid="product-name">
      {{ productGetters.getName(product) }}
    </h1>
    <div class="my-1">
      <span class="mr-2 text-secondary-700 font-bold font-headings text-2xl" data-testid="price">
        ${{ productGetters.getPrice(product).special }}
      </span>
      <span class="text-base font-normal text-neutral-500 line-through">
        ${{ productGetters.getRegularPrice(product) }}
      </span>
    </div>
    <div class="inline-flex items-center mt-4 mb-2">
      <SfRating size="xs" :value="productGetters.getAverageRating(reviewAverage)" :max="5" />
      <SfCounter class="ml-1" size="xs">{{ productGetters.getTotalReviews(reviewAverage) }}</SfCounter>
      <SfLink href="#customerReviewsAccordion" variant="secondary" class="ml-2 text-xs text-neutral-500">
        {{ $t('showAllReviews') }}
      </SfLink>
    </div>
    <div
      class="mb-4 font-normal typography-text-sm"
      data-testid="product-description"
      v-html="productGetters.getShortDescription(product)"
    ></div>
    <div class="py-4">
      <!--
      <UiTag class="w-full mb-4">
        <SfIconShoppingCartCheckout />
        {{ $t('numberInCart', { count: 1 }) }}
      </UiTag> -->
      <!--
      <div class="flex mb-4">
        <SfButton type="button" size="sm" variant="tertiary">
          <SfIconFavorite size="sm" />
          {{ $t('addToList') }}
        </SfButton>
      </div> -->
      <div class="flex flex-col md:flex-row flex-wrap gap-4">
        <UiQuantitySelector :value="quantitySelectorValue" class="min-w-[145px] flex-grow flex-shrink-0 basis-0" />
        <SfButton type="button" size="lg" class="flex-grow-[2] flex-shrink basis-auto whitespace-nowrap">
          <template #prefix>
            <SfIconShoppingCart size="sm" />
          </template>
          {{ $t('addToCart') }}
        </SfButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ReviewAverage } from '@plentymarkets/plentymarkets-sdk/packages/api-client/server';
import { productGetters } from '@plentymarkets/plentymarkets-sdk/packages/sdk/src';
import {
  SfButton,
  SfCounter,
  SfLink,
  SfRating,
  SfIconSafetyCheck,
  SfIconCompareArrows,
  SfIconWarehouse,
  SfIconPackage,
  SfIconFavorite,
  SfIconSell,
  SfIconShoppingCartCheckout,
  SfIconShoppingCart,
} from '@storefront-ui/vue';
import type { PurchaseCardProps } from '~/components/ui/PurchaseCard/types';

defineProps<PurchaseCardProps>();

const quantitySelectorValue = ref(1);

</script>
