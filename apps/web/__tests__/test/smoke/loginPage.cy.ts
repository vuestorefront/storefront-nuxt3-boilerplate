import { paths } from '../../../utils/paths';
import { LoginPageObject } from '../../support/pageObjects/LoginPageObject';

const login = new LoginPageObject();
describe('Login page check', () => {
  it('Checking if forgot password button has correct link', () => {
    cy.visitAndHydrate(paths.authLogin);

    login
    .clickForgotPasswordLink()
    .isURL(paths.authResetPassword);
  });

  it('Checking moving form login to signup and back', () => {
    cy.visitAndHydrate(paths.authLogin);

   login
  .clickSignUpLink()
  .isURL(paths.authSignup)
  .clickLoginLink()
  .isURL(paths.authLogin);
  });

  it('Checking success login', () => {
    cy.visitAndHydrate(paths.authLogin);

    login.successLogin();
  });
});
