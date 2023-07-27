import { mount } from '@vue/test-utils';
import Success from '~/pages/order/success.vue';

describe('<Success />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Success);

    expect(getByTestId('order-success-page'));
  });
});
