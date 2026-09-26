

import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductInfoPage extends BasePage {

    //private locators:
    private readonly header: Locator;
    private readonly productImages: Locator;
    private readonly productMetaData: Locator;
    private readonly productPricing: Locator;
    private productInfoMap: Map<string, string | number>;


    //const... of the class....init the locators:
    constructor(page: Page) {
        super(page);
        this.header = page.getByRole('heading', { level: 1 });
        this.productImages = page.locator('div#content li img');
        this.productMetaData = page.locator('div#content ul.list-unstyled:nth-of-type(1) li'); // indexing in CSS
        this.productPricing = page.locator('div#content ul.list-unstyled:nth-of-type(2) li');
        this.productInfoMap = new Map<string, string | number>();
    }


    //page actions:
    async getProductHeader(): Promise<string> {
        return await this.header.innerText();
    }

    async getProductImagesCount(): Promise<number> {
        await this.productImages.first().waitFor({ state: 'visible' });
        return await this.productImages.count();
    }


    // The purpose of this method is to capture everything including header and images also
    async getProductInfo(): Promise<Map<string, string | number>> {
        this.productInfoMap.set('productheader', await this.getProductHeader());
        this.productInfoMap.set('productimagescount', await this.getProductImagesCount());
        await this.getProductMetaData();
        await this.getProductPriceData();
        return this.productInfoMap;
    }

    // Brand: Apple
    // Product Code: Product 18
    // Reward Points: 800
    // Availability: Out Of Stock
    private async getProductMetaData(): Promise<void> {
        let metaData = await this.productMetaData.allInnerTexts(); // it will return an array, So fetch the data
        for (let data of metaData) {
            let meta = data.split(':');
            let metaKey = meta[0].trim();
            let metaValue = meta[1].trim();
            this.productInfoMap.set(metaKey, metaValue);
        }
    }
// Used map here to store the above data
// split() is from the string manipulation
// meta[0].trim() -> meta go to 0th element and any spaces trim it and store it in a variable
// We do not need to register map in the fixture because it is not the part of the page


    // $2,000.00
    // Ex Tax: $2,000.00
    private async getProductPriceData(): Promise<void> {
        let priceData = await this.productPricing.allInnerTexts();
        let productPrice = priceData[0].trim();
        let exTaxPrice = priceData[1].split(':')[1].trim();
        this.productInfoMap.set('productprice', productPrice);
        this.productInfoMap.set('extaxprice', exTaxPrice);
    }


}