<template>
  <div>
    <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
      <div class="relative" :class="{ 'pointer-events-none opacity-50': loading }">
        <WishlistPageContent />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const localePath = useLocalePath();
const { t } = useI18n();
const { fetchWishlist, loading } = useWishlist();

fetchWishlist();

const breadcrumbs = computed(() => {
  return [
    { name: t('home'), link: paths.home },
    { name: t('wishlist'), link: paths.wishlist },
  ];
});
</script>
