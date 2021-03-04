module.exports = {
  verbose: true,
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(vuetify)/)"],
  setupFilesAfterEnv: ["<rootDir>/tests/unit/setup.js"]
};
