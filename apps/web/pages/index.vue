<template>
  <div class="m-10">
    <h1 class="typography-headline-1">
      {{ $t('vsfHomepage') }}
    </h1>
    <NuxtLink to="/product/1">Go to Product Page</NuxtLink>
    <NuxtImg src="images/hero.png" alt="Vue Storefront" sizes="md:90vw lg:45vw" />
  </div>
  <pre>
    <code>{{ JSON.stringify(content, null, 2) }}</code>
  </pre>
</template>

<script lang="ts" setup>
const { getContent, data: content } = useContent('home-page');

getContent();
</script>
