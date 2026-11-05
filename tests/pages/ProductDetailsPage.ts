import { test, Page, Locator, expect } from '@playwright/test';

export class ProductDetails {
    readonly page: Page;
    readonly prodetails;
    readonly image;
    readonly des;
    readonly proName;
    readonly shtdes;
    readonly stock;
    readonly ship;
    readonly review;
    readonly price;
    readonly qty;
    readonly addtocart;
    readonly email;
    readonly compare;
    readonly succ;
    readonly negqty;

    constructor(page: Page) {
        this.page = page;
        this.prodetails = page.locator('div.page.product-details-page');
        this.image = page.locator('#main-product-img-13:visible')
        this.des = page.getByText('Get to know everything about computing and the internet.', { exact: true });
        this.proName = page.locator('div.product-name');
        this.shtdes = page.locator(".short-description");
        this.stock = page.locator(".stock");
        this.ship = page.locator('.free-shipping');
        this.review = page.locator(".product-reviews-overview");
        this.price = page.locator(".price-value-13")
        this.qty = page.locator("#addtocart_13_EnteredQuantity");
        this.addtocart = page.locator('#add-to-cart-button-13');
        this.email = page.locator('.email-a-friend');
        this.compare = page.locator('.compare-products');
        this.succ = page.getByText('The product has been added to your shopping cart', { exact: true })
        this.negqty = page.getByText('Quantity should be positive', { exact: true })
    }

    //  Action Methods
    async verifyProductDetails(expectedProductName: string, ) {
        // product details 

        await expect(this.prodetails).toBeVisible();
        await expect(this.image).toBeVisible();
        await expect(this.des).toBeVisible();

        const productName = await this.proName.innerText(); //allinterTest is [] of string
        console.log("Product Name:", productName);
        expect(productName.trim()).not.toBe('');

        await expect(this.proName).toBeVisible();
        await expect(this.shtdes).toBeVisible();
        await expect(this.stock).toBeVisible();
        await expect(this.ship).toBeVisible();
        await expect(this.review).toBeVisible();

        // Quantity
        await expect(this.qty).toBeVisible();
        const def = await this.qty.inputValue(); // no innertext because its number.
        console.log("Default Quantity is:", def);
        // expect(price.trim()).not.toBe('');
        await expect(this.qty).toHaveCount(1);

        // quantity validation

        await this.qty.fill("0");
        await this.addtocart.click();
        await expect(this.negqty).toBeVisible();
        const validation = await this.negqty.innerText();
        console.log("Validation msg:", validation);

        //buttons
        await expect(this.email).toBeVisible();
        await expect(this.compare).toBeVisible();
        await this.addtocart.click();
    }

    //Verify price Calculation.
    async VerifyQuanitypriceincreese(quantityValue: string) {

        //.innerText(): Used to extract visible text content from standard HTML display elements like spans or divs (such as product prices).
        //.inputValue(): Used to retrieve the current typed or selected value specifically from interactive form elements like input boxes (such as quantity fields).

        const initialPrice = await this.price.innerText();
        const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
        console.log("Unit Price:", unitPrice);

        // more Quantity
        await this.qty.fill(quantityValue);
        console.log("Add to Cart Quantity is:", quantityValue);

        //  Get the updated total price text.
        const updatedPriceText = await this.price.innerText();
        const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
        console.log("Total Price for Qty", quantityValue, ":", totalPrice);

        // Assert math calculation
        expect.soft(totalPrice).toBe(unitPrice * parseInt(quantityValue));
        await this.addtocart.click();
    }

    async addProductToCart() {

        await expect(this.addtocart).toBeVisible();

        await expect(this.addtocart).toBeEnabled();

        await this.addtocart.click();

        expect(this.succ).toBeVisible();

        const SuccesMessage = await this.succ.innerText();
        console.log("Add to card Status:", SuccesMessage);
    }
}
