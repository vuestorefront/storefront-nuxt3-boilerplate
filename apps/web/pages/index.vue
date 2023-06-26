<template>
  <div>Home Page</div>
  <pre>
    <code>{{ JSON.stringify(data, null, 2) }}</code>
  </pre>
</template>

<script setup lang="ts">
import { sdk } from '~/sdk';

const { data } = await useAsyncData('cms-content', () => sdk.commerce.getContent());
</script>
