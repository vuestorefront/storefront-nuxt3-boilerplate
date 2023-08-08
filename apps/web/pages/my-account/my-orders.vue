<template>
  <UiDivider class="md:col-span-3 md:w-auto md:mx-0" />

  {{ $t('account.ordersAndReturns.section.myOrders') }}
  ----<br />

  <ul>
    <li v-for="order in data" :key="order.id">
      <NuxtLink :to="`${paths.accountMyOrders}/${order.id}`">{{ order }}</NuxtLink>
    </li>
  </ul>

  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
});
const { fetchCustomerOrders, data } = useCustomerOrders();
await fetchCustomerOrders();
</script>
