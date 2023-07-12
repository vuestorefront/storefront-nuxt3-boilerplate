import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: '__tests__/fixtures',
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 20_000,
  screenshotOnRunFailure: true,
  screenshotsFolder: '__tests__/report/screenshots',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: '__tests__/test/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '__tests__/support/e2e.ts',
  },
});
