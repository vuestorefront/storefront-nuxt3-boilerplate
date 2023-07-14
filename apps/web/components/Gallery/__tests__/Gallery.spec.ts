import { mount } from '@vue/test-utils';
import Gallery from '~/components/Gallery/Gallery.vue';

describe('<Gallery />', () => {
  it('should render component', () => {
    const wrapper = mount(Gallery, {
      props: {
        images: [{ alt: 'Test', url: '/images/test.webp' }],
      }
    });

    expect(wrapper.getByTestId('gallery'));
  });
});
