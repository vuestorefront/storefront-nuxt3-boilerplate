import { initSDK, buildModule } from '@vue-storefront/sdk';
import { type SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';

const sdkConfig = {
  commerce: buildModule<SdkModule>(sdkModule),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
