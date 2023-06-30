<template>
  <div>Product Page</div>
  <pre v-if="content">
    <code>{{ JSON.stringify(content, null, 2) }}</code>
  </pre>
</template>

<script lang="ts" setup>
// example of title override
const title = ref('Mocked product title');

// example of using cached data from Home Page
const { data: content } = useContent('home-page');

useHead({
  title,
});
</script>
