<template>
  <div class="w-full md:max-w-[376px]" data-testid="category-sorting">
    <h6 class="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
      {{ $t('sortBy') }}
    </h6>
    <div class="px-4">
      <SfSelect v-model="selected" :aria-label="$t('sortBy')">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ $t(`sortType.${label}`) }}
        </option>
      </SfSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfSelect } from '@storefront-ui/vue';

const options = ref([
  {
    label: 'latest',
    value: 'createdAt',
  },
  {
    label: 'priceUp',
    value: 'price-low-to-high',
  },
  {
    label: 'priceDown',
    value: 'price-high-to-low',
  },
  {
    label: 'relevance',
    value: 'relevant',
  },
]);
const selected = ref(options.value[0].value);
</script>
