module.exports = {
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/functions/(.*)$': '<rootDir>/functions/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/constants/(.*)$': '<rootDir>/constants/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup jest

  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Don't test any next tests or tests in the modules

  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest', // babel .js or .jsx files
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub' // anything style related is ignored and mapped to jest-transform-stub module
  },
  moduleDirectories: ['node_modules']
}
