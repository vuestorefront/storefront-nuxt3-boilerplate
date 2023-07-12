import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    setupFiles: './vue-test-utils.extend.js',
    include: ['**/__tests__/**/*.spec.ts'],
  },
});
