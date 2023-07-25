<template>
  <div data-testid="checkout-payment" class="md:px-4 py-6">
    <h3 class="text-neutral-900 text-lg font-bold mb-4">{{ $t('checkoutPayment.heading') }}</h3>
    <div class="grid gap-4 grid-cols-2">
      <CheckoutPaymentMethod
        @click="activePayment = PaymentMethod.CreditCard"
        :active="activePayment === PaymentMethod.CreditCard"
      >
        <SfIconCreditCard class="mr-2" />
        <span class="font-medium">{{ $t('checkoutPayment.creditCard') }}</span>
      </CheckoutPaymentMethod>

      <CheckoutPaymentMethod
        @click="activePayment = PaymentMethod.PayPal"
        :active="activePayment === PaymentMethod.PayPal"
        disabled
      >
        <div class="flex flex-col items-center justify-center">
          <NuxtImg src="/images/paypal.svg" :alt="$t('checkoutPayment.paypalIconAlt')" width="104" height="32" />
          <span class="text-xs text-neutral-500">{{ $t('checkoutPayment.comingSoon') }}</span>
        </div>
      </CheckoutPaymentMethod>

      <CheckoutPaymentMethod
        @click="activePayment = PaymentMethod.ApplePay"
        :active="activePayment === PaymentMethod.ApplePay"
        disabled
      >
        <div class="flex flex-col items-center justify-center">
          <NuxtImg src="/images/apple-pay.svg" :alt="$t('checkoutPayment.applePayIconAlt')" width="104" height="32" />
          <span class="text-xs text-neutral-500">{{ $t('checkoutPayment.comingSoon') }}</span>
        </div>
      </CheckoutPaymentMethod>

      <CheckoutPaymentMethod
        @click="activePayment = PaymentMethod.GooglePay"
        :active="activePayment === PaymentMethod.GooglePay"
        disabled
      >
        <div class="flex flex-col items-center justify-center">
          <NuxtImg src="/images/google-pay.svg" :alt="$t('checkoutPayment.googlePayIconAlt')" width="104" height="32" />
          <span class="text-xs text-neutral-500">{{ $t('checkoutPayment.comingSoon') }}</span>
        </div>
      </CheckoutPaymentMethod>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfIconCreditCard } from '@storefront-ui/vue';
import { PaymentMethod } from '~/components/CheckoutPayment/types';

const activePayment = ref<PaymentMethod>(PaymentMethod.CreditCard);
</script>
