<template>
  <component
    v-for="(component, index) in content"
    :is="componentsMap[component.fields.component]"
    v-bind="component.fields"
    :key="`${component.fields.component}-${index}`"
  />
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue';
import type { RenderContentProps } from '~/components/RenderContent/types';

const componentsMap = {
  Hero,
};

defineProps<RenderContentProps>();
</script>
