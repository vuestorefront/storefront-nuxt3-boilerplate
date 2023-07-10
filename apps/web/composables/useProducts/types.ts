import { Ref } from 'vue';
import type { GetProducts } from '@vue-storefront/storefront-boilerplate-sdk';
import type { Maybe } from '@vue-storefront/unified-data-model';

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
