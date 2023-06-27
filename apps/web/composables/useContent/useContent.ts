import type { UseContent } from '~/composables';
import { sdk } from '~/sdk';

/**
 * Method fetching content.
 * You can use it to fetch any content from the CMS.
 *
 * @param url
 * Parameter of the content to fetch, also using it as a key for the cache.
 *
 * @returns
 * Returns the content data, pending state and error.
 */
export const useContent: UseContent = (url) => {
  const { data, pending, error } = useAsyncData(url, () => sdk.commerce.getContent());

  return {
    data,
    pending,
    error,
  };
};
