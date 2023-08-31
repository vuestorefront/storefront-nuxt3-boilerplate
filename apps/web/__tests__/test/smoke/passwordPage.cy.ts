import { paths } from '../../../utils/paths';
import { PasswordPageObject } from '../../support/pageObjects/PasswordPageObject';

const password = new PasswordPageObject();

describe('Smoke: Password', () => {
  it('Checking if back to login button works', () => {
    cy.visitAndHydrate(paths.authResetPassword);

    password
    .backToLogin()
    .isURL(paths.authLogin)
  });

  it('Reset password check', () => {
    cy.visitAndHydrate(paths.authResetPassword);

    password.fillEmail().resetPassword().isURL(paths.authResetPassword);
  });

  it('Checking set new password page', () => {
    cy.visitAndHydrate(paths.authSetNewPassword);

    password.isURL(paths.authSetNewPassword).setNewPassword();
  });
});
