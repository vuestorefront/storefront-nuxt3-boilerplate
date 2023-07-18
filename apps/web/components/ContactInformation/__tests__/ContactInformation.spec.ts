import { mount } from '@vue/test-utils';
import ContactInformation from '~/components/ContactInformation/ContactInformation.vue';

describe('<ContactInformation />', () => {
  it('should render component', () => {
    const wrapper = mount(ContactInformation);

    expect(wrapper.getByTestId('contact-information'));    
  });
});