<template>
  {{ $t('account.ordersAndReturns.section.returns') }}
  {{ data }}
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
});

const { data, fetchCustomerReturns } = useCustomerReturns();

await fetchCustomerReturns();
</script>
