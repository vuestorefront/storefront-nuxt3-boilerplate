<template>
  <div class="px-4">
    <span class="block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900">Size</span>
    <div class="mr-2 mb-2 uppercase inline-block">
      <SfChip class="min-w-[48px]" size="sm">Label</SfChip>
    </div>
    <span class="block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900">Color</span>
    <div class="mr-2 mb-2 inline-block">
      <SfChip size="sm">
        <template #prefix>
          <SfThumbnail size="sm" />
        </template>
        Label
      </SfChip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfChip, SfThumbnail } from '@storefront-ui/vue';
</script>
