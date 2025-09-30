import { Page, Locator } from '@playwright/test';

export class MyAccountPage {

    private readonly page: Page;
    private readonly navItemCameras: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navItemCameras = page.locator('ul.navbar-nav li');
    }

    async clickOnCameras(): Promise<void> {
        const navItems = await this.navItemCameras.elementHandles(); //  array of ElementHandle<Node>

        for (const item of navItems) {
            const text = await item.innerText();
            if (text.trim() === 'Cameras') {
                await item.click();
                break;
            }
        }

        /*
            // use below code for direct methods using locator and text
            // add variables accordingly in constructor and modify, if used

        await page.locator('ul.navbar-nav li a', { hasText: 'Cameras' }).click();
        await expect(page).toHaveTitle('Cameras');

        OR

        await page.getByRole('link', { name: 'Cameras' }).click();
        await expect(page).toHaveTitle('Cameras');

        */

        await this.page.waitForLoadState('networkidle');
        //await expect(this.page).toHaveTitle('Cameras'); // Optional validation
    }
}
