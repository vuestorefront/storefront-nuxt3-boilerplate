<template>
  <div class="relative col-span-4" :class="{ 'pointer-events-none opacity-50': loading }">
    <WishlistPageContent />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
  pageType: 'static',
});

const { fetchWishlist, loading } = useWishlist();

fetchWishlist();
</script>
