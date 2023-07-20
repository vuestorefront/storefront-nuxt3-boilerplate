import { mount } from '@vue/test-utils';
import Pagination from '~/components/ui/Pagination/Pagination.vue';

describe('<Pagination />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Pagination, {
      props: {
        currentPage: 4,
        pageSize: 24,
        maxVisiblePages: 5,
        totalItems: 2137,
      },
    });

    expect(getByTestId('pagination'));
  });
});
