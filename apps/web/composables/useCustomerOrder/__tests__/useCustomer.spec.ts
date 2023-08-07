import { useCustomerOrder } from '~/composables/useCustomerOrder/useCustomerOrder';

describe('useCustomerOrder', () => {
  it('should return customer order data', async () => {
    const { fetchCustomerOrder, data } = useCustomerOrder();

    await fetchCustomerOrder();

    expect(data.value).not.toBeUndefined();
  });
});
