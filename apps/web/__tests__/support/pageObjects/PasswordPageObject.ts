
export class PasswordPageObject {
  get accountForm() {
    return cy.getByTestId('input-field').should('be.visible');
  }
  

  backToLogin() {
    cy.contains('Reset password').should('be.visible');
    cy.contains('Back to Login').click();
  
    return this;
  }

  isURL(path: string) {
    cy.url().should('contain', path);

    return this;
  }

  fillEmail() {
    cy.getFixture('account').then((fixture) => {
      this.accountForm.type(fixture.email, { delay: 0 });
    });

    return this;
  }

  resetPassword() {
    cy.get('[type="submit"]').realClick();
    cy.contains('Reset password');
    cy.getByTestId('reset-password-page-reset-button').realClick();


    return this;
  }

  setNewPassword() {
    cy.getFixture('account').then((fixture) => {
      cy.get(`[name="password"]`).type(fixture.password, { delay: 0 });
      cy.get(`[name="repeatedPassword"]`).type(fixture.password, { delay: 0 });
    });
    cy.get('[type="submit"]').realClick();

    return this;
  }
 
}
