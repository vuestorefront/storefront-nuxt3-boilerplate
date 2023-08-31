import { Product } from '../types/types';

export class ProductDetailPageObject {
  get addToCartButton() {
    return cy.getByTestId('button').contains('Add to cart');
  }

  get productTitle() {
    return cy.getByTestId('product-name');
  }

  get productDescription() {
    return cy.getByTestId('product-description').eq(0);
  }

  get productGallery() {
    return cy.getByTestId('gallery-images');
  }

  get quantitySelector() {
    return cy.getByTestId('quantity-selector-input');
  }

  get productPriceValue() {
    return cy.getByTestId('price');
  }

  displayCheck() {
    cy.getFixture('products').then((fixture) => {
      cy.visitAndHydrate(fixture.url);
      this.assertProductDetailPageElements(fixture);
    });
    return this;
  }

  assertProductDetailPageElements(data: Product) {
    this.productTitle.should('have.text', data.name);
    this.productDescription.should('have.text', data.description);
    this.productGallery.should('be.visible');
    this.productPriceValue.contains(data.currency + data.price.toFixed(2));
    this.quantitySelector.should('be.visible');
    this.addToCartButton.should('be.visible');
    return this;
  }
}
