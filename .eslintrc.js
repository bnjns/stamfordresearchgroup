module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: ['error', 'smart'],
    curly: ['error'],
    camelcase: ['error'],
    indent: ['warn', 2],
    'no-unused-vars': 'warn',
    'max-len': ['warn', { code: 2000, ignoreUrls: true }],
    'space-before-function-paren': ['warn', 'never'],
    ident: 'off',
    '@typescript-eslint/indent': ['warn', 2],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
    'no-trailing-spaces': ['warn'],
    'template-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'warn', {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
