import { toRefs } from '@vueuse/shared';
import addressData from '~/composables/useCustomerOrder/adress';
import productData from '~/composables/useCustomerOrder/product';
import type {
  UseCustomerOrderReturn,
  UseCustomerOrderState,
  FetchCustomerOrder,
  OrderData,
} from '~/composables/useCustomerOrder/types';

const order: OrderData = {
  id: '0e4fec5a-61e6-48b8-94cc-d5f77687e2b0',
  date: '2022-08-11',
  paymentAmount: 295.87,
  paymentMethod: 'Credit Card',
  shipping: 'Standard (FREE)',
  summary: {
    subtotal: 7037.99,
    delivery: 0,
    estimatedTax: 457.47,
    total: 295.87,
  },
  billingAddress: addressData,
  shippingAddress: addressData,
  status: 'Completed',
  products: [productData, productData],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
const getCustomerOrder = (id: string) => order;

/**
 * @description Composable managing customer order data
 * @returns {@link UseCustomerOrderReturn}
 * @example
 * const { data, loading, fetchCustomerOrder } = useCustomerOrder();
 */
export const useCustomerOrder: UseCustomerOrderReturn = (id) => {
  const state = useState<UseCustomerOrderState>(`useCustomerOrder-${id}`, () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching customer order data
   * @example
   * fetchCustomerOrder();
   */
  const fetchCustomerOrder: FetchCustomerOrder = async (id) => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() => Promise.resolve(getCustomerOrder(id)));
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchCustomerOrder,
    ...toRefs(state.value),
  };
};
