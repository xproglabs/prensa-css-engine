module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  root: true,
  rules: {
    'react/display-name': 'error',
    'react/no-danger-with-children': 'off',
    indent: [
      1,
      2,
      {
        'SwitchCase': 1
      }
    ],
    quotes: [
      'error',
      'single'
    ],
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }
    ],
    'react/prop-types': 0,
    semi: [
      'error',
      'never'
    ],
    'no-console': [
      'warn',
      {
        'allow': [
          'warn',
          'error',
          'info'
        ]
      }
    ],
    'object-curly-spacing': [
      2,
      'always'
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'react/no-unescaped-entities': [
      'error'
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}