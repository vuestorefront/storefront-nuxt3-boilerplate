import type { SfCategory } from '~/types';

interface CategoryWithImage extends SfCategory {
  image: string;
}

export type CategoryCardProps = {
  items: CategoryWithImage[];
};
