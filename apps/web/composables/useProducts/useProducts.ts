import { FetchProducts, UseProductsReturn, UseProductsState } from '~/composables/useProducts/types';
import { useSdk } from '~/sdk';

/**
 * @description Composable for managing products.
 * @returns {@link UseProducts}
 * @example
 * const { data, loading, fetchProducts } = useProducts();
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
  const fetchProducts: FetchProducts = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(useSdk().commerce.getProducts);
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchProducts,
    ...toRefs(state.value),
  };
};
