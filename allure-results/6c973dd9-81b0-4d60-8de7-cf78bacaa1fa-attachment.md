# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout Module >> Verify Gift Card Coupons Can apply
- Location: tests\ui\checkout.spec.ts:11:7

# Error details

```
Test timeout of 30000ms exceeded while setting up "loggedUser".
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'log out' })
Expected: visible
Error: Test timeout of 30000ms exceeded.

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'log out' }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'log out' })
  - Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic [ref=f3e4]:
      - link [ref=f3e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f3e7]
      - list [ref=f3e10]:
        - listitem [ref=f3e11]:
          - link "Register" [ref=f3e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f3e13]:
          - link "Log in" [ref=f3e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f3e15]:
          - link "Shopping cart (0)" [ref=f3e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (0)
        - listitem [ref=f3e19]:
          - link "Wishlist (0)" [ref=f3e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f3e21]: Wishlist
            - generic [ref=f3e22]: (0)
      - generic [ref=f3e24]:
        - status [ref=f3e25]
        - textbox [ref=f3e26]: Search store
        - button "Search" [ref=f3e27] [cursor=pointer]
    - list [ref=f3e29]:
      - listitem [ref=f3e30]:
        - link "Books" [ref=f3e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f3e32]:
        - link "Computers" [ref=f3e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f3e34]:
        - link "Electronics" [ref=f3e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f3e36]:
        - link "Apparel & Shoes" [ref=f3e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f3e38]:
        - link "Digital downloads" [ref=f3e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f3e40]:
        - link "Jewelry" [ref=f3e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f3e42]:
        - link "Gift Cards" [ref=f3e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f3e44]:
        - generic [ref=f3e45]:
          - strong [ref=f3e47]: Categories
          - list [ref=f3e49]:
            - listitem [ref=f3e50]:
              - link "Books" [ref=f3e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f3e52]:
              - link "Computers" [ref=f3e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f3e54]:
              - link "Electronics" [ref=f3e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f3e56]:
              - link "Apparel & Shoes" [ref=f3e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f3e58]:
              - link "Digital downloads" [ref=f3e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f3e60]:
              - link "Jewelry" [ref=f3e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f3e62]:
              - link "Gift Cards" [ref=f3e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f3e64]:
          - strong [ref=f3e66]: Manufacturers
          - list [ref=f3e68]:
            - listitem [ref=f3e69]:
              - link "Tricentis" [ref=f3e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f3e71]:
          - strong [ref=f3e73]: Newsletter
          - generic [ref=f3e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f3e77]
            - button "Subscribe" [ref=f3e79] [cursor=pointer]
      - generic [ref=f3e81]:
        - heading "Welcome, Please Sign In!" [level=1] [ref=f3e83]
        - generic [ref=f3e84]:
          - generic [ref=f3e85]:
            - generic [ref=f3e86]:
              - strong [ref=f3e88]: New Customer
              - generic [ref=f3e89]: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
              - button "Register" [ref=f3e91] [cursor=pointer]
            - generic [ref=f3e92]:
              - strong [ref=f3e94]: Returning Customer
              - generic [ref=f3e96]:
                - generic [ref=f3e97]:
                  - generic [ref=f3e98]: "Email:"
                  - textbox "Email:" [active] [ref=f3e99]
                - generic [ref=f3e100]:
                  - generic [ref=f3e101]: "Password:"
                  - textbox "Password:" [ref=f3e102]
                - generic [ref=f3e103]:
                  - checkbox "Remember me?" [ref=f3e104]
                  - generic [ref=f3e105]: Remember me?
                  - link "Forgot password?" [ref=f3e107] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=f3e109] [cursor=pointer]
          - generic [ref=f3e110]:
            - heading "About login / registration" [level=2] [ref=f3e112]
            - paragraph [ref=f3e114]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=f3e115]:
    - generic [ref=f3e116]:
      - generic [ref=f3e117]:
        - heading "Information" [level=3] [ref=f3e118]
        - list [ref=f3e119]:
          - listitem [ref=f3e120]:
            - link "Sitemap" [ref=f3e121] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f3e122]:
            - link "Shipping & Returns" [ref=f3e123] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f3e124]:
            - link "Privacy Notice" [ref=f3e125] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f3e126]:
            - link "Conditions of Use" [ref=f3e127] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f3e128]:
            - link "About us" [ref=f3e129] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f3e130]:
            - link "Contact us" [ref=f3e131] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f3e132]:
        - heading "Customer service" [level=3] [ref=f3e133]
        - list [ref=f3e134]:
          - listitem [ref=f3e135]:
            - link "Search" [ref=f3e136] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f3e137]:
            - link "News" [ref=f3e138] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f3e139]:
            - link "Blog" [ref=f3e140] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f3e141]:
            - link "Recently viewed products" [ref=f3e142] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e143]:
            - link "Compare products list" [ref=f3e144] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f3e145]:
            - link "New products" [ref=f3e146] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f3e147]:
        - heading "My account" [level=3] [ref=f3e148]
        - list [ref=f3e149]:
          - listitem [ref=f3e150]:
            - link "My account" [ref=f3e151] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e152]:
            - link "Orders" [ref=f3e153] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e154]:
            - link "Addresses" [ref=f3e155] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e156]:
            - link "Shopping cart" [ref=f3e157] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f3e158]:
            - link "Wishlist" [ref=f3e159] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f3e160]:
        - heading "Follow us" [level=3] [ref=f3e161]
        - list [ref=f3e162]:
          - listitem [ref=f3e163]:
            - link "Facebook" [ref=f3e164] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e165]:
            - link "Twitter" [ref=f3e166] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e167]:
            - link "RSS" [ref=f3e168] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f3e169]:
            - link "YouTube" [ref=f3e170] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e171]:
            - link "Google+" [ref=f3e172] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e173]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e174] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e175]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test as base, Page, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage.ts';// passing pom here so , only pass the fixture to access pom in test
  3  | import { ProductSeach } from "..//pages/SearchProductPage";
  4  | import { ProductDetails } from '../pages/ProductDetailsPage.ts';
  5  | import { ShoppingCart } from '../pages/ShoppingCartPage.ts';
  6  | import { Checkout } from '../pages/CheckoutPage.ts';
  7  | 
  8  | 
  9  | type MyFixture = { // Type definition his just tells TypeScript, 
  10 |     loginPage: LoginPage;   // "Hey, when someone asks for loginPage, its data type is the LoginPage class."
  11 |     loggedUser: void; // Return Nothing
  12 |     productSearch: ProductSeach;
  13 |     productDetails: ProductDetails;
  14 |     shoppingCart: ShoppingCart;
  15 |     checkout: Checkout;
  16 | 
  17 | };
  18 | 
  19 | //Extend base test to inject the page object
  20 | 
  21 | export const test = base.extend<MyFixture>({
  22 | 
  23 |     loginPage: async ({ page }, use) => {
  24 | 
  25 |         const loginPageInstance = new LoginPage(page);  //(Object creation): 
  26 |         //This is where the actual object is created using the new keyword and handed over to Playwright.
  27 | 
  28 |         await page.goto('https://demowebshop.tricentis.com');
  29 |         await use(loginPageInstance);  //when you want to pass a Page Object or data into your test.
  30 |     },
  31 | 
  32 |     loggedUser: async ({ page, loginPage }, use) => {
  33 | 
  34 |         await page.goto('https://demowebshop.tricentis.com');
  35 | 
  36 |         // Click login link and use your valid default credentials
  37 |         await loginPage.loginLink.click();
  38 |         await loginPage.login('john123@test123.com', 'Password@123'); // Put your standard valid credentials here
  39 |         console.log("login successfull");
  40 |         // Verify setup login was successful
> 41 |         await expect(loginPage.logoutLink).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  42 | 
  43 |         // Passes control to your test module (Cart, Checkout, etc.)
  44 |         await use(); //no object when you just want to run setup/teardown steps before and after the test.
  45 | 
  46 |         const isLogoutVisible = await loginPage.logoutLink.isVisible();
  47 |         if (isLogoutVisible) {
  48 |             await loginPage.clickLogout();
  49 |         }
  50 |     },
  51 | 
  52 |     // Initialize ProductSearch page object fixture
  53 |     productSearch: async ({ page }, use) => {
  54 |         const productSearchInstance = new ProductSeach(page);
  55 |         await use(productSearchInstance);
  56 |     },
  57 | 
  58 |     productDetails: async ({ page }, use) => {
  59 |         const ProductDetailsInstance = new ProductDetails(page);
  60 |         await use(ProductDetailsInstance);
  61 |     },
  62 | 
  63 |     shoppingCart: async ({ page }, use) => {
  64 |         const hoppingCartInstance = new ShoppingCart(page);
  65 |         await use(hoppingCartInstance);
  66 |     },
  67 | 
  68 |     checkout: async({ page }, use) => {
  69 |         const chekoutInstance = new Checkout(page);
  70 |         await use(chekoutInstance);
  71 |     },
  72 | 
  73 | });
  74 | 
  75 | export { expect } from '@playwright/test';
  76 | 
```