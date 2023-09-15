<template>
  <SfInput :type="isPasswordVisible ? 'text' : 'password'">
    <template #suffix>
      <button type="button" @click="isPasswordVisible = !isPasswordVisible">
        <component :is="isPasswordVisible ? SfIconVisibilityOff : SfIconVisibility" />
      </button>
    </template>
  </SfInput>
</template>

<script setup lang="ts">
import { SfInput, SfIconVisibility, SfIconVisibilityOff } from '@storefront-ui/vue';

const isPasswordVisible = ref<boolean>();
</script>
