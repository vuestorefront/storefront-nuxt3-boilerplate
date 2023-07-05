import type { SfCategory } from '@vue-storefront/unified-data-model';

interface CategoryWithImage extends SfCategory {
  image: string;
}

export type CategoryCardProps = {
  items: CategoryWithImage[];
};
