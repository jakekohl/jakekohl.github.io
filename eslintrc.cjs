/* eslint-env node */
module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 'latest',
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
          ],
        },
      },
    },
    rules: {
      'vue/multi-word-component-names': 0,
      'vuejs-accessibility/anchor-has-content': [
        'error',
        {
          accessibleChildren: ['Button'],
        },
      ],
      'no-use-before-define': ['error', { 'functions': false }],
    },
  };