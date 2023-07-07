<template>
  <NarrowContainer class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
    <Gallery :images="product.gallery" class="grid-in-left-top md:h-full xl:max-h-[700px]" />
  </NarrowContainer>
</template>

<script lang="ts" setup>
import { sdk } from '~/sdk';

const product = await sdk.commerce.getProduct({ slug: 'athletic-mens-walking-sneakers' });

const title = ref(product.name);

useHead({
  title,
});
</script>
