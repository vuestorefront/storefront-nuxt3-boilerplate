import type { UseHandleError } from './types';

/**
 * Method handling errors.
 * @param error
 * @returns
 * Throws an error if there is one.
 * @example
 * const { data, error } = await fetch(data);
 * useHandleError(error.value);
 */
export const useHandleError: UseHandleError = (error) => {
  if (error) {
    throw createError({ statusCode: error.status, message: error.message, statusMessage: error.message, fatal: true });
  }
};
