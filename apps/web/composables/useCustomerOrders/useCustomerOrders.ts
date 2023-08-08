import { toRefs } from '@vueuse/shared';
import type { OrderData } from 'composables/useCustomerOrder/types';
import type {
  UseCustomerOrdersReturn,
  UseCustomerOrdersState,
  FetchCustomerOrders,
} from '~/composables/useCustomerOrders/types';

const order: Pick<OrderData, 'id' | 'date' | 'paymentAmount'> = {
  id: '0e4fec5a-61e6-48b8-94cc-d5f77687e2b0',
  date: '2022-08-11',
  paymentAmount: 295.87,
};
/**
 * @description Composable managing customer orders data
 * @returns {@link UseCustomerOrdersReturn}
 * @example
 * const { data, loading, fetchCustomerOrders } = useCustomerOrders();
 */
export const useCustomerOrders: UseCustomerOrdersReturn = () => {
  const state = useState<UseCustomerOrdersState>('useCustomerOrders', () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching customer orders data
   * @example
   * fetchCustomerOrders();
   */
  const fetchCustomerOrders: FetchCustomerOrders = async () => {
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
    fetchCustomerOrders,
    ...toRefs(state.value),
  };
};
