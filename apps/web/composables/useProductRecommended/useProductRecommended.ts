import { toRefs } from '@vueuse/shared';
import type {
  UseProductRecommendedReturn,
  UseProductRecommendedState,
  FetchProductRecommended,
} from '~/composables/useProductRecommended/types';
import { useSdk } from '~/sdk';

/**
 * Composable for getting recommended products data
 * @param {string} slug Product slug
 */
export const useProductRecommended: UseProductRecommendedReturn = (slug) => {
  const state = useState<UseProductRecommendedState>(`useProductRecommended-${slug}`, () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching product recommended data
   * @param {string} slug Product slug
   * @example
   * fetchProductRecommended('product-slug');
   */
  const fetchProductRecommended: FetchProductRecommended = async (slug) => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() => useSdk().commerce.getProductRecommended({ slug }));
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchProductRecommended,
    ...toRefs(state.value),
  };
};
