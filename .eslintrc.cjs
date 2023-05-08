/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': 0,
    'prefer-promise-reject-errors': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  }
}
