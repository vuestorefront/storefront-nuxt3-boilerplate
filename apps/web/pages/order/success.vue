<template>
  <h1>{{ $t('successInfoHeader') }}</h1>
  <span>{{ $t('successInfoMessage') }}</span>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'order',
});
</script>
