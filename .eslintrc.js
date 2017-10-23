// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],

  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  'no-param-reassign': [2, {"props": false}], //allow reassignment of function parameters
  'arrow-parens': 'as-needed', // allows omitting parens when there is only one argument.
  'object-shorthand': [2, "consistent"], //ensures that either all shorthand or all longform will be used in an object literal.
  'no-console':0,
  'no-confusing-arrow': [2, {"allowParens": true}], //disallow arrow functions where they could be confused with comparisons
  'prefer-template': 2
}
