import { test, Page, Locator, expect } from "@playwright/test";

export class ShoppingCart {
    readonly page: Page;
    readonly shopingCartLink;
    readonly heading;
    readonly emptyText;
    readonly tableHeader;
    readonly carttableList;
    readonly checkBox;
    readonly image;
    readonly selectedproduct;
    readonly tablePrice;
    readonly qtly;
    readonly total;
    readonly numofProHeader;

    constructor(page: Page) {
        this.page = page;

        this.shopingCartLink = page.locator('#topcartlink')
        this.heading = page.getByRole('heading', { name: 'Shopping cart' });
        this.emptyText = page.getByText('Your Shopping Cart is empty!');
        this.tableHeader = page.locator('tr.cart-header-row');
        this.carttableList = page.locator('tr.cart-item-row');
        this.checkBox = page.locator(`//tr[td[contains(., 'Remove:')]]//input[@type='checkbox']`);
        this.image = page.locator(`//tr[td[contains(., 'Remove:')]]//td[2]//img`);
        this.selectedproduct = page.locator(`//tr[td[contains(., 'Remove:')]]//a`);
        this.tablePrice = page.locator('.product-unit-price');
        this.qtly = page.locator(`//tr[td[contains(., 'Remove:')]]//input[@type='text']`);
        this.total = page.locator('.product-subtotal');
        this.numofProHeader = page.locator('.cart-qty')
    }
    // Methods
    async clickShoppingCartLink() {
        expect(this.shopingCartLink).toBeVisible();
        await this.shopingCartLink.click();
    }

    async emptyCart() {
        expect(this.emptyText).toBeVisible();
        const text = await this.emptyText.innerText();
        console.log(text);
    }
    async headingVisible() {
        expect(this.heading).toBeVisible();
        expect(this.heading).toHaveText("Shopping cart");
    }

    async getAllProductList() {
        const list = await this.carttableList.allInnerTexts();
        console.log("List of All Products :", list);
    }

    async clickCheckBox() {
        expect(this.checkBox).toBeVisible();
        // expect(this.checkBox).toBeChecked();
    }

    async productImage() {
        expect(this.image).toBeVisible();
    }

    async cartProductName() {
        expect(this.selectedproduct).toBeVisible();
        const name = await this.selectedproduct.innerText();
        console.log("Products in your Cart:", name);
    }

    async priceCheck() {
        expect(this.tablePrice).toBeVisible();

    }

    async changeQty() {
        expect(this.qtly).toBeVisible();
        expect(this.qtly).toBeEditable();
    }

    async verifyTableQtyMatchesHeaderQty() {

        const tableQtyValue = await this.qtly.inputValue();  //Get the current quantity value directly from the table input box locator
        console.log("Table Quantity Value:", tableQtyValue);

        const headerCartText = await this.numofProHeader.innerText();  // Get the text from your top shopping cart link locator (e.g., "Shopping cart(12)")
        
        // 3. Extract just the numbers from the header text (turns "Shopping cart(12)" into "12")
        const headerQtyNumber = headerCartText.replace(/[^0-9]/g, '');
        console.log("Header Quantity Number:", headerQtyNumber);

        // 4. Assert that both quantities match each other dynamically
        expect(headerQtyNumber).toBe(tableQtyValue);
    }

    async quantityAndPriceChangeCalculation(quantityValue: string) {

        // unitprice
        const initialPrice = await this.tablePrice.innerText();
        const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
        console.log("Unit Price:", unitPrice);

        // more Quantity
        await this.qtly.fill(quantityValue);
        console.log("Add to Cart Quantity is:", quantityValue);
        await this.qtly.press('Enter');

        //  Get the updated total price text in subtotal 
        const updatedPriceText = await this.total.innerText();
        const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
        console.log("Total Price for Qty", quantityValue, ":",totalPrice);

        // Total Price calculation - subTotal to have unitprice 10 * quantityValue 3 = 30(subTotal)
        await expect(this.total).toHaveText((unitPrice * parseInt(quantityValue)).toFixed(2));

    }


}