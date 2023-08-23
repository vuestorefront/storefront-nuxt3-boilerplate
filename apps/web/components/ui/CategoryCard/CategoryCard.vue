<template>
  <NuxtLazyHydrate when-visible>
    <div
      class="max-w-screen-3xl mx-auto md:px-10 px-4 mb-10 flex flex-nowrap md:flex-wrap md:justify-center overflow-x-scroll scrollbar-hidden"
      data-testid="category-card"
    >
      <div v-for="item in items" :key="item.name" class="mr-2 md:mr-6 group">
        <NuxtLink
          :to="item.slug"
          class="w-full h-full z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
        >
          <div
            class="relative h-[240px] w-[240px] rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
          >
            <NuxtImg
              :src="item.image"
              :alt="$t('imageOfSth', { name: item.name })"
              width="240"
              height="240"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="flex justify-center">
            <p
              class="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal"
            >
              {{ item.name }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </NuxtLazyHydrate>
</template>

<script setup lang="ts">
import type { CategoryCardProps } from '~/components/ui/CategoryCard/types';

defineProps<CategoryCardProps>();
</script>
