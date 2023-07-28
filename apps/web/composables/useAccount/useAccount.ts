import { toRefs } from '@vueuse/shared';
import type { UseAccountReturn, UseAccountState, FetchAccount } from '~/composables/useAccount/types';

/**
 * @description Composable managing account data
 * @returns {@link UseAccountReturn}
 * @example
 * const { data, loading, fetchAccount } = useAccount();
 */
export const useAccount: UseAccountReturn = () => {
  const state = useState<UseAccountState>(`useAccount`, () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching account data
   * @example
   * fetchAccount();
   */
  const fetchAccount: FetchAccount = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(() =>
      Promise.resolve({
        id: 'unique_id',
        email: 'hieronim.anonim@gmail.com',
        firstName: 'Hieronim',
        lastName: 'Anonim',
      }),
    );
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchAccount,
    ...toRefs(state.value),
  };
};
