import { Page } from "playwright";

export class LoginPage {

constructor(private page: Page) {}

async login(email: string, password: string) {

await this.page.click("text=Sign In");

await this.page.fill("#email", email);
await this.page.fill("#pass", password);

await this.page.click("#send2");

}

}