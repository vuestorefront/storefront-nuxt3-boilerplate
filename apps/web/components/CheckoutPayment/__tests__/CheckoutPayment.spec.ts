import { mount } from '@vue/test-utils';
import CheckoutPayment from '~/components/CheckoutPayment/CheckoutPayment.vue';

describe('<CheckoutPayment />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CheckoutPayment);

    expect(getByTestId('checkout-payment'));
  });
});
