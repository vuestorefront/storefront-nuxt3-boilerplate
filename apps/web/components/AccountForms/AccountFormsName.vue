<template>
  <form @submit.prevent="$emit('on-save')" data-testid="account-forms-name">
    <div class="md:flex justify-between gap-4">
      <label class="block flex-1">
        <UiFormLabel>{{ $t('account.accountSettings.personalData.firstName') }}</UiFormLabel>
        <SfInput name="firstname" type="text" v-model="userData.firstName" required />
      </label>
      <label class="block flex-1 mt-4 md:mt-0">
        <UiFormLabel>{{ $t('account.accountSettings.personalData.lastName') }}</UiFormLabel>
        <SfInput name="lastname" type="text" v-model="userData.lastName" required />
      </label>
    </div>
    <div class="mt-6 flex flex-col-reverse md:flex-row md:justify-end gap-4">
      <SfButton type="reset" variant="secondary" @click="$emit('on-cancel')">
        {{ $t('contactInfo.cancel') }}
      </SfButton>
      <SfButton type="submit" class="min-w-[120px]"> {{ $t('contactInfo.save') }} </SfButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { SfButton, SfInput } from '@storefront-ui/vue';
import type { AccountFormsNameProps } from '~/components/AccountForms/types';

const props = defineProps<AccountFormsNameProps>();
defineEmits(['on-save', 'on-cancel']);

const { firstName, lastName } = toRefs(props);
const userData = ref({
  firstName: firstName?.value ?? '',
  lastName: lastName?.value ?? '',
});
</script>
