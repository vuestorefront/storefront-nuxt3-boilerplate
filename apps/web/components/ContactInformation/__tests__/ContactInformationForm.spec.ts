import { mount } from '@vue/test-utils';
import ContactInformationForm from '~/components/ContactInformation/ContactInformationForm.vue';

describe('<ContactInformationForm />', () => {
  it('should render component', () => {
    const wrapper = mount(ContactInformationForm);

    expect(wrapper.getByTestId('contact-information-form'));    
  });
});