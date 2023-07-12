import { mount } from '@vue/test-utils';
import Divider from '~/components/ui/Divider/Divider.vue';

describe('<Divider />', () => {
  it('should render component', () => {
    const wrapper = mount(Divider);

    expect(wrapper.findByTestId('divider').exists()).toBeTruthy();
  });
});
