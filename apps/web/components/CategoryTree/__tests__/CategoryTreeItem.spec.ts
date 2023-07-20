import { mount } from '@vue/test-utils';
import CategoryTreeItem from '~/components/CategoryTree/CategoryTreeItem.vue';

describe('<CategoryTreeItem />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CategoryTreeItem, {
      props: {
        name: 'test',
        count: 0,
        href: '',
      },
    });

    expect(getByTestId('category-tree-item'));
  });
});
