export class SignupPageObject {
  createAccount() {
    cy.getFixture('account').then((fixture) => {
      cy.get(`[name="firstName"]`).type(fixture.firstname, { delay: 0 });
      cy.get(`[name="lastName"]`).type(fixture.lastname, { delay: 0 });
      cy.get(`[name="email"]`).type(fixture.email, { delay: 0 });
      cy.get(`[name="password"]`).type(fixture.password, { delay: 0 });
    });
    cy.get('#terms').realHover().click();
    cy.get('#subscription').realHover().click();
    cy.get(`[type="submit"]`).click();
    cy.get('[data-testid="modal"]').should('exist');
    cy.contains('Go Shopping').click();
    cy.contains('Sneaker hot drops').should('exist');
  }
}
