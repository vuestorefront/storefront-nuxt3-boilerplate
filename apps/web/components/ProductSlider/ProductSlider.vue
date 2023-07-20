<template>
  <SfScrollable
    buttons-placement="floating"
    class="items-center pb-4"
    :wrapper-class="wrapperClass"
    data-testid="product-slider"
  >
    <UiProductCard
      v-for="product in items"
      :key="product.id"
      class="max-w-[192px]"
      :name="product.name ?? ''"
      :slug="product.slug"
      :image-url="product.primaryImage?.url ?? ''"
      :image-alt="product.primaryImage?.alt ?? ''"
      :price="product.price?.value.amount"
      :rating-count="product.rating?.count"
      :rating="product.rating?.average"
    />
  </SfScrollable>
</template>

<script setup lang="ts">
import { SfScrollable } from '@storefront-ui/vue';
import type { ProductSliderProps } from '~/components/ProductSlider/types';

defineProps<ProductSliderProps>();
</script>
