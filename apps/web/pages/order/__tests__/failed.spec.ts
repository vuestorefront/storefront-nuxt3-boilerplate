import { mount } from '@vue/test-utils';
import Failed from '~/pages/order/failed.vue';

describe('<Failed />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Failed);

    expect(getByTestId('order-failed-page'));
  });
});
