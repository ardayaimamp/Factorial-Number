const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
    videoCompression: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    experimentalStudio : true,
  },
});
