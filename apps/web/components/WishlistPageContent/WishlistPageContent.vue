<template>
  <NarrowContainer>
    <div class="mb-20 px-4 md:px-0" data-testid="wishlist-layout">
      <div v-if="wishlist?.lineItems.length" data-testid="wishlist-page-content">
        <div class="flex-1">
          <section class="mb-4" data-testid="wishlist-grid">
            <NuxtLazyHydrate
              when-visible
              v-for="{ id, attributes, image, name, totalPrice, unitPrice, quantity, slug } in wishlist.lineItems"
              :key="id"
            >
              <UiCartProductCard
                :attributes="attributes"
                :image-url="image?.url"
                :image-alt="image?.alt"
                :name="name ?? ''"
                :price="totalPrice?.amount || 0"
                :special-price="unitPrice?.value?.amount || 0"
                :max-value="10"
                :min-value="1"
                :value="quantity"
                :slug="slug"
              >
                <template #removeBtn>
                  <div class="absolute top-0 right-0 mr-2 mt-2 bg-white">
                    <SfButton variant="tertiary" size="sm">
                      <SfIconClose square size="sm" />
                    </SfButton>
                  </div>
                </template>

                <template #additionalBtn>
                  <SfButton size="sm" class="ml-4">
                    <template #prefix>
                      <SfIconShoppingCart size="sm" />
                    </template>
                    {{ $t('addToCartShort') }}
                  </SfButton>
                </template>
              </UiCartProductCard>
            </NuxtLazyHydrate>
          </section>
        </div>
      </div>
      <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="wishlist-page-content">
        <NuxtImg
          data-testid="empty-wishlist-image"
          src="/images/empty-cart.svg"
          :alt="$t('emptyCartImgAlt')"
          width="192"
          height="192"
        />
        <h2 data-testid="empty-wishlist-text" class="mt-8 typography-headline-3 font-bold">
          {{ $t('emptyWishlist') }}
        </h2>
      </div>

      <UiPagination
        v-if="wishlist?.lineItems.length"
        :current-page="1"
        :total-items="wishlist?.lineItems.length"
        :page-size="5"
        :max-visible-pages="2"
      />
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import { SfButton, SfIconClose, SfIconShoppingCart } from '@storefront-ui/vue';

const { data: wishlist } = useWishlist();
</script>
