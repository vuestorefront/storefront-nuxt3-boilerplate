<template>
  <div class="m-10">
    <h1 class="typography-headline-1">
      {{ $t('vsfHomepage') }}
    </h1>
    <NuxtImg src="images/hero.png" alt="Vue Storefront" sizes="md:90vw lg:45vw" />
  </div>
  <pre>
    <code>{{ JSON.stringify(data, null, 2) }}</code>
  </pre>
</template>

<script lang="ts" setup>
import { sdk } from '~/sdk';

const { data } = await useAsyncData('cms-content', () => sdk.commerce.getContent());
</script>
