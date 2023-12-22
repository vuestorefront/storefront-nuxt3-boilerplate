import { useProductRecommended } from '~/composables/useProductRecommended/useProductRecommended';

describe('useProductRecommended', () => {
  it('should return product recommended', async () => {
    const slug = 'athletic-mens-walking-sneakers';
    const { data: recommendedProducts, fetchProductRecommended } = useProductRecommended(slug);

    await fetchProductRecommended(slug);

    expect(recommendedProducts.value).not.toBeUndefined();
  });
});
