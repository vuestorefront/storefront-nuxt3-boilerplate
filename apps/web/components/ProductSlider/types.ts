import type { HTMLAttributes } from 'vue';
import type { SfProduct } from '@vue-storefront/unified-data-model';

export type ProductSliderProps = {
  items?: SfProduct[];
  wrapperClass?: HTMLAttributes['class'];
};
