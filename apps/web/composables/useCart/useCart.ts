import type { SfCart } from '@vue-storefront/unified-data-model';
import { sdk } from '~/sdk';
import type { UseCartReturn, UseCartState, GetCart } from './types';

/**
 * @description Composable for managing cart.
 * @returns {@link UseCartReturn}
 * @example
 * const { data, loading } = useCart();
 */
export const useCart: UseCartReturn = () => {
  const state = useState<UseCartState>('useCart', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching the cart.
   * @example
   * getCart();
   */
  const getCart: GetCart = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData<SfCart>(() => sdk.commerce.getCart());
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    getCart,
    ...toRefs(state.value),
  };
};
