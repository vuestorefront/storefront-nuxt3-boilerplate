import { mount } from '@vue/test-utils';
import ContactInformation from '~/components/ContactInformation/ContactInformation.vue';

describe('<ContactInformation />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ContactInformation);

    expect(getByTestId('contact-information'));    
  });
});