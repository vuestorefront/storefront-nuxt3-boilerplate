import { mount } from '@vue/test-utils';
import ShippingMethod from '~/components/ShippingMethod/ShippingMethod.vue';

describe('<ShippingMethod />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ShippingMethod, {
      props: {
        shippingMethods: {
          methods: [{
            name: 'Method',
            description: 'Method description',
            estimatedDelivery: '1d',
            id: 'idMethod',
            price: {
              currency: 'PLN',
              amount: 12,
              precisionAmount: 'dsa'
            }
          }]
        }
      }
    });

    expect(getByTestId('shipping-method'));
  });
});
