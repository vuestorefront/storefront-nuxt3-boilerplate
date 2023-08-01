import { mount } from '@vue/test-utils';
import AccountFormsName from '~/components/AccountForms/AccountFormsName.vue';

describe('<AccountFormsName />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AccountFormsName);

    expect(getByTestId('account-forms-name'));    
  });
});