import type { Ref } from 'vue';
import type { Maybe, SfAddress } from '@vue-storefront/unified-data-model';

export interface UseCustomerAddressState {
  data: Maybe<SfAddress>;
  loading: boolean;
}

export type FetchAddress = () => Promise<Ref<Maybe<SfAddress>>>;

export interface UseCustomerAddress {
  data: Readonly<Ref<UseCustomerAddressState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchAddress: FetchAddress;
}

export type UseCustomerAddressReturn = () => UseCustomerAddress;
