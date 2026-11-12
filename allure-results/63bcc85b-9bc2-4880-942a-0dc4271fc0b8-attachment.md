# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Test Cases >> Verify user can login with Valid credentials
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
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic [ref=f2e4]:
      - link [ref=f2e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f2e7]
      - list [ref=f2e10]:
        - listitem [ref=f2e11]:
          - link "john123@test123.com" [ref=f2e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f2e13]:
          - link "Log out" [ref=f2e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f2e15]:
          - link "Shopping cart (6)" [ref=f2e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f2e17]: Shopping cart
            - generic [ref=f2e18]: (6)
        - listitem [ref=f2e19]:
          - link "Wishlist (1)" [ref=f2e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f2e21]: Wishlist
            - generic [ref=f2e22]: (1)
      - generic [ref=f2e24]:
        - status [ref=f2e25]
        - textbox [ref=f2e26]: Search store
        - button "Search" [ref=f2e27] [cursor=pointer]
    - list [ref=f2e29]:
      - listitem [ref=f2e30]:
        - link "Books" [ref=f2e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f2e32]:
        - link "Computers" [ref=f2e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f2e34]:
        - link "Electronics" [ref=f2e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f2e36]:
        - link "Apparel & Shoes" [ref=f2e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f2e38]:
        - link "Digital downloads" [ref=f2e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f2e40]:
        - link "Jewelry" [ref=f2e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f2e42]:
        - link "Gift Cards" [ref=f2e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f2e44]:
        - generic [ref=f2e45]:
          - strong [ref=f2e47]: Categories
          - list [ref=f2e49]:
            - listitem [ref=f2e50]:
              - link "Books" [ref=f2e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f2e52]:
              - link "Computers" [ref=f2e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f2e54]:
              - link "Electronics" [ref=f2e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f2e56]:
              - link "Apparel & Shoes" [ref=f2e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f2e58]:
              - link "Digital downloads" [ref=f2e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f2e60]:
              - link "Jewelry" [ref=f2e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f2e62]:
              - link "Gift Cards" [ref=f2e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f2e64]:
          - strong [ref=f2e66]: Manufacturers
          - list [ref=f2e68]:
            - listitem [ref=f2e69]:
              - link "Tricentis" [ref=f2e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f2e71]:
          - strong [ref=f2e73]: Popular tags
          - generic [ref=f2e74]:
            - list [ref=f2e76]:
              - listitem [ref=f2e77]:
                - link "apparel" [ref=f2e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f2e79]:
                - link "awesome" [ref=f2e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f2e81]:
                - link "book" [ref=f2e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f2e83]:
                - link "camera" [ref=f2e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f2e85]:
                - link "cell" [ref=f2e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f2e87]:
                - link "compact" [ref=f2e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f2e89]:
                - link "computer" [ref=f2e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f2e91]:
                - link "cool" [ref=f2e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f2e93]:
                - link "digital" [ref=f2e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f2e95]:
                - link "jeans" [ref=f2e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f2e97]:
                - link "jewelry" [ref=f2e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f2e99]:
                - link "nice" [ref=f2e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f2e101]:
                - link "shirt" [ref=f2e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f2e103]:
                - link "shoes" [ref=f2e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f2e105]:
                - link "TCP" [ref=f2e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f2e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f2e109]:
        - generic [ref=f2e110]:
          - strong [ref=f2e112]: Newsletter
          - generic [ref=f2e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f2e116]
            - button "Subscribe" [ref=f2e118] [cursor=pointer]
        - generic [ref=f2e119]:
          - strong [ref=f2e121]: Community poll
          - generic [ref=f2e123]:
            - strong [ref=f2e124]: Do you like nopCommerce?
            - list [ref=f2e125]:
              - listitem [ref=f2e126]:
                - radio "Excellent" [ref=f2e127]
                - text: Excellent
              - listitem [ref=f2e128]:
                - radio "Good" [ref=f2e129]
                - text: Good
              - listitem [ref=f2e130]:
                - radio "Poor" [ref=f2e131]
                - text: Poor
              - listitem [ref=f2e132]:
                - radio "Very bad" [ref=f2e133]
                - text: Very bad
            - button "Vote" [ref=f2e135] [cursor=pointer]
      - generic [ref=f2e138]:
        - generic [ref=f2e139]:
          - generic [ref=f2e140]:
            - link [ref=f2e141] [cursor=pointer]:
              - /url: https://www.tricentis.com/speed/
            - generic [ref=f2e143]: Speed | Tricentis
            - generic:
              - generic [ref=f2e144] [cursor=pointer]: Prev
              - generic [ref=f2e145] [cursor=pointer]: Next
          - generic [ref=f2e176]:
            - generic [ref=f2e177] [cursor=pointer]: "1"
            - generic [ref=f2e178] [cursor=pointer]: "2"
        - generic [ref=f2e179]:
          - heading "Welcome to our store" [level=2] [ref=f2e181]
          - generic [ref=f2e182]:
            - paragraph [ref=f2e183]: Welcome to the new Tricentis store!
            - paragraph [ref=f2e184]: Feel free to shop around and explore everything.
        - generic [ref=f2e185]:
          - strong [ref=f2e187]: Featured products
          - generic [ref=f2e189]:
            - link [ref=f2e191] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f2e192]
            - generic [ref=f2e193]:
              - heading [level=2] [ref=f2e194]:
                - link "$25 Virtual Gift Card" [ref=f2e195] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "917 review(s)" [ref=f2e196]
              - generic [ref=f2e199]:
                - generic [ref=f2e200]: "25.00"
                - button "Add to cart" [ref=f2e203] [cursor=pointer]
          - generic [ref=f2e205]:
            - link [ref=f2e207] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f2e208]
            - generic [ref=f2e209]:
              - heading [level=2] [ref=f2e210]:
                - link "14.1-inch Laptop" [ref=f2e211] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1962 review(s)" [ref=f2e212]
              - generic [ref=f2e215]:
                - generic [ref=f2e216]: "1590.00"
                - button "Add to cart" [ref=f2e219] [cursor=pointer]
          - generic [ref=f2e221]:
            - link [ref=f2e223] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f2e224]
            - generic [ref=f2e225]:
              - heading [level=2] [ref=f2e226]:
                - link "Build your own cheap computer" [ref=f2e227] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f2e228]
              - generic [ref=f2e231]:
                - generic [ref=f2e232]: "800.00"
                - button "Add to cart" [ref=f2e235] [cursor=pointer]
          - generic [ref=f2e237]:
            - link [ref=f2e239] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f2e240]
            - generic [ref=f2e241]:
              - heading [level=2] [ref=f2e242]:
                - link "Build your own computer" [ref=f2e243] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f2e244]
              - generic [ref=f2e247]:
                - generic [ref=f2e248]: "1200.00"
                - button "Add to cart" [ref=f2e251] [cursor=pointer]
          - generic [ref=f2e253]:
            - link [ref=f2e255] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f2e256]
            - generic [ref=f2e257]:
              - heading [level=2] [ref=f2e258]:
                - link "Build your own expensive computer" [ref=f2e259] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f2e260]
              - generic [ref=f2e263]:
                - generic [ref=f2e264]: "1800.00"
                - button "Add to cart" [ref=f2e267] [cursor=pointer]
          - generic [ref=f2e269]:
            - link [ref=f2e271] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f2e272]
            - generic [ref=f2e273]:
              - heading [level=2] [ref=f2e274]:
                - link "Simple Computer" [ref=f2e275] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "417 review(s)" [ref=f2e276]
              - generic [ref=f2e279]:
                - generic [ref=f2e280]: "800.00"
                - button "Add to cart" [ref=f2e283] [cursor=pointer]
  - generic [ref=f2e284]:
    - generic [ref=f2e285]:
      - generic [ref=f2e286]:
        - heading "Information" [level=3] [ref=f2e287]
        - list [ref=f2e288]:
          - listitem [ref=f2e289]:
            - link "Sitemap" [ref=f2e290] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e291]:
            - link "Shipping & Returns" [ref=f2e292] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e293]:
            - link "Privacy Notice" [ref=f2e294] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e295]:
            - link "Conditions of Use" [ref=f2e296] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e297]:
            - link "About us" [ref=f2e298] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e299]:
            - link "Contact us" [ref=f2e300] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e301]:
        - heading "Customer service" [level=3] [ref=f2e302]
        - list [ref=f2e303]:
          - listitem [ref=f2e304]:
            - link "Search" [ref=f2e305] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e306]:
            - link "News" [ref=f2e307] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e308]:
            - link "Blog" [ref=f2e309] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e310]:
            - link "Recently viewed products" [ref=f2e311] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e312]:
            - link "Compare products list" [ref=f2e313] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e314]:
            - link "New products" [ref=f2e315] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e316]:
        - heading "My account" [level=3] [ref=f2e317]
        - list [ref=f2e318]:
          - listitem [ref=f2e319]:
            - link "My account" [ref=f2e320] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e321]:
            - link "Orders" [ref=f2e322] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e323]:
            - link "Addresses" [ref=f2e324] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e325]:
            - link "Shopping cart" [ref=f2e326] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e327]:
            - link "Wishlist" [ref=f2e328] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e329]:
        - heading "Follow us" [level=3] [ref=f2e330]
        - list [ref=f2e331]:
          - listitem [ref=f2e332]:
            - link "Facebook" [ref=f2e333] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e334]:
            - link "Twitter" [ref=f2e335] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e336]:
            - link "RSS" [ref=f2e337] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e338]:
            - link "YouTube" [ref=f2e339] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e340]:
            - link "Google+" [ref=f2e341] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e342]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e343] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e344]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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