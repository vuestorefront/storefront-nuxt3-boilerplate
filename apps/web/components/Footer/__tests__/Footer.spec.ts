import { render, within } from '@testing-library/vue';
import { bottomLinks, categories, companyName, contactOptions, socialMedia } from '../../../mocks/footerData';
import Footer from '../Footer.vue';

describe('<Footer />', () => {
  it('should render component', () => {
    const { getByTestId } = render(Footer);

    expect(getByTestId('footer')).toBeTruthy();
  });

  it('should render categories', () => {
    const { getByTestId } = render(Footer);
    const section = getByTestId('section-top');

    categories.forEach(({ label }) => within(section as HTMLElement).getByText(label));
  });

  it('should render subcategories', () => {
    const { getByTestId } = render(Footer);
    const section = getByTestId('section-top');

    categories.forEach(({ label, subcategories }) =>
      subcategories.forEach(({ subcategoryLabel }) => within(section as HTMLElement).getAllByText(subcategoryLabel)),
    );
  });

  it('should render contact options', () => {
    const { getByTestId } = render(Footer);
    const section = getByTestId('section-middle');

    contactOptions.forEach(({ label }) => within(section as HTMLElement).getByText(label));
  });

  it('should render bottom links', () => {
    const { getByTestId } = render(Footer);
    const section = getByTestId('section-bottom');

    bottomLinks.forEach(({ label }) => within(section as HTMLElement).getByText(label));
  });

  it('should render social media', () => {
    const { getByTestId } = render(Footer);

    socialMedia.forEach(({ label }) => getByTestId(label));
  });

  it('should render company name', () => {
    const { getByText } = render(Footer);

    getByText(companyName);
  });
});
