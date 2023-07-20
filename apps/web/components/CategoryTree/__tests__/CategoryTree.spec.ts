import { mount } from '@vue/test-utils';
import CategoryTree from '~/components/CategoryTree/CategoryTree.vue';

describe('<CategoryTree/>', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CategoryTree, {
      props: {
        categories: [],
      },
    });

    expect(getByTestId('category-tree'));
  });
});
