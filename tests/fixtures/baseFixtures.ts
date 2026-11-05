import { test as base, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';// passing pom here so , only pass the fixture to access pom in test
import { ProductSeach } from "..//pages/SearchProductPage";
import { ProductDetails } from '../pages/ProductDetailsPage.ts';
import { ShoppingCart } from '../pages/ShoppingCartPage.ts';
import { Checkout } from '../pages/CheckoutPage.ts';


type MyFixture = { // Type definition his just tells TypeScript, 
    loginPage: LoginPage;   // "Hey, when someone asks for loginPage, its data type is the LoginPage class."
    loggedUser: void; // Return Nothing
    productSearch: ProductSeach;
    productDetails: ProductDetails;
    shoppingCart: ShoppingCart;
    checkout: Checkout;

};

//Extend base test to inject the page object

export const test = base.extend<MyFixture>({

    loginPage: async ({ page }, use) => {

        const loginPageInstance = new LoginPage(page);  //(Object creation): 
        //This is where the actual object is created using the new keyword and handed over to Playwright.

        await page.goto('https://demowebshop.tricentis.com');
        await use(loginPageInstance);  //when you want to pass a Page Object or data into your test.
    },

    loggedUser: async ({ page, loginPage }, use) => {

        await page.goto('https://demowebshop.tricentis.com');

        // Click login link and use your valid default credentials
        await loginPage.loginLink.click();
        await loginPage.login('john123@test123.com', 'Password@123'); // Put your standard valid credentials here
        console.log("login successfull");
        // Verify setup login was successful
        await expect(loginPage.logoutLink).toBeVisible();

        // Passes control to your test module (Cart, Checkout, etc.)
        await use(); //no object when you just want to run setup/teardown steps before and after the test.

        const isLogoutVisible = await loginPage.logoutLink.isVisible();
        if (isLogoutVisible) {
            await loginPage.clickLogout();
        }
    },

    // Initialize ProductSearch page object fixture
    productSearch: async ({ page }, use) => {
        const productSearchInstance = new ProductSeach(page);
        await use(productSearchInstance);
    },

    productDetails: async ({ page }, use) => {
        const ProductDetailsInstance = new ProductDetails(page);
        await use(ProductDetailsInstance);
    },

    shoppingCart: async ({ page }, use) => {
        const hoppingCartInstance = new ShoppingCart(page);
        await use(hoppingCartInstance);
    },

    checkout: async({ page }, use) => {
        const chekoutInstance = new Checkout(page);
        await use(chekoutInstance);
    },

});

export { expect } from '@playwright/test';
