import { HomePageObject } from '../../support/pageObjects/HomePageObject';

const homePage = new HomePageObject();

beforeEach(() => {
  cy.visit('/');
});

describe('Smoke: Homepage', () => {
  it.skip('[smoke] Check if Primary Button is working', () => {
    homePage.checkPrimaryButton();
  });

  it.skip('[smoke] Check if Secondary Button is working', () => {
    homePage.checkSecondaryButton();
  });

  it.skip('[smoke] Check if elements display properly', () => {
    homePage.checkCategoryCard().checkBanners().checkProductCard();
  });

  it.skip('[smoke] Check if Categories button is working ', () => {
    homePage.checkHeaderCategory();
  });
});
