import type { Ref } from 'vue';
import type { Maybe, SfCustomer } from '@vue-storefront/unified-data-model';

export interface UseAccountState {
  data: Maybe<SfCustomer>;
  loading: boolean;
}

export type FetchAccount = () => Promise<Ref<Maybe<SfCustomer>>>;

export interface UseAccount {
  data: Readonly<Ref<UseAccountState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchAccount: FetchAccount;
}

export type UseAccountReturn = () => UseAccount;
