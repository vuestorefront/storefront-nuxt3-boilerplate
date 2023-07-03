<template>
  <main>
    <NarrowContainer>
      <h2>Default layout</h2>
      <slot />
    </NarrowContainer>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer/Footer.vue';

usePageTitle();
</script>
