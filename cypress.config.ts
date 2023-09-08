import { defineConfig } from "cypress";

export default defineConfig({
  retries: 0,
  video: true,
  viewportHeight: 600,
  viewportWidth: 1000,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "http://localhost:3000/",
    supportFile: ".faststore/cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: ".faststore/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
