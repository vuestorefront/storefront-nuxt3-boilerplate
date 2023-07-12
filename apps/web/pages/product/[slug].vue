<template>
  <NarrowContainer v-if="product">
    <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
      <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
        <Gallery :images="product.gallery" />
      </section>
    </div>
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
