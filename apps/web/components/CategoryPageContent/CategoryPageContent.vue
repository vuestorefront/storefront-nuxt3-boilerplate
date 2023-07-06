<template>
  <NarrowContainer>
    <div class="mb-20 px-4 md:px-0" data-testid="category-layout">
      <h1 class="my-10 font-bold typography-headline-3 md:typography-headline-2">{{ title }}</h1>
      <div class="md:flex gap-6" data-testid="category-page-content">
        <CategorySidebar>
          <slot name="sidebar" />
        </CategorySidebar>
      </div>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import { SfProductCatalogItem } from '@vsf-enterprise/unified-data-model';

defineProps<{
  title: string;
  totalProducts?: number;
  itemsPerPage?: {
    type: number;
    default: 24;
  };
  products?: SfProductCatalogItem[];
}>();
</script>
