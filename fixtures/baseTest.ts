// imp clean- 2025-- Madan K S-8c7a-lic3b
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { CamerasPage } from '../pages/CamerasPage';

type Pages = {
  loginPage: LoginPage;                    //It means that loginPage is expected to be an instance of the LoginPage class.
  myAccountPage: MyAccountPage;
  camerasPage: CamerasPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },
  camerasPage: async ({ page }, use) => {
    await use(new CamerasPage(page));
  },    
});

export { expect } from '@playwright/test';
