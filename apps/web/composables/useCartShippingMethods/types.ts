import { SfShippingMethods, Maybe } from '@vue-storefront/unified-data-model';

export interface useCartShippingMethodsState {
  data: Maybe<SfShippingMethods>;
  loading: boolean;
}

export type GetShippingMethods = () => Promise<Ref<Maybe<SfShippingMethods>>>;

export interface useCartShippingMethods {
  data: Readonly<Ref<useCartShippingMethodsState['data']>>;
  loading: Readonly<Ref<boolean>>;
  getShippingMethods: GetShippingMethods;
}

export type useCartShippingMethodsReturn = () => useCartShippingMethods;
