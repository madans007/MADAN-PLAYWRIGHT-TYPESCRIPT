/*import { test, expect, Locator } from '@playwright/test';

test.describe('first Group', () => {

    test.only('@regression first test case', async ({ page }) => {

        await page.goto('https://www.google.com');
        const title: string = await page.title();
        expect(title).toBe('Google');
        const valueInputField: Locator = page.locator(`textarea[title='Search']`);
        await valueInputField.fill('sun images');
        await valueInputField.press('Enter');
        await page.locator('a:has(span:has-text("Images"))').click();     //tagname:has-text()


        // await page.locator(`a:has-text('Images')`).click();
        // await page.locator('a.C6AK7c >> text=Images').click(); //tag.classnme >> text=  
       // await page.getByText('Images').click();
       //await page.getByRole('link', { name: 'Images' }).click();
    });

});

// this fails due to captcha..so can be ignored

*/

