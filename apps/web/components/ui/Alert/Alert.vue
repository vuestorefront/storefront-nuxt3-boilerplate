<template>
  <div :class="['inline-flex items-center justify-center', classes]">
    <slot />
  </div>
</template>

<script lang="ts">
const sizeClasses = {
  sm: 'text-xs p-1 gap-1',
  base: 'text-sm p-1.5 gap-1.5',
};
</script>

<script setup lang="ts">
import type { AlertProps } from '~/components/ui/Alert/types';

const props = withDefaults(defineProps<AlertProps>(), {
  size: 'base',
  strong: false,
  variant: 'primary',
});

const classes = computed(() => [
  sizeClasses[props.size],
  props.strong ? 'text-white font-medium rounded-none' : 'rounded-md font-normal',
  {
    [`text-primary-800 ${props.strong ? 'bg-primary-600' : 'bg-primary-100'}`]: props.variant === 'primary',
    [`text-secondary-800 ${props.strong ? 'bg-secondary-800' : 'bg-secondary-100'}`]: props.variant === 'secondary',
    [`text-negative-800 ${props.strong ? 'bg-negative-600' : 'bg-negative-100'}`]: props.variant === 'negative',
    [`text-neutral-900 border border-neutral-200 ${props.strong ? 'bg-neutral-600' : 'bg-neutral-100'}`]:
      props.variant === 'neutral',
  },
]);
</script>
