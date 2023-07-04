import type { Ref } from 'vue';
import type { Maybe } from '~/types';

type EntryFields<TFields> = Array<{
  fields: TFields;
}>;

type WithComponentField<TProps, TComponent> = TProps & {
  component: TComponent;
};

export type DynamicContentFields = WithComponentField<unknown, 'Hero'>;

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

export type GetContent = <TFields>() => Promise<Ref<Maybe<EntryFields<TFields>>>>;

export interface UseContent<TFields> {
  data: Readonly<Ref<UseContentState['data']>>;
  loading: Readonly<Ref<boolean>>;
  getContent: () => Promise<Ref<Maybe<EntryFields<ContentDynamicPage>>>>;
}

export type UseContentReturn = <TFields>(url: string) => UseContent<TFields>;
