import { mount } from '@vue/test-utils';
import AddressForm from '~/components/AddressForm/AddressForm.vue';

describe('<AddressForm />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AddressForm, {
      props: {
        type: 'billingAddress',
      },
    });
    expect(getByTestId('address-form'));
  });
});
