
import { Page } from '@playwright/test';

export const BASE_URL = 'https://tutorialsninja.com/demo';

export async function navigateToLogin(page: Page): Promise<void> {
  await page.goto(`${BASE_URL}/index.php?route=account/login`);
}
