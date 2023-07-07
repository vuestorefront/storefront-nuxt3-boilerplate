export interface Attribute {
  label: string;
  name: string;
  value: string;
}

export type CartProductCardProps = {
  attributes: Attribute[];
  imageUrl: string;
  imageAlt: string;
  maxValue: number;
  minValue: number;
  name: string;
  price: number;
  specialPrice: number;
  value: number;
  slug: string;
};
