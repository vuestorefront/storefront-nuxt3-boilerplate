<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <h1>{{ $t('allProducts') }}</h1>

    {{ $t('numberOfProducts', 1) }}<br />
    {{ $t('numberOfProducts', 10) }}
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { Breadcrumb } from '~/components/ui/Breadcrumbs/types';

const { t } = useI18n();

const breadcrumbs: Breadcrumb[] = [
  { name: t('home'), link: '/' },
  { name: t('allProducts'), link: '/category' },
];

definePageMeta({
  layout: false,
});
</script>
