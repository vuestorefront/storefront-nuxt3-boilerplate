<template>
  <section data-testid="category-empty-state" class="flex flex-col items-center md:mt-16">
    <NuxtImg src="/images/something-went-wrong.svg" :alt="$t('emptyStateAltText')" width="192" height="192" />
    <p class="mt-8 font-medium">{{ $t('emptyStateText') }}</p>
    <p class="mt-4">{{ $t('emptyStateText2') }}</p>
    <SfButton :tag="NuxtLink" :to="paths.category" variant="secondary" class="mt-4">
      {{ $t('allProductsLinkText') }}
    </SfButton>
  </section>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
