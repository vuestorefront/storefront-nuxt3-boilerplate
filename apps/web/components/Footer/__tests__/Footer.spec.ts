import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import Footer from '~/components/Footer/Footer.vue';
import { bottomLinks, categories, companyName, contactOptions, socialMedia } from '~/mocks/footerData';

describe('<Footer />', () => {
  it('should render component', () => {
    const wrapper = mount(Footer);

    expect(wrapper.findByTestId('footer'));
  });

  it('should render categories', () => {
    const wrapper = mount(Footer);
    const section = wrapper.findByTestId('section-top');

    categories.forEach(({ label }) => expect(section.html()).toContain(label));
  });

  it('should render subcategories', () => {
    const wrapper = mount(Footer);
    const section = wrapper.findByTestId('section-top');

    categories.forEach(({ subcategories }) =>
      subcategories.forEach(({ subcategoryLabel }) => expect(section.html()).toContain(subcategoryLabel)),
    );
  });

  it('should render contact options', () => {
    const wrapper = mount(Footer);
    const section = wrapper.findByTestId('section-middle');

    contactOptions.forEach(({ label }) => expect(section.html()).toContain(label));
  });

  it('should render bottom links', () => {
    const wrapper = mount(Footer);
    const section = wrapper.findByTestId('section-bottom');

    bottomLinks.forEach(({ label }) => expect(section.html()).toContain(label));
  });

  it('should render social media', () => {
    const wrapper = mount(Footer);

    socialMedia.forEach(({ label }) => wrapper.getByTestId(label));
  });

  it('should render company name', () => {
    const wrapper = mount(Footer);

    expect(wrapper.html()).toContain(companyName);
  });
});
