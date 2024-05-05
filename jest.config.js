module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  testEnvironment: "node",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  displayName: {
    name: 'CLIENT',
    color: 'blue',
  },
  fakeTimers: {
    doNotFake: ['nextTick'],
    timerLimit: 1000,
  },
  snapshotFormat: {
    printBasicPrototype: false,
  },
};
