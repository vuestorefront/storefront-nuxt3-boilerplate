<template>
  <UiOverlay :visible="modelValue">
    <SfModal class="md:max-h-[min(calc(100vh-32px),100%)]" v-bind="{ ...$attrs, ...props }">
      <slot />
    </SfModal>
  </UiOverlay>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { SfModal } from '@storefront-ui/vue';
import type { ModalProps } from '~/components/ui/Modal/types';

const props = defineProps<ModalProps>();
</script>
