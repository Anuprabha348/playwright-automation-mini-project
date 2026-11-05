import { Page, Locator, expect } from "@playwright/test";

export class ProductSeach {
    readonly page: Page;
    readonly searchBox;
    readonly searchButton;
    readonly srResult;
    readonly errMsg;

    constructor(page: Page) {

        this.page = page;
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator("input[value='Search']");
        this.srResult = page.locator('div.search-results');
        this.errMsg = page.locator('.result');
    }
    // Methods 

    async EnterSerch(ProductName: string) {
        await this.searchBox.fill(ProductName);
        await this.searchButton.click();
        await expect(this.srResult).toBeVisible();
    }

    async viewSearchProductList() {
        await expect(this.srResult).toBeVisible();
        const searchList = await this.srResult.allInnerTexts();
        console.log(searchList);
    }

    async errorMsg() {
        await expect(this.errMsg).toContainText(" No products were found that matched your criteria.");
        console.log(this.errMsg);
    }

    async clickSearchedProduct(productName: string) {
        // 1. Target the product items inside the search results container
        // 2. Filter by the product name text (or target the title link directly)
        
        // method 2
        // await this.srResult.locator('.product-item')
        //     .filter({ hasText: productName })
        //     .locator('.details h2.product-title a') // Or simply target the product title link
        //     .click();

        // method 1
        // Finds the link matching the exact product name inside the search result container and clicks it
        await this.srResult.getByRole('link', { name: productName, exact: true }).click();
    }
}