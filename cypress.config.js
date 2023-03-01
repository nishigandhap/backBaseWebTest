const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },

    env:{
      url: 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com'
    },

    specPattern: 'cypress/e2e/HomePage/*.js'
  },
});
