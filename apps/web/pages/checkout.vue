<template>
  <NuxtLayout name="checkout" :back-href="paths.cart" :back-label="$t('back')" :heading="$t('checkout')">
    This is the checkout page.
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
