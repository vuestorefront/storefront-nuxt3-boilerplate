import { paths } from '../../../utils/paths';
import { CartPageObject } from '../../support/pageObjects/CartPageObject';

const cart = new CartPageObject();

describe('Smoke: Cart Page', () => {
  it('[smoke] Add items to cart and display it', () => {
    cy.visitAndHydrate(paths.home);

    cart.openCart().checkCart();
  });
});
