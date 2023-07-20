import { SfProductCatalogItem } from '@vue-storefront/unified-data-model';

export type CategoryPageContentProps = {
  title: string;
  totalProducts: number;
  itemsPerPage?: number;
  products?: SfProductCatalogItem[];
};
