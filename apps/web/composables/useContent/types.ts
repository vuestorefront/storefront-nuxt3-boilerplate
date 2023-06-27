export type UseContent = <TFields = unknown>(
  url: string,
) => {
  data: TFields;
  pending: boolean;
  error: Error;
};
