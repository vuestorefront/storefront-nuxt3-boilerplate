import type { Ref } from 'vue';
import type { Maybe, SfAddress, SfProduct } from '@vue-storefront/unified-data-model';

export type OrderData = {
  id: string;
  date: string; //probably should be number in ms
  paymentAmount: number;
  status: 'Completed' | 'Shipped' | 'Open' | 'Cancelled';
  products: Array<
    Omit<
      SfProduct,
      'id' | 'sku' | 'slug' | 'description' | 'primaryImage' | 'rating' | 'variants' | 'quantityLimit'
    > & { quantity: number }
  >;
  summary: {
    subtotal: number;
    delivery: number;
    estimatedTax: number;
    total: number;
  };
  billingAddress: Partial<SfAddress>;
  shippingAddress: Partial<SfAddress>;
  paymentMethod: string;
  shipping: string;
};

export interface UseCustomerOrderState {
  data: Maybe<OrderData>;
  loading: boolean;
}

export type FetchCustomerOrder = (id: string) => Promise<Ref<Maybe<OrderData>>>;

export interface UseCustomerOrder {
  data: Readonly<Ref<UseCustomerOrderState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchCustomerOrder: FetchCustomerOrder;
}

export type UseCustomerOrderReturn = (id: string) => UseCustomerOrder;
