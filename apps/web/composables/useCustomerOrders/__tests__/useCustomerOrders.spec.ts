import { useCustomerOrders } from '~/composables/useCustomerOrders/useCustomerOrders';

describe('useCustomerOrders', () => {
  it('should return customer orders data', async () => {
    const { fetchCustomerOrders, data } = useCustomerOrders();

    await fetchCustomerOrders();

    expect(data.value).not.toBeUndefined();
  });
});
