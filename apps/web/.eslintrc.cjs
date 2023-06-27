module.exports = {
  extends: ['@vue-storefront/eslint-config', '@vue-storefront/eslint-config/vue', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreUrls: true, ignoreTemplateLiterals: true }],
    'max-lines-per-function': 'off',
    'unicorn/no-keyword-prefix': ['error', { disallowedPrefixes: ['new', 'for'] }],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    complexity: 0,
    'no-secrets/no-secrets': 'off',
    'unicorn/prefer-array-some': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'max-statements': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/no-multiple-template-root': 'off',
  },
};
