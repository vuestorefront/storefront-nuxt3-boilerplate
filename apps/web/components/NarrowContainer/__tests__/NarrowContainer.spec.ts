import { mount } from '@vue/test-utils';
import NarrowContainer from '~/components/NarrowContainer/NarrowContainer.vue';

describe('<NarrowContainer />', () => {
  it('should render component', () => {
    const wrapper = mount(NarrowContainer);

    expect(wrapper.findByTestId('narrow-container').exists()).toBeTruthy();
  });
});
