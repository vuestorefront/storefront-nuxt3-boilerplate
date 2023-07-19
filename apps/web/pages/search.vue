<template>
  <NuxtLayout name="default">
    <CategoryPageContent
      v-if="productsCatalog"
      :title="$t('resultsFor', { phrase: query.search })"
      :total-products="productsCatalog.pagination.totalResults"
      :products="productsCatalog.products"
    >
      <template #sidebar>
        <CategorySorting />
        <CategoryFilters :facets="productsCatalog.facets" />
      </template>
    </CategoryPageContent>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const { query } = useRoute();
const { fetchProducts, data: productsCatalog } = useProducts();

await fetchProducts();
</script>
