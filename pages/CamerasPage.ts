import { Page, Locator } from '@playwright/test';

export class CamerasPage {
    private readonly page: Page;
    private readonly products: Locator;
    private readonly cartTotal: Locator;
    private readonly viewCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator('.caption h4 a'); // product links
        this.cartTotal = page.locator('#cart-total');
        this.viewCartLink = page.locator('strong:has-text(" View Cart")');
    }

    // Add product to cart by matching first name (case-insensitive)
    async addProductToCartByFirstName(productFirstName: string): Promise<boolean> {
        await this.page.waitForSelector('.caption h4 a', { state: 'visible' });

        const productsCount = await this.products.count();
        console.log(`Total products found: ${productsCount}`);

        for (let i = 0; i < productsCount; i++) {
            const product = this.products.nth(i);
            const fullName = await product.innerText();
            console.log(`Product #${i}: ${fullName}`);

            if (fullName.toLowerCase().includes(productFirstName.toLowerCase())) {
                console.log(`Matched product: ${fullName}`);

                // Get the closest product card container for this product link
                const productCardHandle = await product.evaluateHandle(el => el.closest('.product-thumb'));

                if (!productCardHandle) {
                    console.warn(`Could not find product card container for ${fullName}`);
                    return false;
                }

                const addToCartButton = await productCardHandle.asElement()?.$('button[onclick*="cart.add"]');

                if (addToCartButton && await addToCartButton.isVisible()) {
                    await addToCartButton.click();
                    return true;
                } else {
                    console.warn(`Add to Cart button not found or not visible for product: ${fullName}`);
                    return false;
                }
            }
        }

        console.warn(`Product containing "${productFirstName}" not found on the Cameras page.`);
        return false;
    }

    async openCartDropdown(): Promise<void> {
        await this.cartTotal.click();
    }

    async goToCartPage(): Promise<void> {
        if (await this.viewCartLink.isVisible()) {
            await this.viewCartLink.click();
        } else {
            console.warn('View Cart link not found — navigating directly to cart page.');
            await this.page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        }
    }
}