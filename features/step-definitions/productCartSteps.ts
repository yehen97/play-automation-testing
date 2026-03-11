import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../../hooks/hooks";
import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";

let homePage: HomePage;
let productPage: ProductPage;

When("user searches for {string}", async function (product) {

productPage = new ProductPage(page);

await productPage.searchProduct(product);

await productPage.openFirstProduct();

});

When("user adds the product to cart", async function () {

await productPage.selectSize();

await productPage.selectColor();

await productPage.addToCart();

//await page.waitForLoadState("networkidle");

await productPage.openCart();

});

Then("product should appear in cart", async function () {

await productPage.validateProductInCart("Jacket");

});

When("user updates product quantity to {string}", async function (qty) {

await productPage.updateQuantity(qty);

});

Then("cart quantity should be {string}", async function (qty) {

await productPage.validateQuantity(qty);

});

When("user removes the product from cart", async function () {

await productPage.removeProduct();

});

Then("cart should be empty", async function () {

await productPage.validateCartEmpty();

});