import { useCustomer } from '~/composables/useCustomer/useCustomer';

describe.skip('useCustomer', () => {
  it('should return account data', async () => {
    const { fetchCustomer, data } = useCustomer();

    await fetchCustomer();

    expect(data.value).not.toBeUndefined();
  });
});
