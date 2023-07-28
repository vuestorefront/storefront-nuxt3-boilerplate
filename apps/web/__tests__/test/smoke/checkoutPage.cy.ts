import { CartPageObject } from '../../support/pageObjects/CartPageObject';
import { CheckoutPageObject } from '../../support/pageObjects/CheckoutPageObject';

const checkout = new CheckoutPageObject();
const cart = new CartPageObject();

describe('Smoke: Checkout Page', () => {
  it('[smoke] Display checkout and place order', () => {
    cy.visit('/');

    cart.openCart();
    checkout
      .goToCheckout()
      .addContactInformation()
      .fillContactInformationForm();

    //.addBillingAddress()
    //.fillBillingAddressForm()
    //.addShippingAddress()
    //.fillShippingAddressForm()
    // .placeOrderButton()
    // .displaySuccessPage();
  });
});
