/*
 * By default, the files inside `node_modules` are not transpiled from TS/ECMAScript 2015+ to CommonJS,
 * because in a perfect world, library maintainers would transpiled their code BEFORE publishing.
 * But when libs are published untranspiled, Jest will not understand the code in them.
 * So we want Jest to transform only certain modules inside `node_modules`.
 *
 * More info: https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
 */
const modulesThatShouldBeTransformed = ['@?react-native', '@react-navigation'];

module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    `node_modules/(?!${modulesThatShouldBeTransformed.join('|')})`,
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '@services/(.*)': '<rootDir>/src/global/services/$1',
    '@navigation/(.*)': '<rootDir>/src/global/navigation/$1',
    '@features/(.*)': '<rootDir>/src/features/$1',
  },
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 82,
    },
  },
};
