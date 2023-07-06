<template>
  <NuxtLayout name="checkout" :back-href="paths.category" :back-label="$t('backToShopping')" :heading="$t('myCart')">
    This is the cart page.
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>
