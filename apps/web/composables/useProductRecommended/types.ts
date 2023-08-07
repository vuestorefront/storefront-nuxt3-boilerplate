import type { Ref } from 'vue';
import type { SfProduct, Maybe } from '@vue-storefront/unified-data-model';

export interface UseProductRecommendedState {
  data: Maybe<SfProduct[]>;
  loading: boolean;
}

export type FetchProductRecommended = (slug: string) => Promise<Ref<Maybe<SfProduct[]>>>;

export interface UseProductRecommended {
  data: Readonly<Ref<UseProductRecommendedState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchProductRecommended: FetchProductRecommended;
}

export type UseProductRecommendedReturn = (slug: string) => UseProductRecommended;
