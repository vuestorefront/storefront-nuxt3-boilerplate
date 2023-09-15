<template>
  <div
    class="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
    data-testid="category-filters"
  >
    {{ $t('filters') }}
  </div>
  <div class="flex flex-col gap-2">
    <CategoryFiltersFilter v-if="sizeFacets" :facet="sizeFacets" v-model:selected="selectedFilters" type="size" />
    <CategoryFiltersFilter v-if="colorFacets" :facet="colorFacets" v-model:selected="selectedFilters" type="color" />
  </div>
</template>

<script setup lang="ts">
import type { CategoryFiltersProps } from '~/components/CategoryFilters/types';

const props = defineProps<CategoryFiltersProps>();

const { facets } = toRefs(props);
const selectedFilters = ref<string[]>([]);
const colorFacets = computed(() => facets.value.find(({ name }) => name === 'color'));
const sizeFacets = computed(() => facets.value.find(({ name }) => name === 'size'));
</script>
