/**
 * Composable for setting the page title.
 * Used in layouts. Title can be changed in pages through the `useHead` composable.
 */
export const usePageTitle = () => {
  const { titleSuffix } = useAppConfig();

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | ${titleSuffix}` : titleSuffix;
    },
  });
};
