// imp clean- 2025-- Madan K S-8c7a-lic3b-v2
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

    // Add product to cart by matching first word of product name (e.g., 'Nikon')
    async addProductToCartByFirstName(productFirstName: string) {
        const products = await this.productLinks.elementHandles();

        for (const product of products) {
            const fullName = await product.innerText();
            const name = fullName.split(' ')[0];

            if (name === productFirstName) {
                const parentHandle = await product.evaluateHandle(el =>
                    (el as Element).closest('.product-thumb')
                );

                const addToCartButton = await parentHandle.asElement()?.$('button[onclick*="cart.add"]');
                if (addToCartButton) {
                    await addToCartButton.click();
                    return true; // clicked successfully.
                   
                    
                } else {
                    console.warn(`Add to Cart button not found for ${productFirstName} product`);
                    return false;
                }
                break;
            }
        }
    }

    // Click on the cart icon to open the cart dropdown
    async openCartDropdown() {
        await this.cartTotal.click();
    }

    // Navigate to cart page either by clicking 'View Cart' in dropdown or fallback URL
    async goToCartPage() {
        if (await this.viewCartLink.isVisible()) {
            await this.viewCartLink.click();
        } else {
            console.warn('View Cart link not found — navigating manually');
            await this.page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        }
    }
}





