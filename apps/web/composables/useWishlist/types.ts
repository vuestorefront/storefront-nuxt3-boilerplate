import type { Ref } from 'vue';
import { SfCartLineItem } from '@vue-storefront/unified-data-model';

export interface UseWishlistState {
  data: SfCartLineItem[];
  loading: boolean;
}

export type FetchWishlist = () => Promise<SfCartLineItem[]>;

export interface UseWishlist {
  data: Readonly<Ref<UseWishlistState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchWishlist: FetchWishlist;
}

export type UseWishlistReturn = () => UseWishlist;
