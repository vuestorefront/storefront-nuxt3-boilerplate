<template>
<<<<<<< HEAD:apps/web/pages/product.vue
  <div>Product Page</div>
  <pre v-if="content">
    <code>{{ JSON.stringify(content, null, 2) }}</code>
  </pre>
=======
  <h1>Product Page</h1>
>>>>>>> develop:apps/web/pages/product/[slug].vue
</template>

<script lang="ts" setup>
// example of title override
const title = ref('Mocked product title');

// example of using cached data from Home Page
const { data: content } = useNuxtData('home-page')

useHead({
  title,
});
</script>
