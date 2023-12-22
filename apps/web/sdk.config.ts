import { SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';

export default defineSdkConfig(({ buildModule }) => ({
  commerce: buildModule<SdkModule>(sdkModule),
}));
