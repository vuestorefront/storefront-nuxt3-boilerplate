import { sdk } from '~/sdk';
import type { UseContentReturn, UseContentState, GetContent } from './types';

/**
 * @description Composable for managing content from CMS.
 * @param url Parameter of the content to fetch.
 * @returns {@link UseContent}
 * @example
 * const { data, loading, getContent } = useContent<ContentFieldsType>('url');
 */
export const useContent: UseContentReturn = (url) => {
  const state = useState<UseContentState>(`useContent-${url}`, () => ({
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
    const { data, error } = await useAsyncData(() => sdk.commerce.getContent({ url }));
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    getContent,
    ...toRefs(state.value),
  };
};
