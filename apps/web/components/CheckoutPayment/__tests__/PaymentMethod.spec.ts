import { mount } from '@vue/test-utils';
import PaymentMethod from '~/components/CheckoutPayment/PaymentMethod.vue';

describe('<PaymentMethod />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(PaymentMethod);

    expect(getByTestId('payment-method'));
  });
});
