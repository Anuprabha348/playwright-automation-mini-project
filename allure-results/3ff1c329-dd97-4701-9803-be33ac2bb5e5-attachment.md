# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\productDetails.spec.ts >> Product Details Module >> 
- Location: tests\ui\productDetails.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div.page.product-details-page')
    - waiting for "https://demowebshop.tricentis.com/" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"

```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e3]:
    - generic [ref=f6e4]:
      - link [ref=f6e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f6e7]
      - list [ref=f6e10]:
        - listitem [ref=f6e11]:
          - link "Register" [ref=f6e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f6e13]:
          - link "Log in" [ref=f6e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f6e15]:
          - link "Shopping cart (0)" [ref=f6e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f6e17]: Shopping cart
            - generic [ref=f6e18]: (0)
        - listitem [ref=f6e19]:
          - link "Wishlist (0)" [ref=f6e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f6e21]: Wishlist
            - generic [ref=f6e22]: (0)
      - generic [ref=f6e24]:
        - status [ref=f6e25]
        - textbox [ref=f6e26]: Search store
        - button "Search" [ref=f6e27] [cursor=pointer]
    - list [ref=f6e29]:
      - listitem [ref=f6e30]:
        - link "Books" [ref=f6e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f6e32]:
        - link "Computers" [ref=f6e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f6e34]:
        - link "Electronics" [ref=f6e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f6e36]:
        - link "Apparel & Shoes" [ref=f6e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f6e38]:
        - link "Digital downloads" [ref=f6e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f6e40]:
        - link "Jewelry" [ref=f6e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f6e42]:
        - link "Gift Cards" [ref=f6e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f6e44]:
        - generic [ref=f6e45]:
          - strong [ref=f6e47]: Categories
          - list [ref=f6e49]:
            - listitem [ref=f6e50]:
              - link "Books" [ref=f6e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f6e52]:
              - link "Computers" [ref=f6e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f6e54]:
              - link "Electronics" [ref=f6e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f6e56]:
              - link "Apparel & Shoes" [ref=f6e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f6e58]:
              - link "Digital downloads" [ref=f6e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f6e60]:
              - link "Jewelry" [ref=f6e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f6e62]:
              - link "Gift Cards" [ref=f6e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f6e64]:
          - strong [ref=f6e66]: Manufacturers
          - list [ref=f6e68]:
            - listitem [ref=f6e69]:
              - link "Tricentis" [ref=f6e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f6e71]:
          - strong [ref=f6e73]: Popular tags
          - generic [ref=f6e74]:
            - list [ref=f6e76]:
              - listitem [ref=f6e77]:
                - link "apparel" [ref=f6e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f6e79]:
                - link "awesome" [ref=f6e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f6e81]:
                - link "book" [ref=f6e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f6e83]:
                - link "camera" [ref=f6e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f6e85]:
                - link "cell" [ref=f6e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f6e87]:
                - link "compact" [ref=f6e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f6e89]:
                - link "computer" [ref=f6e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f6e91]:
                - link "cool" [ref=f6e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f6e93]:
                - link "digital" [ref=f6e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f6e95]:
                - link "jeans" [ref=f6e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f6e97]:
                - link "jewelry" [ref=f6e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f6e99]:
                - link "nice" [ref=f6e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f6e101]:
                - link "shirt" [ref=f6e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f6e103]:
                - link "shoes" [ref=f6e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f6e105]:
                - link "TCP" [ref=f6e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f6e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f6e109]:
        - generic [ref=f6e110]:
          - strong [ref=f6e112]: Newsletter
          - generic [ref=f6e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f6e116]
            - button "Subscribe" [ref=f6e118] [cursor=pointer]
        - generic [ref=f6e119]:
          - strong [ref=f6e121]: Community poll
          - generic [ref=f6e123]:
            - strong [ref=f6e124]: Do you like nopCommerce?
            - list [ref=f6e125]:
              - listitem [ref=f6e126]:
                - radio "Excellent" [ref=f6e127]
                - text: Excellent
              - listitem [ref=f6e128]:
                - radio "Good" [ref=f6e129]
                - text: Good
              - listitem [ref=f6e130]:
                - radio "Poor" [ref=f6e131]
                - text: Poor
              - listitem [ref=f6e132]:
                - radio "Very bad" [ref=f6e133]
                - text: Very bad
            - button "Vote" [ref=f6e135] [cursor=pointer]
      - generic [ref=f6e138]:
        - generic:
          - generic:
            - link:
              - /url: https://www.tricentis.com/speed/
            - link:
              - /url: https://academy.tricentis.com
        - generic [ref=f6e139]:
          - heading "Welcome to our store" [level=2] [ref=f6e141]
          - generic [ref=f6e142]:
            - paragraph [ref=f6e143]: Welcome to the new Tricentis store!
            - paragraph [ref=f6e144]: Feel free to shop around and explore everything.
        - generic [ref=f6e145]:
          - strong [ref=f6e147]: Featured products
          - generic [ref=f6e149]:
            - link [ref=f6e151] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f6e152]
            - generic [ref=f6e153]:
              - heading [level=2] [ref=f6e154]:
                - link "$25 Virtual Gift Card" [ref=f6e155] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "919 review(s)" [ref=f6e156]
              - generic [ref=f6e159]:
                - generic [ref=f6e160]: "25.00"
                - button "Add to cart" [ref=f6e163] [cursor=pointer]
          - generic [ref=f6e165]:
            - link [ref=f6e167] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f6e168]
            - generic [ref=f6e169]:
              - heading [level=2] [ref=f6e170]:
                - link "14.1-inch Laptop" [ref=f6e171] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1980 review(s)" [ref=f6e172]
              - generic [ref=f6e175]:
                - generic [ref=f6e176]: "1590.00"
                - button "Add to cart" [ref=f6e179] [cursor=pointer]
          - generic [ref=f6e181]:
            - link [ref=f6e183] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f6e184]
            - generic [ref=f6e185]:
              - heading [level=2] [ref=f6e186]:
                - link "Build your own cheap computer" [ref=f6e187] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f6e188]
              - generic [ref=f6e191]:
                - generic [ref=f6e192]: "800.00"
                - button "Add to cart" [ref=f6e195] [cursor=pointer]
          - generic [ref=f6e197]:
            - link [ref=f6e199] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f6e200]
            - generic [ref=f6e201]:
              - heading [level=2] [ref=f6e202]:
                - link "Build your own computer" [ref=f6e203] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f6e204]
              - generic [ref=f6e207]:
                - generic [ref=f6e208]: "1200.00"
                - button "Add to cart" [ref=f6e211] [cursor=pointer]
          - generic [ref=f6e213]:
            - link [ref=f6e215] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f6e216]
            - generic [ref=f6e217]:
              - heading [level=2] [ref=f6e218]:
                - link "Build your own expensive computer" [ref=f6e219] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f6e220]
              - generic [ref=f6e223]:
                - generic [ref=f6e224]: "1800.00"
                - button "Add to cart" [ref=f6e227] [cursor=pointer]
          - generic [ref=f6e229]:
            - link [ref=f6e231] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f6e232]
            - generic [ref=f6e233]:
              - heading [level=2] [ref=f6e234]:
                - link "Simple Computer" [ref=f6e235] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "418 review(s)" [ref=f6e236]
              - generic [ref=f6e239]:
                - generic [ref=f6e240]: "800.00"
                - button "Add to cart" [ref=f6e243] [cursor=pointer]
  - generic [ref=f6e244]:
    - generic [ref=f6e245]:
      - generic [ref=f6e246]:
        - heading "Information" [level=3] [ref=f6e247]
        - list [ref=f6e248]:
          - listitem [ref=f6e249]:
            - link "Sitemap" [ref=f6e250] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f6e251]:
            - link "Shipping & Returns" [ref=f6e252] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f6e253]:
            - link "Privacy Notice" [ref=f6e254] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f6e255]:
            - link "Conditions of Use" [ref=f6e256] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f6e257]:
            - link "About us" [ref=f6e258] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f6e259]:
            - link "Contact us" [ref=f6e260] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f6e261]:
        - heading "Customer service" [level=3] [ref=f6e262]
        - list [ref=f6e263]:
          - listitem [ref=f6e264]:
            - link "Search" [ref=f6e265] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f6e266]:
            - link "News" [ref=f6e267] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f6e268]:
            - link "Blog" [ref=f6e269] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f6e270]:
            - link "Recently viewed products" [ref=f6e271] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f6e272]:
            - link "Compare products list" [ref=f6e273] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f6e274]:
            - link "New products" [ref=f6e275] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f6e276]:
        - heading "My account" [level=3] [ref=f6e277]
        - list [ref=f6e278]:
          - listitem [ref=f6e279]:
            - link "My account" [ref=f6e280] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f6e281]:
            - link "Orders" [ref=f6e282] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f6e283]:
            - link "Addresses" [ref=f6e284] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f6e285]:
            - link "Shopping cart" [ref=f6e286] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f6e287]:
            - link "Wishlist" [ref=f6e288] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f6e289]:
        - heading "Follow us" [level=3] [ref=f6e290]
        - list [ref=f6e291]:
          - listitem [ref=f6e292]:
            - link "Facebook" [ref=f6e293] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f6e294]:
            - link "Twitter" [ref=f6e295] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f6e296]:
            - link "RSS" [ref=f6e297] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f6e298]:
            - link "YouTube" [ref=f6e299] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f6e300]:
            - link "Google+" [ref=f6e301] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f6e302]:
      - text: Powered by
      - link "nopCommerce" [ref=f6e303] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f6e304]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class ProductDetails {
  4  |     readonly page: Page;
  5  |     readonly prodetails;
  6  |     readonly image;
  7  |     readonly des;
  8  |     readonly proName;
  9  |     readonly shtdes;
  10 |     readonly stock;
  11 |     readonly ship;
  12 |     readonly review;
  13 |     readonly price;
  14 |     readonly qty;
  15 |     readonly addtocart;
  16 |     readonly email;
  17 |     readonly compare;
  18 | 
  19 | 
  20 |     constructor(page: Page) {
  21 |         this.page = page;
  22 |         this.prodetails = page.locator('div.page.product-details-page');
  23 |         this.image = page.locator('#main-product-img-13:visible')
  24 |         this.des = page.getByText('Get to know everything about computing and the internet.', { exact: true });
  25 |         this.proName = page.locator('div.product-name');
  26 |         this.shtdes = page.locator(".short-description");
  27 |         this.stock = page.locator(".stock");
  28 |         this.ship = page.locator('.free-shipping');
  29 |         this.review = page.locator(".product-reviews-overview");
  30 |         this.price = page.locator(".prices[itemprop='offers']")
  31 |         this.qty = page.getByText('Qty:')
  32 |         this.addtocart = page.locator('#add-to-cart-button-13')
  33 |         this.email = page.locator('.email-a-friend')
  34 |         this.compare = page.locator('.compare-products')
  35 |     }
  36 | 
  37 |     // Methods
  38 | 
  39 |     async verifyProductDetails(expectedProductName: string) {
  40 | // product details 
> 41 |         await this.prodetails.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 |         await expect(this.image).toBeVisible();
  43 |         await expect(this.des).toBeVisible();
  44 | 
  45 |         const productName = await this.proName.innerText(); //allinterTest is [] of string
  46 |         console.log("Product Name:", productName);
  47 |         expect(productName.trim()).not.toBe('');
  48 | 
  49 |         await expect(this.proName).toBeVisible();
  50 |         await expect(this.shtdes).toBeVisible();
  51 |         await expect(this.stock).toBeVisible();
  52 |         await expect(this.ship).toBeVisible();
  53 |         await expect(this.review).toBeVisible();
  54 | 
  55 | // Quantity
  56 |         await expect(this.qty).toBeVisible();
  57 |         const price = await this.qty.innerText();
  58 |         console.log("Default Quantity:",price );
  59 |         expect(price.trim()).not.toBe('');
  60 |         await expect(this.qty).toHaveCount(1);
  61 | 
  62 |         await expect(this.email).toBeVisible();
  63 |         await expect(this.compare).toBeVisible();
  64 | 
  65 |     }
  66 | 
  67 | 
  68 |     async addProductToCart() {
  69 | 
  70 |         await expect(this.addtocart).toBeVisible();
  71 | 
  72 |         await expect(this.addtocart).toBeEnabled();
  73 | 
  74 |         await this.addtocart.click();
  75 | 
  76 |     }
  77 | 
  78 | 
  79 | }
  80 | 
```