import type { Ref } from 'vue';
import type { Maybe } from '~/types';

export interface ContentEntry<TFields> {
  fields: TFields;
}
// eslint-disable-next-line unicorn/expiring-todo-comments
// TODO: Replace TFields with the actual content field type when CMS components are ready..
export interface UseContentState<TFields = any> {
  data: Maybe<ContentEntry<TFields>[]>;
  loading: boolean;
}
export type GetContent = <TFields>() => Promise<Ref<Maybe<ContentEntry<TFields>[]>>>;
export interface UseContent<TFields> {
  data: Readonly<Ref<UseContentState<TFields>['data']>>;
  loading: Readonly<Ref<boolean>>;
  getContent: () => Promise<Ref<Maybe<ContentEntry<TFields>[]>>>;
}
export type UseContentReturn = <TFields>(url: string) => UseContent<TFields>;
