import { Maybe } from '@vue-storefront/unified-data-model';
import { Address } from '../CheckoutAddress/types';

export type AddressFormProps = {
  type: 'billingAddress' | 'shippingAddress';
  savedAddress?: Maybe<Address> | undefined;
};
