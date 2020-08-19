module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'no-console': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    'no-useless-escape': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: [2, 'always'],
  },
};
