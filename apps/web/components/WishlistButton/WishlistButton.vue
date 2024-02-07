<template>
  <SfButton
    variant="tertiary"
    size="sm"
    :aria-label="isWishlistItem ? t('removeProductFromWishlist') : t('addProductToWishlist')"
    @click="triggerWishlist()"
    data-testid="wishlist-trigger"
  >
    <SfLoaderCircular v-if="wishlistLoading" class="flex justify-center items-center" size="sm" />
    <template v-else>
      <SfIconFavoriteFilled v-if="isWishlistItem" size="sm" />
      <SfIconFavorite v-else size="sm" />
      <slot name="content" :active="isWishlistItem" />
    </template>
  </SfButton>
</template>

<script setup lang="ts">
import { SfButton, SfIconFavorite, SfIconFavoriteFilled, SfLoaderCircular } from '@storefront-ui/vue';

const isWishlistItem = ref(false);
const wishlistLoading = ref(false);

const { t } = useI18n();

const triggerWishlist = () => {
  wishlistLoading.value = true;
  isWishlistItem.value = !isWishlistItem.value;
  wishlistLoading.value = false;
};
</script>
