import { defineConfig } from "cypress";
const cypressSplit = require("cypress-split");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressSplit(on, config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});
