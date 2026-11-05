# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shoppingCart.spec.ts >> Shopping Cart Module >> Verify the Shopping Cart can be Clickable
- Location: tests\ui\shoppingCart.spec.ts:5:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Shopping cart' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Shopping cart' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Shopping cart' })

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
    - link "Shopping cart (11)":
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
- list:
  - listitem:
    - link "Home":
      - /url: /
    - text: /
  - listitem:
    - link "Books":
      - /url: /books
    - text: /
  - listitem:
    - strong: Computing and Internet
- img "Picture of Computing and Internet"
- heading "Computing and Internet" [level=1]
- text: "More Than 100 tips about computing and internet. Availability: In stock Free shipping"
- link "3151 review(s)":
  - /url: /productreviews/13
- text: "|"
- link "Add your review":
  - /url: /productreviews/13
- text: "Old price: 30.00 Price: 10.00 Qty:"
- textbox "Qty:": "1"
- button "Add to cart"
- button "Email a friend"
- button "Add to compare list"
- paragraph: Get to know everything about computing and the internet.
- strong: Product tags
- list:
  - listitem:
    - link "nice":
      - /url: /producttag/1/nice
    - text: (6)
  - listitem: ","
  - listitem:
    - link "awesome":
      - /url: /producttag/8/awesome
    - text: (20)
  - listitem: ","
  - listitem:
    - link "book":
      - /url: /producttag/10/book
    - text: (6)
- strong: Customers who bought this item also bought
- link "Picture of Simple Computer":
  - /url: /simple-computer
  - img "Picture of Simple Computer"
- heading "Simple Computer" [level=2]:
  - link "Simple Computer":
    - /url: /simple-computer
- text: "800.00"
- button "Add to cart"
- link "Picture of Build your own expensive computer":
  - /url: /build-your-own-expensive-computer-2
  - img "Picture of Build your own expensive computer"
- heading "Build your own expensive computer" [level=2]:
  - link "Build your own expensive computer":
    - /url: /build-your-own-expensive-computer-2
- text: "1800.00"
- button "Add to cart"
- link "Picture of Blue Jeans":
  - /url: /blue-jeans
  - img "Picture of Blue Jeans"
- heading "Blue Jeans" [level=2]:
  - link "Blue Jeans":
    - /url: /blue-jeans
- text: "1.00"
- button "Add to cart"
- strong: Related products
- link "Picture of Health Book":
  - /url: /health
  - img "Picture of Health Book"
- heading "Health Book" [level=2]:
  - link "Health Book":
    - /url: /health
- text: 27.00 10.00
- button "Add to cart"
- link "Picture of Science":
  - /url: /science
  - img "Picture of Science"
- heading "Science" [level=2]:
  - link "Science":
    - /url: /science
- text: 67.00 51.00
- link "Picture of Fiction":
  - /url: /fiction
  - img "Picture of Fiction"
- heading "Fiction" [level=2]:
  - link "Fiction":
    - /url: /fiction
- text: 35.00 24.00
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

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('heading', { name: 'Shopping cart' })
    - waiting for "https://demowebshop.tricentis.com/logout" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"

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
  16  | 
  17  |     constructor(page: Page) {
  18  |         this.page = page;
  19  | 
  20  |         this.shopingCartLink = page.getByRole('heading', { name: 'Shopping cart' });
  21  |         this.heading = page.getByRole('heading', { name: 'Shopping cart' });
  22  |         this.emptyText = page.getByText('Your Shopping Cart is empty!');
  23  |         this.tableHeader = page.locator('tr.cart-header-row');
  24  |         this.carttableList = page.locator('tr.cart-item-row');
  25  |         this.checkBox = page.locator(`//tr[td[contains(., 'Remove:')]]//input[@type='checkbox']`);
  26  |         this.image = page.locator(`//tr[td[contains(., 'Remove:')]]//td[2]//img`);
  27  |         this.selectedproduct = page.locator(`//tr[td[contains(., 'Remove:')]]//a`);
  28  |         this.tablePrice = page.locator('.product-unit-price');
  29  |         this.qtly = page.locator(`//tr[td[contains(., 'Remove:')]]//input[@type='text']`);
  30  |         this.total = page.locator('.product-subtotal');
  31  | 
  32  |     }
  33  |     // Methods
  34  |     async clickShoppingCartLink() {
  35  |         expect(this.shopingCartLink).toBeVisible();
> 36  |         await this.shopingCartLink.click();
      |                                    ^ Error: locator.click: Test ended.
  37  |     }
  38  | 
  39  |     async emptyCart(){
  40  |         expect(this.emptyText).toBeVisible();
  41  |         const text = await this.emptyText.innerText();
  42  |         console.log(text);
  43  |     }
  44  |     async headingVisible() {
  45  |         expect(this.heading).toBeVisible();
  46  |         expect(this.heading).toHaveText("Shopping cart");
  47  |     }
  48  | 
  49  |     async getAllProductList() {
  50  |         const list = await this.carttableList.allInnerTexts();
  51  |         console.log("List of All Products :", list);
  52  |     }
  53  | 
  54  |     async clickCheckBox() {
  55  |         expect(this.checkBox).toBeVisible();
  56  |         expect(this.checkBox).toBeChecked();
  57  |     }
  58  | 
  59  |     async productImage() {
  60  |         expect(this.image).toBeVisible();
  61  |     }
  62  | 
  63  |     async cartProductName() {
  64  |         expect(this.selectedproduct).toBeVisible();
  65  |         const name = await this.selectedproduct.innerText();
  66  |         console.log("Products in your Cart:", name);
  67  |     }
  68  | 
  69  |     async priceCheck() {
  70  |         expect(this.tablePrice).toBeVisible();
  71  |     }
  72  | 
  73  |     async changeQty() {
  74  |         expect(this.qtly).toBeVisible();
  75  |         expect(this.qtly).toBeEditable();
  76  |     }
  77  |     
  78  |     async quantityAndPriceChangeCalculation(quantityValue: string) {
  79  | 
  80  |         const initialPrice = await this.tablePrice.innerText();
  81  |         const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
  82  |         console.log("Unit Price:", unitPrice);
  83  | 
  84  |         // more Quantity
  85  |         await this.qtly.fill(quantityValue);
  86  |         console.log("Add to Cart Quantity is:", quantityValue);
  87  | 
  88  |         //  Get the updated total price text.
  89  |         const updatedPriceText = await this.tablePrice.innerText();
  90  |         const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
  91  |         console.log("Total Price for Qty", quantityValue, ":", totalPrice);
  92  | 
  93  |         // Assert math calculation
  94  |         expect(totalPrice).toBe(unitPrice * parseInt(quantityValue));
  95  | 
  96  |         // Total Price calculation
  97  | 
  98  |         expect(this.total).toHaveValue("totalPrice");
  99  | 
  100 |     }
  101 | 
  102 | 
  103 | }
```