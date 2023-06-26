<template>
  <main>
    <NarrowContainer>
      <h2>Checkout layout</h2>
      <slot />
    </NarrowContainer>
  </main>
</template>

<script lang="ts" setup>
const { titleSuffix } = useAppConfig();

useHead({
  titleTemplate: (titleChunk): string => {
    return titleChunk ? `${titleChunk} | ${titleSuffix}` : (titleSuffix as string);
  },
});
</script>
