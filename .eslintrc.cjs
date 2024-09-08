module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'tailwind.config.js',
    '_cemetary',
    '_feature-coming-soon',
    'webpack.config.js',
    'vite.config.ts',
    '**/*.css',
    '**/*.scss',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', // or "error"
      {
        // args: 'all',
        argsIgnorePattern: '^_',
        // caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        // destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        // ignoreRestSiblings: true,
      },
    ],

    'no-duplicate-imports': 'error', // No duplicate imports
    'no-shadow': 'error', // No shadow variable
    'no-var': 'error', // No var, only let and const
    'no-empty-function': 'error', // No empty functions
    'no-empty': 'error',

    // Warning
    'prefer-const': 'warn',
    'no-console': 'warn', // No console

    // Disabled rules
    'sort-imports': 'off',
    'no-sparse-arrays': 'off',
    'no-constant-condition': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-prototype-builtins': 'off',
    'no-unsafe-optional-chaining': 'off',
    'react/display-name': 'off',
    'no-case-declarations': 'off',
    'no-extra-boolean-cast': 'off',
    'no-undef': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
