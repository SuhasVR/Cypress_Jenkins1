import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
    env: {
    TAGS: 'not @ignore',
  },
  video: true,
  viewportWidth: 1500,
  viewportHeight: 1000,
  retries: 2,
  defaultCommandTimeout:60000,
  screenshotsFolder:"./reports/screenshots/",
  videosFolder:"./reports/videos/",
  videoCompression: false,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.ts',
    specPattern: 'cypress/e2e/**/*.feature',


  },
})
