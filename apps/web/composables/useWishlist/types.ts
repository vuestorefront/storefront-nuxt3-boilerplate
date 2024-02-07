import type { Ref } from 'vue';
import type { Maybe } from '@vue-storefront/unified-data-model';
import { SfCart } from '@vue-storefront/unified-data-model';

export interface UseWishlistState {
  data: Maybe<SfCart>;
  loading: boolean;
}

export type FetchWishlist = () => Promise<Ref<Maybe<SfCart>>>;

export interface UseWishlist {
  data: Readonly<Ref<UseWishlistState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchWishlist: FetchWishlist;
}

export type UseWishlistReturn = () => UseWishlist;
