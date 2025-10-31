/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hello1@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hello');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Cameras' }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('link', { name: 'Checkout', exact: true }).click();
  await page.getByRole('link', { name: 'Desktops', exact: true }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Desktops', exact: true }).click();
  await page.getByRole('link', { name: 'Desktops', exact: true }).click();
  await page.getByRole('link', { name: 'Qafox.com' }).click();
  await page.getByRole('link', { name: 'Tablets' }).click();
  await page.getByText('Samsung Galaxy Tab 10.1', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
  await page.getByText('View Cart Checkout').click();
  await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('link', { name: 'Use Coupon Code ' }).click();
  await page.getByRole('link', { name: 'Estimate Shipping & Taxes ' }).click();
  await page.getByLabel('Country').selectOption('99');
  await page.getByLabel('Region / State').selectOption('1477');
  await page.getByLabel('Region / State').selectOption('1489');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('545754');
  await page.getByRole('button', { name: 'Get Quotes' }).click();
  await page.getByText('Flat Shipping Rate - $').click();
  await page.getByRole('button', { name: 'Apply Shipping' }).click();
  await page.getByRole('link', { name: 'Checkout', exact: true }).click();
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

*/