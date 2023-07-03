import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import { bottomLinks, categories, companyName, contactOptions, socialMedia } from '../../../mocks/footerData';
import Footer from '../Footer.vue';

describe('<Footer />', () => {
  it('should render component', () => {
    const wrapper = mount(Footer);

    expect(wrapper.get('[data-testid="footer"]'));
  });

  it('should render categories', () => {
    const wrapper = mount(Footer);
    const section = wrapper.find('[data-testid="section-top"]');

    categories.forEach(({ label }) => expect(section.html()).toContain(label));
  });

  it('should render subcategories', () => {
    const wrapper = mount(Footer);
    const section = wrapper.find('[data-testid="section-top"]');

    categories.forEach(({ label, subcategories }) =>
      subcategories.forEach(({ subcategoryLabel }) => expect(section.html()).toContain(subcategoryLabel)),
    );
  });

  it('should render contact options', () => {
    const wrapper = mount(Footer);
    const section = wrapper.find('[data-testid="section-middle"]');

    contactOptions.forEach(({ label }) => expect(section.html()).toContain(label));
  });

  it('should render bottom links', () => {
    const wrapper = mount(Footer);
    const section = wrapper.find('[data-testid="section-bottom"]');

    bottomLinks.forEach(({ label }) => expect(section.html()).toContain(label));
  });

  it('should render social media', () => {
    const wrapper = mount(Footer);

    socialMedia.forEach(({ label }) => wrapper.get(`[data-testid="${label}"]`));
  });

  it('should render company name', () => {
    const wrapper = mount(Footer);

    expect(wrapper.html()).toContain(companyName);
  });
});
