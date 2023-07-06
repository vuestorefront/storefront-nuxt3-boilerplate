<template>
  <div v-for="(component, index) in content" :key="`${component.fields.component}-${index}`">
    <RenderContent :content="component.fields.content" />
  </div>
</template>

<script lang="ts" setup>
const { getContent, data: content } = useContent('home-page');

getContent();
</script>
