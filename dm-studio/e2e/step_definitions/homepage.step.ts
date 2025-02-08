import {
  Given,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { chromium, Browser, Page, expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();
  page = await context.newPage();
});

Given("I open the homepage", async () => {
  await page.goto("http://localhost:3000");
});

Then("I should see {string}", async function (text: string) {
  await page.waitForSelector("body"); // Ensure the page is loaded

  const element = page.locator(`text=${text}`); // Find the element containing the text

  await expect(element).toBeVisible(); // Assert that the element is visible
});

After(async function () {
  await browser.close();
});
