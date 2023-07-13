<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <NarrowContainer>
      <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
          <Gallery :images="product?.gallery ?? []" />
        </section>
        <section class="mb-10 grid-in-right md:mb-0">
          <!-- PurchaseCard -->
        </section>
        <section class="grid-in-left-bottom md:mt-8">
          <Divider class="mb-6" />
          <ProductProperties />
          <Divider class="mt-4 mb-2 md:mt-8" />
          <!-- ProductAccordion -->
        </section>
        <Divider class="mt-4 mb-2" />
      </div>
      <section class="mx-4 mt-28 mb-20">
        <!-- RecommendedProducts -->
      </section>
    </NarrowContainer>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const route = useRoute();
const slug = route.params.slug as string;
const { data: product, fetchProduct } = useProduct(slug);

fetchProduct(slug);

const { t } = useI18n();

const breadcrumbs = [
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
