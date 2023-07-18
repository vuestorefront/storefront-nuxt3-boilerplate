import { useProductRecommended } from '~/composables/useProductRecommended/useProductRecommended';

describe('useProductRecommended', () => {
  it('should return product reviews', async () => {
    const slug = 'athletic-mens-walking-sneakers';
    const { data: recommendedProducts, fetchProductRecommended } = useProductRecommended(slug);

    await fetchProductRecommended(slug);

    expect(recommendedProducts.value).not.toBeUndefined();
  });
});
