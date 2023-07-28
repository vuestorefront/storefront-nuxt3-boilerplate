import { Product } from '../types/types';

export class CartPageObject {
  get cartPreview() {
    return cy.getByTestId('checkout-layout');
  }

  get totalItemsAmount() {
    return cy.getByTestId('total-in-cart');
  }

  get subtotalPrice() {
    return cy.getByTestId('special-price');
  }

  get totalPrice() {
    return cy.getByTestId('total');
  }

  get promoCodeInput() {
    return cy.getByTestId('input-field');
  }

  get quanityDecreaseButton() {
    return cy.getByTestId('quantity-selector-decrease-button');
  }

  get productCards() {
    return cy.getByTestId('product-card');
  }

  get quantitySelectorInput() {
    return cy.getByTestId('quantity-selector-input');
  }

  get cartBadgeIndicator() {
    return cy.getByTestId('cart-action').getByTestId('cart-badge').getByTestId('badge-indicator');
  }

  get cartItem() {
    return cy.getByTestId('link');
  }

  get cartIcon() {
    return cy.getByTestId('navbar-top').find('[data-testid="shopping-cart"]');
  }

  checkCart() {
    cy.getFixture('products').then((fixture) => {
      this.assertCartPreviewElements(fixture, 1);
      this.cartItem.contains(fixture.name);
    
    });
  }

  assertCartPreviewElements(data: Product, expectedElements: number) {
    this.cartPreview.should('be.visible');
    this.totalItemsAmount.should('have.text', `(Items: ${expectedElements})`);
    this.subtotalPrice.should('have.text', `${data.currency}${data.price.toFixed(2)}`);
    this.totalPrice.should('have.text', `${data.currency}${data.price.toFixed(2)}`);
    this.promoCodeInput.should('be.visible');
    return this;
  }

  openCart() {
    this.cartIcon.click();
    return this;
  }
}
