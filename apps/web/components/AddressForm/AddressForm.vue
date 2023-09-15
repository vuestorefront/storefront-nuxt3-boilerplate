<template>
  <form
    class="grid grid-cols-1 md:grid-cols-[50%_1fr_120px] gap-4"
    data-testid="address-form"
    @submit.prevent="$emit('on-save', defaultValues)"
  >
    <label>
      <UiFormLabel>{{ $t('form.firstNameLabel') }}</UiFormLabel>
      <SfInput name="firstName" autocomplete="given-name" v-model="defaultValues.firstName" required />
    </label>
    <label class="md:col-span-2">
      <UiFormLabel>{{ $t('form.lastNameLabel') }}</UiFormLabel>
      <SfInput name="lastName" autocomplete="family-name" v-model="defaultValues.lastName" required />
    </label>
    <label class="md:col-span-3">
      <UiFormLabel>{{ $t('form.phoneLabel') }}</UiFormLabel>
      <SfInput name="phone" type="tel" autocomplete="tel" v-model="defaultValues.phone" required />
    </label>
    <label class="md:col-span-3">
      <UiFormLabel>{{ $t('form.countryLabel') }}</UiFormLabel>
      <SfSelect
        v-model="defaultValues.country"
        name="country"
        :placeholder="$t('form.selectPlaceholder')"
        autocomplete="country-name"
        required
      >
        <option v-for="country in countries" :key="country">{{ country }}</option>
      </SfSelect>
    </label>
    <label class="md:col-span-2">
      <UiFormLabel>{{ $t('form.streetNameLabel') }}</UiFormLabel>
      <SfInput name="streetName" autocomplete="address-line1" v-model="defaultValues.streetName" required />
      <UiFormHelperText>{{ $t('form.streetNameHelp') }}</UiFormHelperText>
    </label>
    <label>
      <UiFormLabel>{{ $t('form.streetNumberLabel') }}</UiFormLabel>
      <SfInput name="streetNumber" v-model="defaultValues.streetNumber" />
      <UiFormHelperText>{{ $t('form.streetNumberHelp') }}</UiFormHelperText>
    </label>
    <label class="md:col-span-3">
      <UiFormLabel>{{ $t('form.cityLabel') }}</UiFormLabel>
      <SfInput name="city" autocomplete="address-level2" v-model="defaultValues.city" required />
    </label>
    <label class="md:col-span-2">
      <UiFormLabel>{{ $t('form.stateLabel') }}</UiFormLabel>
      <SfSelect
        v-model="defaultValues.state"
        name="state"
        autocomplete="address-level1"
        :placeholder="$t('form.selectPlaceholder')"
        required
      >
        <option v-for="state in states" :key="state">{{ state }}</option>
      </SfSelect>
    </label>
    <label>
      <UiFormLabel>{{ $t('form.postalCodeLabel') }}</UiFormLabel>
      <SfInput name="postalCode" autocomplete="postal-code" v-model="defaultValues.postalCode" required />
    </label>

    <label v-if="type === 'billingAddress'" class="md:col-span-3 flex items-center gap-2">
      <SfCheckbox name="useAsShipping" />
      {{ $t('form.useAsShippingLabel') }}
    </label>

    <div class="md:col-span-3 flex flex-col-reverse md:flex-row justify-end mt-6 gap-4">
      <SfButton type="reset" class="" variant="secondary" @click="$emit('on-close')">
        {{ $t('contactInfo.cancel') }}
      </SfButton>
      <SfButton type="submit" class="min-w-[120px]" :disabled="isCartUpdateLoading">
        <SfLoaderCircular v-if="isCartUpdateLoading" class="flex justify-center items-center" size="sm" />
        <span v-else>
          {{ $t('contactInfo.save') }}
        </span>
      </SfButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { SfButton, SfCheckbox, SfInput, SfLoaderCircular, SfSelect } from '@storefront-ui/vue';
import type { AddressFormProps } from '~/components/AddressForm/types';

const props = defineProps<AddressFormProps>();
defineEmits(['on-save', 'on-close']);

const { savedAddress } = toRefs(props);
const defaultValues = ref({
  firstName: savedAddress?.value?.firstName ?? '',
  lastName: savedAddress?.value?.lastName ?? '',
  phone: savedAddress?.value?.phoneNumber ?? '',
  country: savedAddress?.value?.country ?? '',
  streetName: savedAddress?.value?.address1 ?? '',
  streetNumber: savedAddress?.value?.address2 ?? '',
  city: savedAddress?.value?.city ?? '',
  state: savedAddress?.value?.state ?? '',
  postalCode: savedAddress?.value?.postalCode ?? '',
});
const isCartUpdateLoading = false;
const countries = ['US'];
const states = ['California'];
</script>
