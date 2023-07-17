import { mount } from '@vue/test-utils';
import Tag from '~/components/ui/Tag/Tag.vue';

describe('<Tag />', () => {
  it('should render component', () => {
    const wrapper = mount(Tag);

    expect(wrapper.getByTestId('tag'));
  });
});