<template>
  <UiNavbarTop />
  <main class="mx-auto px-4 pt-4 pb-20 md:max-w-[630px] md:px-0 md:mt-4 md:mb-8">
    <h1 class="font-bold mb-10 typography-headline-3 md:typography-headline-2">{{ heading }}</h1>
    <slot />
  </main>
  <UiFooter />
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
}>();
</script>
