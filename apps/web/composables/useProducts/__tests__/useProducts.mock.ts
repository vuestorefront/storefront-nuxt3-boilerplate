import type { GetProducts } from '@vue-storefront/storefront-boilerplate-sdk';

export const mockProducts: GetProducts = {
  products: [
    {
      id: '0',
      sku: 'product-1',
      name: 'Athletic mens walking sneakers',
      slug: 'athletic-mens-walking-sneakers',
      price: {
        isDiscounted: false,
        regularPrice: {
          currency: 'USD',
          amount: 100.99,
          precisionAmount: '2',
        },
        value: {
          currency: 'USD',
          amount: 89.95,
          precisionAmount: '2',
        },
      },
      primaryImage: {
        alt: 'Athletic mens walking sneakers',
        url: '/images/product.webp',
      },
      rating: {
        average: 3,
        count: 26,
      },
      quantityLimit: null,
    },
  ],
  pagination: {
    currentPage: 1,
    pageSize: 24,
    totalResults: 398,
    totalPages: 17,
  },
  facets: [
    {
      label: 'Color',
      name: 'color',
      values: [
        {
          label: 'White',
          value: 'white',
          productCount: 22,
        },
      ],
    },
    {
      label: 'Size',
      name: 'size',
      values: [
        {
          label: '36',
          value: '36',
          productCount: 78,
        },
      ],
    },
  ],
  currentCategory: null,
  subCategories: [
    {
      id: '1',
      name: 'New',
      slug: 'new',
      subcategories: [],
      productCount: 29,
    },
  ],
  categoryHierarchy: [],
};
