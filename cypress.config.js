const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Set the base URL
    setupNodeEvents(on, config) {
      // Implement node event listeners here, if needed
    },
  },
});