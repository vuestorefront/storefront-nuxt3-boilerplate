import { mount } from '@vue/test-utils';
import Breadcrumbs from '../Breadcrumbs.vue';

const breadcrumbs = [
  {
    name: 'Home',
    link: '/',
  },
];
describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const wrapper = mount(Breadcrumbs);

    expect(wrapper.get('[data-testid="breadcrumbs"]'));
  });

  it('should toggle dropdown', async () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        breadcrumbs,
      },
    });

    expect(wrapper.find('[data-testid="breadcrumbs-dropdown"]').exists()).toBeFalsy();

    const dropdownButton = wrapper.get('[data-testid="breadcrumbs-dropdown-button"]');

    await dropdownButton.trigger('click');

    expect(wrapper.get('[data-testid="breadcrumbs-dropdown"]'));
  });
});
