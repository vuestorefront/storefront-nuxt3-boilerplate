import { Ref } from 'vue';
import type { GetProducts } from '@vsf-enterprise/storefront-boilerplate-sdk';
import { Maybe } from '~/types';

export interface UseProductsState {
  data: GetProducts | null;
  loading: boolean;
}
export interface UseProducts {
  data: Readonly<Ref<UseProductsState['data']>>;
  loading: Readonly<Ref<boolean>>;
  getProducts: () => Promise<Ref<Maybe<GetProducts>>>;
}

export type UseProductsReturn = () => UseProducts;
