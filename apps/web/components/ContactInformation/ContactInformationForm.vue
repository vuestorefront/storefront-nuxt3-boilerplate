<template>
  <form data-testid="contact-information-form" @submit.prevent="$emit('on-save')">
    <label>
      <UiFormLabel>{{ $t('contactInfo.email') }}</UiFormLabel>
      <SfInput name="email" type="email" v-model="cart.customerEmail" required />
    </label>
    <div class="mt-4 flex flex-col-reverse md:flex-row md:justify-end">
      <SfButton type="reset" class="md:mr-4" variant="secondary" @click="$emit('on-cancel')">
        {{ $t('contactInfo.cancel') }}
      </SfButton>
      <SfButton type="submit" class="min-w-[120px] mb-4 md:mb-0"> {{ $t('contactInfo.save') }} </SfButton>
    </div>
  </form>
</template>
<script setup>
import { SfButton, SfInput } from '@storefront-ui/vue';

defineEmits(['on-save', 'on-cancel']);
const cart = ref({
  customerEmail: '',
});
</script>
