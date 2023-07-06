import { Maybe } from '@vue-storefront/unified-data-model';

export interface Attribute {
  label: string;
  name: string;
  value: string;
}

export type CartProductCardProps = {
  attributes: Attribute[];
  className?: string;
  imageUrl?: Maybe<string>;
  imageAlt?: Maybe<string>;
  maxValue: number;
  minValue: number;
  name?: Maybe<string>;
  price: number;
  specialPrice: number;
  value: number;
  slug: string;
};
