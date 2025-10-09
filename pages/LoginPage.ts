import { Page, Locator } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;

    private readonly emailAddressTxt: Locator;
    private readonly passwordTxt: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators
        this.emailAddressTxt = page.locator('#input-email');
        this.passwordTxt = page.locator('#input-password');
        this.loginButton = page.locator('.btn-primary[type="submit"]');
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailAddressTxt.fill(email);     // dynamically adds
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordTxt.fill(password);      // dynamically adds
    }

    async doLogin(): Promise<void> {
        await this.loginButton.click();
    }
}
