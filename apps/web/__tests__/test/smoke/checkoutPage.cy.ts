import { CartPageObject } from '../../support/pageObjects/CartPageObject';
import { CheckoutPageObject } from '../../support/pageObjects/CheckoutPageObject';

const checkout = new CheckoutPageObject();
const cart = new CartPageObject();

describe('Smoke: Checkout Page', () => {
  it.skip('[smoke] Display checkout and place order', () => {
    cy.visit('/');
    cart.openCart();
    checkout.goToCheckout();
    checkout.addContactInformation();
    checkout.fillContactInformationForm();
    checkout.addBillingAddress();
    checkout.fillBillingAddressForm();
    checkout.addShippingAddress();
    checkout.fillShippingAddressForm();
    checkout.placeOrderButton();
    checkout.displaySuccessPage();
  });
});
