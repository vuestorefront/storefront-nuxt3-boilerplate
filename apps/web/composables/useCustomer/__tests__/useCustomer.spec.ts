import { useCustomer } from '~/composables/useCustomer/useCustomer';

vi.mock('~/sdk', () => ({
  useSdk: () => ({
    commerce: {
      getCustomer: vi.fn(() => ({
        id: 'SfId',
        email: 'hieronim.anonim@gmail.com',
        firstName: 'hieronim',
        lastName: 'anonim'
      })),
    },
  }),
}));


describe('useCustomer', () => {
  it('should return account data', async () => {
    const { fetchCustomer, data } = useCustomer();

    await fetchCustomer();

    expect(data.value).not.toBeUndefined();
  });
});
