import { toRefs } from '@vueuse/shared';
import type { UseWishlistReturn, UseWishlistState, FetchWishlist } from '~/composables/useWishlist/types';
import { SfCart } from '@vue-storefront/unified-data-model';

/**
 * @description Composable for managing wishlist items.
 * @returns {@link UseWishlistReturn}
 * @example
 * const { data, loading } = useWishlist();
 */
export const useWishlist: UseWishlistReturn = () => {
  const state = useState<UseWishlistState>('useWishlist', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching the wishlist.
   * @example
   * fetchWishlist();
   */
  const fetchWishlist: FetchWishlist = async () => {
    state.value.loading = true;
    try {
      const { data, error } = await useAsyncData<SfCart>(() => useSdk().commerce.getCart());
      useHandleError(error.value);
      state.value.data = data.value;
      return data;
    } catch (error) {
      throw new Error(error as string);
    } finally {
      state.value.loading = false;
    }
  };

  return {
    fetchWishlist,
    ...toRefs(state.value),
  };
};
