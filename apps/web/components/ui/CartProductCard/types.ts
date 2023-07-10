export interface Attribute {
  label: string;
  name: string;
  value: string;
}

export type CartProductCardProps = {
  attributes: Attribute[];
  imageUrl?: string | null;
  imageAlt?: string | null;
  maxValue: number;
  minValue: number;
  name: string;
  price: number;
  specialPrice: number;
  value: number;
  slug: string;
};
