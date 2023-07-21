<template>
  <button
    type="button"
    data-testid="payment-method"
    :disabled="disabled"
    :class="[
      'border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600',
      { 'border-2 border-primary-700': active },
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PaymentMethodProps } from '~/components/CheckoutPayment/types';

defineProps<PaymentMethodProps>();
</script>
