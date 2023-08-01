import { mount } from '@vue/test-utils';
import AccountData from '~/components/AccountData/AccountData.vue';

describe('<AccountData />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AccountData);

    expect(getByTestId('account-data'));    
  });
});