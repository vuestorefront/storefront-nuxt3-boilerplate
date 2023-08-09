import type { Ref } from 'vue';
import { Maybe } from '@vue-storefront/unified-data-model';

export interface UseCustomerReturnsState {
  data: Maybe<unknown[]>;
  loading: boolean;
}

export type FetchCustomerReturns = () => Promise<Ref<unknown[] | null>>;

export interface UseCustomerReturns {
  data: Readonly<Ref<UseCustomerReturnsState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchCustomerReturns: FetchCustomerReturns;
}

export type UseCustomerReturnsReturn = () => UseCustomerReturns;
