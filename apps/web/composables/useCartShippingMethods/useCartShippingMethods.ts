import { toRefs } from '@vueuse/shared';
import type {
  UseCartShippingMethodsState,
  UseCartShippingMethodsReturn,
  GetShippingMethods,
} from '~/composables/useCartShippingMethods/types';
import { useSdk } from '~/sdk';

/**
 * @description Composable for getting shipping methods.
 * @example
 * const { data, loading, getShippingMethods } = useCartShippingMethods();
 */

export const useCartShippingMethods: UseCartShippingMethodsReturn = () => {
  const state = useState<UseCartShippingMethodsState>('useCartSippingMethods', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching shipping methods.
   * @example
   * getShippingMethods();
   */

  const getShippingMethods: GetShippingMethods = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() => useSdk().commerce.getShippingMethods());
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    getShippingMethods,
    ...toRefs(state.value),
  };
};
