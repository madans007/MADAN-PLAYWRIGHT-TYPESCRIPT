// imp clean- 2025 -- Madan K S - 8c7a-lic3b-v2
import { Page, Locator } from '@playwright/test';

export class CamerasPage {

    private readonly page: Page;
    private readonly productLinks: Locator;
    private readonly cartTotal: Locator;
    private readonly viewCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productLinks = page.locator('.caption h4 a');
        this.cartTotal = page.locator('#cart-total');
        this.viewCartLink = page.locator('strong:has-text(" View Cart")');
    }

    // Add a product to the cart by matching the first word of its name (case-insensitive).
    // Returns true if "Add to Cart" button was clicked successfully, false otherwise.
    
    async addProductToCartByFirstName(productFirstName: string): Promise<boolean> {
        
        await this.page.waitForSelector('.caption h4 a', { state: 'visible' });
        const products = await this.productLinks.elementHandles();

        for (const product of products) {
            const fullName = await product.innerText();
            console.log('Found product:', fullName);  // Debug output

            const name = fullName.split(' ')[0];

            if (name.toLowerCase() === productFirstName.toLowerCase()) {
                const parentHandle = await product.evaluateHandle(el =>
                    (el as Element).closest('.product-thumb')
                );

                // Find "Add to Cart" inside product card
                const addToCartButton = await parentHandle.asElement()?.$('button[onclick*="cart.add"]');

                if (addToCartButton) {
                    await addToCartButton.click();
                    return true;  // Success
                } else {
                    console.warn(`Add to Cart button not found for product: ${fullName}`);
                    return false; // Add to Cart button missing
                }
            }
        }

        // No matching product found
        console.warn(`Product starting with "${productFirstName}" not found on the Cameras page.`);
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
