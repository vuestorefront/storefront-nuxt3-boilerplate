import { toRefs } from '@vueuse/shared';
import type { UseProductReturn, UseProductState, FetchProduct } from '~/composables/useProduct/types';
import { useSdk } from '~/sdk';

/**
 * @description Composable managing product data
 * @param {string} slug Product slug
 * @returns {@link UseProductReturn}
 * @example
 * const { data, loading, fetchProduct } = useProduct('product-slug');
 */
export const useProduct: UseProductReturn = (slug) => {
  const state = useState<UseProductState>(`useProduct-${slug}`, () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching product data
   * @param {string} slug Product slug
   * @example
   * fetchProduct('product-slug');
   */
  const fetchProduct: FetchProduct = async (slug) => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() => useSdk().commerce.getProduct({ slug }));
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchProduct,
    ...toRefs(state.value),
  };
};
