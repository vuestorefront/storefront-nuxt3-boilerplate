import { useCustomerAddress } from '~/composables/useCustomerAddress/useCustomerAddress';

describe('useCustomerAddress', () => {
  it('should return account data', async () => {
    const { fetchCustomerAddress, data } = useCustomerAddress();

    await fetchCustomerAddress();

    expect(data.value).not.toBeUndefined();
  });
});
