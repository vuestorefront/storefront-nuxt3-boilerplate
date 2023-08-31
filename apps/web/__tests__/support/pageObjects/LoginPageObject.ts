export class LoginPageObject {
  clickForgotPasswordLink() {
    cy.getByTestId('login-page-reset-button').click();
    return this;
  }

  successLogin() {
    cy.getFixture('account').then((fixture) => {
      cy.get(`[type="email"]`).type(fixture.email, { delay: 0 });
      cy.get(`[type="password"]`).type(fixture.password, { delay: 0 });
    });
    cy.getByTestId('checkbox').realHover().click();
    cy.get(`[type="submit"]`).click();
    cy.contains('Sneaker hot drops').should('exist');
  }

  clickSignUpLink() {
    cy.getByTestId('login-page-signup-button').click();
    return this;
  }
  clickLoginLink() {
    cy.getByTestId('signup-page-login-button').click();
    return this;
  }
  
  isURL(path: string) {
    cy.url().should('contain', path);
    return this;
  }
}
