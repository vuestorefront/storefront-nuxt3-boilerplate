<template>
  <UiDivider class="md:col-span-3 md:w-auto md:mx-0" />

  {{ $t('account.ordersAndReturns.section.myOrders') }}
  ----<br />
  {{ data }}
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
});
const { fetchCustomerOrder, data } = useCustomerOrder();
fetchCustomerOrder();
</script>
