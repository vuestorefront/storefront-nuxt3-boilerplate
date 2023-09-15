<template>
  <div data-testid="checkout-address" class="md:px-4 py-6">
    <div class="flex justify-between items-center">
      <h2 class="text-neutral-900 text-lg font-bold mb-4">{{ heading }}</h2>
      <SfButton v-if="savedAddress" size="sm" variant="tertiary" @click="open">
        {{ $t('contactInfo.edit') }}
      </SfButton>
    </div>

    <div v-if="savedAddress" class="mt-2 md:w-[520px]">
      <p>{{ `${savedAddress.firstName} ${savedAddress.lastName}` }}</p>
      <p>{{ savedAddress.phoneNumber }}</p>
      <p>{{ `${savedAddress.address1} ${savedAddress.address2}` }}</p>
      <p>{{ `${savedAddress.state}, ${savedAddress.postalCode}` }}</p>
    </div>

    <div v-else class="w-full md:max-w-[520px]">
      <p>{{ description }}</p>
      <SfButton class="mt-4 w-full md:w-auto" variant="secondary" @click="open">
        {{ buttonText }}
      </SfButton>
    </div>

    <UiModal
      v-model="isOpen"
      tag="section"
      role="dialog"
      class="h-full w-full overflow-auto md:w-[600px] md:h-fit"
      aria-labelledby="address-modal-title"
    >
      <header>
        <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
          <SfIconClose />
        </SfButton>
        <h3 id="address-modal-title" class="text-neutral-900 text-lg md:text-2xl font-bold mb-4">
          {{ heading }}
        </h3>
      </header>
      <AddressForm :saved-address="savedAddress" :type="type" @on-save="close" @on-close="close" />
    </UiModal>
  </div>
</template>
<script setup lang="ts">
import { SfButton, SfIconClose, useDisclosure } from '@storefront-ui/vue';
import type { CheckoutAddressProps } from '~/components/CheckoutAddress/types';

defineProps<CheckoutAddressProps>();

const { isOpen, open, close } = useDisclosure();
</script>
