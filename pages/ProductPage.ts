
import { Page, expect } from "@playwright/test";

export class ProductPage {

constructor(private page: Page) {}

async searchProduct(product: string) {

await this.page.fill("#search", product);
await this.page.press("#search", "Enter");

}

async openFirstProduct() {

await this.page.locator(".product-item-link").first().click();

}

async selectSize() {

await this.page.locator(".swatch-attribute.size .swatch-option").first().click();

}

async selectColor() {

await this.page.locator(".swatch-attribute.color .swatch-option").first().click();

}

async addToCart() {

await this.page.click("#product-addtocart-button");

}

async openCart() {

await this.page.waitForSelector(".message-success");

await this.page.click(".showcart");

await this.page.locator(".action.viewcart").click();

}

async validateProductInCart(product: string) {

await expect(
this.page.locator(".product-item-name").first()
).toContainText(product);

}


async updateQuantity(qty: string) {

await this.page.fill("input.qty", qty);

await this.page.click("button.update");

}

async validateQuantity(qty: string) {

await expect(
this.page.locator("input.qty")
).toHaveValue(qty);

}


async removeProduct() {

await this.page.click(".action-delete");

await this.page.waitForSelector(".cart-empty", { timeout: 15000 });

}

async validateCartEmpty() {

await expect(
this.page.locator(".cart-empty")
).toBeVisible();

}
}