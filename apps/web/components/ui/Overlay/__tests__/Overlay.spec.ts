import { mount } from '@vue/test-utils';
import Overlay from '~/components/ui/Overlay/Overlay.vue';

describe('<Overlay />', () => {
  it('should render component', () => {
    const wrapper = mount(Overlay, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.getByTestId('overlay'));    
  });
});