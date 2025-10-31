import {Page, Locator } from '@playwright/test';
import { Logger } from 'utils/logger';


export class ShoppingCartPage {

    private readonly page: Page;
    private readonly warningMessageEle: Locator;
    private readonly dropdownTiles: Locator;
    private readonly inputCountry: Locator;
    private readonly inputState: Locator;
    private readonly postCode: Locator;
    private readonly getQuotes: Locator;
    private readonly flatRateRadio: Locator;
    private readonly shippingButton: Locator;
    private readonly successMessageText: Locator;
    private readonly myAccountEle: Locator;
    private readonly myAccountDropdown: Locator;


    constructor(page: Page) {
        this.page = page;
        this.warningMessageEle = page.locator('div.alert.alert-danger');
        this.dropdownTiles = page.locator('h4.panel-title a');
        this.inputCountry = page.locator('#input-country');
        this.inputState = page.locator('#input-zone');
        this.postCode = page.locator('#input-postcode');
        this.getQuotes = page.locator('button#button-quote');
        this.flatRateRadio = page.locator('input[type = "radio"]');
        this.shippingButton = page.locator('input[value = "Apply Shipping"]');
        this.successMessageText = page.locator('div.alert.alert-success');
        this.myAccountEle = page.locator('a[title="My Account"]');
        this.myAccountDropdown = page.locator('ul.dropdown-menu-right li a');
    }

    async getWarningMessage(): Promise<string> {
        const warningMessage = await this.warningMessageEle.innerText();
        //console.log('Warning message:', warningMessage.trim());
        Logger.info(`Warning message: ${warningMessage.trim()}`);
        return warningMessage.trim();
    }

    async clickEstimateShipping(): Promise<void> {
        const allDropdownTiles = await this.dropdownTiles.count();
        for (let i = 0; i < allDropdownTiles; i++) {
            if ((await this.dropdownTiles.nth(i).innerText()).startsWith('Estimate Shipping')) {
                await this.dropdownTiles.nth(i).click();
                return;
            }
        }
    }

    async selectCountry(country: string): Promise<void> {
        await this.inputCountry.selectOption(country);
    }

    async selectState(state: string): Promise<void> {
        await this.inputState.selectOption(state);
    }

    async enterPostcode(postcode: string): Promise<void> {
        await this.postCode.fill(postcode);
    }

    async clickGetQuotes(): Promise<void> {
        await this.getQuotes.click();
    }

    async selectRatesRadioButton(): Promise<void> {
        await this.flatRateRadio.click();
    }

    async clickShippingButton(): Promise<void> {
        await this.shippingButton.click();
    }

    async getSuccessMessage(): Promise<string> {
        const successFullMessage = await this.successMessageText.innerText();
        return successFullMessage.trim();
    }

    async clickMyAccount(): Promise<void> {
        await this.myAccountEle.click();
    }

    async clickLogout(): Promise<void> {
        const allMyAccountDropdownVal = await this.myAccountDropdown.count();
        for (let i = 0; i < allMyAccountDropdownVal; i++) {
            const myAccDropDownValNames = await this.myAccountDropdown.nth(i).innerText();
            if (myAccDropDownValNames === 'Logout') {
                await this.myAccountDropdown.nth(i).click();
                return;
            }
        }
    }
}