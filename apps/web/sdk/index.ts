import { initSDK, buildModule } from '@vue-storefront/sdk';
import { type SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';

export const useSdk = () => {
  const sdkConfig = {
    commerce: buildModule<SdkModule>(sdkModule),
  };

  return initSDK<typeof sdkConfig>(sdkConfig);
};
