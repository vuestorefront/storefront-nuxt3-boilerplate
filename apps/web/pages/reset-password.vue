<template>
  <NuxtLayout name="auth" :heading="$t('auth.resetPassword.heading')">
    <form class="pb-4 md:p-6 mt-10 md:border md:border-neutral-200 rounded-md" @submit.prevent="resetPassword">
      <p class="mb-6">
        {{ $t('auth.resetPassword.info') }}
      </p>
      <label>
        <UiFormLabel>{{ $t('auth.resetPassword.email') }}</UiFormLabel>
        <SfInput name="email" type="email" v-model="customerEmail" required />
      </label>
      <div class="mt-6 flex flex-col-reverse md:flex-row gap-4">
        <SfButton :tag="NuxtLink" :to="paths.authLogin" class="flex-1" variant="tertiary">
          {{ $t('auth.resetPassword.backToLogin') }}
        </SfButton>
        <SfButton type="submit" class="flex-1"> {{ $t('auth.resetPassword.continue') }} </SfButton>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton, SfInput } from '@storefront-ui/vue';

definePageMeta({
  layout: false,
});

const router = useRouter();

const customerEmail = ref('');
const resetPassword = () => router.push(paths.authResetPasswordSuccess);
const NuxtLink = resolveComponent('NuxtLink');
</script>
