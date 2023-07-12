import { mount } from '@vue/test-utils';
import ProductProperties from '~/components/ProductProperties/ProductProperties.vue';
import { mockProduct } from '../../../composables/useProductAttribute/__tests__/useProduct';

describe('<ProductProperties />', () => {
  it('should render component', () => {
    const wrapper = mount(ProductProperties, {
      props: {
        product: mockProduct
      }
    });

    expect(wrapper.findByTestId('product-properties').exists()).toBeTruthy();
  });
});
