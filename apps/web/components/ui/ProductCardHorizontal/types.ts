import type { SfProduct } from '@vue-storefront/unified-data-model';

export type ProductHorizontalProps = {
  product: Omit<
    SfProduct,
    'id' | 'sku' | 'slug' | 'description' | 'price' | 'primaryImage' | 'rating' | 'variants' | 'quantityLimit'
  >;
};
