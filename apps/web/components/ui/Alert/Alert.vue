<template>
  <div :class="['inline-flex items-center justify-center', classes]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { AlertProps } from '~/components/ui/Alert/types';

const props = withDefaults(defineProps<AlertProps>(), {
  size: 'base',
  strong: false,
  variant: 'primary',
});

const classes = computed(() => ({
  'text-sm p-1.5 gap-1.5': props.size === 'base',
  'text-xs p-1 gap-1': props.size === 'sm',
  'text-white font-medium rounded-none': props.strong,
  'rounded-md font-normal': !props.strong,
  'text-primary-800': props.variant === 'primary',
  'bg-primary-600': props.variant === 'primary' && props.strong,
  'bg-primary-100': props.variant === 'primary' && !props.strong,
  'text-secondary-800': props.variant === 'secondary',
  'bg-secondary-800': props.variant === 'secondary' && props.strong,
  'bg-secondary-100': props.variant === 'secondary' && !props.strong,
  'text-negative-800': props.variant === 'negative',
  'bg-negative-600': props.variant === 'secondary' && props.strong,
  'bg-negative-100': props.variant === 'secondary' && !props.strong,
}));
</script>
