import { mount } from '@vue/test-utils';
import CheckoutAddress from '~/components/CheckoutAddress/CheckoutAddress.vue';

describe('<CheckoutAddress />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CheckoutAddress, {
      props: {
        type: 'billingAddress',
        heading: '',
        description: '',
        buttonText: '',
      },
    });
    expect(getByTestId('checkout-address'));
  });
});