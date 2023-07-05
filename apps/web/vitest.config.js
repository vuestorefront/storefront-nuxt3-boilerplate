import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './vue-test-utils.extend.js',
  },
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname, './') }],
  },
});
