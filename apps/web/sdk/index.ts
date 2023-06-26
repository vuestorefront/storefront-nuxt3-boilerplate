import { initSDK, buildModule } from '@vsf-enterprise/sdk';
import { type SdkModule, sdkModule } from '@vsf-enterprise/storefront-boilerplate-sdk';

const sdkConfig = {
  commerce: buildModule<SdkModule>(sdkModule),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
