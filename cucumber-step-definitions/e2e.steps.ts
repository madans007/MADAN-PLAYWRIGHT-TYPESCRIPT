// console.log("Step definitions loaded");

import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { navigateToLogin } from '../utils/navigation';
import { DataProvider } from '../utils/dataProvider';
import { MyAccountPage } from '../pages/MyAccountPage';
import { CamerasPage } from '../pages/CamerasPage';
import { PAGE_TITLES, PRODUCTS, NAV_ITEMS } from '../utils/constants';

let browser: Browser;
let page: Page;

let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let camerasPage: CamerasPage;

const testData = DataProvider.getTestDataFromJson('testdata/data.json')[0];

// Before hook to launch browser and create new page before each scenario
Before(async function () {
  browser = await chromium.launch({ headless: true }); // or false if you want to see the browser
  page = await browser.newPage();
  this.page = page; // Attach page to World context
});

// After hook to close browser after each scenario
After(async function () {
  await page.close();
  await browser.close();
});

Given('Login to app with valid credentials', async function () {
  await navigateToLogin(this.page);
  await expect(this.page).toHaveTitle(PAGE_TITLES.LOGIN);

  loginPage = new LoginPage(this.page);
  await loginPage.enterEmail(testData.email);
  await loginPage.enterPassword(testData.password);
  await loginPage.doLogin();

  await expect(this.page).toHaveTitle(PAGE_TITLES.MY_ACCOUNT);
});

When('user navigates to Cameras page', async function () {
  myAccountPage = new MyAccountPage(this.page);
  await myAccountPage.clickOnCameras();
  await expect(this.page).toHaveTitle(PAGE_TITLES.CAMERAS);
});

When('user adds product {string} to the cart', async function (productName: string) {
  camerasPage = new CamerasPage(this.page);
  const isClicked = await camerasPage.addProductToCartByFirstName(productName);
  expect(isClicked).toBe(true);
  await camerasPage.openCartDropdown();
  await camerasPage.goToCartPage();
});

Then('Shopping Cart page should be displayed', async function () {
  await expect(this.page).toHaveTitle(PAGE_TITLES.SHOPPING_CART);
});
