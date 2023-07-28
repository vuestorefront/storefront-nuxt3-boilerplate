<template>
  <header
    :class="[
      'h-14 md:h-20 flex z-50 md:sticky md:-top-5 md:pt-2.5 md:shadow-md',
      { 'bg-primary-700 text-white': filled },
      { 'bg-white text-[#02C652] border-b border-neutral-200': !filled },
    ]"
    data-testid="navbar-top"
  >
    <div
      class="flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[60px] max-w-screen-3xl py-6 px-4 md:px-6 lg:px-10 mx-auto sticky top-0 justify-between md:justify-normal"
    >
      <NuxtLink :to="paths.home" aria-label="Sf Homepage" class="h-6 md:h-7 -mt-1.5">
        <UiVsfLogo />
      </NuxtLink>
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  filled?: boolean;
}>();
</script>
