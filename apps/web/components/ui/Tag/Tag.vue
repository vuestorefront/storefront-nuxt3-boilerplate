<template>
  <div
    :class="[
      'inline-flex items-center justify-center',
      strong ? 'font-medium rounded-none' : 'rounded-md font-normal',
      getVariantClasses,
      sizeClasses,
    ]"
    data-testid="tag"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { type TagProps, TagSize } from '~/components/ui/Tag/types';

const props = withDefaults(defineProps<TagProps>(), {
  variant: 'primary',
  strong: false,
  size: 'base',
});

const sizeClasses = computed(() => (props.size === TagSize.sm ? 'text-xs p-1 gap-1' : 'text-sm p-1.5 gap-1.5'));

const getVariantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary': {
      return ['text-white', props.strong ? 'bg-secondary-800' : 'bg-secondary-100'];
    }
    case 'negative': {
      return ['text-negative-800', props.strong ? 'bg-negative-600' : 'bg-negative-100'];
    }
    default: {
      return ['text-primary-800', props.strong ? 'bg-primary-600' : 'bg-primary-100'];
    }
  }
});
</script>
