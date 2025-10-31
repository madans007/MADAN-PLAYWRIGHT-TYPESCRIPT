import { test, expect } from '../fixtures/baseTeste2eTwo';
import { navigateToLogin } from '../utils/navigation';
import { DataProvider } from '../utils/dataProvider';
import { PAGE_TITLES, NAV_ITEMS, PRODUCTS, SHOPPING_CART, SHIPPING } from '../utils/constants';
import { TestData } from '../utils/types';


test.describe('Group 1', () => {

    const testData: TestData = DataProvider.getTestDataFromJson('testdata/data.json')[0];

    test('Full e2e flow', async ({ page, loginPage, accountPage, camerasPage, nikonProductPage, shoppingCartPage, logoutPage }) => {

        await navigateToLogin(page);
        await expect(page).toHaveTitle(PAGE_TITLES.LOGIN);
        await expect(loginPage.emailInput).toBeVisible();
        await loginPage.enterEmail(testData.email);
        await expect(loginPage.passwordInput).toBeVisible();
        await loginPage.enterPassword(testData.password);
        await expect(loginPage.signIn).toBeEnabled();                                   //getter
        await loginPage.clickSignIn();

        await expect(page).toHaveTitle(PAGE_TITLES.MY_ACCOUNT);
        await accountPage.clickOnCameras(NAV_ITEMS.CAMERAS);

        expect(await camerasPage.getCamerasPageTitle()).toBe(PAGE_TITLES.CAMERAS);
        await camerasPage.clickAndSelectProduct(PRODUCTS.NIKON_D300);

        await nikonProductPage.getProdPriceValue();
        await nikonProductPage.verifyPrice(PRODUCTS.PRICE);
        expect(await nikonProductPage.getProdPriceValue()).toBe(PRODUCTS.PRICE);                          //method ()
        await nikonProductPage.clearQuantityInput();
        await nikonProductPage.enterProdQuantity(PRODUCTS.QUANTITY);
        await nikonProductPage.addProductToCart();
        await nikonProductPage.clickCartTotal();
        await nikonProductPage.clickOnViewCart();

        await shoppingCartPage.getWarningMessage();
        expect(await shoppingCartPage.getWarningMessage()).toContain(SHOPPING_CART.NOT_AVAILABLE);
        await shoppingCartPage.clickEstimateShipping();
        await shoppingCartPage.selectCountry(SHIPPING.COUNTRY);
        await shoppingCartPage.selectState(SHIPPING.STATE);
        await shoppingCartPage.enterPostcode(SHIPPING.POSTCODE);
        await shoppingCartPage.clickGetQuotes();
        await shoppingCartPage.selectRatesRadioButton();
        await shoppingCartPage.clickShippingButton();
        expect(await shoppingCartPage.getSuccessMessage()).toContain(SHIPPING.SUCCESS_MSG);
        await shoppingCartPage.clickMyAccount();
        await shoppingCartPage.clickLogout();

        expect(await logoutPage.getLogoutText()).toContain(PAGE_TITLES.LOGOUT);
    });
});