import { H3Error } from 'h3';
import type { Maybe } from '~/types';

export type ErrorParams = Partial<H3Error> & {
  status?: number;
  statusText?: string;
};

export type UseHandleError = (error: Maybe<ErrorParams>) => void;
