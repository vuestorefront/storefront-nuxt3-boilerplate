import type { Maybe, SfAddress } from '@vue-storefront/unified-data-model';

export type AddressFormProps = {
  type: 'billingAddress' | 'shippingAddress';
  savedAddress?: Maybe<SfAddress>;
};
