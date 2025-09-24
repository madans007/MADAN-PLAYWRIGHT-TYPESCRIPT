import { test, expect } from '../fixtures/baseTest';   // custom test with fixtures
import { navigateToLogin } from '../utils/navigation';
import { DataProvider } from '../utils/dataProvider';
import { PAGE_TITLES, PRODUCTS } from '../utils/constants';

test.describe('Group1', () => {

    const testData = DataProvider.getTestDataFromJson('testdata/data.json')[0];

    test('@regression Login to Account and AddToCart',
        async ({ page, loginPage, myAccountPage, camerasPage }) => {

            await navigateToLogin(page); // Reusable helper
            await expect(page).toHaveTitle(PAGE_TITLES.LOGIN);

            await loginPage.enterEmail(testData.email);
            await loginPage.enterPassword(testData.password);
            await loginPage.doLogin();
            await expect(page).toHaveTitle(PAGE_TITLES.MY_ACCOUNT);

            await myAccountPage.clickOnCameras();
            await expect(page).toHaveTitle(PAGE_TITLES.CAMERAS);

            const isClicked = await camerasPage.addProductToCartByFirstName(PRODUCTS.NIKON);
            expect(isClicked).toBe(true);  // Assert that Add to Cart button was clicked

            await camerasPage.openCartDropdown();
            await camerasPage.goToCartPage();
            await expect(page).toHaveTitle(PAGE_TITLES.SHOPPING_CART);

            await page.waitForTimeout(5000);
        });

});
