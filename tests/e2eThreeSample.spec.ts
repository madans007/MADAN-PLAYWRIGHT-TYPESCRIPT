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
        await page.getByRole('link', { name: 'Nikon D300' }).locator('../../..').getByRole('button', { name: 'Add to Cart' }).click();
        //const nikonProduct: Locator = page.locator('.product-thumb', { has: page.getByRole('link', { name: 'Nikon D300' }) });
        //await nikonProduct.getByRole('button', { name: 'Add to Cart' }).click();
        await page.getByText('item(s)').click();
        await page.getByText('View Cart').click();
        
        const warningMessage: Locator  = page.getByText('Products marked with *** are not available in the desired quantity or not in stock!     ');
        console.log(warningMessage);
        expect(warningMessage).toContainText('not available');
        await page.getByRole('link', {name: 'Estimate Shipping & Taxes '}).click();

    });
});