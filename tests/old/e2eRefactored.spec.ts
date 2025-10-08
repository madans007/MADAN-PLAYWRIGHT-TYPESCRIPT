import { test, expect, Locator } from '@playwright/test';

test.describe('Group1', () => {

    test('@regression Login to Account and AddToCart', async ({ page }) => {

        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        await expect(page).toHaveTitle('Account Login');

        await page.locator('#input-email').fill('hello1@email.com');
        await page.locator('#input-password').fill('Hello');
        await page.locator('.btn-primary[type="Submit"]').click();
        await expect(page).toHaveTitle('My Account');

        const navItems = page.locator('ul.navbar-nav li');
        const cameraNavItem = navItems.locator('a[href*="path=33"]'); // specifically 'Cameras'
        await cameraNavItem.click();
        await expect(page).toHaveTitle('Cameras');

        const products: Locator = page.locator('.caption h4 a');
        const productsCount: number = await products.count();

        for (let i = 0; i < productsCount; i++) {
            const product = products.nth(i);
            const fullName = await product.innerText();
            const name = fullName.split(' ')[0];

            if (name === 'Nikon') {
                const productCard = product.locator('..').locator('..'); // .caption → .product-thumb
                const addToCartButton = productCard.locator('button[onclick*="cart.add"]');
                await addToCartButton.click();

                await expect(page.locator('#cart-total')).toContainText('1 item(s)');
                break;
            }
        }

        await page.locator('#cart-total').click();

        const viewCartButton = page.locator('strong:has-text("View Cart")');
        if (await viewCartButton.isVisible()) {
            await viewCartButton.click();
        } else {
            console.warn('View Cart link not found — navigating manually');
            await page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        }

        await expect(page).toHaveTitle('Shopping Cart');
        await page.waitForTimeout(5000); // optional for debug

    });

});
