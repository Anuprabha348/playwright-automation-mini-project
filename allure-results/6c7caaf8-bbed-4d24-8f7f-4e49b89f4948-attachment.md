# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\productDetails.spec.ts >> Product Details Module >> 
- Location: tests\ui\productDetails.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div.page.product-details-page')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('div.page.product-details-page') with timeout 5000ms
  - waiting for locator('div.page.product-details-page')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "john123@test123.com":
      - /url: /customer/info
  - listitem:
    - link "Log out":
      - /url: /logout
  - listitem:
    - link "Shopping cart (7)":
      - /url: /cart
  - listitem:
    - link "Wishlist (1)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Search" [level=1]
- text: "Search keyword:"
- textbox "Search keyword:": Computing and Internet
- checkbox "Advanced search"
- text: Advanced search
- button "Search"
- text: View as
- combobox:
  - option "Grid" [selected]
  - option "List"
- text: Sort by
- combobox:
  - option "Position" [selected]
  - 'option "Name: A to Z"'
  - 'option "Name: Z to A"'
  - 'option "Price: Low to High"'
  - 'option "Price: High to Low"'
  - option "Created on"
- text: Display
- combobox:
  - option "4"
  - option "8" [selected]
  - option "12"
- text: per page
- link "Picture of Computing and Internet":
  - /url: /computing-and-internet
  - img "Picture of Computing and Internet"
- heading "Computing and Internet" [level=2]:
  - link "Computing and Internet":
    - /url: /computing-and-internet
- text: 30.00 10.00
- button "Add to cart"
- link "Picture of Copy of Computing and Internet EX":
  - /url: /copy-of-computing-and-internet
  - img "Picture of Copy of Computing and Internet EX"
- heading "Copy of Computing and Internet EX" [level=2]:
  - link "Copy of Computing and Internet EX":
    - /url: /copy-of-computing-and-internet
- text: 30.00 10.00
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  41 |         
> 42 |         await expect (this.prodetails).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  43 |         await expect(this.image).toBeVisible();
  44 |         await expect(this.des).toBeVisible();
  45 | 
  46 |         const productName = await this.proName.innerText(); //allinterTest is [] of string
  47 |         console.log("Product Name:", productName);
  48 |         expect(productName.trim()).not.toBe('');
  49 | 
  50 |         await expect(this.proName).toBeVisible();
  51 |         await expect(this.shtdes).toBeVisible();
  52 |         await expect(this.stock).toBeVisible();
  53 |         await expect(this.ship).toBeVisible();
  54 |         await expect(this.review).toBeVisible();
  55 | 
  56 | // Quantity
  57 |         await expect(this.qty).toBeVisible();
  58 |         const price = await this.qty.innerText();
  59 |         console.log("Default Quantity:",price );
  60 |         expect(price.trim()).not.toBe('');
  61 |         await expect(this.qty).toHaveCount(1);
  62 | 
  63 |         await expect(this.email).toBeVisible();
  64 |         await expect(this.compare).toBeVisible();
  65 | 
  66 |     }
  67 | 
  68 | 
  69 |     async addProductToCart() {
  70 | 
  71 |         await expect(this.addtocart).toBeVisible();
  72 | 
  73 |         await expect(this.addtocart).toBeEnabled();
  74 | 
  75 |         await this.addtocart.click();
  76 | 
  77 |     }
  78 | 
  79 | 
  80 | }
  81 | 
```