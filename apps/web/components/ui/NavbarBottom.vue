<template>
  <nav class="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden" data-testid="navbar-bottom">
    <SfButton
      v-for="{ label, icon, path } in items"
      :key="label"
      variant="tertiary"
      :class="[
        'py-1 flex flex-col w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
        { 'text-white bg-primary-900': $route.path === path },
      ]"
      @click="handleClick(path)"
    >
      <template v-if="label !== 'cart'">
        <component :is="icon" />
        {{ $t(label) }}
      </template>
      <template v-else>
        <div class="relative">
          <div>
            <SfIconShoppingCart />
            <SfBadge
              :content="cartLineItemsCount"
              class="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900"
              data-testid="cart-badge"
            />
          </div>
          {{ $t(label) }}
        </div>
      </template>
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
const cartLineItemsCount = computed(() => 1);
const handleClick = (path: string) => {
  if (path === paths.search) {
    open();
  } else {
    router.push(path);
  }
};
</script>
