<template>
  <h1>{{ $t('successInfoHeader') }}</h1>
  <span>{{ $t('successInfoMessage') }}</span>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'order',
});
</script>
