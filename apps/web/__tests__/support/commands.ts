import 'cypress-wait-until';

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(id: string): Chainable;
      getFixture(id: string): Chainable;
      getByComponent(id: string): Chainable;
      waitUntilElementInDOM(id: () => Cypress.Chainable): Chainable;
      visit(url: string, options?: Partial<Cypress.VisitOptions>): Cypress.Chainable | null;
      visitAndHydrate(options: Partial<Cypress.VisitOptions> & { url: string }): Cypress.Chainable | null;
      visitAndHydrate(url: string, options?: Partial<Cypress.VisitOptions>): Cypress.Chainable | null;
      clearServiceWorkers(): Cypress.Chainable | null;
    }
  }
}

Cypress.Commands.add('getByTestId', (testId: string) => {
  cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('getByComponent', (Component: string) => {
  cy.get(`[Component="${Component}"]`);
});

Cypress.Commands.add('getFixture', (fixtureName: string) => {
  return cy.fixture(`../fixtures/${fixtureName}.json`).then((fixture) => {
    return fixture;
  });
});

Cypress.Commands.add('waitUntilElementInDOM', (actionToWaitOn: () => Cypress.Chainable) =>
  cy.waitUntil(() =>
    actionToWaitOn()
      .should('have.length.gte', 0)
      .then((element) => !!element.length),
  ),
);

Cypress.Commands.add('clearServiceWorkers', () => {
  // Fix for stuck visit even though page is loaded in cypress
  if (window.navigator && navigator.serviceWorker) {
    const registrationPromise = window.navigator.serviceWorker.getRegistrations().then((registrations) =>
      registrations.forEach((registration) => {
        registration.unregister();
      }),
    );
    return cy.wrap(registrationPromise);
  }
});

Cypress.Commands.add('visitAndHydrate', (url, options) => {
  cy.clearServiceWorkers();
  cy.visit(url, options);
  // Wait until app is hydrated
  cy.get('body.hydrated');
});
