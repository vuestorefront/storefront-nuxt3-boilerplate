<template>
  <article class="w-full p-4 border rounded-md" data-testid="review">
    <p class="pb-2 font-medium">{{ review.title }}</p>
    <header class="flex flex-col pb-2 md:flex-row md:justify-between">
      <span class="flex items-center pr-2 text-xs text-neutral-500">
        <SfRating :value="review.rating ?? undefined" :max="5" size="xs" class="mr-2" />
        {{ $d(new Date(review.createdAt)) }}
      </span>
      <p class="flex items-center text-xs truncate text-primary-700">
        <span class="mr-2 text-xs text-neutral-500">{{ review.reviewer }}</span>
        <SfIconCheck size="xs" class="mr-1" /> {{ $t('review.verifiedPurchase') }}
      </p>
    </header>
    <p class="pb-2 text-sm text-neutral-900">{{ truncatedContent }}</p>
    <button
      v-if="isButtonVisible"
      type="button"
      class="inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800"
      @click="isCollapsed = !isCollapsed"
    >
      {{ $t(isCollapsed ? 'readMore' : 'readLess') }}
    </button>
    <footer class="flex items-center justify-between">
      <div class="text-sm text-neutral-500">
        <button type="button" class="mr-6 hover:text-primary-800">
          <SfIconThumbUp size="sm" class="mr-2.5" />
          <SfCounter size="sm" class="text-inherit">6</SfCounter>
        </button>
        <button type="button" class="hover:text-primary-800">
          <SfIconThumbDown size="sm" class="mr-2.5" />
          <SfCounter size="sm" class="text-inherit">2</SfCounter>
        </button>
      </div>

      <button class="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800" type="button">
        {{ $t('review.reportAbuse') }}
      </button>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { SfRating, SfIconCheck, SfIconThumbUp, SfIconThumbDown, SfCounter } from '@storefront-ui/vue';
import type { ReviewProps } from '~/components/ui/Review/types';

const props = defineProps<ReviewProps>();

const { review } = toRefs(props);
const charLimit = 400;
const isCollapsed = ref(true);
const isButtonVisible = computed(() => review.value.text?.length || 0 > charLimit);
const truncatedContent = computed(() =>
  isButtonVisible.value && isCollapsed.value
    ? `${review.value.text?.slice(0, Math.max(0, charLimit))}...`
    : review.value.text,
);
</script>
