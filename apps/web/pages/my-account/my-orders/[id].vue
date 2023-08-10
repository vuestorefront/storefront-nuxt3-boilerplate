<template>
  <UiOverlay visible>
    <SfModal
      v-model="isOpen"
      as="section"
      role="dialog"
      class="h-full w-full overflow-hidden md:h-fit max-h-[100%] md:max-w-[770px] min-w-650px !relative !p-4 md:!p-10"
    >
      <header class="flex justify-between bg-white items-center typography-headline-4 font-bold">
        <h3>{{ $t('account.ordersAndReturns.orderDetails.heading') }}</h3>
        <SfButton
          square
          variant="tertiary"
          :tag="NuxtLink"
          :to="paths.accountMyOrders"
          class="md:absolute md:top-2 md:right-2"
        >
          <SfIconClose class="text-neutral-500" />
        </SfButton>
      </header>
      <main class="mt-6 md:px-4 max-h-[591px] overflow-auto">
        <ul class="bg-neutral-100 p-4 rounded-md md:columns-2 mb-6">
          <li>
            <p class="font-medium">{{ $t('account.ordersAndReturns.orderDetails.orderId') }}</p>
            <span>{{ data?.id }}</span>
          </li>
          <li class="my-4 md:mb-0">
            <p class="font-medium">{{ $t('account.ordersAndReturns.orderDetails.orderDate') }}</p>
            <span>{{ data?.date }}</span>
          </li>
          <li>
            <p class="font-medium">{{ $t('account.ordersAndReturns.orderDetails.paymentAmount') }}</p>
            <span>{{ data?.paymentAmount }}</span>
          </li>
          <li class="mt-4">
            <p class="font-medium">{{ $t('account.ordersAndReturns.orderDetails.status') }}</p>
            <span>{{ data?.status }}</span>
          </li>
        </ul>
        <div v-for="(product, i) in products" :key="i" class="md:hidden">
          <UiProductCardVertical :product="product" />
          <ul class="flex">
            <li class="flex-grow pr-4 py-4">
              <p class="typography-text-sm font-medium">{{ $t('account.ordersAndReturns.orderDetails.price') }}</p>
              <span>${{ product.price }}</span>
            </li>
            <li class="flex-grow p-4">
              <p class="typography-text-sm font-medium">{{ $t('account.ordersAndReturns.orderDetails.quantity') }}</p>
              <span>{{ product.quantity }}</span>
            </li>
            <li class="flex-[50%] justify-self-end text-right pl-4 py-4">
              <p class="typography-text-sm font-medium">{{ $t('account.ordersAndReturns.orderDetails.subtotal') }}</p>
              <span>$295.87</span>
            </li>
          </ul>
        </div>
        <table class="hidden md:table w-full text-left typography-text-sm mx-4 md:mx-0">
          <caption class="hidden">
            {{
              $t('account.ordersAndReturns.orderDetails.tableCaption')
            }}
          </caption>
          <thead>
            <tr class="border-b-2 border-neutral-200">
              <th class="py-3 font-medium">{{ $t('account.ordersAndReturns.orderDetails.product') }}</th>
              <th class="py-3 px-4 font-medium lg:whitespace-nowrap">
                {{ $t('account.ordersAndReturns.orderDetails.price') }}
              </th>
              <th class="py-3 px-4 font-medium">{{ $t('account.ordersAndReturns.orderDetails.quantity') }}</th>
              <th class="py-3 px-4 font-medium">{{ $t('account.ordersAndReturns.orderDetails.subtotal') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, i) in products" :key="i" class="border-b border-neutral-200 align-top">
              <td class="pb-4 pr-4 lg:whitespace-nowrap"><UiProductCardVertical :product="product" /></td>
              <td class="p-4 lg:whitespace-nowrap">${{ product.price }}</td>
              <td class="p-4">{{ product.quantity }}</td>
              <td class="p-4">$295.87</td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-between pt-4 border-t border-neutral-200 md:border-0">
          <p>{{ $t('account.ordersAndReturns.orderDetails.itemsSubtotal') }}</p>
          <span>${{ data?.summary.subtotal }}</span>
        </div>
        <div class="flex justify-between my-2">
          <p>{{ $t('account.ordersAndReturns.orderDetails.delivery') }}</p>
          <span>{{ data?.summary.delivery }}</span>
        </div>
        <div class="flex justify-between border-b pb-4 border-neutral-200">
          <p>{{ $t('account.ordersAndReturns.orderDetails.estimatedTax') }}</p>
          <span>${{ data?.summary.estimatedTax }}</span>
        </div>
        <div class="flex justify-between border-b py-4 border-neutral-200 typography-text-lg font-medium">
          <p>{{ $t('account.ordersAndReturns.orderDetails.total') }}</p>
          <span>${{ data?.summary.total }}</span>
        </div>
        <ul class="md:columns-2 mt-6">
          <li class="mb-4">
            <p class="typography-text-sm font-medium mb-2">
              {{ $t('account.ordersAndReturns.orderDetails.billingAddress') }}
            </p>
            <span>{{ data?.billingAddress.firstName }}</span>
            <span>{{ data?.billingAddress.lastName }}</span>
            <span class="block">{{ data?.billingAddress.phoneNumber }}</span>
            <span>{{ data?.billingAddress.postalCode }}</span>
            <span class="block">{{ data?.billingAddress.city }}</span>
          </li>
          <li class="mb-4">
            <p class="typography-text-sm font-medium mb-2">
              {{ $t('account.ordersAndReturns.orderDetails.paymentMethod') }}
            </p>
            <span>{{ data?.paymentMethod }}</span>
          </li>
          <li class="mb-4">
            <p class="typography-text-sm font-medium mb-2">
              {{ $t('account.ordersAndReturns.orderDetails.shippingAddress') }}
            </p>
            <span>{{ data?.shippingAddress.firstName }}</span>
            <span>{{ data?.shippingAddress.lastName }}</span>
            <span class="block">{{ data?.shippingAddress.phoneNumber }}</span>
            <span>{{ data?.shippingAddress.postalCode }}</span>
            <span class="block">{{ data?.shippingAddress.city }}</span>
          </li>
          <li class="mb-4">
            <p class="typography-text-sm font-medium mb-2">
              {{ $t('account.ordersAndReturns.orderDetails.paymentMethod') }}
            </p>
            <span>{{ data?.shipping }}</span>
          </li>
        </ul>
      </main>
    </SfModal>
  </UiOverlay>
</template>

<script setup lang="ts">
import { SfButton, SfIconClose, SfModal, useDisclosure } from '@storefront-ui/vue';

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

const products = [
  {
    name: 'Smartwatch Fitness Tracker',
    quantity: 1,
    price: '295.87',
    gallery: [
      {
        alt: 'Smartwatch Fitness Tracker',
        url: '/images/watch.png',
      },
    ],
    attributes: [
      {
        label: 'Size',
        name: 'Size',
        value: '1.9″',
        valueLabel: 'value',
      },
      {
        name: 'Color',
        label: 'color',
        value: 'Black',
        valueLabel: 'value',
      },
    ],
  },
  {
    name: 'Smartwatch Fitness Tracker',
    quantity: 1,
    price: '295.87',
    gallery: [
      {
        alt: 'Smartwatch Fitness Tracker',
        url: '/images/watch.png',
      },
    ],
    attributes: [
      {
        label: 'Size',
        name: 'Size',
        value: '1.9″',
        valueLabel: 'value',
      },
      {
        name: 'Color',
        label: 'color',
        value: 'Black',
        valueLabel: 'value',
      },
    ],
  },
];
</script>
