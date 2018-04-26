/* eslint-disable */
module.exports = function(wallaby) {
  return {
    files: [
      'layouts/**/*.js?(x)',
      'components/**/*.js?(x)',
      'materials/**/*.js?(x)',
      'elements/**/*.js?(x)',
      'localization/**/*.js?(x)',
      'pages/**/*.js?(x)',
    ],

    tests: ['**/*.test.js?(x)', '!node_modules/**/*.test.js?(x)'],

    testFramework: 'jest',
    debug: true,

    env: {
      type: 'node',
      runner: 'node',
    },

    setup: function() {
      const jestConfig = require('./package.json').jest;
      // for example:
      // jestConfig.globals = { "__DEV__": true };
      wallaby.testFramework.configure(jestConfig);
    },
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: [['env'], 'next/babel'],
        plugins: [
          [
            'module-resolver',
            {
              root: ['./'],
              alias: {
                utils: './utils',
                materials: './materials',
                elements: './elements',
                components: './components',
                layouts: './layouts',
                localization: './localization',
                pages: './pages',
              },
            },
          ],
        ],
      }),
    },
  };
};
