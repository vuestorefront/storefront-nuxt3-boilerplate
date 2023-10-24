<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs" class="pointer-events-none opacity-50">
    <div class="relative" :class="{ 'pointer-events-none opacity-50': loading }">
      <SfLoaderCircular v-if="loading" class="fixed top-[50%] right-0 left-0 m-auto z-[99999]" size="2xl" />
      <CategoryPageContent
        v-if="productsCatalog"
        :title="categoryGetters.getCategoryName(productsCatalog.category)"
        :total-products="productsCatalog.pagination.totals"
        :products="productsCatalog.products"
        :items-per-page="Number(productsPerPage)"
      >
        <template #sidebar>
          <CategoryTree :category="category" />
          <CategorySorting />
          <CategoryItemsPerPage class="mt-6" :total-products="productsCatalog.pagination.totals" />
          <CategoryFilters :facets="productsCatalog.facets" />
        </template>
      </CategoryPageContent>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { categoryGetters, categoryTreeGetters } from '@plentymarkets/shop-sdk';
import { SfLoaderCircular } from '@storefront-ui/vue';
const { setCategoriesPageMeta } = useCanonical();
definePageMeta({
  layout: false,
});

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const { getFacetsFromURL } = useCategoryFilter();
const { fetchProducts, data: productsCatalog, productsPerPage, loading } = useProducts();
const { data: categoryTree } = useCategoryTree();
const { locale } = useI18n();
const localePath = useLocalePath();

const handleQueryUpdate = async () => {
  await fetchProducts(getFacetsFromURL());
  setCategoriesPageMeta(productsCatalog.value, getFacetsFromURL());
};

await handleQueryUpdate();

const category = ref(productsCatalog.value.category);

const breadcrumbs = computed(() => {
  const breadcrumb = categoryTreeGetters.generateBreadcrumbFromCategory(
    categoryTree.value,
    categoryGetters.getId(category.value),
  );
  breadcrumb.unshift({ name: t('home'), link: '/' });

  return breadcrumb;
});

watch(
  () => locale.value,
  async (changedLocale: any) => {
    router.push({
      path: localePath(`/c${productsCatalog.value.languageUrls[changedLocale]}`),
      query: route.query,
    });
  },
);

watch(
  () => route.query,
  async () => {
    handleQueryUpdate();
  },
);
</script>
