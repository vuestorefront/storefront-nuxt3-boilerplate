module.exports = {
  extends: ['@vue-storefront/eslint-config', '@vue-storefront/eslint-config/vue3', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    complexity: 0,
    'vue/max-len': ['warn', {
      code: 120,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreHTMLAttributeValues: true
    }],
    'max-lines-per-function': 'off',
    'unicorn/no-keyword-prefix': ['error', { disallowedPrefixes: ['new', 'for'] }],
    'no-secrets/no-secrets': 'off',
    'unicorn/prefer-array-some': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'max-statements': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/multi-word-component-names': 'off',
    'unicorn/filename-case': 'off',
    'no-undef': 'off',
    'vue/no-setup-props-destructure': 'off',
  },
};
