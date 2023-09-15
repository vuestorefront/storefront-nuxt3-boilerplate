<template>
  <div data-testid="checkout-payment" class="md:px-4 py-6">
    <fieldset>
      <legend class="text-neutral-900 text-lg font-bold mb-4">{{ $t('checkoutPayment.heading') }}</legend>
      <div class="grid gap-4 grid-cols-2">
        <label v-for="{ value, disabled, imgSrc, imgAlt } in paymentMethods" :key="value" class="relative">
          <input
            type="radio"
            name="payment_method"
            class="peer sr-only"
            :value="value"
            :checked="value === activePayment"
            :disabled="disabled"
            @change="$emit('update:activePayment', value)"
          />
          <span
            class="h-20 flex flex-col items-center justify-center py-4 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 active:border-primary-300 active:bg-primary-200 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale"
          >
            <span v-if="value === PaymentMethod.CreditCard">
              <SfIconCreditCard class="mr-2" />
              <span class="font-medium">{{ $t('checkoutPayment.creditCard') }}</span>
            </span>
            <NuxtImg v-else :src="imgSrc" :alt="imgAlt" width="104" height="32" />
            <span v-if="disabled" class="text-xs text-neutral-500">{{ $t('checkoutPayment.comingSoon') }}</span>
          </span>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { SfIconCreditCard } from '@storefront-ui/vue';
import {
  type CheckoutPaymentEmits,
  type CheckoutPaymentProps,
  PaymentMethod,
} from '~/components/CheckoutPayment/types';

defineProps<CheckoutPaymentProps>();
defineEmits<CheckoutPaymentEmits>();

const { t } = useI18n();

const paymentMethods = [
  {
    value: PaymentMethod.CreditCard,
  },
  {
    value: PaymentMethod.PayPal,
    imgSrc: '/images/paypal.svg',
    imgAlt: t('checkoutPayment.paypalIconAlt'),
    disabled: true,
  },
  {
    value: PaymentMethod.ApplePay,
    imgSrc: '/images/apple-pay.svg',
    imgAlt: t('checkoutPayment.applePayIconAlt'),
    disabled: true,
  },
  {
    value: PaymentMethod.GooglePay,
    imgSrc: '/images/google-pay.svg',
    imgAlt: t('checkoutPayment.googlePayIconAlt'),
    disabled: true,
  },
];
</script>
