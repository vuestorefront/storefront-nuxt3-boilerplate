import { mount } from '@vue/test-utils';
import CategoryPageContent from '~/components/CategoryPageContent/CategoryPageContent.vue';

describe('<CategoryPageContent />', () => {
  it('should render component', () => {
    const wrapper = mount(CategoryPageContent, {
      props: {
        title: 'title',
        totalProducts: 0,
        products: [],
        itemsPerPage: 24,
      },
    });

    expect(wrapper.getByTestId('category-page-content'));
  });
});
