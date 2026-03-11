import { Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60000); // 60 seconds

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

Before(async function () {

  browser = await chromium.launch({
    headless: false,
    slowMo: 800,
    args: ["--start-maximized"]
  });

  context = await browser.newContext({
    viewport: null
  });

  page = await context.newPage();

  page.setDefaultTimeout(30000);

});


After(async function () {

  await page.close();
  await context.close();
  await browser.close();

});