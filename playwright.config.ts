import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: "http://localhost:3333",
  },
  webServer: {
    command: "npx next dev -p 3333",
    url: "http://localhost:3333",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
