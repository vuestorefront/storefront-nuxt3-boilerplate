declare namespace Cypress {
  interface Chainable {
    getByTestId(id: string): Chainable;
    getFixture(id: string): Chainable;
  }
}

Cypress.Commands.add('getByTestId', (testId: string) => {
  cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('getFixture', (fixtureName: string) => {
  return cy.fixture(`../fixtures/${fixtureName}.json`).then((fixture) => {
    return fixture;
  });
});
