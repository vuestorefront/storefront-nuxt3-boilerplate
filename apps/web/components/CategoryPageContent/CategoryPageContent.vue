<template>
  <NarrowContainer>
    <div class="mb-20 px-4 md:px-0" data-testid="category-layout">
      <h1 class="my-10 font-bold typography-headline-3 md:typography-headline-2">{{ title }}</h1>
      <div class="md:flex gap-6" data-testid="category-page-content">
        <CategorySidebar :is-open="isOpen" @close="close">
          <NuxtLazyHydrate when-visible>
            <slot name="sidebar" />
          </NuxtLazyHydrate>
        </CategorySidebar>
        <div class="flex-1">
          <div class="flex justify-between items-center mb-6">
            <span class="font-bold font-headings md:text-lg">
              {{ $t('numberOfProducts', { count: totalProducts }) }}
            </span>
            <SfButton @click="open" variant="tertiary" class="md:hidden whitespace-nowrap">
              <template #prefix>
                <SfIconTune />
              </template>
              {{ $t('listSettings') }}
            </SfButton>
          </div>
          <section
            v-if="products"
            class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
            data-testid="category-grid"
          >
            <NuxtLazyHydrate
              when-visible
              v-for="({ id, name, rating, price, primaryImage, slug }, index) in products"
              :key="id"
            >
              <UiProductCard
                :name="name ?? ''"
                :rating-count="rating?.count"
                :rating="rating?.average"
                :price="price?.value.amount"
                :image-url="primaryImage?.url ?? ''"
                :image-alt="primaryImage?.alt ?? ''"
                :slug="slug"
                :priority="index === 0"
              >
                <template #wishlistButton>
                  <WishlistButton
                    square
                    class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
                  />
                </template>
              </UiProductCard>
            </NuxtLazyHydrate>
          </section>
          <LazyCategoryEmptyState v-else />
          <UiPagination
            v-if="totalProducts > itemsPerPage"
            :current-page="1"
            :total-items="totalProducts"
            :page-size="itemsPerPage"
            :max-visible-pages="maxVisiblePages"
          />
        </div>
      </div>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import { SfButton, SfIconTune, useDisclosure } from '@storefront-ui/vue';
import { whenever } from '@vueuse/core';
import type { CategoryPageContentProps } from '~/components/CategoryPageContent/types';

withDefaults(defineProps<CategoryPageContentProps>(), {
  itemsPerPage: 24,
});

const { isOpen, open, close } = useDisclosure();
const { isTablet, isDesktop } = useBreakpoints();

const maxVisiblePages = computed(() => (isDesktop.value ? 5 : 1));

whenever(isTablet, close);
</script>
