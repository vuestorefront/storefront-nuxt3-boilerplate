import { toRefs } from '@vueuse/shared';
import type { UseAddressReturn, UseAddressState, FetchAddress } from '~/composables/useAddress/types';

/**
 * @description Composable managing address data
 * @returns {@link UseAddressReturn}
 * @example
 * const { data, loading, fetchAddress } = useAddress();
 */
export const useAddress: UseAddressReturn = () => {
  const state = useState<UseAddressState>(`useAddress`, () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching address data
   * @example
   * fetchAddress();
   */
  const fetchAddress: FetchAddress = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() =>
      Promise.resolve({
        firstName: 'Hieronim',
        lastName: 'Anonim',
        address1: 'Oak Drive',
        address2: '3633',
        city: 'Colonie',
        country: 'US',
        phoneNumber: '+1 321 765 0987',
        postalCode: '12205',
        state: 'NY',
        titleCode: '',
      }),
    );
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchAddress,
    ...toRefs(state.value),
  };
};
