// imp clean- 2025-- Madan K S-8c7a-lic3b
import { Page, Locator } from '@playwright/test';

export class MyAccountPage {

    private readonly page: Page;
    private readonly cameras: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cameras = page.getByRole('link', { name: 'Cameras' });
    }

    async clickOnCameras(): Promise<void> {
        await this.cameras.click();
    }
}
