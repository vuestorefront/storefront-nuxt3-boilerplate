import { useAddress } from '~/composables/useAddress/useAddress';

describe('useAddress', () => {
  it('should return account data', async () => {
    const { fetchAddress, data } = useAddress();

    await fetchAddress();

    expect(data.value).not.toBeUndefined();
  });
});
