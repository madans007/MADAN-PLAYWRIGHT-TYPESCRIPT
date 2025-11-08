import { test, expect, Locator } from '@playwright/test';

test.describe('Group 1', () => {

    test('Full e2e flow', async ({ page }) => {

        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        const email: Locator = page.getByRole('textbox', { name: 'E-Mail Address' });
        await expect(email).toBeVisible();
        await email.fill('hello1@email.com');
        const password: Locator = page.getByRole('textbox', { name: 'Password' });
        await expect(password).toBeVisible();
        await password.fill('Hello1');
        const signIn: Locator = page.getByRole('button', { name: 'Login' });
        await expect(signIn).toBeEnabled();
        await signIn.click();

        await page.getByRole('link', { name: 'Cameras' }).click();
        const camerasPage: Locator = page.getByRole('heading', { name: 'Cameras' });
        await expect(camerasPage).toBeVisible();
        await expect(camerasPage).toHaveText('Cameras');



    });
});