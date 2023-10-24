<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <NarrowContainer>
      <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
          <NuxtLazyHydrate when-idle>
            <Gallery :images="productGetters.getGallery(product)" />
          </NuxtLazyHydrate>
        </section>
        <section class="mb-10 grid-in-right md:mb-0">
          <NuxtLazyHydrate when-idle>
            <UiPurchaseCard v-if="product" :product="product" :review-average="productReviewAverage" />
          </NuxtLazyHydrate>
        </section>
        <section class="grid-in-left-bottom md:mt-8">
          <UiDivider class="mt-4 mb-2 md:mt-8" />
          <NuxtLazyHydrate when-visible>
            <ProductAccordion v-if="product" :product="product" />
          </NuxtLazyHydrate>
          <NuxtLazyHydrate when-visible>
            <ReviewsAccordion :product="product" />
          </NuxtLazyHydrate>
        </section>
      </div>
      <section class="mx-4 mt-28 mb-20">
        <NuxtLazyHydrate when-visible>
          <ProductRecommendedProducts :product="product"></ProductRecommendedProducts>
        </NuxtLazyHydrate>
      </section>
    </NarrowContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Product, ProductParams } from '@plentymarkets/shop-api';
import { categoryTreeGetters, productGetters } from '@plentymarkets/shop-sdk';

const { data: categoryTree } = useCategoryTree();

const route = useRoute();
const router = useRouter();
const { selectVariation } = useProducts();
const localePath = useLocalePath();

const productPieces = (route.params.itemId as string).split('_');

const productId = productPieces[0];
let productParams: ProductParams = {
  id: productId,
};

if (productPieces[1]) {
  productParams.variationId = productPieces[1];
}

const { data: product, fetchProduct } = useProduct(productId);

await fetchProduct(productParams);

const { data: productReviewAverage, fetchProductReviewAverage } = useProductReviewAverage(
  product?.value?.variation?.id?.toString() ?? '',
);

selectVariation(productPieces[1] ? product.value : ({} as Product));
await fetchProductReviewAverage(product.value.item.id);

const { t } = useI18n();

const breadcrumbs = computed(() => {
  const breadcrumb = categoryTreeGetters.generateBreadcrumbFromCategory(
    categoryTree.value,
    Number(productGetters.getCategoryIds(product.value)?.[0] ?? 0),
  );
  breadcrumb.unshift({ name: t('home'), link: '/' });
  breadcrumb.push({ name: productGetters.getName(product.value), link: `#` });

  return breadcrumb;
});

if (product.value) {
  const productName = productGetters.getName(product.value);

  const title = computed(() => productName);

  useHead({
    title,
  });
}

definePageMeta({
  layout: false,
});

// eslint-disable-next-line unicorn/expiring-todo-comments
/* TODO: This should only be temporary.
 *  It changes the url of the product page while on the page and switching the locale.
 *  Should be removed when the item search is refactored.
 */
watch(
  () => product.value.texts.urlPath,
  (value, oldValue) => {
    if (value !== oldValue) {
      router.push({
        path: localePath(`/${productGetters.getUrlPath(product.value)}_${productGetters.getItemId(product.value)}`),
        query: route.query,
      });
    }
  },
);
</script>
