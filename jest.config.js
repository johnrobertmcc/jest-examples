const {defaults} = require('jest-config')
module.exports = {
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/functions/(.*)$': '<rootDir>/functions/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1'
  },
  transform: {
    ...defaults.transform,
    '^.+\\.js?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transformIgnorePatterns: [
    ...defaults.transformIgnorePatterns,
    '/node_modules/(?!my-package)(.*)'
  ],
  moduleNameMapper: {...defaults.moduleNameMapper},
  verbose: true
}
