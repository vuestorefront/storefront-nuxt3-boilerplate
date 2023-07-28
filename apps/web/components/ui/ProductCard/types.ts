export type ProductCardProps = {
  name: string;
  imageUrl: string;
  imageAlt?: string;
  description?: string;
  rating?: number;
  ratingCount?: number;
  price?: number;
  slug?: string;
  priority?: boolean;
  lazy?: boolean;
};
