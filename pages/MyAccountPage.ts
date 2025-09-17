import { Page, Locator, expect } from '@playwright/test';

export class MyAccountPage {

    private readonly page: Page;
    private readonly navItemCameras: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navItemCameras = page.locator('ul.navbar-nav li');
    }

    async clickOnCameras(): Promise<void> {
        const navItems = await this.navItemCameras.elementHandles(); // ✅ array of ElementHandle<Node>

        for (const item of navItems) {
            const text = await item.innerText();
            if (text.trim() === 'Cameras') {
                await item.click();
                break;
            }
        }

        await this.page.waitForLoadState('networkidle');
        //await expect(this.page).toHaveTitle('Cameras'); // Optional validation
    }
}
