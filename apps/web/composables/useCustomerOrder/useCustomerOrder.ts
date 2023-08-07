import { toRefs } from '@vueuse/shared';
import type {
  UseCustomerOrderReturn,
  UseCustomerOrderState,
  FetchCustomerOrder,
  OrderData,
} from '~/composables/useCustomerOrder/types';

const order: Omit<OrderData, 'status'> = {
  id: '0e4fec5a-61e6-48b8-94cc-d5f77687e2b0',
  date: '2022-08-11',
  paymentAmount: 295.87,
  paymentMethod: 'Credit Card',
  shipping: 'Standard (FREE)',
};
/**
 * @description Composable managing customer order data
 * @returns {@link UseCustomerOrderReturn}
 * @example
 * const { data, loading, fetchCustomerOrder } = useCustomerOrder();
 */
export const useCustomerOrder: UseCustomerOrderReturn = () => {
  const state = useState<UseCustomerOrderState>('useCustomerOrder', () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching customer order data
   * @example
   * fetchCustomerOrder();
   */
  const fetchCustomerOrder: FetchCustomerOrder = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() =>
      Promise.resolve([
        { ...order, status: 'Completed' },
        { ...order, status: 'Shipped' },
        { ...order, status: 'Open' },
        { ...order, status: 'Cancelled' },
      ] as OrderData[]),
    );
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
