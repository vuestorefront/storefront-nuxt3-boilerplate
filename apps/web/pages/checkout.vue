<template>
  <NuxtLayout
    name="checkout"
    :back-href="paths.cart"
    :back-label-desktop="$t('backToCart')"
    :back-label-mobile="$t('back')"
    :heading="$t('checkout')"
  >
    <div v-if="cart" class="md:grid md:grid-cols-12 md:gap-x-6">
      <div class="col-span-7 mb-10 md:mb-0">
        <UiDivider class="w-screen md:w-auto -mx-4 md:mx-0" />
        <ContactInformation />
        <UiDivider class="w-screen md:w-auto -mx-4 md:mx-0" />
        <CheckoutAddress
          :heading="$t('billing.heading')"
          :description="$t('billing.description')"
          :button-text="$t('billing.addButton')"
          :saved-address="cart.billingAddress"
          type="billingAddress"
        />
        <UiDivider class="w-screen md:w-auto -mx-4 md:mx-0" />
        <CheckoutAddress
          :heading="$t('shipping.heading')"
          :description="$t('shipping.description')"
          :button-text="$t('shipping.addButton')"
          :saved-address="cart.shippingAddress"
          type="shippingAddress"
        />
        <UiDivider class-name="w-screen md:w-auto -mx-4 md:mx-0" />
        <ShippingMethod :shipping-methods="shippingMethods" />
        <UiDivider class="w-screen md:w-auto -mx-4 md:mx-0" />
        <CheckoutPayment :active-payment="activePayment" @update:active-payment="activePayment = $event" />
        <UiDivider class="w-screen md:w-auto -mx-4 md:mx-0 mb-10" />
      </div>
      <OrderSummary v-if="cart" :cart="cart" class="col-span-5 md:sticky md:top-20 h-fit">
        <SfButton :tag="NuxtLink" :to="paths.orderSuccess" size="lg" class="w-full mb-4 md:mb-0">
          {{ $t('placeOrder') }}
        </SfButton>
        <p class="text-sm text-center mt-4 pb-4 md:pb-0">
          <i18n-t keypath="termsInfo">
            <template #terms>
              <SfLink
                href="#"
                class="focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
              >
                {{ $t('termsAndConditions') }}
              </SfLink>
            </template>
            <template #privacyPolicy>
              <SfLink
                href="#"
                class="focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
              >
                {{ $t('privacyPolicy') }}
              </SfLink>
            </template>
          </i18n-t>
        </p>
      </OrderSummary>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton, SfLink } from '@storefront-ui/vue';
import { PaymentMethod } from '~/components/CheckoutPayment/types';

definePageMeta({
  layout: false,
});

const { data: cart } = useCart();
const { data: shippingMethods, getShippingMethods } = useCartShippingMethods();

await getShippingMethods();

const activePayment = ref<PaymentMethod>(PaymentMethod.CreditCard);
const NuxtLink = resolveComponent('NuxtLink');
</script>
