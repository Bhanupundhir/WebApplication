const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    "baseUrl" : 'https://uat-falkonsms-fe.azurewebsites.net/sign-in',
"specPattern":[
      "cypress/e2e/LoginTest.spec.js",
      "cypress/e2e/GroupTest.spec.js",
      "cypress/e2e/TemplateTest.spec.js",
      "cypress/e2e/MainTest.spec.js",
      "cypress/e2e/ContactsTest.spec.js",
      "cypress/e2e/OrganizationTest.spec.js",
      "cypress/e2e/PlanTest.spec.js",
      "cypress/e2e/UsersTest.spec.js",
      "cypress/e2e/AlertsTest.spec.js",
      "cypress/e2e/PhoneNumbersTest.spec.js"
  ],

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },  
    testIsolation: false,
  },
});