import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './vue-test-utils.extend.js',
    exclude: [...configDefaults.exclude, '__tests__/**'],
  },
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname, './') }],
  },
});
