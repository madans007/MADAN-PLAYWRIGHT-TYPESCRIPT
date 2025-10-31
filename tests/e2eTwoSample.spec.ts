import { test, expect, Locator } from '@playwright/test';


test.describe('Group1', () => {

    test('Full e2e flow', async ({ page }) => {

        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        const email: Locator = page.locator('input#input-email');
        await expect(email).toBeVisible();
        await email.fill('hello1@email.com');
        const password: Locator = page.locator('input#input-password');
        await expect(password).toBeVisible();
        await password.fill('Hello');
        const signIn: Locator = page.locator('input.btn-primary');
        await expect(signIn).toBeEnabled();
        await signIn.click();

        const navBarItems: Locator = page.locator('ul.navbar-nav li a');
        const allNavBarItems: number = await navBarItems.count();
        for (let i = 0; i < allNavBarItems; i++) {
            const navBarItemName: string = await navBarItems.nth(i).innerText();
            if (navBarItemName === 'Cameras') {
                await navBarItems.nth(i).click();                       // selects particluar item of index i.
                break;
            }
        }

        const camerasPage: Locator = page.locator('div.col-sm-9 h2');
        const camerasPageText: string = await camerasPage.innerText();
        expect(camerasPageText).toBe('Cameras');
        const cameraProductNames: Locator = page.locator('div.caption h4 a');
        const allCameraProducts: number = await cameraProductNames.count();
        for (let i = 0; i < allCameraProducts; i++) {
            const cameraName: string = await cameraProductNames.nth(i).innerText();
            console.log(`Name of Item:, ${cameraName}`);
            if (cameraName === 'Nikon D300') {
                await cameraProductNames.nth(i).click();
                break;
            }
        }

        const priceText: string = await page.locator('div.col-sm-4 ul.list-unstyled li h2').innerText();  // '$98.00'
        const priceWithoutDollar: string = priceText.replace('$', '');  // '98.00'
        const priceValue: number = parseFloat(priceWithoutDollar);
        expect(priceValue).toBe(98);
        await page.locator('input#input-quantity').clear();
        await page.locator('input#input-quantity').fill('2');
        await page.locator('button#button-cart').click();
        await page.locator('#cart-total').click();
        await page.locator('.text-right a i.fa-shopping-cart').click();

        const warningMessage: string = await page.locator('div.alert.alert-danger').innerText();
        console.log('Warning message:', warningMessage.trim());
        expect(warningMessage.trim()).toContain('not available');
        const dropdownTiles: Locator = page.locator('h4.panel-title a');
        const allDropdownTiles: number = await dropdownTiles.count();
        for (let i = 0; i < allDropdownTiles; i++) {
            if ((await dropdownTiles.nth(i).innerText()).startsWith('Estimate Shipping')) {
                await dropdownTiles.nth(i).click();
                break;
            }
        }
        await page.locator('#input-country').selectOption('India');
        await page.locator('#input-zone').selectOption('Karnataka');
        await page.locator('#input-postcode').fill('560083');
        await page.locator('button#button-quote').click();
        await page.locator('input[type = "radio"]').click();
        await page.locator('input[value = "Apply Shipping"]').click();
        const successFullMessage: string = await page.locator('div.alert.alert-success').innerText();
        expect(successFullMessage).toContain('Success: Your shipping estimate has been applied!');
        await page.locator('a[title="My Account"]').click();
        const myAccountDropdown: Locator = page.locator('ul.dropdown-menu-right li a');
        const allMyAccountDropdownVal = await myAccountDropdown.count()
        for (let i = 0; i < allMyAccountDropdownVal; i++) {
            const myAccDropDownValNames: string = await myAccountDropdown.nth(i).innerText();
            if (myAccDropDownValNames === 'Logout') {
                await myAccountDropdown.nth(i).click();
                break;
            }
        }

        const logoutText: string = await page.locator('#content h1').innerText();
        expect(logoutText).toContain('Logout');

    });
});