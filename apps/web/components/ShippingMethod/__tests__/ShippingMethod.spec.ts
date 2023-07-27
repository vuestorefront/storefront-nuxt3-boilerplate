import { mount } from '@vue/test-utils';
import ShippingMethod from '~/components/ShippingMethod/ShippingMethod.vue';

describe('<ShippingMethod />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ShippingMethod);

    expect(getByTestId('shipping-method'));
  });
});
