const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://homolog1.segurospromo.com.br/site/pesquisa/brasil/2023-02-16/2023-02-22/",
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    waitForAnimations: true,
    setupNodeEvents(on, config) {
    },
  },
});
