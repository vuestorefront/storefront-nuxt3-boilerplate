<template>
  <NuxtLayout name="auth">
    <div class="mx-auto text-center rounded-md border border-neutral-200 p-4 md:p-6 mt-2">
      <NuxtImg
        src="/images/email-sent.png"
        :alt="$t('auth.resetPassword.emailSent')"
        width="192"
        height="192"
        class="mx-auto mb-6"
      />
      <h1 class="typography-headline-3 font-bold">{{ $t('auth.resetPassword.heading') }}</h1>
      <i18n-t
        tag="p"
        keypath="auth.resetPassword.thankYou"
        class="bg-neutral-100 text-left border border-neutral-200 p-4 rounded-md my-4"
      >
        <span class="font-medium">{{ email }}</span>
      </i18n-t>
      <SfButton
        :to="paths.authResetPassword"
        :tag="NuxtLink"
        variant="tertiary"
        data-testid="reset-password-page-reset-button"
      >
        {{ $t('auth.resetPassword.anotherEmail') }}
      </SfButton>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

definePageMeta({
  layout: false,
});

const email = ref('hieronim.anonim@gmail.com');
const NuxtLink = resolveComponent('NuxtLink');
</script>
