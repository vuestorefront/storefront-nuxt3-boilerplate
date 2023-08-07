<template>
  <NuxtLayout name="auth" :heading="$t('auth.setNewPassword.heading')">
    <form class="pb-4 md:p-6 mt-10 md:border md:border-neutral-200 rounded-md" @submit.prevent>
      <p class="mb-6">
        {{ $t('auth.setNewPassword.description') }}
      </p>
      <label class="block mb-4">
        <UiFormLabel>{{ $t('auth.setNewPassword.password') }}</UiFormLabel>
        <UiFormPasswordInput name="password" autocomplete="current-password" v-model="password" required />
        <UiFormHelperText>{{ $t('auth.setNewPassword.help') }}</UiFormHelperText>
      </label>
      <label>
        <UiFormLabel>{{ $t('auth.setNewPassword.repeatPassword') }}</UiFormLabel>
        <UiFormPasswordInput
          name="repeatedPassword"
          autocomplete="current-password"
          v-model="repeatedPassword"
          required
        />
      </label>
      <div class="mt-6 flex flex-col-reverse md:flex-row gap-4">
        <SfButton type="submit" class="flex-1"> {{ $t('auth.setNewPassword.button') }} </SfButton>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

definePageMeta({
  layout: false,
});

const password = ref('');
const repeatedPassword = ref('');
</script>
