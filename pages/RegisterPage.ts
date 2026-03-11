import { Page } from "playwright";

export class RegisterPage {

constructor(private page: Page) {}

async registerUser(
firstname: string,
lastname: string,
email: string,
password: string,
confirmPassword: string
) {

await this.page.fill("#firstname", firstname);
await this.page.fill("#lastname", lastname);
await this.page.fill("#email_address", email);
await this.page.fill("#password", password);
await this.page.fill("#password-confirmation", confirmPassword);

await this.page.click("button[title='Create an Account']");

}

}