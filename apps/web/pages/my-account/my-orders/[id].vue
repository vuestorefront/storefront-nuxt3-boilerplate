<template>
  <UiModal v-model="isOpen">
    <SfButton square variant="tertiary" class="absolute right-2 top-2" :tag="NuxtLink" :to="paths.accountMyOrders">
      <SfIconClose />
    </SfButton>
    {{ data }}
  </UiModal>
</template>

<script setup lang="ts">
import { SfButton, SfIconClose, useDisclosure } from '@storefront-ui/vue';

const route = useRoute();
const router = useRouter();

const { isOpen } = useDisclosure({ initialValue: true });

const { fetchCustomerOrder, data } = useCustomerOrder(route.params.id as string);
onMounted(async () => {
  // without nextTick data on first click does not load data
  await nextTick();
  await fetchCustomerOrder(route.params.id as string);
});

watch(
  isOpen,
  (isOpen) => {
    if (!isOpen) router.push(paths.accountMyOrders);
  },
  { immediate: true },
);

const NuxtLink = resolveComponent('NuxtLink');
</script>
