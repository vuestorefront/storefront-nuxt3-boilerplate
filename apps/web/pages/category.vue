<template>
  <CategoryPageContent
    :title="$t('allProducts')"
    :total-products="productsCatalog?.pagination.totalResults"
    :products="productsCatalog?.products"
  >
    <template #sidebar>
      <CategoryTree :categories="categories" :parent="{ name: $t('allProducts'), href: '/category' }" />
      <CategorySorting />
    </template>
  </CategoryPageContent>
  <!--  <pre>-->
  <!--    <code>{{ JSON.stringify(productsCatalog, null, 2) }}</code>-->
  <!--  </pre>-->
</template>

<script setup lang="ts">
import { Breadcrumb } from '~/components/ui/Breadcrumbs/types';

const { getProducts, data: productsCatalog } = useProducts();
const { t } = useI18n();

const breadcrumbs: Breadcrumb[] = [
  { name: t('home'), link: '/' },
  { name: t('allProducts'), link: '/category' },
];

await getProducts();
const subCategories = productsCatalog.value?.subCategories;
const categories =
  subCategories?.map(({ name, productCount }) => ({ name, count: productCount || undefined, href: '/category' })) || [];
</script>
