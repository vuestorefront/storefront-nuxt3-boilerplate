<template>
  <div>Product Page</div>

  <Gallery :images="product.gallery" />
</template>

<script lang="ts" setup>
import { sdk } from '~/sdk';

const product = await sdk.commerce.getProduct({ slug: 'athletic-mens-walking-sneakers' });

// example of title override
const title = ref('Mocked product title');

useHead({
  title,
});
</script>
