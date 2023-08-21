import { useCustomerOrder } from '~/composables/useCustomerOrder/useCustomerOrder';

describe('useCustomerOrder', () => {
  it('should return customer order data', async () => {
    const { fetchCustomerOrder, data } = useCustomerOrder('1');

    await fetchCustomerOrder('1');

    expect(data.value).not.toBeUndefined();
  });
});
