export class CheckoutPageObject {
  get goToCheckoutButton() {
    return cy.getByTestId('button').contains('Go to checkout');
  }

  get addContactInformationButton() {
    return cy.getByTestId('button').contains('Add contact information');
  }

  get addBillingAddressButton() {
    return cy.getByTestId('button').contains('Add billing address');
  }

  get addShippingAddressButton() {
    return cy.getByTestId('button').contains('Add shipping address');
  }

  get contactInformationForm() {
    return cy.getByTestId('contact-information-form').find('input');
  }

  get modalSaveButton() {
    return cy.getByTestId('modal').find('[data-testid="button"]').contains('Save');
  }

  get contactInformationFormSaveButton() {
    return cy.getByTestId('contact-information-form').find('[data-testid="button"]').contains('Save');
  }

  get placeOrderButtons() {
    return cy.getByTestId('button').contains('Place order and pay');
  }

  get displaySuccessPages() {
    return cy.getByTestId('order-success-page');
  }

  get inputField() {
    return cy.getByTestId('contact-information-form').children('[type="email"]');
  }

  get modal() {
    return cy.getByTestId('modal');
  }

  get thankYouBanner() {
    return cy.contains('Thank you!');
  }

  get firstNameInput() {
    return cy.getByTestId('input').find('input[name="firstName"]');
  }

  get lastNameInput() {
    return cy.getByTestId('input').find('input[name="lastName"]');
  }

  get phoneInput() {
    return cy.getByTestId('input').find('input[name="phone"]');
  }

  get countrySelect() {
    return cy.getByTestId('select').find('select[name="country"]');
  }

  get streetNameInput() {
    return cy.getByTestId('input').find('input[name="streetName"]');
  }

  get streetNumberInput() {
    return cy.getByTestId('input').find('input[name="streetNumber"]');
  }

  get cityInput() {
    return cy.getByTestId('input').find('input[name="city"]');
  }

  get stateSelect() {
    return cy.getByTestId('select').find('select[name="state"]');
  }

  get postalCodeInput() {
    return cy.getByTestId('input').find('input[name="postalCode"]');
  }

  goToCheckout() {
    this.goToCheckoutButton.click();
    return this;
  }

  addContactInformation() {
    this.addContactInformationButton.eq(0).should('have.text', 'Add contact information');
    cy.waitUntilElementInDOM(() => {
      this.addContactInformationButton.click();
      return this.modal;
    });
    this.modal.should('be.visible');
    return this;
  }

  addBillingAddress() {
    this.addBillingAddressButton.eq(0).should('have.text', 'Add billing address').click();
    this.modal.should('be.visible');
  }

  addShippingAddress() {
    this.addShippingAddressButton.eq(0).should('have.text', 'Add shipping address').click();
    this.modal.should('be.visible');
  }

  placeOrderButton() {
    this.placeOrderButtons.click();
    return this;
  }

  displaySuccessPage() {
    this.displaySuccessPages.should('be.visible');
    this.thankYouBanner;
    return this;
  }

  fillContactInformationForm() {
    cy.contains('Product has been added to the cart.').should('not.exist');
    cy.getFixture('addressForm').then((fixture) => {
      this.contactInformationForm.type(fixture.email);
      this.contactInformationFormSaveButton.click().should('not.exist');
    });
    return this;
  }

  fillBillingAddressForm() {
    return this.fillAddressForm();
  }

  fillShippingAddressForm() {
    return this.fillAddressForm();
  }

  fillAddressForm() {
    cy.getFixture('addressForm').then((fixture) => {
      this.fillForm(fixture);
    });
    return this;
  }

  fillForm(fixture: any) {
    this.firstNameInput.type(fixture.name);
    this.lastNameInput.type(fixture.lastName);
    this.phoneInput.type(fixture.phone);
    this.countrySelect.select(fixture.country);
    this.streetNameInput.type(fixture.street);
    this.streetNumberInput.type(fixture.streetNumber);
    this.cityInput.type(fixture.city);
    this.stateSelect.select(fixture.region);
    this.postalCodeInput.type(fixture.zipCode);
    this.modalSaveButton.click();
    return this;
  }
}
