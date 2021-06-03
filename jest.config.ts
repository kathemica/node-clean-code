/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: true,
  "modulePathIgnorePatterns": [
    "<rootDir>/src/interfaces"
  ],
};
