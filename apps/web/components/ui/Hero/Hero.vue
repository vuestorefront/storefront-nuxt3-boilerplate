<template>
  <div class="relative min-h-[600px] mb-10">
    <div class="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-screen-3xl mx-auto">
      <div class="flex flex-col justify-center md:basis-2/4 md:items-stretch md:overflow-hidden">
        <NuxtImg
          :src="image"
          alt="Hero"
          class="h-auto w-full object-cover object-left"
          width="764"
          height="600"
          fetchpriority="high"
          format="webp"
          preload
        />
      </div>
      <div class="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
        <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
          {{ subtitle }}
        </p>
        <h1 class="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          {{ title }}
        </h1>
        <p class="typography-text-base md:typography-text-lg">{{ description }}</p>
        <div class="flex flex-col md:flex-row gap-4 mt-6">
          <SfButton size="lg" :tag="NuxtLink" :to="primaryButtonLink">
            {{ primaryButtonText }}
          </SfButton>
          <SfButton size="lg" :tag="NuxtLink" :to="secondaryButtonLink" class="bg-white" variant="secondary">
            {{ secondaryButtonText }}
          </SfButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import type { HeroProps } from '~/components/ui/Hero/types';

defineProps<HeroProps>();

const NuxtLink = resolveComponent('NuxtLink');
</script>
