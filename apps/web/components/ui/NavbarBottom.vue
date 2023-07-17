<template>
  <nav class="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden" data-testid="navbar-bottom">
    <SfButton
      v-for="{ label, icon, path } in items"
      :key="label"
      variant="tertiary"
      :class="[
        'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
        { 'text-white bg-primary-900': $route.path === path },
      ]"
      @click="handleClick(path)"
    >
      <template #prefix>
        <div class="relative">
          <component :is="icon" />
          <SfBadge
            v-if="label === 'cart'"
            :content="cartLineItemsCount"
            class="outline-white bg-white !text-neutral-900 translate-x-[5px] translate-y-[-3px]"
          />
        </div>
      </template>
      {{ $t(label) }}
    </SfButton>
  </nav>
  <SfModal v-model="isOpen" class="w-full h-full z-50" as="section" role="dialog" aria-labelledby="search-modal-title">
    <header class="mb-4">
      <SfButton square variant="tertiary" class="absolute right-4 top-2" @click="close">
        <SfIconClose class="text-neutral-500" />
      </SfButton>
      <h3 id="search-modal-title" class="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
        {{ $t('search') }}
      </h3>
    </header>
    <UiSearch :close="close" />
  </SfModal>
</template>

<script setup lang="ts">
import {
  SfButton,
  SfBadge,
  SfIconShoppingCart,
  SfIconHome,
  SfIconMenu,
  SfIconSearch,
  SfModal,
  SfIconClose,
  useDisclosure,
} from '@storefront-ui/vue';

const router = useRouter();
const { isOpen, open, close } = useDisclosure({ initialValue: false });
const { data: cart } = useCart();

const items = [
  {
    label: 'home',
    icon: SfIconHome,
    path: paths.home,
  },
  {
    label: 'products',
    icon: SfIconMenu,
    path: paths.category,
  },
  {
    label: 'search',
    icon: SfIconSearch,
    path: paths.search,
  },
  {
    label: 'cart',
    icon: SfIconShoppingCart,
    path: paths.cart,
  },
];
const cartLineItemsCount = computed(
  () => cart.value?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0,
);
const handleClick = (path: string) => {
  if (path === paths.search) {
    open();
  } else {
    router.push(path);
  }
};
</script>
