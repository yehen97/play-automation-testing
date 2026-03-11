import { Page, expect } from "@playwright/test";

export class AdminPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://magento2-demo.magebit.com/admin");
  }

  async login(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#login", password);
    await this.page.click(".action-login");

   // Wait for dashboard to load
// await this.page.waitForSelector("text=Dashboard");
await this.page.waitForSelector("text=Dashboard", { timeout: 10000 });
    // Close incoming message popup if it exists
    await this.closeIncomingMessage();
  }

  async closeIncomingMessage() {
    const popupClose = this.page.locator(".message-popup .action-close"); // selector may vary
    if (await popupClose.count() > 0) {
      await popupClose.first().click();
      await this.page.waitForTimeout(500); // short wait for popup to disappear
    }
  }

  async validateDashboard() {
    await expect(this.page.locator("text=Dashboard")).toBeVisible();
  }

  async navigateToOrders() {
    // Click on Sales → Orders
    await this.page.click("text=Sales");
    await this.page.click("text=Orders");

    // Wait for orders grid
    await this.page.waitForURL("**/sales/order/**");

  }



async validateOrdersGrid() {

  await expect(
    this.page.locator(".admin__data-grid-wrap")
  ).toBeVisible();

}
}