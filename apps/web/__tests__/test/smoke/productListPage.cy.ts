import { ProductListPageObject } from '../../support/pageObjects/ProductListPageObject';

const productListPage = new ProductListPageObject();

beforeEach(() => {
  cy.visit('/category');
});

describe('Smoke: Product List Page', function () {
  context('Displaying products and categories', () => {
    it.skip('[smoke] User should be able to see the products as list and grid', () => {
      // ASSERT - list view can be as grid view
      productListPage.assertGridView();
    });

    it.skip('[smoke] User should be able to see the list of the categories available', () => {
      // ASSERT -
      productListPage.openFirstCategory();
    });
  });

  context('Product details and actions', () => {
    it.skip('[smoke] User should see the product information', () => {
      // ASSERT - product details are displayed
      productListPage.assertProductListElements().assertFirstProduct();
    });
  });
});
