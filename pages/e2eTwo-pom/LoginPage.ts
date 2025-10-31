import { Page, Locator } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;
    private readonly inputEmail: Locator;
    private readonly inputPassword: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.inputEmail = page.locator('input#input-email');
        this.inputPassword = page.locator('input#input-password');
        this.signInButton = page.locator('input.btn-primary');
    }

    get emailInput(): Locator {                                 // getters to expose locators
        return this.inputEmail;
    }

    get passwordInput(): Locator {
        return this.inputPassword;
    }

    get signIn(): Locator {
        return this.signInButton;
    }
    
    async enterEmail(email: string): Promise<void> {            //actions
        await this.inputEmail.fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.inputPassword.fill(password);
    }

    async clickSignIn(): Promise<void> {
        await this.signInButton.click();
    }

}