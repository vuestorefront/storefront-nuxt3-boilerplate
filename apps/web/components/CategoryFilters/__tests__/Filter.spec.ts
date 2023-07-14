import { mount } from '@vue/test-utils';
import Filter from '~/components/CategoryFilters/Filter.vue';

describe('<Filter />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Filter, {
      props: {
        facet: {
          values: [{ value: 'term1', productCount: 1, label: 'term1' }],
          label: 'label',
          name: 'name',
        },
        selected: [],
        type: 'size',
      },
    });

    expect(getByTestId('accordion-item'));
  });
});
