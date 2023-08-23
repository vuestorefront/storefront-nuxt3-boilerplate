<template>
  <footer class="pt-10 bg-neutral-100 mb-[58px] md:mb-0" data-testid="footer">
    <div
      class="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-screen-3xl mx-auto"
      data-testid="section-top"
    >
      <div v-for="{ key, subcategories } in categories" :key="key" class="min-w-[25%] xs:min-w-[50%] flex flex-col">
        <div class="ml-4 text-lg font-medium leading-7 text-neutral-900 font-body">
          {{ $t(`categories.${key}.label`) }}
        </div>
        <ul>
          <SfListItem
            v-for="{ key: subcategoryKey, link } in subcategories"
            :key="subcategoryKey"
            class="py-2 !bg-transparent typography-text-sm font-body"
          >
            <SfLink
              :tag="NuxtLink"
              class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
              variant="secondary"
              :to="link"
            >
              {{ $t(`categories.${key}.subcategories.${subcategoryKey}`) }}
            </SfLink>
          </SfListItem>
        </ul>
      </div>
    </div>
    <hr />
    <div class="py-10 md:flex md:mx-auto max-w-screen-3xl" data-testid="section-middle">
      <div v-for="{ key, icon, link, details } in contactOptions" :key="key" class="mx-auto my-4 text-center">
        <component :is="icon" size="lg" />
        <p class="py-1 my-2 font-medium typography-text-lg font-body">
          <SfLink
            :tag="NuxtLink"
            class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
            variant="secondary"
            :to="link"
          >
            {{ $t(`contactOptions.${key}.label`) }}
          </SfLink>
        </p>
        <p v-for="option in details" :key="option" class="leading-5 typography-text-sm text-neutral-600 font-body">
          {{ $t(`contactOptions.${key}.details.${option}`) }}
        </p>
      </div>
    </div>
    <div class="bg-neutral-900" data-testid="section-bottom">
      <div class="justify-end px-4 py-10 md:flex md:py-6 max-w-screen-3xl mx-auto">
        <div class="flex justify-center py-2 gap-x-4 md:self-start">
          <SfButton
            v-for="{ label, link, icon } in socialMedia"
            :key="label"
            :tag="NuxtLink"
            :to="link"
            :title="$t('socialLabel', { label })"
            square
            variant="tertiary"
            class="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:!bg-transparent"
            :data-testid="label"
          >
            <component :is="icon" />
          </SfButton>
        </div>
        <div class="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
          <SfLink
            v-for="{ key, link } in bottomLinks"
            :key="key"
            :tag="NuxtLink"
            class="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
            variant="secondary"
            :to="link"
          >
            {{ $t(`bottomLinks.${key}`) }}
          </SfLink>
        </div>
        <p
          class="flex items-center justify-center leading-5 text-center typography-text-sm text-white/50 font-body md:ml-6"
        >
          {{ companyName }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SfButton, SfLink, SfListItem } from '@storefront-ui/vue';
import { bottomLinks, categories, companyName, contactOptions, socialMedia } from '~/mocks';

const NuxtLink = resolveComponent('NuxtLink');
</script>
