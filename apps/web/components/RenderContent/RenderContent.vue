<template>
  <component
    v-for="(component, index) in content"
    :is="componentsMap[component.fields.component]"
    v-bind="component.fields"
    :key="`${component.fields.component}-${index}`"
    data-testid="render-content"
    :class="['className' in component.fields && component.fields.className]"
  />
</template>

<script setup lang="ts">
import Heading from '~/components/Heading/Heading.vue';
import type { RenderContentProps } from '~/components/RenderContent/types';
import RenderContentProductSlider from '~/components/RenderContentProductSlider/RenderContentProductSlider.vue';
import CategoryCard from '~/components/ui/CategoryCard/CategoryCard.vue';
import Display from '~/components/ui/Display/Display.vue';
import Hero from '~/components/ui/Hero/Hero.vue';

defineProps<RenderContentProps>();

const componentsMap = computed(() => ({
  Hero,
  Card: CategoryCard,
  Heading,
  Display,
  ProductSlider: RenderContentProductSlider,
}));
</script>
