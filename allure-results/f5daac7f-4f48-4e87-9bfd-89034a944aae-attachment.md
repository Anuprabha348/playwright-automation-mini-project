# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Test Cases >> Verify user can login with Invalid Email
- Location: tests\ui\login.spec.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div.validation-summary-errors')

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic [ref=f1e4]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f1e7]
      - list [ref=f1e10]:
        - listitem [ref=f1e11]:
          - link "Register" [ref=f1e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f1e13]:
          - link "Log in" [ref=f1e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f1e15]:
          - link "Shopping cart (0)" [ref=f1e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f1e17]: Shopping cart
            - generic [ref=f1e18]: (0)
        - listitem [ref=f1e19]:
          - link "Wishlist (0)" [ref=f1e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f1e21]: Wishlist
            - generic [ref=f1e22]: (0)
      - generic [ref=f1e24]:
        - status [ref=f1e25]
        - textbox [ref=f1e26]: Search store
        - button "Search" [ref=f1e27] [cursor=pointer]
    - list [ref=f1e29]:
      - listitem [ref=f1e30]:
        - link "Books" [ref=f1e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f1e32]:
        - link "Computers" [ref=f1e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f1e34]:
        - link "Electronics" [ref=f1e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f1e36]:
        - link "Apparel & Shoes" [ref=f1e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f1e38]:
        - link "Digital downloads" [ref=f1e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f1e40]:
        - link "Jewelry" [ref=f1e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f1e42]:
        - link "Gift Cards" [ref=f1e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]:
          - strong [ref=f1e47]: Categories
          - list [ref=f1e49]:
            - listitem [ref=f1e50]:
              - link "Books" [ref=f1e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f1e52]:
              - link "Computers" [ref=f1e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f1e54]:
              - link "Electronics" [ref=f1e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f1e56]:
              - link "Apparel & Shoes" [ref=f1e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f1e58]:
              - link "Digital downloads" [ref=f1e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f1e60]:
              - link "Jewelry" [ref=f1e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f1e62]:
              - link "Gift Cards" [ref=f1e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f1e64]:
          - strong [ref=f1e66]: Manufacturers
          - list [ref=f1e68]:
            - listitem [ref=f1e69]:
              - link "Tricentis" [ref=f1e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f1e71]:
          - strong [ref=f1e73]: Newsletter
          - generic [ref=f1e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f1e77]
            - button "Subscribe" [ref=f1e79] [cursor=pointer]
      - generic [ref=f1e81]:
        - heading "Welcome, Please Sign In!" [level=1] [ref=f1e83]
        - generic [ref=f1e84]:
          - generic [ref=f1e85]:
            - generic [ref=f1e86]:
              - strong [ref=f1e88]: New Customer
              - generic [ref=f1e89]: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
              - button "Register" [ref=f1e91] [cursor=pointer]
            - generic [ref=f1e92]:
              - strong [ref=f1e94]: Returning Customer
              - generic [ref=f1e96]:
                - generic [ref=f1e97]:
                  - generic [ref=f1e98]: "Email:"
                  - textbox "Email:" [active] [ref=f1e99]: wrong@test123.com
                  - generic [ref=f1e100]: Please enter a valid email address.
                - generic [ref=f1e101]:
                  - generic [ref=f1e102]: "Password:"
                  - textbox "Password:" [ref=f1e103]: Password@123
                - generic [ref=f1e104]:
                  - checkbox "Remember me?" [ref=f1e105]
                  - generic [ref=f1e106]: Remember me?
                  - link "Forgot password?" [ref=f1e108] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=f1e110] [cursor=pointer]
          - generic [ref=f1e111]:
            - heading "About login / registration" [level=2] [ref=f1e113]
            - paragraph [ref=f1e115]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=f1e116]:
    - generic [ref=f1e117]:
      - generic [ref=f1e118]:
        - heading "Information" [level=3] [ref=f1e119]
        - list [ref=f1e120]:
          - listitem [ref=f1e121]:
            - link "Sitemap" [ref=f1e122] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e123]:
            - link "Shipping & Returns" [ref=f1e124] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e125]:
            - link "Privacy Notice" [ref=f1e126] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e127]:
            - link "Conditions of Use" [ref=f1e128] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e129]:
            - link "About us" [ref=f1e130] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e131]:
            - link "Contact us" [ref=f1e132] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e133]:
        - heading "Customer service" [level=3] [ref=f1e134]
        - list [ref=f1e135]:
          - listitem [ref=f1e136]:
            - link "Search" [ref=f1e137] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e138]:
            - link "News" [ref=f1e139] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e140]:
            - link "Blog" [ref=f1e141] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e142]:
            - link "Recently viewed products" [ref=f1e143] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e144]:
            - link "Compare products list" [ref=f1e145] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e146]:
            - link "New products" [ref=f1e147] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e148]:
        - heading "My account" [level=3] [ref=f1e149]
        - list [ref=f1e150]:
          - listitem [ref=f1e151]:
            - link "My account" [ref=f1e152] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e153]:
            - link "Orders" [ref=f1e154] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e155]:
            - link "Addresses" [ref=f1e156] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e157]:
            - link "Shopping cart" [ref=f1e158] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e159]:
            - link "Wishlist" [ref=f1e160] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e161]:
        - heading "Follow us" [level=3] [ref=f1e162]
        - list [ref=f1e163]:
          - listitem [ref=f1e164]:
            - link "Facebook" [ref=f1e165] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e166]:
            - link "Twitter" [ref=f1e167] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e168]:
            - link "RSS" [ref=f1e169] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e170]:
            - link "YouTube" [ref=f1e171] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e172]:
            - link "Google+" [ref=f1e173] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e174]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e175] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e176]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly loginLink: Locator;
  6  |     readonly emailInput: Locator;
  7  |     readonly passwordInput: Locator;
  8  |     readonly loginButton: Locator;
  9  |     readonly logoutLink: Locator;
  10 |     readonly validation: Locator;
  11 | 
  12 | 
  13 |     constructor(page: Page) {  // locaters
  14 |         this.page = page;
  15 |         this.loginLink = page.getByText('Log in');
  16 |         this.emailInput = page.getByRole('textbox', { name: 'Email:' });
  17 |         this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
  18 |         this.loginButton = page.getByRole('button', { name: 'Log in' });
  19 |         this.logoutLink = page.getByRole('link', { name: "log out" });
  20 |         this.validation = page.locator('div.validation-summary-errors')
  21 |     }
  22 |     // Methods
  23 |     async clickLoginLink(url: string) {
  24 |         await this.page.goto(url);
  25 |         await this.loginLink.click();
  26 |     }
  27 | 
  28 |     async login(email: string, pass: string) {
  29 |         await this.loginLink.click();
  30 |         await expect(this.page).toHaveURL("https://demowebshop.tricentis.com/login");
  31 |         await this.emailInput.fill(email);
  32 |         await this.passwordInput.fill(pass);
  33 |         await this.loginButton.click();
  34 | 
  35 |     }
  36 | 
  37 |     async enterEmail(email: string) {
  38 |         await this.emailInput.fill(email);
  39 |     }
  40 |     async enterPassword(pass: string) {
  41 |         await this.passwordInput.fill(pass);
  42 |     }
  43 |     async clickLogin() {
  44 |         await this.loginButton.click();
  45 |     }
  46 |     async clickLogout() {
  47 |         await this.logoutLink.click();
  48 |     }
  49 |     async validationError() {
> 50 |      const loginerror  =(await this.validation.innerText()).replace(/\s+/g, ' ').trim();
     |                                                ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  51 |      console.log("Validation Error:", loginerror);
  52 |         await expect(this .validation).toHaveText("Login was unsuccessful. Please correct the errors and try again.No customer account found");
  53 |     }
  54 | }
```