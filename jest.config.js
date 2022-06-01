/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy"
  }
};