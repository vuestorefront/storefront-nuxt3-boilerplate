import type { UseHandleError, ErrorParams } from '~/composables/useHandleError/types';

const defaultError: ErrorParams = {
  status: 500,
  message: 'An error occurred',
  statusMessage: 'An error occurred',
};

/**
 * @description Composable for handling errors.
 * @param error {@link ErrorParams}
 * @returns Throws an error if there is one.
 * @example
 * const { data, error } = await fetch(data);
 * useHandleError(error.value);
 */
export const useHandleError: UseHandleError = (error) => {
  if (error) {
    throw createError({
      statusCode: error.status || defaultError.status,
      message: error.message ?? defaultError.message,
      statusMessage: error.message ?? defaultError.statusMessage,
      fatal: true,
    });
  }
};
