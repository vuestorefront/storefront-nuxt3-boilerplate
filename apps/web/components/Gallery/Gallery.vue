<template>
  <div class="flex-col md:flex-row h-full flex relative scroll-smooth md:gap-4" data-testid="gallery">
    <div
      class="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full max-h-[600px]"
      data-testid="gallery-images"
    >
      <SfScrollable
        class="items-center flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-full"
        wrapper-class="!absolute top-0 left-0 w-full h-full"
        buttons-placement="none"
        :active-index="activeIndex"
        is-active-index-centered
        :drag="{ containerWidth: true }"
        @on-scroll="onScroll"
      >
        <div
          v-for="({ url, alt }, index) in images"
          :key="`${alt}-${index}-thumbnail`"
          class="w-full h-full relative snap-center snap-always basis-full shrink-0 grow"
        >
          <NuxtImg
            :alt="alt ?? ''"
            :aria-hidden="activeIndex !== index"
            fit="fill"
            class="object-contain h-full w-full"
            :quality="80"
            :src="url"
            sizes="2xs:100vw, md:700px"
            draggable="false"
            :loading="index !== 0 ? 'lazy' : undefined"
            :fetchpriority="index === 0 ? 'high' : undefined"
            :preload="index === 0"
            format="webp"
            width="600"
            height="600"
          />
        </div>
      </SfScrollable>
    </div>

    <div class="md:-order-1 overflow-hidden flex-shrink-0 basis-auto">
      <SfScrollable
        ref="thumbsReference"
        wrapper-class="hidden md:inline-flex"
        direction="vertical"
        class="flex-row w-full items-center md:flex-col md:h-full md:px-0 md:scroll-pl-4 snap-y snap-mandatory flex gap-0.5 md:gap-2 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        :active-index="activeIndex"
        :prev-disabled="activeIndex === 0"
        :next-disabled="activeIndex === images.length - 1"
      >
        <template #previousButton>
          <SfButton
            variant="secondary"
            size="sm"
            square
            class="absolute !rounded-full bg-white z-10 top-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500"
            :class="{ hidden: firstVisibleThumbnailIntersected }"
            :aria-label="$t('gallery.prev')"
          >
            <template #prefix>
              <SfIconChevronLeft />
            </template>
          </SfButton>
        </template>

        <button
          v-for="({ url, alt }, index) in images"
          :key="`${alt}-${index}-thumbnail`"
          :ref="(el) => assignReference(el, index)"
          type="button"
          :aria-current="activeIndex === index"
          :aria-label="$t('gallery.thumb', index)"
          class="w-20 h-[88px] relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow-0"
          :class="[activeIndex === index ? 'border-primary-700' : 'border-transparent']"
          @mouseover="onChangeIndex(index)"
          @focus="onChangeIndex(index)"
        >
          <NuxtImg
            alt=""
            class="object-contain"
            width="80"
            height="80"
            :src="url"
            :quality="80"
            loading="lazy"
            format="webp"
          />
        </button>

        <template #nextButton>
          <SfButton
            variant="secondary"
            size="sm"
            square
            class="absolute !rounded-full bg-white z-10 bottom-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500"
            :class="{ hidden: lastVisibleThumbnailIntersected }"
            :aria-label="$t('gallery.next')"
          >
            <template #prefix>
              <SfIconChevronRight />
            </template>
          </SfButton>
        </template>
      </SfScrollable>
      <div class="flex md:hidden gap-0.5" role="group">
        <button
          v-for="({ url }, index) in images"
          :key="url"
          type="button"
          :aria-current="activeIndex === index"
          :aria-label="$t('gallery.thumb', index + 1)"
          class="relative shrink-0 pb-1 border-b-4 cursor-pointer transition-colors flex-grow"
          :class="[activeIndex === index ? 'border-primary-700' : 'border-neutral-200']"
          @click="onChangeIndex(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';
import { clamp, type SfScrollableOnScrollData } from '@storefront-ui/shared';
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';
import type { SfImage } from '@vue-storefront/unified-data-model';
import { unrefElement, useIntersectionObserver, useTimeoutFn } from '@vueuse/core';

const props = defineProps<{
  images: SfImage[];
}>();

const { isPending, start, stop } = useTimeoutFn(() => {}, 50);

const thumbsReference = ref<HTMLElement>();
const firstThumbReference = ref<HTMLButtonElement>();
const lastThumbReference = ref<HTMLButtonElement>();
const firstVisibleThumbnailIntersected = ref(true);
const lastVisibleThumbnailIntersected = ref(true);
const activeIndex = ref(0);

const registerThumbsWatch = (
  singleThumbReference: Ref<HTMLButtonElement | undefined>,
  thumbnailIntersected: Ref<boolean>,
) => {
  watch(
    thumbsReference,
    (reference) => {
      if (reference) {
        useIntersectionObserver(
          singleThumbReference,
          ([{ isIntersecting }]) => {
            thumbnailIntersected.value = isIntersecting;
          },
          {
            root: unrefElement(reference),
            rootMargin: '0px',
            threshold: 1,
          },
        );
      }
    },
    { immediate: true },
  );
};

registerThumbsWatch(firstThumbReference, firstVisibleThumbnailIntersected);
registerThumbsWatch(lastThumbReference, lastVisibleThumbnailIntersected);

const onChangeIndex = (index: number) => {
  stop();
  activeIndex.value = clamp(index, 0, props.images.length - 1);
  start();
};
const onScroll = ({ left, scrollWidth }: SfScrollableOnScrollData) => {
  if (!isPending.value) {
    onChangeIndex(Math.round(left / (scrollWidth / props.images.length)));
  }
};
const assignReference = (element: Element | ComponentPublicInstance | null, index: number) => {
  if (!element) return;
  if (index === props.images.length - 1) {
    lastThumbReference.value = element as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbReference.value = element as HTMLButtonElement;
  }
};
</script>
