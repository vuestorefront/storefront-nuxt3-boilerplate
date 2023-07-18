import { useProducts } from '../useProducts';

describe('useProducts', () => {
  it('should return products', async () => {
    const { fetchProducts, data } = useProducts();

    await fetchProducts();

    expect(data.value).not.toBeUndefined();
  });
});
