<template>
  <NarrowContainer v-if="product" class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
    <Gallery :images="product.gallery" class="grid-in-left-top md:h-full xl:max-h-[700px]" />
  </NarrowContainer>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug as string;
const { data: product, fetchProduct } = useProduct(slug);

fetchProduct(slug);

const title = computed(() => product.value?.name ?? '');

useHead({
  title,
});
</script>
