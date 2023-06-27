<template>
  <main>
    <NarrowContainer>
      <h2>Order layout</h2>
      <slot />
    </NarrowContainer>
  </main>
</template>

<script lang="ts" setup>
const { titleSuffix } = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${titleSuffix}` : (titleSuffix as string);
  },
});
</script>
