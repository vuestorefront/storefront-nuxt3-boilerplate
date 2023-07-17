import { useProducts } from '../useProducts';
import { mockProducts } from './useProducts.mock';

vi.mock('~/sdk', () => ({
  sdk: {
    commerce: {
      getProducts: vi.fn(() => mockProducts),
    },
  },
}));

describe('useProducts', () => {
  it('should return products', async () => {
    const { fetchProducts, data } = useProducts();

    await fetchProducts();

    expect(data.value).not.toBeUndefined();

    expect(data.value).toMatchInlineSnapshot(`
      {
        "categoryHierarchy": [],
        "currentCategory": null,
        "facets": [
          {
            "label": "Color",
            "name": "color",
            "values": [
              {
                "label": "White",
                "productCount": 22,
                "value": "white",
              },
            ],
          },
          {
            "label": "Size",
            "name": "size",
            "values": [
              {
                "label": "36",
                "productCount": 78,
                "value": "36",
              },
            ],
          },
        ],
        "pagination": {
          "currentPage": 1,
          "pageSize": 24,
          "totalPages": 17,
          "totalResults": 398,
        },
        "products": [
          {
            "id": "0",
            "name": "Athletic mens walking sneakers",
            "price": {
              "isDiscounted": false,
              "regularPrice": {
                "amount": 100.99,
                "currency": "USD",
                "precisionAmount": "2",
              },
              "value": {
                "amount": 89.95,
                "currency": "USD",
                "precisionAmount": "2",
              },
            },
            "primaryImage": {
              "alt": "Athletic mens walking sneakers",
              "url": "/images/product.webp",
            },
            "quantityLimit": null,
            "rating": {
              "average": 3,
              "count": 26,
            },
            "sku": "product-1",
            "slug": "athletic-mens-walking-sneakers",
          },
        ],
        "subCategories": [
          {
            "id": "1",
            "name": "New",
            "productCount": 29,
            "slug": "new",
            "subcategories": [],
          },
        ],
      }
    `);
  });
});
