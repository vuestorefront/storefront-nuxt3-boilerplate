import type { Ref } from 'vue';
import type { SfCart, Maybe } from '@vue-storefront/unified-data-model';

export interface UseCartState {
  data: Maybe<SfCart>;
  loading: boolean;
}

export type ApplyCouponToCart = (coupon: string) => Promise<Ref<Maybe<SfCart>>>;
export type FetchCart = () => Promise<Ref<Maybe<SfCart>>>;

export interface UseCart {
  data: Readonly<Ref<UseCartState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchCart: FetchCart;
  applyCouponToCart: ApplyCouponToCart;
}

export type UseCartReturn = () => UseCart;
