/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
