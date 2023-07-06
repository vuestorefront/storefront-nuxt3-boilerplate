<template>
  <SfScrollable
    buttons-placement="floating"
    class="items-center pb-4"
    wrapper-class="max-w-screen-3xl mx-auto px-4 md:px-10 mb-20"
  >
    <div v-for="product in items" :key="product.id">
      <UiProductCard
        class="max-w-[192px]"
        :name="product.name ?? ''"
        :slug="product.slug"
        :image-url="product.primaryImage?.url ?? ''"
        :image-alt="product.primaryImage?.alt ?? 'primary image'"
        :price="product.price?.value.amount"
        :rating-count="product.rating?.count"
        :rating="product.rating?.average"
      />
    </div>
  </SfScrollable>
</template>

<script setup lang="ts">
import { SfScrollable } from '@storefront-ui/vue';
import type { ProductSliderProps } from '~/components/ProductSlider/types';

defineProps<ProductSliderProps>();
</script>
