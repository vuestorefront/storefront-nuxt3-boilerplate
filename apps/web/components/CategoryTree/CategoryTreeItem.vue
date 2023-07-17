<template>
  <SfListItem
    size="lg"
    :class="[
      'md:sf-list-item-sm md:py-1.5 sf-list-item',
      { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium': selected },
    ]"
    data-testid="category-tree-item"
  >
    <NuxtLink :to="href">
      <span class="flex gap-2 items-center">
        <span class="text-base md:text-sm capitalize flex items-center" data-testid="list-item-menu-label">
          <slot />
          {{ name }}
        </span>
        <SfCounter v-if="Number(count) > -1" class="md:text-sm font-normal">{{ count }}</SfCounter>
      </span>
      <template #suffix>
        <SfIconCheck v-if="selected" size="sm" class="text-primary-700" />
      </template>
    </NuxtLink>
  </SfListItem>
</template>

<script setup lang="ts">
import { SfCounter, SfIconCheck, SfListItem } from '@storefront-ui/vue';
import type { CategoryTreeItemType } from '~/components/CategoryTree/types';

defineProps<CategoryTreeItemType>();
</script>
