<template>
  <Body class="font-body" />
  <UiNavbarTop />
  <main>
    <NarrowContainer>
      <slot />
    </NarrowContainer>
  </main>
  <UiFooter />
</template>

<script lang="ts" setup>
const { getCart } = useCart();

getCart();
usePageTitle();
</script>
