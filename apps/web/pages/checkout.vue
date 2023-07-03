<template>
  <h1>Checkout page</h1>

  <i18n-t keypath="termsInfo">
    <template #terms>
      <SfLink href="#">{{ $t('termsAndConditions') }}</SfLink>
    </template>
    <template #privacyPolicy>
      <SfLink href="#">{{ $t('privacyPolicy') }}</SfLink>
    </template>
  </i18n-t>

  <NuxtLink href="/order/success">order success</NuxtLink><br/>
  <NuxtLink href="/order/failed">order failed</NuxtLink><br/>
</template>

<script lang="ts" setup>
import { SfLink } from '@storefront-ui/vue';

definePageMeta({
  layout: 'checkout',
});
</script>
