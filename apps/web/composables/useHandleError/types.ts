import type { Maybe } from '@vue-storefront/unified-data-model';
import { H3Error } from 'h3';

export type ErrorParams = Maybe<
  Partial<H3Error> & {
    status?: number;
    statusText?: string;
  }
>;

export type UseHandleError = (error: ErrorParams) => void;
