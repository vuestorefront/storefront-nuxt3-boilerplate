<template>
  <UiNavbarTop />
  <main data-testid="checkout-layout">
    <NarrowContainer>
      <div class="mb-20">
        <div class="flex justify-between mt-8 mb-10 px-4 md:px-0">
          <h1 class="font-bold typography-headline-3 md:typography-headline-2">{{ heading }}</h1>
          <SfButton
            :tag="NuxtLink"
            :href="backHref"
            class="flex md:hidden whitespace-nowrap"
            size="sm"
            variant="tertiary"
          >
            <template #prefix>
              <SfIconArrowBack />
            </template>
            {{ backLabelMobile }}
          </SfButton>
          <SfButton :tag="NuxtLink" :href="backHref" class="hidden md:flex" variant="tertiary">
            <template #prefix>
              <SfIconArrowBack />
            </template>
            {{ backLabelDesktop }}
          </SfButton>
        </div>
        <span class="!flex justify-center my-40 h-24" v-if="isLoading && !cart">
          <SfLoaderCircular size="3xl" />
        </span>
        <slot v-else />
      </div>
    </NarrowContainer>
  </main>
  <UiFooter />
</template>

<script lang="ts" setup>
import { SfButton, SfIconArrowBack, SfLoaderCircular } from '@storefront-ui/vue';

const { getCart, data: cart, loading: isLoading } = useCart();

getCart();

defineProps<{
  backLabelDesktop: string;
  backLabelMobile: string;
  backHref: string;
  heading: string;
}>();

const NuxtLink = resolveComponent('NuxtLink');
</script>
