// utils/navigation.ts
import { Page } from '@playwright/test';

export async function navigateToLogin(page: Page): Promise<void> {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
}
