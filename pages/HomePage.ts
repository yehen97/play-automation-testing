import { Page } from "playwright";

export class HomePage {

constructor(private page: Page) {}

async navigate() {
await this.page.goto("https://magento2-demo.magebit.com/");
}

async clickCreateAccount() {
await this.page.click("text=Create an Account");
}

}