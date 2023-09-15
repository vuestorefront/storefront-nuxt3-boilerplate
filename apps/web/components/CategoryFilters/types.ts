import type { SfFacet } from '@vue-storefront/unified-data-model';

export type CategoryFiltersProps = {
  facets: SfFacet[];
};

export type FilterProps = {
  facet?: SfFacet;
  selected: string[];
  type: 'size' | 'color';
};

export type FilterEmits = (event: 'update:selected', parameter: FilterProps['selected']) => void;
