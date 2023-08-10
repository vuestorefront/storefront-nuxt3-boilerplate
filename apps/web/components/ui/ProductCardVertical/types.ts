import { SfProduct } from '@vue-storefront/unified-data-model';

export type ProductVerticalProps = {
  product: Omit<
    SfProduct,
    'id' | 'sku' | 'slug' | 'description' | 'price' | 'primaryImage' | 'rating' | 'variants' | 'quantityLimit'
  >;
};
