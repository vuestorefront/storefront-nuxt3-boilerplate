<template>
  <div class="relative flex w-full max-h-[600px] aspect-[4/3]" data-testid="gallery">
    <SfScrollable
      ref="thumbsRef"
      class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      direction="vertical"
      :active-index="activeIndex"
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === images.length - 1"
      buttons-placement="floating"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-if="!firstThumbVisible"
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="absolute !rounded-full z-10 top-4 rotate-90 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronLeft size="sm" />
        </SfButton>
      </template>
      <button
        v-for="({ url, alt }, index) in images"
        :key="`${alt}-${index}-thumbnail`"
        :ref="(el) => assignRef(el, index)"
        type="button"
        :aria-label="alt || ''"
        :aria-current="activeIndex === index"
        class="md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0"
        :class="[activeIndex === index ? 'border-primary-700' : 'border-transparent']"
        @mouseover="activeIndex = index"
        @focus="activeIndex = index"
      >
        <img :alt="alt || ''" class="border border-neutral-200" width="78" height="78" :src="url" />
      </button>
      <template #nextButton="defaultProps">
        <SfButton
          v-if="!lastThumbVisible"
          v-bind="defaultProps"
          :disabled="activeIndex === images.length"
          class="absolute !rounded-full z-10 bottom-4 rotate-90 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronRight size="sm" />
        </SfButton>
      </template>
    </SfScrollable>
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      direction="vertical"
      wrapper-class="h-full m-auto"
      is-active-index-centered
      buttons-placement="none"
      :drag="{ containerWidth: true }"
      @on-drag-end="onDragged"
    >
      <div
        v-for="({ url, alt }, index) in images"
        :key="`${alt}-${index}`"
        class="flex justify-center h-full basis-full shrink-0 grow snap-center"
      >
        <img
          :aria-label="alt || ''"
          :aria-hidden="activeIndex !== index"
          class="object-cover w-auto h-full"
          :alt="alt || ''"
          :src="url"
        />
      </div>
    </SfScrollable>
  </div>
</template>

<script lang="ts" setup>
import { type ComponentPublicInstance } from 'vue';
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
} from '@storefront-ui/vue';
import { SfImage } from '@vue-storefront/unified-data-model';
import { unrefElement, useIntersectionObserver } from '@vueuse/core';

const props = defineProps<{
  images: SfImage[];
}>();

const thumbsRef = ref<HTMLElement>();
const firstThumbReference = ref<HTMLButtonElement>();
const lastThumbReference = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

watch(
  thumbsRef,
  (thumbsReference) => {
    if (thumbsReference) {
      useIntersectionObserver(
        firstThumbReference,
        ([{ isIntersecting }]) => {
          firstThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsReference),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

watch(
  thumbsRef,
  (thumbsReference) => {
    if (thumbsReference) {
      useIntersectionObserver(
        lastThumbReference,
        ([{ isIntersecting }]) => {
          lastThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsReference),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < props.images.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (element: Element | ComponentPublicInstance | null, index: number) => {
  if (!element) return;
  if (index === props.images.length - 1) {
    lastThumbReference.value = element as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbReference.value = element as HTMLButtonElement;
  }
};
</script>
