module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'max-len': [
      'error',
      {
        'code': 80,
        'ignoreComments': true
      }
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off']
  }
};
