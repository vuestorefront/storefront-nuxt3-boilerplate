import type { Ref } from 'vue';
import type { Maybe } from '@vue-storefront/unified-data-model';

export type OrderData = {
  id: string;
  date: string; //probably should be number in ms
  paymentAmount: number;
  status: 'Completed' | 'Shipped' | 'Open' | 'Cancelled';
  paymentMethod: string;
  shipping: string;
};

export interface UseCustomerOrderState {
  data: Maybe<OrderData[]>;
  loading: boolean;
}

export type FetchCustomerOrder = () => Promise<Ref<Maybe<OrderData[]>>>;

export interface UseCustomerOrder {
  data: Readonly<Ref<UseCustomerOrderState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchCustomerOrder: FetchCustomerOrder;
}

export type UseCustomerOrderReturn = () => UseCustomerOrder;
