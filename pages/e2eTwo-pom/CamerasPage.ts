import { Page, Locator } from '@playwright/test';
import { Logger } from '../../utils/logger';

export class CamerasPage {

   private readonly page: Page;
   private readonly camerasPage: Locator;
   private readonly cameraProductNames: Locator;

   constructor(page: Page) {
      this.page = page;
      this.camerasPage = page.locator('div.col-sm-9 h2');
      this.cameraProductNames = page.locator('div.caption h4 a');
   }

   async getCamerasPageTitle(): Promise<string> {
      const camerasPageText: string = await this.camerasPage.innerText();
      return camerasPageText;
   }

   async clickAndSelectProduct(productName: string): Promise<void> {
      const allCameraProducts: number = await this.cameraProductNames.count();

      for (let i = 0; i < allCameraProducts; i++) {
         const cameraName: string = await this.cameraProductNames.nth(i).innerText();
         //console.log(`Name of Item:, ${cameraName}`);
         Logger.info(`Name of Item: ${cameraName}`);
         if (cameraName === productName) {
            await this.cameraProductNames.nth(i).click();
            return;
         }
      }
   }
}