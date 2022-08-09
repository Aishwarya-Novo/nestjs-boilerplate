module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended', // This clashes with proper functioning of ESLINT rules in few scenarios.
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],

  // Basic rule overriding
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': [2, 'single', { 'avoidEscape': true }],
    'array-bracket-spacing': ['error', 'always'],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'always',
      'exports': 'always',
      'functions': 'never'
  }]
  },
};
