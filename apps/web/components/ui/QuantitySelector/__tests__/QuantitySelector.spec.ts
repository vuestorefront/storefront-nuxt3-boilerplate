import { mount } from '@vue/test-utils';
import QuantitySelector from '~/components/ui/QuantitySelector/QuantitySelector.vue';
import { SfProduct } from '@vue-storefront/unified-data-model';

describe('<QuantitySelector />', () => {
  it('should render component', () => {
    const wrapper = mount(QuantitySelector);

    expect(wrapper.getByTestId('quantity-selector'));
  });
});