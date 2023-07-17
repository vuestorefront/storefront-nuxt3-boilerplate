<template>
  <SfAccordionItem v-model="internalModelValue" :summary-class="summaryClass">
    <template #summary>
      <slot name="summary">
        <p>{{ summary }}</p>
      </slot>
      <SfIconChevronLeft :class="['text-neutral-500', modelValue ? 'rotate-90' : '-rotate-90']" />
    </template>
    <div className="py-2 px-4">
      <slot />
    </div>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/vue';
import { useVModel } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    summary?: string;
    summaryClass?: string;
  }>(),
  { modelValue: false, summary: '', summaryClass: '' },
);
const emit = defineEmits(['update:modelValue']);

const internalModelValue = useVModel(props, 'modelValue', emit, { passive: true });
</script>
