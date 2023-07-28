import { useAccount } from '~/composables/useAccount/useAccount';

describe('useAccount', () => {
  it('should return account data', async () => {
    const { fetchAccount, data } = useAccount();

    await fetchAccount();

    expect(data.value).not.toBeUndefined();
  });
});
