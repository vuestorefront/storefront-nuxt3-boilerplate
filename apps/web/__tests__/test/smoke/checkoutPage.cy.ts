import { paths } from '../../../utils/paths';
import { CartPageObject } from '../../support/pageObjects/CartPageObject';
import { CheckoutPageObject } from '../../support/pageObjects/CheckoutPageObject';

const checkout = new CheckoutPageObject();
const cart = new CartPageObject();

describe('Smoke: Checkout Page', () => {
  it('[smoke] Display checkout and place order', () => {
    cy.visitAndHydrate(paths.home);

    cart.openCart();
    checkout.goToCheckout().addContactInformation().fillContactInformationForm().addBillingAddress();
    checkout.fillBillingAddressForm().addShippingAddress();
    checkout.fillShippingAddressForm().placeOrderButton().displaySuccessPage();
  });
});
