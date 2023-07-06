export type Maybe<TMaybe> = TMaybe | null;

export interface SfProductPrice {
  isDiscounted: boolean;
  regularPrice: {
    currency: string;
    amount: number;
    precisionAmount: string;
  };
  value: {
    currency: string;
    amount: number;
    precisionAmount: string;
  };
}
export interface SfProductImage {
  alt: string;
  url: string;
}
export interface SfProductRating {
  average: number;
  count: number;
}
export interface SfProductAttributes {
  label: string;
  name: string;
  value: string;
  valueLabel: string;
}
export interface SfProductVariants {
  id: string;
  slug: string;
  sku: string;
  name: string;
  quantityLimit: number;
  attributes: Array<SfProductAttributes>;
}
export interface SfProduct {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  price: SfProductPrice;
  primaryImage: SfProductImage;
  gallery: Array<SfProductImage>;
  rating: SfProductRating;
  variants: Array<SfProductVariants>;
  attributes: Array<SfProductAttributes>;
  quantityLimit: number;
}
export interface SfCategory {
  id: string;
  name: string;
  slug: string;
  subcategories: Array<SfCategory>;
  productCount: number;
}
