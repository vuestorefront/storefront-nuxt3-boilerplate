import type { Ref } from 'vue';

interface ContentEntry<TFields> {
  fields: TFields;
}

export type UseContent<TFields = unknown> = {
  data: Ref<ContentEntry<TFields>[] | null>;
  pending: Ref<boolean>;
  error: Ref<Error | null>;
};
