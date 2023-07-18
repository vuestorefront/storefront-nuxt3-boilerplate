import { mount } from '@vue/test-utils';
import FormLabel from '~/components/ui/Form/FormLabel.vue';

describe('<FormLabel />', () => {
  it('should render component', () => {
    const wrapper = mount(FormLabel);

    expect(wrapper.getByTestId('form-label'));
  });
});
