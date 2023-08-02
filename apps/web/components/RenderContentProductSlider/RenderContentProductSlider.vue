<template>
  <NuxtLazyHydrate when-visible>
    <ProductSlider :wrapper-class="['max-w-screen-3xl mx-auto px-4 md:px-10 mb-20', $attrs.class]" />
  </NuxtLazyHydrate>
</template>
