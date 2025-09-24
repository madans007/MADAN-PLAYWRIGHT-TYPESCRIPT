import { test, expect, Locator } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { navigateToLogin } from '../utils/navigation';
import { DataProvider } from '../utils/dataProvider';
import { MyAccountPage } from '../pages/MyAccountPage';
import { CamerasPage } from '../pages/CamerasPage';
import { PAGE_TITLES, PRODUCTS, NAV_ITEMS } from '../utils/constants';



test.describe('Group1', async () => {

    const testData = DataProvider.getTestDataFromJson('testdata/data.json')[0];

    test('@regression Login to Account and AddToCart', async ({ page }) => {

        await navigateToLogin(page);
        await expect(page).toHaveTitle(PAGE_TITLES.LOGIN);

        const loginPage = new LoginPage(page);
        await loginPage.enterEmail(testData.email);
        await loginPage.enterPassword(testData.password);
        await loginPage.doLogin();
        await expect(page).toHaveTitle(PAGE_TITLES.MY_ACCOUNT);

        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.clickOnCameras();
        await expect(page).toHaveTitle(PAGE_TITLES.CAMERAS);

        const camerasPage = new CamerasPage(page);
        const isClicked = await camerasPage.addProductToCartByFirstName(PRODUCTS.NIKON);
        expect(isClicked).toBe(true);               // Assert that Add to Cart button was clicked
        await camerasPage.openCartDropdown();
        await camerasPage.goToCartPage();
        await expect(page).toHaveTitle(PAGE_TITLES.SHOPPING_CART);
        await page.waitForTimeout(5000);

    })


})