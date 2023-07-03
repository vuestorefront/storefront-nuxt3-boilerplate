<template>
  <main>
    <NarrowContainer>
      <h2>Order layout</h2>
      <slot />
    </NarrowContainer>
    <UiFooter />
  </main>
</template>

<script lang="ts" setup>
usePageTitle();
</script>
