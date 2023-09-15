<template>
  <div class="flex min-w-[320px] max-w-[470px] pt-4" data-testid="product-card-horizontal">
    <div class="relative overflow-hidden rounded-md w-[100px]">
      <NuxtImg
        class="w-full h-auto border rounded-md border-neutral-200"
        :src="product.gallery[0].url"
        :alt="product.gallery[0].alt ?? ''"
        width="100"
        height="100"
      />
    </div>
    <div class="flex flex-col pl-4 min-w-[180px] flex-1 typography-text-base">
      {{ product.name }}
      <div class="my-2 sm:mb-0">
        <ul class="font-normal leading-5 typography-text-xs sm:typography-text-sm text-neutral-700">
          <li>
            <span class="mr-1">{{ product.attributes[0].name }}:</span>
            <span class="font-medium">{{ product.attributes[0].value }}</span>
          </li>
          <li>
            <span class="mr-1">{{ product.attributes[1].name }}:</span>
            <span class="font-medium">{{ product.attributes[1].value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductHorizontalProps } from '~/components/ui/ProductCardHorizontal/types';

defineProps<ProductHorizontalProps>();
</script>
