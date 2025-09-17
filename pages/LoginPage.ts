import { Page, Locator } from '@playwright/test';



export class LoginPage {

    private readonly page: Page;

    private readonly emailAddressTxt: Locator;
    private readonly passwordTxt: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators with CSS selectors
        this.emailAddressTxt = page.locator('#input-email');
        this.passwordTxt = page.locator('#input-password');
        this.loginButton = page.locator('.btn-primary[type="Submit"]');
    }


    async enterEmail(email: string) {
        await this.emailAddressTxt.fill(email); // ✅ dynamic
    }

    async enterPassword(password: string) {
        await this.passwordTxt.fill(password); // ✅ dynamic
    }

    async doLogin() {
        await this.loginButton.click(); // ✅ await added
    }
}