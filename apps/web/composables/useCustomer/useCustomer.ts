import { toRefs } from '@vueuse/shared';
import type { UseCustomerReturn, UseCustomerState, FetchCustomer } from '~/composables/useCustomer/types';
import { useSdk } from '~/sdk';

/**
 * @description Composable managing customer data
 * @returns {@link UseCustomerReturn}
 * @example
 * const { data, loading, fetchCustomer } = useCustomer();
 */
export const useCustomer: UseCustomerReturn = () => {
  const state = useState<UseCustomerState>('useCustomer', () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching customer data
   * @example
   * fetchCustomer();
   */
  const fetchCustomer: FetchCustomer = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() => useSdk().commerce.getCustomer());
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchCustomer,
    ...toRefs(state.value),
  };
};
