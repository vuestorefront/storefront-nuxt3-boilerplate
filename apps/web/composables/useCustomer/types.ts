import type { Ref } from 'vue';
import type { Maybe, SfCustomer } from '@vue-storefront/unified-data-model';

export interface UseCustomerState {
  data: Maybe<SfCustomer>;
  loading: boolean;
}

export type FetchCustomer = () => Promise<Ref<Maybe<SfCustomer>>>;

export interface UseCustomer {
  data: Readonly<Ref<UseCustomerState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchCustomer: FetchCustomer;
}

export type UseCustomerReturn = () => UseCustomer;
