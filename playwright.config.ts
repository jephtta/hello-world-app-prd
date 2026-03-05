import { defineConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3333";
const isRemote = !!process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL,
  },
  ...(!isRemote && {
    webServer: {
      command: "npx next dev -p 3333",
      url: "http://localhost:3333",
      reuseExistingServer: !process.env.CI,
      timeout: 30000,
    },
  }),
});
