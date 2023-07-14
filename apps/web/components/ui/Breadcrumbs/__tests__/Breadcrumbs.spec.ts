import { mount } from '@vue/test-utils';
import Breadcrumbs from '~/components/ui/Breadcrumbs/Breadcrumbs.vue';

const breadcrumbs = [
  {
    name: 'Home',
    link: '/',
  },
];
describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        breadcrumbs: [],
      }
    });

    expect(wrapper.getByTestId('breadcrumbs'));
  });

  it('should toggle dropdown', async () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        breadcrumbs,
      },
    });

    expect(wrapper.findByTestId('breadcrumbs-dropdown').exists()).toBeFalsy();

    const dropdownButton = wrapper.findByTestId('breadcrumbs-dropdown-button');

    await dropdownButton.trigger('click');

    expect(wrapper.getByTestId('breadcrumbs-dropdown'));
  });
});
