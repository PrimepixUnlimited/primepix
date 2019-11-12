module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  preset: "jest-expo",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  setupFiles: ["<rootDir>/src/__mocks__/index.tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testMatch: ["**/*.test.ts?(x)"]
};
