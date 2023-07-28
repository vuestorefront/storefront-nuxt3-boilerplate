import { useCart } from '~/composables/useCart/useCart';

describe('useCart', () => {
  it('should return account data', async () => {
    const { fetchCard, data } = useCart();

    await fetchCard();

    expect(data.value).not.toBeUndefined();
  });
});
