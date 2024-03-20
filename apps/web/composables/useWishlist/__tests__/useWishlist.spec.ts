import { useWishlist } from '~/composables/useWishlist/useWishlist';

describe('useCart', () => {
  it('should return account data', async () => {
    const { fetchWishlist, data } = useWishlist();

    await fetchWishlist();

    expect(data.value).not.toBeUndefined();
  });
});
