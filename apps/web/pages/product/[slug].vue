<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <NarrowContainer>
      <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
          <Gallery :images="product?.gallery ?? []" />
        </section>
        <section class="mb-10 grid-in-right md:mb-0">
          <UiPurchaseCard v-if="product" :product="product" />
        </section>
        <section class="grid-in-left-bottom md:mt-8">
          <UiDivider class="mb-6" />
          <ProductProperties v-if="product" :product="product" />
          <UiDivider class="mt-4 mb-2 md:mt-8" />
          <ProductAccordion v-if="product" :product="product" />
        </section>
        <UiDivider class="mt-4 mb-2" />
      </div>
      <section class="mx-4 mt-28 mb-20">
        <RecommendedProducts v-if="recommendedProducts" :products="recommendedProducts" />
      </section>
    </NarrowContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Breadcrumb } from '~/components/ui/Breadcrumbs/types';

const route = useRoute();
const slug = route.params.slug as string;
const { data: product, fetchProduct } = useProduct(slug);
const { data: recommendedProducts, fetchProductRecommended } = useProductRecommended(slug);

await fetchProduct(slug);
await fetchProductRecommended(slug);

const { t } = useI18n();

const breadcrumbs: Breadcrumb[] = [
  { name: t('home'), link: '/' },
  { name: t('category'), link: '/category' },
  { name: product.value?.name as string, link: `#` },
];

const title = computed(() => product.value?.name ?? '');

useHead({
  title,
});
definePageMeta({
  layout: false,
});
</script>
