import { fireEvent, render } from '@testing-library/vue';
import Breadcrumbs from '../Breadcrumbs.vue';

const breadcrumbs = [
  {
    name: 'Home',
    link: '/',
  },
];
describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const { getByTestId } = render(Breadcrumbs);

    expect(getByTestId('breadcrumbs')).toBeTruthy();
  });

  it('should toggle dropdown', async () => {
    const { getByTestId, queryByTestId } = render(Breadcrumbs, {
      props: {
        breadcrumbs,
      },
    });

    expect(queryByTestId('breadcrumbsDropdown')).toBeFalsy();

    const dropdownButton = getByTestId('breadcrumbs-dropdown-button');

    await fireEvent.click(dropdownButton);

    expect(queryByTestId('breadcrumbs-dropdown')).toBeTruthy();
  });
});
