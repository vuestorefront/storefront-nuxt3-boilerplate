import { CartPageObject } from '../../support/pageObjects/CartPageObject';

const cart = new CartPageObject();

describe('Smoke: Cart Page', () => {
  it.skip('[smoke] Add items to cart and display it', () => {
    cy.visit('/');
    cart.openCart()
        .checkCart();
  });
});
