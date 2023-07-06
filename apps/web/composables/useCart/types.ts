import type { Ref } from 'vue';
import type { SfCart, Maybe } from '@vue-storefront/unified-data-model';

export interface UseCartState {
  data: Maybe<SfCart>;
  loading: boolean;
}

export type GetCart = () => Promise<Ref<Maybe<SfCart>>>;

export interface UseCart {
  data: Readonly<Ref<UseCartState['data']>>;
  loading: Readonly<Ref<boolean>>;
  getCart: GetCart;
}

export type UseCartReturn = () => UseCart;
