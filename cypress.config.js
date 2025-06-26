const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "z9cbmr",
  retries: { runMode: 2 },
  watchForFileChanges: false,
  env: {
    apiUrl: "https://serverest.dev",
    frontUrl: "https://front.serverest.dev",
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
