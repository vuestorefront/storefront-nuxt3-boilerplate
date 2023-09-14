import { createSharedComposable, syncRefs, useBreakpoints as useBreakpointsVueUse } from '@vueuse/core';

/**
 * @description Composable that prepares breakpoints-dependent refs
 * @returns {@link ReturnType<typeof useBreakpoints>}
 * @example
 * const { isTablet, isDesktop } = useBreakpoints();
 */
export const useBreakpoints = createSharedComposable(() => {
  const breakpoints = useBreakpointsVueUse({
    tablet: '768px',
    desktop: '1024px',
  });

  const isTablet = ref(true);
  const isDesktop = ref(false);

  onMounted(() => {
    syncRefs(breakpoints.greaterOrEqual('tablet'), isTablet);
    syncRefs(breakpoints.greaterOrEqual('desktop'), isDesktop);
  });

  return {
    isTablet,
    isDesktop,
  };
});
