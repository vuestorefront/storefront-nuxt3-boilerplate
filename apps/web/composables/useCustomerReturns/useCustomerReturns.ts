import { toRefs } from '@vueuse/shared';
import type {
  UseCustomerReturnsReturn,
  UseCustomerReturnsState,
  FetchCustomerReturns,
} from '~/composables/useCustomerReturns/types';

/**
 * @description Composable managing returns data
 * @returns {@link UseCustomerReturnsReturn}
 * @example
 * const { data, loading, fetchCustomerReturns } = useCustomerReturns();
 */
export const useCustomerReturns: UseCustomerReturnsReturn = () => {
  const state = useState<UseCustomerReturnsState>(`useCustomerReturns`, () => ({
    data: [],
    loading: false,
  }));

  /** Function for fetching returns data
   * @example
   * fetchCustomerReturns();
   */
  const fetchCustomerReturns: FetchCustomerReturns = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() => Promise.resolve([]));
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchCustomerReturns,
    ...toRefs(state.value),
  };
};
