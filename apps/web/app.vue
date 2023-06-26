<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { titleSuffix } = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${titleSuffix}` : titleSuffix;
  }
})
</script>
