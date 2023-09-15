<template>
  <div data-testid="shipping-method" class="md:px-4 my-6">
    <div class="flex justify-between items-center">
      <h3 class="text-neutral-900 text-lg font-bold">{{ $t('shippingMethod.heading') }}</h3>
    </div>
    <div class="mt-4">
      <ul v-if="shippingMethods?.methods" class="grid gap-y-4 md:grid-cols-2 md:gap-x-4" role="radiogroup">
        <SfListItem
          v-for="{ id, name, estimatedDelivery, price: { amount } } in shippingMethods.methods"
          tag="label"
          :key="id"
          class="border rounded-md items-start"
          @click="radioModel = id"
        >
          <div class="flex gap-2">
            <SfRadio v-model="radioModel" :checked="cart?.shippingMethod?.id === id" :value="id" />
            <div>
              <p>{{ name }}</p>
              <p class="text-xs text-neutral-500">{{ estimatedDelivery }}</p>
            </div>
            <p class="ml-auto">${{ amount }}</p>
          </div>
        </SfListItem>
      </ul>

      <div v-else class="flex mb-6">
        <SfIconBlock class="mr-2 text-neutral-500" />
        <p>{{ $t('shippingMethod.description') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SfIconBlock, SfListItem, SfRadio } from '@storefront-ui/vue';
import type { ShippingMethodProps } from '~/components/ShippingMethod/types';

defineProps<ShippingMethodProps>();

const { data: cart } = useCart();

const radioModel = ref(cart.value?.shippingMethod?.id);
</script>
