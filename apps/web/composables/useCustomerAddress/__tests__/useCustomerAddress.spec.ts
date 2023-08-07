import { useCustomerAddress } from '~/composables/useCustomerAddress/useCustomerAddress';

describe('useCustomerAddress', () => {
  it('should return account data', async () => {
    const { fetchAddress, data } = useCustomerAddress();

    await fetchAddress();

    expect(data.value).not.toBeUndefined();
  });
});
