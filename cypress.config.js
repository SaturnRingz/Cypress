const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,
  modifyObstructiveCode: false,
  unhandledRejections: false,
  viewportWidth: 1320,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
    },
  },
})
