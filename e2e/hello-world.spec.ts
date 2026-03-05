import { test, expect } from "@playwright/test";

test.describe("Hello World App", () => {
  test("should display Hello World heading", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Hello World" })
    ).toBeVisible();
  });

  test("should center Hello World text on the page", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { name: "Hello World" });
    await expect(heading).toBeVisible();

    const box = await heading.boundingBox();
    const viewport = page.viewportSize();
    expect(box).not.toBeNull();
    expect(viewport).not.toBeNull();

    // Heading should be roughly centered horizontally (within 20% of center)
    const headingCenterX = box!.x + box!.width / 2;
    const viewportCenterX = viewport!.width / 2;
    expect(Math.abs(headingCenterX - viewportCenterX)).toBeLessThan(
      viewport!.width * 0.2
    );

    // Heading should be roughly centered vertically (within 20% of center)
    const headingCenterY = box!.y + box!.height / 2;
    const viewportCenterY = viewport!.height / 2;
    expect(Math.abs(headingCenterY - viewportCenterY)).toBeLessThan(
      viewport!.height * 0.2
    );
  });

  test("should have correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Hello World");
  });

  test("should return HTTP 200 for the home page", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
  });

  test("should return 404 for non-existent routes", async ({ page }) => {
    const response = await page.goto("/non-existent-page");
    expect(response?.status()).toBe(404);
  });

  test("should load without console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });

  test("should render heading with bold font weight", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { name: "Hello World" });
    await expect(heading).toHaveCSS("font-weight", "700");
  });

  test("should set html lang attribute to en", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("en");
  });
});
