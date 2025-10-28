import {Page, Locator} from '@playwright/test';

export class Cameras {

     private readonly page: Page;
     private readonly camerasPage: Locator;
     private readonly cameraProductNames: Locator;

     constructor (page: Page){
        this.page = page;
        this.camerasPage  = page.locator('div.col-sm-9 h2');
        this.cameraProductNames =  page.locator('div.caption h4 a');
     }

     async camerasPageValidation(){
        const camerasPageText: string = await this.camerasPage.innerText();
        return camerasPageText;
     }

     async clickAndSelectProduct(){
        const allCameraProducts: number= await this.cameraProductNames.count();
        for (let i = 0; i < allCameraProducts; i++) {
            const cameraName: string = await this.cameraProductNames.nth(i).innerText();
            console.log(`Name of Item:, ${cameraName}`);
            if (cameraName === 'Nikon D300') {
                await this.cameraProductNames.nth(i).click();
                break;
            }
        }
     }
}