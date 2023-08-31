import { paths } from '../../../utils/paths';
import { MyAccountPageObject } from '../../support/pageObjects/MyAccountPageObject';

const myAccount = new MyAccountPageObject();

describe('my account', () => {
  it('going to my account from header', () => {
    cy.visitAndHydrate(paths.home);

    myAccount.clickTopBarMyAccountLink();
  });

  it('checking my account section', () => {
    cy.visitAndHydrate(paths.account);

    myAccount
      .checkAllSections()
      .personalDataSection()
      .billingDetailsSection()
      .shippingDetailsSection()
      .myOrdersSection()
      .returnsSection();
  });
});
