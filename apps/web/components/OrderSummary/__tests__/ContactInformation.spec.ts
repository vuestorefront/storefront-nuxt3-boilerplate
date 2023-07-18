import { mount } from '@vue/test-utils';
import OrderSummary from '~/components/OrderSummary/OrderSummary.vue';
import { SfCart } from '@vue-storefront/unified-data-model';

describe('<OrderSummary />', () => {
  it('should render component', () => {
    const wrapper = mount(OrderSummary, {
      props: {
        cart: {} as SfCart,
      }
    });

    expect(wrapper.getByTestId('order-summary'));    
  });
});