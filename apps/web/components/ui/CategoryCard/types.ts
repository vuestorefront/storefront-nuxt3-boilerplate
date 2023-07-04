import type { SfCategory } from '@vsf-enterprise/unified-data-model';

interface CategoryWithImage extends SfCategory {
  image: string;
}

export type CategoryCardProps = {
  items: CategoryWithImage[];
};
