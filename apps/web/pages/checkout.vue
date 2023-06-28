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
</template>

<script lang="ts" setup>
import { SfLink } from '@storefront-ui/vue';

definePageMeta({
  layout: 'checkout',
});
</script>
