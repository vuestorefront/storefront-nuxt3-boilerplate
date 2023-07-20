import { useProductAttribute } from '../useProductAttribute';
import { mockProduct } from './useProduct.mock';

describe('useProductAttribute', () => {
  it('should return product attributes', () => {
    const { getAttributeList, getAttribute } = useProductAttribute(mockProduct, ['attribute']);

    const attributeList = getAttributeList('attribute');
    const attributeValue = getAttribute('attribute');

    expect(attributeList).toEqual([]);
    expect(attributeValue).toEqual(null);
  });
});
