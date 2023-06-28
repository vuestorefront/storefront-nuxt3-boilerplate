import { H3Error } from 'h3';
import type { Maybe } from '~/types';

export type UseHandleError = (
  error: Maybe<
    Partial<H3Error> & {
      status?: number;
      statusText?: string;
    }
  >,
) => void;
