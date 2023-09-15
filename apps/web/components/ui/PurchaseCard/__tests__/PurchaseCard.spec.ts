import { mount } from '@vue/test-utils';
import PurchaseCard from '~/components/ui/PurchaseCard/PurchaseCard.vue';
import type { SfProduct } from '@vue-storefront/unified-data-model';

describe('<PurchaseCard />', () => {
  it('should render component', () => {
    const wrapper = mount(PurchaseCard, {
      props: {
        product: {} as SfProduct,
      },
    });

    expect(wrapper.getByTestId('purchase-card'));
  });
});
