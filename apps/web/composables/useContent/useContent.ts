import { sdk } from '~/sdk';
import type { UseContent } from '~/composables';

export const useContent: UseContent = (url) => {
  const { data, pending, error } = useAsyncData(url, () => sdk.commerce.getContent({ url }));

  return {
    data,
    pending,
    error,
  }
};
