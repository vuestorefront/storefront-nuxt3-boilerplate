<template>
  <Head>
    <Title>{{ title }} | Vue Storefront Nuxt3 Boilerplate</Title>
  </Head>
  <div>Product Page</div>
</template>

<script setup lang="ts">
// example of title override
// liveTemplate doesn't work here so title suffix is hardcoded
const title = ref('Mocked product title')
</script>
