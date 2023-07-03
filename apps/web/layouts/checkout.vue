<template>
  <main>
    <NarrowContainer>
      <h2>Checkout layout</h2>
      <slot />
    </NarrowContainer>
    <UiFooter />
  </main>
</template>

<script lang="ts" setup>
usePageTitle();
</script>
