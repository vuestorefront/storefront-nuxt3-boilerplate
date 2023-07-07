<template>
  <div :class="['inline-flex items-center justify-center', classes]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { AlertProps } from '~/components/ui/Alert/types';

const { strong, variant, size } = withDefaults(defineProps<AlertProps>(), {
  size: 'base',
  strong: false,
  variant: 'primary',
});

const classes = computed(() => ({
  'text-sm p-1.5 gap-1.5': size === 'base',
  'text-xs p-1 gap-1': size === 'sm',
  'text-white font-medium rounded-none': strong,
  'rounded-md font-normal': !strong,
  'text-primary-800': variant === 'primary',
  'bg-primary-600': variant === 'primary' && strong,
  'bg-primary-100': variant === 'primary' && !strong,
  'text-secondary-800': variant === 'secondary',
  'bg-secondary-800': variant === 'secondary' && strong,
  'bg-secondary-100': variant === 'secondary' && !strong,
  'text-negative-800': variant === 'negative',
  'bg-negative-600': variant === 'secondary' && strong,
  'bg-negative-100': variant === 'secondary' && !strong,
}));
</script>
