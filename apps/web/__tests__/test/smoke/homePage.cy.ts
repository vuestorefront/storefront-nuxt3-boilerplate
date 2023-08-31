import { paths } from '../../../utils/paths';
import { HomePageObject } from '../../support/pageObjects/HomePageObject';

const homePage = new HomePageObject();

beforeEach(() => {
  cy.visitAndHydrate(paths.home);
});

describe('Smoke: Homepage', () => {
  it('[smoke] Check if Primary Button is working', () => {
    homePage.checkPrimaryButton();
  });

  it('[smoke] Check if Secondary Button is working', () => {
    homePage.checkSecondaryButton();
  });

  it('[smoke] Check if elements display properly', () => {
    homePage.checkCategoryCard().checkBanners().checkProductCard();
  });

  it('[smoke] Check if Categories button is working ', () => {
    homePage.checkHeaderCategory();
  });
});
