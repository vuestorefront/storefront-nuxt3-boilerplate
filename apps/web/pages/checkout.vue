<template>
  <NuxtLayout name="checkout" :back-href="paths.cart" :back-label="$t('back')" :heading="$t('checkout')">
    This is the checkout page.
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>
