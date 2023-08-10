import { mount } from '@vue/test-utils';
import ProductCardVertical from '~/components/ui/ProductCardVertical/ProductCardVertical.vue';

describe('<ProductCardVertical />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductCardVertical, {
      props: {
        product: {
          name: 'Smartwatch Fitness Tracker',
          gallery: [
            {
              alt: 'Smartwatch Fitness Tracker',
              url: '/images/watch.png',
            },
          ],
          attributes: [
            {
              label: 'Size',
              name: 'Size',
              value: '1.9″',
              valueLabel: 'value',
            },
            {
              name: 'Color',
              label: 'color',
              value: 'Black',
              valueLabel: 'value',
            },
          ],
        },
      },
    });

    expect(getByTestId('product-card-vertical'));    
  });
});