describe('Smoke: Homepage', () => {
  describe('Homepage smoke test', () => {
    it('[smoke] Check if Primary Button is working', () => {
      cy.visit('/');
    });
  });
});
