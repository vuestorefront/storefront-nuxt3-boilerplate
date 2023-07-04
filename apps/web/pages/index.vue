<template>
  <div v-for="(component, index) in content" :key="`${component.fields.component}-${index}`">
    <RenderContent :content="component.fields.content" />
  </div>
</template>

<script lang="ts" setup>
import type { ContentDynamicPage } from '~/composables/useContent/types';

const { getContent, data: content } = useContent<ContentDynamicPage>('home-page');

getContent();
</script>
