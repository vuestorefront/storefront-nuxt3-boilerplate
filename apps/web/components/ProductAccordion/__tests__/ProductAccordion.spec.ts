import { mount } from '@vue/test-utils';
import ProductAccordion from '~/components/ProductAccordion/ProductAccordion.vue';
import { mockProduct } from '~/composables/useProductAttribute/__tests__/useProduct.mock';

describe('<ProductAccordion />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductAccordion, {
      props: {
        product: mockProduct,
      },
    });

    expect(getByTestId('product-accordion'));
  });
});
