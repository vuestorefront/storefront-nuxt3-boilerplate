<template>
  <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
    <SfInput ref="inputRef" v-model="inputModel" aria-label="Search" placeholder="Search" @focus="open">
      <template #prefix>
          <SfIconSearch />
      </template>
      <template #suffix>
        <button
          v-if="inputModel"
          type="button"
          aria-label="Reset search"
          class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
          @click="reset"
        >
          <SfIconCancel />
        </button>
      </template>
    </SfInput>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { SfIconCancel, SfIconSearch, SfInput, useDisclosure } from '@storefront-ui/vue';
import { unrefElement } from '@vueuse/core';

const props = defineProps<{
  close?: () => boolean;
}>();

const router = useRouter();
const inputModel = ref('');
const inputRef = ref();
const { open } = useDisclosure();
const focusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector('input');
  inputEl?.focus();
};
const reset = () => {
  inputModel.value = '';
  focusInput();
};
const submit = () => {
  props.close && props.close();
  router.push({ path: '/search', query: { search: inputModel.value } });
  reset();
};

watch(inputModel, () => {
  if (inputModel.value === '') {
    reset();
  }
});
</script>
