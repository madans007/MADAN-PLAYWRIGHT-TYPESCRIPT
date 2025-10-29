import { Page, Locator } from '@playwright/test';


export class AccountPage {

    private readonly page: Page;
    private readonly navBarItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navBarItems = page.locator('ul.navbar-nav li a');
    }

    async clickOnCameras(itemName: string): Promise<void> {
        const allNavBarItems: number = await this.navBarItems.count();
        for (let i = 0; i < allNavBarItems; i++) {
            const navBarItemName: string = await this.navBarItems.nth(i).innerText();
            if (navBarItemName === itemName) {
                await this.navBarItems.nth(i).click();                       // selects particluar item of index i.
                return;                     // break - is not needed --> Use when you want to stop looping but do more work after.
            }
        }
    }
}