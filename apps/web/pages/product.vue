<template>
  <div>Product Page</div>
</template>

<script setup lang="ts">
// example of title override
const title = ref('Mocked product title')

useHead({
  title,
})
</script>
