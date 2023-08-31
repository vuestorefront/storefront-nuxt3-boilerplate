import { paths } from '../../../utils/paths';
import { SignupPageObject } from '../../support/pageObjects/SignupPageObject';

const signup = new SignupPageObject();

describe('signup testing', () => {
  it('create account and go shopping', () => {
    cy.visitAndHydrate(paths.authSignup);

    signup.createAccount();
  });
});
