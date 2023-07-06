import type { Ref } from 'vue';
import type { SfCart } from '@vue-storefront/unified-data-model';
import type { Maybe } from '~/types';

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
