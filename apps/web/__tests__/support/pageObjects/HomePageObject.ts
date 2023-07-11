export class HomePageObject {
  get header() {
    return cy.getByTestId('header');
  }
  get primaryButton() {
    return cy.getByTestId('button').contains('Order now');
  }
  get secondaryButton() {
    return cy.getByTestId('button').contains('Show more');
  }
  get categoryCard() {
    return cy.getByTestId('category-card');
  }
  get banners() {
    return cy.getByTestId('display');
  }
  get productCard() {
    return cy.getByTestId('product-card');
  }
  get headerButton() {
    return cy.getByTestId('button').contains('Browse products');
  }

  assertHeader(): void {
    this.header.should('be.visible');
  }
  visit(): void {
    cy.visit('/');
  }
  checkPrimaryButton(): void {
    this.primaryButton.should('have.text', 'Order now').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/product/athletic-mens-walking-sneakers`);
  }
  checkSecondaryButton(): void {
    this.secondaryButton.should('have.text', 'Show more').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/category`);
  }
  checkCategoryCard(): void {
    this.categoryCard.should('be.visible');
  }
  checkBanners(): void {
    this.banners.should('be.visible');
  }
  checkProductCard(): void {
    this.productCard.should('be.visible');
  }
  checkHeaderCategory(): void {
    this.headerButton.should('have.text', 'Browse products').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/category`);
  }
}
