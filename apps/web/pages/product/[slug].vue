<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <NarrowContainer>
      <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
          <NuxtLazyHydrate when-idle>
            <Gallery :images="product?.gallery ?? []" />
          </NuxtLazyHydrate>
        </section>
        <section class="mb-10 grid-in-right md:mb-0">
          <NuxtLazyHydrate when-idle>
            <UiPurchaseCard v-if="product" :product="product" />
          </NuxtLazyHydrate>
        </section>
        <section class="grid-in-left-bottom md:mt-8">
          <UiDivider class="mb-6" />
          <NuxtLazyHydrate when-visible>
            <ProductProperties v-if="product" :product="product" />
          </NuxtLazyHydrate>
          <UiDivider class="mt-4 mb-2 md:mt-8" />
          <NuxtLazyHydrate when-visible>
            <ProductAccordion v-if="product" :product="product" />
          </NuxtLazyHydrate>
        </section>
        <UiDivider class="mt-4 mb-2" />
      </div>
      <section class="mx-4 mt-28 mb-20">
        <NuxtLazyHydrate when-visible>
          <RecommendedProducts v-if="recommendedProducts" :products="recommendedProducts" />
        </NuxtLazyHydrate>
      </section>
    </NarrowContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Breadcrumb } from '~/components/ui/Breadcrumbs/types';

definePageMeta({
  layout: false,
});

const route = useRoute();
const slug = route.params.slug as string;
const { data: product, fetchProduct } = useProduct(slug);
const { data: recommendedProducts, fetchProductRecommended } = useProductRecommended(slug);
const { t } = useI18n();

await fetchProduct(slug);
await fetchProductRecommended(slug);

const breadcrumbs: Breadcrumb[] = [
  { name: t('home'), link: '/' },
  { name: t('category'), link: '/category' },
  { name: product.value?.name as string, link: `#` },
];

const title = computed(() => product.value?.name ?? '');

useHead({
  title,
});
</script>
