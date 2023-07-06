import type { Ref } from 'vue';
import type { Maybe } from '@vue-storefront/unified-data-model';
import type { HeadingProps } from '~/components/Heading/types';
import type { ProductSliderProps } from '~/components/ProductSlider/types';
import type { CategoryCardProps } from '~/components/ui/CategoryCard/types';
import type { DisplayProps } from '~/components/ui/Display/types';
import type { HeroProps } from '~/components/ui/Hero/types';

type EntryFields<TFields> = Array<{
  fields: TFields;
}>;

type WithComponentField<TProps, TComponent> = TProps & {
  component: TComponent;
};

export type DynamicContentFields =
  | WithComponentField<HeroProps, 'Hero'>
  | WithComponentField<CategoryCardProps, 'Card'>
  | WithComponentField<HeadingProps, 'Heading'>
  | WithComponentField<DisplayProps, 'Display'>
  | WithComponentField<ProductSliderProps, 'ProductSlider'>;

export interface ContentDynamicPage {
  component: 'Page';
  content: EntryFields<DynamicContentFields>;
  name: string;
  url: string;
}

export interface UseContentState {
  data: Maybe<EntryFields<ContentDynamicPage>>;
  loading: boolean;
}

export type GetContent = () => Promise<Ref<Maybe<EntryFields<ContentDynamicPage>>>>;

export interface UseContent {
  data: Readonly<Ref<UseContentState['data']>>;
  loading: Readonly<Ref<boolean>>;
  getContent: GetContent;
}

export type UseContentReturn = (url: string) => UseContent;
