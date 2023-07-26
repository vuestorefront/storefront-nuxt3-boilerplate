<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <NarrowContainer>
      <div class="mb-20 px-4 md:px-0" data-testid="account-layout">
        <h1 class="my-10 font-bold typography-headline-3 md:typography-headline-2">{{ $t('account.heading') }}</h1>
        <div class="md:flex gap-6" data-testid="account-page-sidebar">
          <div class="border border-neutral-200 p-4 rounded-md min-w-[300px]">
            <ul class="[&:not(:last-child)]:mb-4" v-for="{ title, icon, subsections } in sections" :key="title">
              <SfListItem class="hover:!bg-transparent font-medium !cursor-auto">
                <template #prefix><component :is="icon" /></template>
                {{ title }}
              </SfListItem>
              <li v-for="{ label, link } in subsections" :key="label">
                <!-- TODO: sfui typing issue -->
                <SfListItem
                  :tag="(NuxtLink as string)"
                  :href="link"
                  :class="[
                    'first-of-type:mt-2 rounded-md active:bg-primary-100 !text-neutral-900',
                    {
                      'font-medium bg-primary-100': router.currentRoute.value.path === link,
                    },
                  ]"
                >
                  <template #prefix><SfIconBase /></template>
                  {{ label }}
                </SfListItem>
              </li>
            </ul>
            <UiDivider />
            <ul>
              <SfListItem
                :tag="NuxtLink as string"
                href="/logout"
                class="mt-4 rounded-md active:bg-primary-100 !text-neutral-900"
              >
                <template #prefix><SfIconBase /></template>
                Log Out
              </SfListItem>
            </ul>
          </div>
          <div class="flex-1">
            <section
              class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
              data-testid="category-grid"
            >
              <slot />
            </section>
          </div>
        </div>
      </div>
    </NarrowContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfIconBase, SfIconPerson, SfIconShoppingCart, SfListItem } from '@storefront-ui/vue';

const { t } = useI18n();
const router = useRouter();
const sections = [
  {
    title: t('account.accountSettings.heading'),
    icon: SfIconPerson,
    subsections: [
      {
        label: t('account.accountSettings.section.personalData'),
        link: '/my-account/personal-data',
      },
      {
        label: t('account.accountSettings.section.billgingDetails'),
        link: '/my-account/billing-details',
      },
      {
        label: t('account.accountSettings.section.shippingDetails'),
        link: '/my-account/shipping-details',
      },
    ],
  },
  {
    title: t('account.ordersAndReturns.heading'),
    icon: SfIconShoppingCart,
    subsections: [
      {
        label: t('account.ordersAndReturns.section.myOrders'),
        link: '/my-account/my-orders',
      },
      {
        label: t('account.ordersAndReturns.section.returns'),
        link: '/my-account/returns',
      },
    ],
  },
];
const currentPath = computed(() => router.currentRoute.value.path);
const isRoot = computed(() => /^\/my-account\/?$/.test(currentPath.value));
const findCurrentPage = computed(() => {
  for (const section in sections) {
    const subsections = sections[section].subsections;
    const foundPage = subsections.find(({ link }) => link === currentPath.value);
    if (foundPage) return foundPage;
    else continue;
  }
});

const breadcrumbs = computed(() => [
  { name: t('home'), link: '/' },
  { name: t('account.heading'), link: '/my-account' },
  ...(isRoot.value ? [] : [{ name: findCurrentPage.value?.label, link: currentPath.value }]),
]);

const NuxtLink = resolveComponent('NuxtLink');
</script>
