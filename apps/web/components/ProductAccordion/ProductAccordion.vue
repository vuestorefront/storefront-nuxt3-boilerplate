<template>
  <div data-testid="product-accordion">
    <UiAccordionItem
      summary-class="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
      v-model="productDetailsOpen"
    >
      <template #summary>
        <h2 class="font-bold font-headings text-lg leading-6 md:text-2xl">
          {{ $t('productDetails') }}
        </h2>
      </template>
      <p>{{ product.description }}</p>
    </UiAccordionItem>
    <UiDivider class="my-4" />
    <UiAccordionItem
      summary-class="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
    >
      <template #summary>
        <h2 class="font-bold font-headings text-lg leading-6 md:text-2xl">
          {{ $t('customerReviews') }}
        </h2>
      </template>
      <UiReview v-for="review in productReviews" :key="review.id" :review="review" class="mb-4" />
    </UiAccordionItem>
  </div>
</template>

<script setup lang="ts">
import type { ProductAccordionPropsType } from '~/components/ProductAccordion/types';

const props = defineProps<ProductAccordionPropsType>();

const { product } = toRefs(props);
const { data: productReviews, fetchProductReviews } = useProductReviews(product.value.slug);

const productDetailsOpen = ref(true);

fetchProductReviews(product.value.slug);
</script>
