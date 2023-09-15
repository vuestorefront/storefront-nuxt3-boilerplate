<template>
  <div data-testid="order-failed-page" class="px-4 md:px-0">
    <div
      class="border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto"
    >
      <NuxtImg
        src="/images/something-went-wrong.svg"
        :alt="$t('somethingWentWrongImageAlt')"
        width="192"
        height="192"
      />
      <h1 class="mt-6 mb-1 text-2xl">{{ $t('failedInfoHeader') }}</h1>
      <span class="font-medium">{{ $t('failedInfoMessage') }}</span>
      <div class="border border-1 border-neutral-200 rounded bg-neutral-100 p-4 w-full my-4 text-sm">
        {{ $t('orderErrorMessage') }}
      </div>
      <SfButton :tag="NuxtLink" href="/checkout" class="max-md:w-full" variant="secondary">
        <template #prefix>
          <SfIconArrowBack />
        </template>
        {{ $t('backToCheckout') }}
      </SfButton>
      <SfButton :tag="NuxtLink" href="/" class="mt-4 max-md:w-full" variant="tertiary">
        {{ $t('continueShopping') }}
      </SfButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfButton, SfIconArrowBack } from '@storefront-ui/vue';

definePageMeta({
  layout: 'order',
});

const NuxtLink = resolveComponent('NuxtLink');
</script>
