<template>
  <div v-if="cart?.lineItems.length" class="md:grid md:grid-cols-12 md:gap-x-6" data-testid="cart-page-content">
    <div class="col-span-7 mb-10 md:mb-0">
      <div v-for="{ id, attributes, image, name, totalPrice, unitPrice, quantity, slug } in cart.lineItems" :key="id">
        <UiCartProductCard
          :attributes="attributes"
          :image-url="image?.url"
          :image-alt="image?.alt"
          :name="name ?? ''"
          :price="totalPrice?.amount || 0"
          :special-price="unitPrice?.value?.amount || 0"
          :max-value="10"
          :min-value="1"
          :value="quantity"
          :slug="slug"
        />
      </div>
    </div>
    <OrderSummary :cart="cart" class="col-span-5 md:sticky md:top-20 h-fit">
      <SfButton :tag="NuxtLink" :to="paths.checkout" size="lg" class="w-full mb-4 md:mb-0">
        {{ $t('goToCheckout') }}
      </SfButton>
    </OrderSummary>
  </div>
  <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="cart-page-content">
    <NuxtImg src="/images/empty-cart.svg" :alt="$t('emptyCartImgAlt')" width="192" height="192" />
    <h2 class="mt-8">{{ $t('emptyCart') }}</h2>
  </div>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

const { data: cart } = useCart();

const NuxtLink = resolveComponent('NuxtLink');
</script>
