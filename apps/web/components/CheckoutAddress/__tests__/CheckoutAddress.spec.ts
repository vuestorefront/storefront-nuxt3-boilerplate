import { mount } from '@vue/test-utils';
import CheckoutAddress from '~/components/CheckoutAddress/CheckoutAddress.vue';

describe('<CheckoutAddress />', () => {
  it('should render component', () => {
    const wrapper = mount(CheckoutAddress, {
      props: {
        type: 'billingAddress',
        heading: '',
        description: '',
        buttonText: '',
      },
    });
    expect(wrapper.getByTestId('checkout-address'));
  });
});