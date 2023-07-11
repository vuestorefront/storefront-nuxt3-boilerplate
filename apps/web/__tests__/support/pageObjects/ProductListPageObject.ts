const productsAmount = 24;

export class ProductListPageObject {
  get categoryGrid() {
    return cy.getByTestId('category-grid');
  }

  get productPrice() {
    return cy.getByTestId('product-card-vertical-price');
  }

  get products() {
    return cy.getByTestId('product-card');
  }

  get categories() {
    return cy.getByTestId('categories');
  }

  get categoryHeader() {
    return cy.getByTestId('category-layout').find('h1');
  }

  assertProductListElements(): void {
    this.products.each((product) => {
      cy.wrap(product).as('product');
      cy.get('@product').find(`[data-testid="image-slot"]`).should('be.visible');
      cy.get('@product').find(`[data-testid="link"]`).should('be.visible');
      cy.get('@product').find(`[data-testid="product-card-vertical-price"]`).should('be.visible');
      cy.get('@product').find(`[data-testid="button"]`).should('be.visible');
    });
  }

  assertFirstProduct(): void {
    this.products.first().then((product) => {
      let name;
      let price;
      cy.wrap(product).as('product');

      cy.get('@product')
        .find(`[data-testid="link"]`)
        .then((productLink) => {
          name = productLink.text().trim().replace(/\\n/g, ' ');
        })
        .then(() => {
          cy.get('@product')
            .find(`[data-testid="product-card-vertical-price"]`)
            .then((productPrice) => {
              price = productPrice.text().trim().replace(/\\n/g, ' ');
            })
            .then(() => {
              cy.get('@product').click();
            });
        });
    });
  }

  assertGridView(): void {
    this.categoryGrid.should('be.visible');
    this.categoryGrid.find(`[data-testid="product-card"]`).should('have.length', productsAmount);
  }
  openFirstCategory(): void {
    this.categories.first().then((firstCategory) => {
      cy.wrap(firstCategory).as('category');
      cy.get('@category')
        .find(`[data-testid="list-item-menu-label"]`)
        .first()
        .then((el) => {
          cy.wrap(el).click();
          this.categoryHeader.should('have.text', 'All products');
        });
    });
  }
}
