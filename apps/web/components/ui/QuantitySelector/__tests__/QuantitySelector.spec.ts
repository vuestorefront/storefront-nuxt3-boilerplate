import { mount } from '@vue/test-utils';
import QuantitySelector from '~/components/ui/QuantitySelector/QuantitySelector.vue';

const value = 1;

describe('<QuantitySelector />', () => {
  it('should render component', () => {
    const wrapper = mount(QuantitySelector, {
      props: {
        value,
      },
    });
    expect(wrapper.getByTestId('quantity-selector'));
  });
});