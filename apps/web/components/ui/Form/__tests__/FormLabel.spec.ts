import { mount } from '@vue/test-utils';
import FormLabel from '~/components/ui/Form/FormLabel.vue';

describe('<FormLabel />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(FormLabel);

    expect(getByTestId('form-label')); 
  });
});
