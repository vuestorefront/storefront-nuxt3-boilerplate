<template>
  <NarrowContainer>
    <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
      <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
        <!-- Gallery -->
      </section>
      <section class="mb-10 grid-in-right md:mb-0">
        <!-- PurchaseCard -->
      </section>
      <section class="grid-in-left-bottom md:mt-8">
        <Divider class="mb-6" />
        <ProductProperties />
        <Divider class="mt-4 mb-2 md:mt-8" />
        <!-- ProductAccordion -->
      </section>
      <Divider class="mt-4 mb-2" />
    </div>
    <section class="mx-4 mt-28 mb-20">
      <!-- RecommendedProducts -->
    </section>
  </NarrowContainer>
</template>

<script lang="ts" setup>
// example of title override
const title = ref('Mocked product title');
// example of using cached data from Home Page
// const { data } = useContent('home-page');

useHead({
  title,
});
</script>
