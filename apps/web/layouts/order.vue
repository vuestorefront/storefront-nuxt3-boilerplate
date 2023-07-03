<template>
  <UiNavbarTop />
  <main>
    <NarrowContainer>
      <h2>Order layout</h2>
      <slot />
    </NarrowContainer>
  </main>
  <UiFooter />
</template>

<script lang="ts" setup>
usePageTitle();
</script>
