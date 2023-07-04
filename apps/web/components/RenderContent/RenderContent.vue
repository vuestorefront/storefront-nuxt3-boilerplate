<template>
  <component
    v-for="(component, index) in content"
    :is="componentsMap[component.fields.component]"
    v-bind="component.fields"
    :key="`${component.fields.component}-${index}`"
  />
</template>

<script setup lang="ts">
import Heading from '~/components/Heading/Heading.vue';
import type { RenderContentProps } from '~/components/RenderContent/types';
import CategoryCard from '~/components/ui/CategoryCard/CategoryCard.vue';
import Hero from '~/components/ui/Hero/Hero.vue';

const componentsMap = {
  Hero,
  Card: CategoryCard,
  Heading,
};

defineProps<RenderContentProps>();
</script>
