import type { Ref } from 'vue';
import type { Maybe } from '~/types';

interface ContentEntry<TFields> {
  fields: TFields;
}
export type UseContentState<TFields = unknown> = {
  data: Ref<Maybe<ContentEntry<TFields>[]>>;
  loading: boolean;
};
export type GetContent<TFields> = UseContentState<TFields>['data'];
export interface UseContent<TFields> {
  data: Readonly<UseContentState<TFields>['data']>;
  loading: Ref<boolean>;
  getContent: () => Promise<GetContent<TFields>>;
}
