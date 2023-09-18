<template>
  <form @submit.prevent="$emit('on-save')" data-testid="account-forms-password">
    <input type="text" autocomplete="username" name="username" :value="username" class="hidden" />
    <label class="block">
      <UiFormLabel>{{ $t('account.accountSettings.personalData.currentPassword') }}</UiFormLabel>
      <UiFormPasswordInput
        name="password"
        autocomplete="current-password"
        v-model="userPasswords.oldPassword"
        required
      />
    </label>
    <label class="block my-4">
      <UiFormLabel>{{ $t('account.accountSettings.personalData.newPassword') }}</UiFormLabel>
      <UiFormPasswordInput
        name="password"
        autocomplete="new-password"
        v-model="userPasswords.firstNewPassword"
        required
      />
      <UiFormHelperText class="block"> {{ $t('account.accountSettings.personalData.passwordHelp') }}</UiFormHelperText>
    </label>
    <label class="block">
      <UiFormLabel>{{ $t('account.accountSettings.personalData.newPasswordAgain') }}</UiFormLabel>
      <UiFormPasswordInput
        name="password"
        autocomplete="new-password"
        v-model="userPasswords.secondNewPassword"
        required
      />
    </label>
    <div class="mt-6 flex flex-col-reverse md:flex-row md:justify-end gap-4">
      <SfButton type="reset" variant="secondary" @click="$emit('on-cancel')">
        {{ $t('contactInfo.cancel') }}
      </SfButton>
      <SfButton type="submit" class="min-w-[120px]">
        {{ $t('account.accountSettings.personalData.changePassword') }}
      </SfButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import type { AccountFormsPasswordProps } from '~/components/AccountForms/types';

const props = defineProps<AccountFormsPasswordProps>();
defineEmits(['on-save', 'on-cancel']);

const { oldPassword, firstNewPassword, secondNewPassword, username } = toRefs(props);
const userPasswords = ref({
  oldPassword: oldPassword?.value ?? '',
  firstNewPassword: firstNewPassword?.value ?? '',
  secondNewPassword: secondNewPassword?.value ?? '',
});
</script>
