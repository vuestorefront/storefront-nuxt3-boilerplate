import { sdk } from '~/sdk';
import type { UseContent, UseContentState, GetContent } from './types';

/**
 * @param url
 * Parameter of the content to fetch.
 * @returns
 * {@link UseContent}
 * @example
 * const { data, loading, getContent } = useContent<ContentFieldsType>('url');
 */
export const useContent = <TFields>(url: string): UseContent<TFields> => {
  const state = useState<UseContentState<TFields>>(`useContent-${url}`, () => ({
    data: ref(null),
    loading: false,
  }));

  /**
   * Function to fetch the content.
   * @example
   * getContent();
   */
  const getContent = async (): Promise<GetContent<TFields>> => {
    try {
      state.value.loading = true;
      const { data, error } = await useAsyncData(() => sdk.commerce.getContent<TFields>({ url }));
      useHandleError(error.value);
      state.value.data = data;
      return data;
    } finally {
      state.value.loading = false;
    }
  };

  return {
    getContent,
    ...toRefs(state.value),
  };
};
