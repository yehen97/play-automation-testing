import { Page, expect } from "@playwright/test";

export class DashboardPage {

constructor(private page: Page) {}

async validateDashboard() {

await expect(
this.page.getByRole("heading", { name: "My Account" })
).toBeVisible();

}

async logout() {

await this.page.click("button[data-action='customer-menu-toggle']");

await this.page.click("text=Sign Out");

}

}