// imp clean- 2025-- Madan K S-8c7a-lic3b
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/e2eTwo-pom/LoginPage';
import { AccountPage } from '../pages/e2eTwo-pom/AccountPage';
import { CamerasPage } from '../pages/e2eTwo-pom/CamerasPage';
import { NikonProductPage } from '../pages/e2eTwo-pom/NikonProductPage';
import { ShoppingCartPage } from '../pages/e2eTwo-pom/ShoppingCartPage';
import { LogoutPage } from '../pages/e2eTwo-pom/LogoutPage';

type Pages = {

    loginPage: LoginPage;                    //It means that loginPage is expected to be an instance of the LoginPage class.
    accountPage: AccountPage;
    camerasPage: CamerasPage;
    nikonProductPage: NikonProductPage;
    shoppingCartPage: ShoppingCartPage;
    logoutPage: LogoutPage;

};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },
    camerasPage: async ({ page }, use) => {
        await use(new CamerasPage(page));
    },
    nikonProductPage: async ({ page }, use) => {
        await use(new NikonProductPage(page));
    },
    shoppingCartPage: async ({ page }, use) => {
        await use(new ShoppingCartPage(page));
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },

});

export { expect } from '@playwright/test';
