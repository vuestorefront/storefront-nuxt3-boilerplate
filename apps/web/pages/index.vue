<template>
  <div class="m-10">
    <h1 class="typography-headline-1">
      {{ $t('vsfHomepage') }}
    </h1>
    <NuxtLink to="/product/1">Go to Product Page</NuxtLink>
  </div>
  <pre>
    <code>{{ JSON.stringify(content, null, 2) }}</code>
  </pre>
</template>

<script lang="ts" setup>
const { getContent, data: content } = useContent('home-page');

getContent();
</script>
