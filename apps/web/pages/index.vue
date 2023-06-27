<template>
  <div class=m-10>
    <h1 class="typography-headline-1">Hey hey hello</h1>
    <NuxtLink to="/product">Go to Product Page</NuxtLink>
  </div>
  <pre>
    <code>{{ JSON.stringify(content, null, 2) }}</code>
  </pre>
</template>

<script lang="ts" setup>
import { useContent } from '~/composables';

const contentUrl = 'home-page';
const { data: content } = useContent(contentUrl);

</script>
