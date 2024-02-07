<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0" data-testid="product-card">
    <div class="relative">
      <SfLink :tag="NuxtLink" :to="`${paths.product}${slug}`">
        <NuxtImg
          :src="imageUrl"
          :alt="imageAlt"
          class="object-cover rounded-md aspect-square w-full h-full"
          data-testid="image-slot"
          width="190"
          height="190"
          :loading="lazy && !priority ? 'lazy' : undefined"
          :fetchpriority="priority ? 'high' : undefined"
          :preload="priority"
          format="webp"
        />
      </SfLink>
      <slot name="wishlistButton" />
    </div>
    <div class="p-2 border-t border-neutral-200 typography-text-sm">
      <SfLink :tag="NuxtLink" :to="`${paths.product}${slug}`" class="no-underline" variant="secondary">
        {{ name }}
      </SfLink>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="rating ?? 0" :max="5" />
        <SfLink to="#" variant="secondary" :tag="NuxtLink" class="ml-1 no-underline">
          <SfCounter size="xs">{{ ratingCount }}</SfCounter>
        </SfLink>
      </div>
      <p class="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">
        {{ description }}
      </p>
      <span class="block pb-2 font-bold typography-text-sm" data-testid="product-card-vertical-price">
        ${{ price }}
      </span>
      <SfButton size="sm">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        {{ $t('addToCartShort') }}
      </SfButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfLink, SfRating, SfCounter, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';
import type { ProductCardProps } from '~/components/ui/ProductCard/types';

withDefaults(defineProps<ProductCardProps>(), {
  lazy: true,
  imageAlt: '',
});

const NuxtLink = resolveComponent('NuxtLink');
</script>
