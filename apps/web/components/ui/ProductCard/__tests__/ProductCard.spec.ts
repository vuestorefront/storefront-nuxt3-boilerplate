import { mount } from '@vue/test-utils';
import ProductCard from '~/components/ui/ProductCard/ProductCard.vue';

describe('<ProductCard />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductCard, {
      props: {
        name: 'test',
        price: 100,
        imageUrl: '/images/product.webp',
      },
    });

    expect(getByTestId('product-card'));
  });
});
