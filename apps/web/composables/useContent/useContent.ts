import type { UseContentReturn, UseContentState, GetContent } from '~/composables/useContent/types';
import { useSdk } from '~/sdk';

/**
 * @description Composable for managing content from CMS.
 * @param url Parameter of the content to fetch.
 * @returns {@link UseContent}
 * @example
 * const { data, loading, getContent } = useContent<ContentFieldsType>('url');
 */
export const useContent: UseContentReturn = (url) => {
  const state = useState<UseContentState>(`content-${url}`, () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching the content.
   * @example
   * getContent();
   */
  const getContent: GetContent = async () => {
    state.value.loading = true;
    try {
      const { data, error } = await useAsyncData(() => useSdk().commerce.getContent({ url }));
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
    getContent,
    ...toRefs(state.value),
  };
};
