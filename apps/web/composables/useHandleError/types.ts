import { H3Error } from 'h3';
import type { Maybe } from '~/types';

export type ErrorParams = Maybe<
  Partial<H3Error> & {
    status?: number;
    statusText?: string;
  }
>;

export type UseHandleError = (error: ErrorParams) => void;
