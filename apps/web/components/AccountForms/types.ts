import type { SfCustomer } from '@vue-storefront/unified-data-model';

export type AccountFormsNameProps = {
  firstName?: SfCustomer['firstName'];
  lastName?: SfCustomer['lastName'];
};

export type AccountFormsPasswordProps = {
  oldPassword?: string;
  firstNewPassword?: string;
  secondNewPassword?: string;
  username?: string;
};
