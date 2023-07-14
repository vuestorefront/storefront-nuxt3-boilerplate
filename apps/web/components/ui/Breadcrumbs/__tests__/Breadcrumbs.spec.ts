import { mount } from '@vue/test-utils';
import Breadcrumbs from '~/components/ui/Breadcrumbs/Breadcrumbs.vue';

describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Breadcrumbs, {
      props: {
        breadcrumbs: [
          {
            name: 'Home',
            link: '/',
          },
        ],
      },
    });

    expect(getByTestId('breadcrumbs'));
  });
});
