import { VueWrapper, mount } from '@vue/test-utils';
import NarrowContainer from '~/components/NarrowContainer/NarrowContainer.vue';

const getContainer = (wrapper: VueWrapper) => wrapper.getByTestId('narrow-container');
describe('<NarrowContainer />', () => {
  it('should render component', () => {
    const wrapper = mount(NarrowContainer);

    expect(getContainer(wrapper));
  });

  it('should pass children to slot', async () => {
    const childrenContent = 'some cool children';
    const wrapper = mount(NarrowContainer, {
      slots: {
        default: () => childrenContent,
      },
    });

    expect(getContainer(wrapper).text()).to.be.equal(childrenContent);
  });
});
