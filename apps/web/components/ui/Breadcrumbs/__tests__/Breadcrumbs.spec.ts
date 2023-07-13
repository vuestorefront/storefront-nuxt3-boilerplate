import { mount } from '@vue/test-utils';
import Breadcrumbs from '~/components/ui/Breadcrumbs/Breadcrumbs.vue';

describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        breadcrumbs: [
          {
            name: 'Home',
            link: '/',
          },
        ],
      },
    });

    expect(wrapper.getByTestId('breadcrumbs'));
  });
});
