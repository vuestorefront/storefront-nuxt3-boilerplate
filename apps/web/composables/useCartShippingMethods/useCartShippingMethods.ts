import { toRefs } from '@vueuse/shared';
import { sdk } from '~/sdk';
import type { useCartShippingMethodsState, useCartShippingMethodsReturn, GetShippingMethods } from './types';

/**
 * @description Composable for getting shipping methods.
 * @example
 * const { data, loading, getShippingMethods } = useCartShippingMethods();
 */

export const useCartShippingMethods: useCartShippingMethodsReturn = () => {
  const state = useState<useCartShippingMethodsState>('useCartSippingMethods', () => ({
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
    const { data, error } = await useAsyncData(() => sdk.commerce.getShippingMethods());
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
