import { Page, Locator } from '@playwright/test';


export class LogoutPage {

    private readonly page: Page;
    private readonly logoutText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutText = page.locator('#content h1')

    }

    async validateLogoutText(): Promise<string> {
        const accLogoutText = await this.logoutText.innerText();
        return accLogoutText.trim();
    }

}