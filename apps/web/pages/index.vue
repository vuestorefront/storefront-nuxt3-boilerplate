<template>
  <div class=m-10>
    <h1 class="typography-headline-1">Hey hey hello</h1>
    <SfButton type="button" variant="tertiary">🚀</SfButton>
  </div>
  <pre>
    <code>{{ JSON.stringify(data, null, 2) }}</code>
  </pre>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import { sdk } from '~/sdk';

const { data } = await useAsyncData('cms-content', () => sdk.commerce.getContent());
</script>
