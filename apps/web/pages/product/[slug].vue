<template>
  <h1>Product Page</h1>
</template>

<script lang="ts" setup>
// example of title override
const title = ref('Mocked product title');

useHead({
  title,
});
</script>
