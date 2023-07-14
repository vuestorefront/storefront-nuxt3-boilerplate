import { mount } from '@vue/test-utils';
import RenderContent from '~/components/RenderContent/RenderContent.vue';

describe('<RenderContent />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(RenderContent, {
      props: {
        content: [
          {
            fields: {
              component: 'Heading',
              tag: 'h1',
              title: 'test',
            },
          },
        ],
      },
    });

    expect(getByTestId('render-content'));
  });
});
