# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shoppingCart.spec.ts >> Shopping Cart Module >> Verify the Shopping Cart can be Clickable
- Location: tests\ui\shoppingCart.spec.ts:5:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

- Expected  - 1
+ Received  + 1

@@ -2,8 +2,8 @@
    "_apiName": "Locator",
    "_frame": Object {
      "_guid": "frame@5bc4e26cb2cd19205f3d84832756edeb",
      "_type": "Frame",
    },
-   "_selector": "//tr[td[contains(., 'Remove:')]]//input[@type='text']",
+   "_selector": ".product-unit-price",
    Symbol(nodejs.util.inspect.custom): [Function anonymous],
  }
```

```
Error: expect(locator).toBeChecked() failed

Locator: locator('//tr[td[contains(., \'Remove:\')]]//input[@type=\'checkbox\']')
Expected: checked
Error: element(s) not found

Call log:
  - Expect "toBeChecked" locator('//tr[td[contains(., \'Remove:\')]]//input[@type=\'checkbox\']') with timeout 5000ms
  - waiting for locator('//tr[td[contains(., \'Remove:\')]]//input[@type=\'checkbox\']')
    5 × locator resolved to <input type="checkbox" value="7214356" name="removefromcart"/>
      - unexpected value "unchecked"
    - waiting for "https://demowebshop.tricentis.com/" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"
  - Test ended.

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
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
- strong: Popular tags
- list:
  - listitem:
    - link "apparel":
      - /url: /producttag/4/apparel
  - listitem:
    - link "awesome":
      - /url: /producttag/8/awesome
  - listitem:
    - link "book":
      - /url: /producttag/10/book
  - listitem:
    - link "camera":
      - /url: /producttag/13/camera
  - listitem:
    - link "cell":
      - /url: /producttag/12/cell
  - listitem:
    - link "compact":
      - /url: /producttag/9/compact
  - listitem:
    - link "computer":
      - /url: /producttag/6/computer
  - listitem:
    - link "cool":
      - /url: /producttag/3/cool
  - listitem:
    - link "digital":
      - /url: /producttag/16/digital
  - listitem:
    - link "jeans":
      - /url: /producttag/14/jeans
  - listitem:
    - link "jewelry":
      - /url: /producttag/11/jewelry
  - listitem:
    - link "nice":
      - /url: /producttag/1/nice
  - listitem:
    - link "shirt":
      - /url: /producttag/5/shirt
  - listitem:
    - link "shoes":
      - /url: /producttag/7/shoes
  - listitem:
    - link "TCP":
      - /url: /producttag/19/tcp
- link "View all":
  - /url: /producttag/all
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- strong: Recently viewed products
- list:
  - listitem:
    - link "Picture of Computing and Internet":
      - /url: /computing-and-internet
      - img "Picture of Computing and Internet"
    - link "Computing and Internet":
      - /url: /computing-and-internet
- strong: Community poll
- strong: Do you like nopCommerce?
- list:
  - listitem:
    - radio "Excellent"
    - text: Excellent
  - listitem:
    - radio "Good"
    - text: Good
  - listitem:
    - radio "Poor"
    - text: Poor
  - listitem:
    - radio "Very bad"
    - text: Very bad
- button "Vote"
- link:
  - /url: https://www.tricentis.com/speed/
- link:
  - /url: https://academy.tricentis.com
- heading "Welcome to our store" [level=2]
- paragraph: Welcome to the new Tricentis store!
- paragraph: Feel free to shop around and explore everything.
- strong: Featured products
- link "Picture of $25 Virtual Gift Card":
  - /url: /25-virtual-gift-card
  - img "Picture of $25 Virtual Gift Card"
- heading "$25 Virtual Gift Card" [level=2]:
  - link "$25 Virtual Gift Card":
    - /url: /25-virtual-gift-card
- text: "25.00"
- button "Add to cart"
- link "Picture of 14.1-inch Laptop":
  - /url: /141-inch-laptop
  - img "Picture of 14.1-inch Laptop"
- heading "14.1-inch Laptop" [level=2]:
  - link "14.1-inch Laptop":
    - /url: /141-inch-laptop
- text: "1590.00"
- button "Add to cart"
- link "Picture of Build your own cheap computer":
  - /url: /build-your-cheap-own-computer
  - img "Picture of Build your own cheap computer"
- heading "Build your own cheap computer" [level=2]:
  - link "Build your own cheap computer":
    - /url: /build-your-cheap-own-computer
- text: "800.00"
- button "Add to cart"
- link "Picture of Build your own computer":
  - /url: /build-your-own-computer
  - img "Picture of Build your own computer"
- heading "Build your own computer" [level=2]:
  - link "Build your own computer":
    - /url: /build-your-own-computer
- text: "1200.00"
- button "Add to cart"
- link "Picture of Build your own expensive computer":
  - /url: /build-your-own-expensive-computer-2
  - img "Picture of Build your own expensive computer"
- heading "Build your own expensive computer" [level=2]:
  - link "Build your own expensive computer":
    - /url: /build-your-own-expensive-computer-2
- text: "1800.00"
- button "Add to cart"
- link "Picture of Simple Computer":
  - /url: /simple-computer
  - img "Picture of Simple Computer"
- heading "Simple Computer" [level=2]:
  - link "Simple Computer":
    - /url: /simple-computer
- text: "800.00"
- button "Add to cart"
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
  1   | import { test, Page, Locator, expect } from "@playwright/test";
  2   | 
  3   | export class ShoppingCart {
  4   |     readonly page: Page;
  5   |     readonly shopingCartLink;
  6   |     readonly heading;
  7   |     readonly emptyText;
  8   |     readonly tableHeader;
  9   |     readonly carttableList;
  10  |     readonly checkBox;
  11  |     readonly image;
  12  |     readonly selectedproduct;
  13  |     readonly tablePrice;
  14  |     readonly qtly;
  15  |     readonly total;
  16  |     readonly numofPro;
  17  | 
  18  |     constructor(page: Page) {
  19  |         this.page = page;
  20  | 
  21  |         this.shopingCartLink = page.locator('#topcartlink')
  22  |         this.heading = page.getByRole('heading', { name: 'Shopping cart' });
  23  |         this.emptyText = page.getByText('Your Shopping Cart is empty!');
  24  |         this.tableHeader = page.locator('tr.cart-header-row');
  25  |         this.carttableList = page.locator('tr.cart-item-row');
  26  |         this.checkBox = page.locator(`//tr[td[contains(., 'Remove:')]]//input[@type='checkbox']`);
  27  |         this.image = page.locator(`//tr[td[contains(., 'Remove:')]]//td[2]//img`);
  28  |         this.selectedproduct = page.locator(`//tr[td[contains(., 'Remove:')]]//a`);
  29  |         this.tablePrice = page.locator('.product-unit-price');
  30  |         this.qtly = page.locator(`//tr[td[contains(., 'Remove:')]]//input[@type='text']`);
  31  |         this.total = page.locator('.product-subtotal');
  32  |         this.numofPro = page.locator('.cart-qty')
  33  |     }
  34  |     // Methods
  35  |     async clickShoppingCartLink() {
  36  |         expect(this.shopingCartLink).toBeVisible();
  37  |         await this.shopingCartLink.click();
  38  |     }
  39  | 
  40  |     async emptyCart() {
  41  |         expect(this.emptyText).toBeVisible();
  42  |         const text = await this.emptyText.innerText();
  43  |         console.log(text);
  44  |     }
  45  |     async headingVisible() {
  46  |         expect(this.heading).toBeVisible();
  47  |         expect(this.heading).toHaveText("Shopping cart");
  48  |     }
  49  | 
  50  |     async getAllProductList() {
  51  |         const list = await this.carttableList.allInnerTexts();
  52  |         console.log("List of All Products :", list);
  53  |     }
  54  | 
  55  |     async clickCheckBox() {
  56  |         expect(this.checkBox).toBeVisible();
> 57  |         expect(this.checkBox).toBeChecked();
      |                               ^ Error: expect(locator).toBeChecked() failed
  58  |     }
  59  | 
  60  |     async productImage() {
  61  |         expect(this.image).toBeVisible();
  62  |     }
  63  | 
  64  |     async cartProductName() {
  65  |         expect(this.selectedproduct).toBeVisible();
  66  |         const name = await this.selectedproduct.innerText();
  67  |         console.log("Products in your Cart:", name);
  68  |     }
  69  | 
  70  |     async priceCheck() {
  71  |         expect(this.tablePrice).toBeVisible();
  72  |           expect(this.tablePrice).toBe(this.qtly);
  73  |     }
  74  | 
  75  |     async changeQty() {
  76  |         expect(this.qtly).toBeVisible();
  77  |         expect(this.qtly).toBeEditable();
  78  |     }
  79  | 
  80  |     async productsCountinCart() {
  81  |         expect(this.numofPro).toBeVisible();
  82  |     }
  83  | 
  84  |     async quantityAndPriceChangeCalculation(quantityValue: string) {
  85  | 
  86  |         const initialPrice = await this.tablePrice.innerText();
  87  |         const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
  88  |         console.log("Unit Price:", unitPrice);
  89  | 
  90  |         // more Quantity
  91  |         await this.qtly.fill(quantityValue);
  92  |         console.log("Add to Cart Quantity is:", quantityValue);
  93  | 
  94  |         //  Get the updated total price text.
  95  |         const updatedPriceText = await this.tablePrice.innerText();
  96  |         const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
  97  |         console.log("Total Price for Qty", quantityValue, ":", totalPrice);
  98  | 
  99  |         // Assert math calculation (price * Quantity
  100 |         expect(totalPrice).toBe(unitPrice * parseInt(quantityValue));
  101 | 
  102 |         // Total Price calculation
  103 |         await expect(this.total).toHaveText((unitPrice * parseInt(quantityValue)).toFixed(2));
  104 | 
  105 |     }
  106 | 
  107 | 
  108 | }
```