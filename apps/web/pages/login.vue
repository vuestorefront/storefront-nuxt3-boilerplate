<template>
  <NuxtLayout name="auth" :heading="$t('auth.login.heading')">
    <form @submit.prevent="login" class="border-neutral-200 md:border flex flex-col gap-4 md:p-6 rounded-md">
      <label>
        <UiFormLabel>{{ $t('form.emailLabel') }}</UiFormLabel>
        <SfInput name="email" type="email" autocomplete="email" v-model="email" required />
      </label>

      <label>
        <UiFormLabel>{{ $t('form.passwordLabel') }}</UiFormLabel>
        <UiFormPasswordInput name="password" autocomplete="current-password" v-model="password" required />
      </label>

      <label class="mt-2 flex items-center gap-2">
        <SfCheckbox name="rememberMe" v-model="rememberMe" />
        {{ $t('auth.login.rememberMeLabel') }}
      </label>

      <SfButton type="submit" class="mt-2" :disabled="isLoading">
        <SfLoaderCircular v-if="isLoading" class="flex justify-center items-center" size="base" />
        <span v-else>
          {{ $t('auth.login.submitLabel') }}
        </span>
      </SfButton>
      <SfButton :tag="NuxtLink" :to="paths.authResetPassword" variant="tertiary" data-testid="login-page-reset-button">
        {{ $t('auth.login.forgotPasswordLabel') }}
      </SfButton>
    </form>

    <UiAlert class="mt-6 w-full p-4 md:p-6 !justify-start typography-text-base" variant="neutral">
      <i18n-t tag="span" keypath="auth.login.createAccountBanner">
        <SfLink :tag="NuxtLink" :to="paths.authSignup" variant="primary" data-testid="login-page-signup-button">
          {{ $t('auth.login.createAccountLinkLabel') }}
        </SfLink>
      </i18n-t>
    </UiAlert>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton, SfLink, SfCheckbox, SfInput, SfLoaderCircular } from '@storefront-ui/vue';

definePageMeta({
  layout: false,
});

const router = useRouter();

const email = ref('');
const password = ref('');
const rememberMe = ref<boolean>();
const isLoading = ref<boolean>();

const login = () => {
  isLoading.value = true;
  // mimics waiting an async api call
  setTimeout(() => {
    void router.push('/').then(() => (isLoading.value = false));
  }, 4000);
};
const NuxtLink = resolveComponent('NuxtLink');
</script>
