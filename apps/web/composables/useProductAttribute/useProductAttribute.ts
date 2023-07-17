import { ref } from 'vue';
import { SfAttribute, SfProduct } from '@vue-storefront/unified-data-model';
import { groupBy, uniqBy } from 'lodash-es';

/**
 * composable for getting product attributes data
 * @param {SfProduct} product Product object
 * @param {TAttribute} attributesNames get specific product attributes
 */
export function useProductAttribute<TAttribute extends string>(product: SfProduct, attributesNames: TAttribute[] = []) {
  const attributes = groupBy(
    uniqBy(
      (product?.variants || []).flatMap((variant) => variant?.attributes),
      'value',
    ),
    'name',
  );

  const mapAttribute = (attributes: SfAttribute[] = []) => {
    const defaults = attributesNames.map((attribute) => ({ name: attribute, value: null }));

    return Object.fromEntries([...defaults, ...attributes].map(({ name, value }) => [name, value]));
  };

  const selectedAttrs = ref(mapAttribute(product.attributes));

  return {
    getAttributeList: (attributeName: TAttribute) => attributes[attributeName] || [],
    getAttribute: (attributeName: TAttribute) => selectedAttrs.value[attributeName],
    setAttribute: (attributeName: TAttribute, attributeValue: string) => {
      selectedAttrs.value = {
        ...selectedAttrs.value,
        [attributeName]: attributeValue,
      };
    },
  };
}
