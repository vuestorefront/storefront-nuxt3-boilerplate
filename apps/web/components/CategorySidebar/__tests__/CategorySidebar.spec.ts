import { mount } from '@vue/test-utils';
import CategorySidebar from '~/components/CategorySidebar/CategorySidebar.vue';

describe('<CategorySidebar />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CategorySidebar, {
      props: {
        isOpen: false,
      },
    });

    expect(getByTestId('category-sidebar'));
  });
});
