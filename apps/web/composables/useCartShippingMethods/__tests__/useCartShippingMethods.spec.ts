import { useCartShippingMethods } from '../useCartShippingMethods';

describe('useCartShippingMethods', () => {
  it('should return shipping methods', async () => {
    const { getShippingMethods, data } = useCartShippingMethods();

    await getShippingMethods();

    expect(data.value).not.toBeUndefined();
  });
});
