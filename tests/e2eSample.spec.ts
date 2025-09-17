import { test, expect, Locator } from '@playwright/test';


test.describe('Group1', async () => {

    test('@regrssion Login to Account and AddToCart', async ({ page }) => {

        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        await expect(page).toHaveTitle('Account Login');
        await page.locator('#input-email').fill('hello1@email.com');
        await page.locator('#input-password').fill('Hello');
        await page.locator('.btn-primary[type="Submit"]').click();
        await expect(page).toHaveTitle('My Account');

        const navItems = await page.locator('ul.navbar-nav li').elementHandles();

        for (const item of navItems) {
            const text = await item.innerText();
            if (text.trim() === 'Cameras') {
                await item.click();
                break; // Stop once found and clicked
            }
        }
        await expect(page).toHaveTitle('Cameras');

        // await page.locator('ul.navbar-nav li', { hasText: 'Cameras' }).click();   //OR use direct method

        const products = await page.locator('.caption h4 a').elementHandles();

        for (const product of products) {
            const fullName = await product.innerText();
            const name = fullName.split(' ')[0];

            if (name === 'Nikon') {
                const parentHandle = await product.evaluateHandle(el =>
                    (el as Element).closest('.product-thumb')
                );

                const addToCartButton = await parentHandle.asElement()?.$('button[onclick*="cart.add"]');

                if (addToCartButton) {
                    await addToCartButton.click();
                    await expect(page.locator('#cart-total')).toContainText('1 item(s)');
                } else {
                    console.warn('Add to Cart button not found for Nikon product');
                }

                break;
            }
        }

        // View the cart safely
        await page.locator('#cart-total').click();

        // Optional: Instead of clicking .fa-shopping-cart (which might not be clickable),
        // click the "View Cart" link in the dropdown.
        const viewCartLink = page.locator('strong:has-text(" View Cart")');

        if (await viewCartLink.isVisible()) {
            await viewCartLink.click();
        } else {
            console.warn('View Cart link not found — navigating manually');
            await page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        }

        await expect(page).toHaveTitle('Shopping Cart');





        await page.waitForTimeout(5000);

    })


})