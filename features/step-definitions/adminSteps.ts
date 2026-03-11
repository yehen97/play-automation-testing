import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../../hooks/hooks";
import { AdminPage } from "../../pages/AdminPage";

let adminPage: AdminPage;

Given("admin navigates to Magento admin page", async function () {
  adminPage = new AdminPage(page);
  await adminPage.navigate();
});

When(
  "admin logs in with username {string} and password {string}",
  async function (username, password) {
    await adminPage.login(username, password);
  }
);

Then("admin should see dashboard", async function () {
  await adminPage.validateDashboard();
});

When("admin navigates to Orders", async function () {
  await adminPage.navigateToOrders();
});

Then("orders grid should be visible", async function () {
  await adminPage.validateOrdersGrid();
});