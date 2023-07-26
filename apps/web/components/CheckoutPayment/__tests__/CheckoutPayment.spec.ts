import { mount } from '@vue/test-utils';
import CheckoutPayment from '~/components/CheckoutPayment/CheckoutPayment.vue';

describe('<CheckoutPayment />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CheckoutPayment, {
      props: {
        activePayment: 'credit-card',
      },
    });

    expect(getByTestId('checkout-payment'));
  });
});
