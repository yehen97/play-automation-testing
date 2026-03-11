import { Given, When, Then} from "@cucumber/cucumber";
import { page } from "../../hooks/hooks";
import { HomePage } from "../../pages/HomePage";
import { RegisterPage } from "../../pages/RegisterPage";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { generateEmail } from "../../utils/dataGenerator";

let homePage: HomePage;
let registerPage: RegisterPage;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;

let generatedEmail: string;

Given("user navigates to Magento homepage", async function () {

    homePage = new HomePage(page);
    await homePage.navigate();

});

When(
"user registers with {string} {string} {string} {string} {string}",
async function (firstname, lastname, email, password,confimPassword) {

    registerPage = new RegisterPage(page);

    if (email === "dynamic") {
        generatedEmail = generateEmail();
    } else {
        generatedEmail = email;
    }

    await homePage.clickCreateAccount();

    await registerPage.registerUser(
        firstname,
        lastname,
        generatedEmail,
        password,
        confimPassword
    );

});

Then("registration should be successful", async function () {

    dashboardPage = new DashboardPage(page);
    await dashboardPage.validateDashboard();

});

When("user logs out", async function () {

    await dashboardPage.logout();

});

When(
"user logs in again with {string} {string}",
async function (email, password) {

    loginPage = new LoginPage(page);

    const loginEmail = email === "dynamic" ? generatedEmail : email;

    await loginPage.login(loginEmail, password);

});

Then("dashboard should be visible", async function () {

    await dashboardPage.validateDashboard();

});