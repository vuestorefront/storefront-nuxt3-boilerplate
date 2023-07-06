<template>
  <div>
    <Body class="font-body" />
    <UiNavbarTop />
    <main>
      <NarrowContainer>
        <slot />
      </NarrowContainer>
    </main>
    <UiFooter />
  </div>
</template>
