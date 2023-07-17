<template>
  <div>
    <UiAccordionItem
      summary-class="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
    >
      <template #summary>
        <h2 className="font-bold font-headings text-lg leading-6 md:text-2xl">
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
        <h2 className="font-bold font-headings text-lg leading-6 md:text-2xl">
          {{ $t('customerReviews') }}
        </h2>
      </template>
      <UiReview v-for="review in productReviews" :key="review.id" :review="review" class="mb-4" />
    </UiAccordionItem>
  </div>
</template>

<script lang="ts" setup>
import type { SfProduct } from '@vue-storefront/unified-data-model';

const props = defineProps<{
  product: SfProduct;
}>();

const { product } = toRefs(props);

const { data: productReviews, fetchProductReviews } = useProductReviews(product.value.slug);
fetchProductReviews(product.value.slug);
</script>
