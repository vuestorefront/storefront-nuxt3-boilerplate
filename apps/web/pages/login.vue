<template>
  <NuxtLayout name="auth" :heading="$t('auth.loginHeading')">
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
        {{ $t('auth.rememberMeLabel') }}
      </label>

      <SfButton type="submit" class="mt-2" :disabled="isLoading">
        <SfLoaderCircular v-if="isLoading" class="flex justify-center items-center" size="sm" />
        <span v-else>
          {{ $t('auth.loginAction') }}
        </span>
      </SfButton>
      <SfButton :tag="NuxtLink" to="/reset-password" variant="tertiary">
        {{ $t('auth.forgotPasswordLabel') }}
      </SfButton>
    </form>

    <UiAlert class="mt-6 w-full p-4 md:p-6 !justify-start typography-text-base" variant="neutral">
      <span>
        <i18n-t keypath="auth.createAccountBanner">
          <SfLink :tag="NuxtLink" to="/signup" variant="primary">{{ $t('auth.createAccountLinkLabel') }}</SfLink>
        </i18n-t>
      </span>
    </UiAlert>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { SfButton, SfLink, SfCheckbox, SfInput, SfLoaderCircular } from '@storefront-ui/vue';

definePageMeta({
  layout: false,
});

const NuxtLink = resolveComponent('NuxtLink');

const router = useRouter();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);

const login = () => {
  router.push('/');
};
</script>
