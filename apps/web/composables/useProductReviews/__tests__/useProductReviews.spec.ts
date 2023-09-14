import { vi } from 'vitest';
import { useProductReviews } from '~/composables/useProductReviews';
import { mockProductReviews } from './productReviews.mock';

vi.mock('~/sdk', () => ({
  useSdk: () => ({
    commerce: {
      getProductReviews: vi.fn(() => mockProductReviews),
    },
  }),
}));

describe('useProductReview', () => {
  it('should return product reviews', async () => {
    const slug = 'athletic-mens-walking-sneakers';
    const { data, fetchProductReviews } = useProductReviews(slug);

    await fetchProductReviews(slug);

    expect(data.value).toEqual(mockProductReviews);
  });
});
