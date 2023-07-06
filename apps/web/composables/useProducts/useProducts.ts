import { UseProductsReturn, UseProductsState } from '~/composables/useProducts/types';
import { sdk } from '~/sdk';

/**
 * @description Composable for managing products.
 * @returns {@link UseProducts}
 * @example
 * const { data, loading, getProducts } = useProducts();
 */
export const useProducts: UseProductsReturn = () => {
  const state = useState<UseProductsState>('products', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching products.
   * @example
   * getProducts();
   */
  const getProducts = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(sdk.commerce.getProducts);
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    getProducts,
    ...toRefs(state.value),
  };
};
