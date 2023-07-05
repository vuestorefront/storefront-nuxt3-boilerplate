<template>
  <div>
    <NuxtLayout name="checkout" back-href="/cart" :back-label="$t('back')" :heading="$t('checkout')">
      This is the checkout page.
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>
