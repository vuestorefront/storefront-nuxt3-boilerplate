import { mount } from '@vue/test-utils';
import CategoryEmptyState from '~/components/CategoryEmptyState/CategoryEmptyState.vue';

describe('<CategoryEmptyState />', () => {
  it('should render component', () => {
    const wrapper = mount(CategoryEmptyState);

    expect(wrapper.getByTestId('category-empty-state'));
  });
});
