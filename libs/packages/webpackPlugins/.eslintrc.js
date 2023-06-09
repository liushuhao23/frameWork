/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-02 22:04:26
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-08 22:46:53
 */
module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-async-promise-executor': 'off',
    'no-template-curly-in-string': 'off',
    'no-use-before-define': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-prototype-builtins': 'off'
  }
}
