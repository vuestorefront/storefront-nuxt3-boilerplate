import type { Ref } from 'vue';
import type { Maybe, SfAddress } from '@vue-storefront/unified-data-model';

export interface UseAddressState {
  data: Maybe<SfAddress>;
  loading: boolean;
}

export type FetchAddress = () => Promise<Ref<Maybe<SfAddress>>>;

export interface UseAddress {
  data: Readonly<Ref<UseAddressState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchAddress: FetchAddress;
}

export type UseAddressReturn = () => UseAddress;
