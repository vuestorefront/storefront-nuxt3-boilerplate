import { paths } from "../../../utils/paths";

export class MyAccountPageObject {
  get accountDropdownListItem () {
    return  cy.get(`a[href="${paths.account}"]`)
    //cy.getByTestId('account-dropdown-list-item');
  }

  clickTopBarMyAccountLink() {
    cy.getByTestId('account-dropdown-button').should('exist').focus().click();

    this.accountDropdownListItem
      .should('exist')
      .contains('My Account').click();

    cy.url().should('contain', paths.account);
  }

  checkAllSections() {
    cy.contains('Account Settings').should('exist');
    cy.contains('Personal Data').should('exist');
    cy.contains('Billing Details').should('exist');
    cy.contains('Shipping Details').should('exist');
    cy.contains('Orders & Returns').should('exist');
    cy.contains('My Orders').should('exist');
    cy.contains('Returns').should('exist');
    cy.contains('Logout').should('exist');

    return this;
  }

  personalDataSection() {
    cy.get('a').contains('Personal Data').click();
    cy.url().should('contain', paths.accountPersonalData);
    cy.contains('Your name').should('exist');
    cy.contains('Contact information').should('exist');
    cy.contains('Your password').should('exist');

    return this;
  }

  billingDetailsSection() {
    cy.get('a').contains('Billing Details').click();
    cy.url().should('contain', paths.accountBillingDetails);
    cy.contains('Billing address').should('exist');

    return this;
  }

  shippingDetailsSection() {
    cy.get('a').contains('Shipping Details').click();
    cy.url().should('contain', paths.accountShippingDetails);
    cy.contains('Shipping address').should('exist');

    return this;
  }

  myOrdersSection() {
    cy.get('a').contains('My Orders').click();
    cy.url().should('contain', paths.accountMyOrders);
    cy.contains("Details").should('exist');

    return this;
  }

  returnsSection() {
    cy.get('a').contains('Returns').click();
    cy.url().should('contain', paths.accountReturns);
    cy.contains("You haven’t shopped with us yet").should('exist');

    return this;
  }
}
