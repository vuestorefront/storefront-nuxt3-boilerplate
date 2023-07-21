import type { SfProductReview, Maybe } from '@vue-storefront/unified-data-model';

export interface UseProductReviewsState {
  data: Maybe<SfProductReview[]>;
  loading: boolean;
}

export type FetchProductReviews = (slug: string) => Promise<Ref<Maybe<SfProductReview[]>>>;

export interface UseProductReviewsReturn {
  data: Readonly<Ref<UseProductReviewsState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchProductReviews: FetchProductReviews;
}

export type UseProductReviews = (slug: string) => UseProductReviewsReturn;
