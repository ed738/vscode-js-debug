module.exports = {
  ignorePatterns: ['**/*.d.ts', 'src/test/**/*.ts', 'demos/**/*', '**/*.js', 'testWorkspace/**'],
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['header'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      pragma: 'h',
      version: '16.3',
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
    'header/header': [
      'error',
      'block',
      '---------------------------------------------------------\n * Copyright (C) Microsoft Corporation. All rights reserved.\n *--------------------------------------------------------',
    ],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^h$',
      },
    ],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
