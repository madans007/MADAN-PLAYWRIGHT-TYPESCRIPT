import { Page, Locator } from '@playwright/test';


export class NikonProductPage {

    private readonly page: Page;
    private readonly priceTextEle: Locator;
    private readonly quantityInput: Locator;
    private readonly addProdToCart: Locator;
    private readonly cartTotal: Locator;
    private readonly viewCart: Locator;


    constructor(page: Page) {
        this.page = page;
        this.priceTextEle = page.locator('div.col-sm-4 ul.list-unstyled li h2');
        this.quantityInput = page.locator('input#input-quantity');
        this.addProdToCart = page.locator('button#button-cart');
        this.cartTotal = page.locator('#cart-total');
        this.viewCart = page.locator('.text-right a i.fa-shopping-cart');
    }


    async getProdPriceValue(): Promise<number> {
        const priceText = (await this.priceTextEle.innerText()).trim();
        const priceWithoutDollar = priceText.replace('$', '');  // '98.00'
        const priceValue = parseFloat(priceWithoutDollar);
        return priceValue;
    }

    async verifyPrice(expectedPrice: number): Promise<void> {
        const actualPrice = await this.getProdPriceValue();
        if (actualPrice !== expectedPrice) {
            throw new Error(`Expected ${expectedPrice}, but got ${actualPrice}`);
        }
    }

    async clearQuantityInput(): Promise<void> {
        await this.quantityInput.clear();
    }

    async enterProdQuantity(quantity: number): Promise<any> {
        await this.quantityInput.fill(quantity.toString());
    }

    async addProductToCart(): Promise<void> {
        await this.addProdToCart.click();
    }

    async clickCartTotal(): Promise<void> {
        await this.cartTotal.click();
    }

    async clickOnViewCart(): Promise<void> {
        await this.viewCart.click();
    }

}