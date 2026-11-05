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

Expected: 60
Received: 10
```

# Page snapshot

```yaml
- generic [ref=f9e2]:
  - generic [ref=f9e3]:
    - generic [ref=f9e4]:
      - link [ref=f9e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f9e7]
      - list [ref=f9e10]:
        - listitem [ref=f9e11]:
          - link "Register" [ref=f9e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f9e13]:
          - link "Log in" [ref=f9e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f9e15]:
          - link "Shopping cart (0)" [ref=f9e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f9e17]: Shopping cart
            - generic [ref=f9e18]: (0)
        - listitem [ref=f9e19]:
          - link "Wishlist (0)" [ref=f9e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f9e21]: Wishlist
            - generic [ref=f9e22]: (0)
      - generic [ref=f9e24]:
        - status [ref=f9e25]
        - textbox [ref=f9e26]: Search store
        - button "Search" [ref=f9e27] [cursor=pointer]
    - list [ref=f9e29]:
      - listitem [ref=f9e30]:
        - link "Books" [ref=f9e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f9e32]:
        - link "Computers" [ref=f9e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f9e34]:
        - link "Electronics" [ref=f9e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f9e36]:
        - link "Apparel & Shoes" [ref=f9e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f9e38]:
        - link "Digital downloads" [ref=f9e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f9e40]:
        - link "Jewelry" [ref=f9e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f9e42]:
        - link "Gift Cards" [ref=f9e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f9e44]:
        - generic [ref=f9e45]:
          - strong [ref=f9e47]: Categories
          - list [ref=f9e49]:
            - listitem [ref=f9e50]:
              - link "Books" [ref=f9e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f9e52]:
              - link "Computers" [ref=f9e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f9e54]:
              - link "Electronics" [ref=f9e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f9e56]:
              - link "Apparel & Shoes" [ref=f9e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f9e58]:
              - link "Digital downloads" [ref=f9e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f9e60]:
              - link "Jewelry" [ref=f9e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f9e62]:
              - link "Gift Cards" [ref=f9e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f9e64]:
          - strong [ref=f9e66]: Manufacturers
          - list [ref=f9e68]:
            - listitem [ref=f9e69]:
              - link "Tricentis" [ref=f9e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f9e71]:
          - strong [ref=f9e73]: Popular tags
          - generic [ref=f9e74]:
            - list [ref=f9e76]:
              - listitem [ref=f9e77]:
                - link "apparel" [ref=f9e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f9e79]:
                - link "awesome" [ref=f9e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f9e81]:
                - link "book" [ref=f9e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f9e83]:
                - link "camera" [ref=f9e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f9e85]:
                - link "cell" [ref=f9e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f9e87]:
                - link "compact" [ref=f9e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f9e89]:
                - link "computer" [ref=f9e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f9e91]:
                - link "cool" [ref=f9e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f9e93]:
                - link "digital" [ref=f9e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f9e95]:
                - link "jeans" [ref=f9e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f9e97]:
                - link "jewelry" [ref=f9e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f9e99]:
                - link "nice" [ref=f9e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f9e101]:
                - link "shirt" [ref=f9e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f9e103]:
                - link "shoes" [ref=f9e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f9e105]:
                - link "TCP" [ref=f9e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f9e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f9e109]:
        - generic [ref=f9e110]:
          - strong [ref=f9e112]: Newsletter
          - generic [ref=f9e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f9e116]
            - button "Subscribe" [ref=f9e118] [cursor=pointer]
        - generic [ref=f9e119]:
          - strong [ref=f9e121]: Recently viewed products
          - list [ref=f9e123]:
            - listitem [ref=f9e124]:
              - generic [ref=f9e125]:
                - link "Picture of Computing and Internet":
                  - /url: /computing-and-internet
                  - img "Picture of Computing and Internet"
              - link "Computing and Internet" [ref=f9e126] [cursor=pointer]:
                - /url: /computing-and-internet
        - generic [ref=f9e127]:
          - strong [ref=f9e129]: Community poll
          - generic [ref=f9e131]:
            - strong [ref=f9e132]: Do you like nopCommerce?
            - list [ref=f9e133]:
              - listitem [ref=f9e134]:
                - radio "Excellent" [ref=f9e135]
                - text: Excellent
              - listitem [ref=f9e136]:
                - radio "Good" [ref=f9e137]
                - text: Good
              - listitem [ref=f9e138]:
                - radio "Poor" [ref=f9e139]
                - text: Poor
              - listitem [ref=f9e140]:
                - radio "Very bad" [ref=f9e141]
                - text: Very bad
            - button "Vote" [ref=f9e143] [cursor=pointer]
      - generic [ref=f9e146]:
        - generic:
          - generic:
            - link:
              - /url: https://www.tricentis.com/speed/
            - link:
              - /url: https://academy.tricentis.com
        - generic [ref=f9e147]:
          - heading "Welcome to our store" [level=2] [ref=f9e149]
          - generic [ref=f9e150]:
            - paragraph [ref=f9e151]: Welcome to the new Tricentis store!
            - paragraph [ref=f9e152]: Feel free to shop around and explore everything.
        - generic [ref=f9e153]:
          - strong [ref=f9e155]: Featured products
          - generic [ref=f9e157]:
            - link [ref=f9e159] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f9e160]
            - generic [ref=f9e161]:
              - heading [level=2] [ref=f9e162]:
                - link "$25 Virtual Gift Card" [ref=f9e163] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "919 review(s)" [ref=f9e164]
              - generic [ref=f9e167]:
                - generic [ref=f9e168]: "25.00"
                - button "Add to cart" [ref=f9e171] [cursor=pointer]
          - generic [ref=f9e173]:
            - link [ref=f9e175] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f9e176]
            - generic [ref=f9e177]:
              - heading [level=2] [ref=f9e178]:
                - link "14.1-inch Laptop" [ref=f9e179] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1980 review(s)" [ref=f9e180]
              - generic [ref=f9e183]:
                - generic [ref=f9e184]: "1590.00"
                - button "Add to cart" [ref=f9e187] [cursor=pointer]
          - generic [ref=f9e189]:
            - link [ref=f9e191] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f9e192]
            - generic [ref=f9e193]:
              - heading [level=2] [ref=f9e194]:
                - link "Build your own cheap computer" [ref=f9e195] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f9e196]
              - generic [ref=f9e199]:
                - generic [ref=f9e200]: "800.00"
                - button "Add to cart" [ref=f9e203] [cursor=pointer]
          - generic [ref=f9e205]:
            - link [ref=f9e207] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f9e208]
            - generic [ref=f9e209]:
              - heading [level=2] [ref=f9e210]:
                - link "Build your own computer" [ref=f9e211] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f9e212]
              - generic [ref=f9e215]:
                - generic [ref=f9e216]: "1200.00"
                - button "Add to cart" [ref=f9e219] [cursor=pointer]
          - generic [ref=f9e221]:
            - link [ref=f9e223] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f9e224]
            - generic [ref=f9e225]:
              - heading [level=2] [ref=f9e226]:
                - link "Build your own expensive computer" [ref=f9e227] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f9e228]
              - generic [ref=f9e231]:
                - generic [ref=f9e232]: "1800.00"
                - button "Add to cart" [ref=f9e235] [cursor=pointer]
          - generic [ref=f9e237]:
            - link [ref=f9e239] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f9e240]
            - generic [ref=f9e241]:
              - heading [level=2] [ref=f9e242]:
                - link "Simple Computer" [ref=f9e243] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "418 review(s)" [ref=f9e244]
              - generic [ref=f9e247]:
                - generic [ref=f9e248]: "800.00"
                - button "Add to cart" [ref=f9e251] [cursor=pointer]
  - generic [ref=f9e252]:
    - generic [ref=f9e253]:
      - generic [ref=f9e254]:
        - heading "Information" [level=3] [ref=f9e255]
        - list [ref=f9e256]:
          - listitem [ref=f9e257]:
            - link "Sitemap" [ref=f9e258] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f9e259]:
            - link "Shipping & Returns" [ref=f9e260] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f9e261]:
            - link "Privacy Notice" [ref=f9e262] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f9e263]:
            - link "Conditions of Use" [ref=f9e264] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f9e265]:
            - link "About us" [ref=f9e266] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f9e267]:
            - link "Contact us" [ref=f9e268] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f9e269]:
        - heading "Customer service" [level=3] [ref=f9e270]
        - list [ref=f9e271]:
          - listitem [ref=f9e272]:
            - link "Search" [ref=f9e273] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f9e274]:
            - link "News" [ref=f9e275] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f9e276]:
            - link "Blog" [ref=f9e277] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f9e278]:
            - link "Recently viewed products" [ref=f9e279] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f9e280]:
            - link "Compare products list" [ref=f9e281] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f9e282]:
            - link "New products" [ref=f9e283] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f9e284]:
        - heading "My account" [level=3] [ref=f9e285]
        - list [ref=f9e286]:
          - listitem [ref=f9e287]:
            - link "My account" [ref=f9e288] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f9e289]:
            - link "Orders" [ref=f9e290] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f9e291]:
            - link "Addresses" [ref=f9e292] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f9e293]:
            - link "Shopping cart" [ref=f9e294] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f9e295]:
            - link "Wishlist" [ref=f9e296] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f9e297]:
        - heading "Follow us" [level=3] [ref=f9e298]
        - list [ref=f9e299]:
          - listitem [ref=f9e300]:
            - link "Facebook" [ref=f9e301] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f9e302]:
            - link "Twitter" [ref=f9e303] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f9e304]:
            - link "RSS" [ref=f9e305] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f9e306]:
            - link "YouTube" [ref=f9e307] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f9e308]:
            - link "Google+" [ref=f9e309] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f9e310]:
      - text: Powered by
      - link "nopCommerce" [ref=f9e311] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f9e312]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  13  |     readonly tablePrice;
  14  |     readonly qtly;
  15  |     readonly total;
  16  |     readonly numofProHeader;
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
  32  |         this.numofProHeader = page.locator('.cart-qty')
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
  57  |        // expect(this.checkBox).toBeChecked();
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
  72  | 
  73  |     }
  74  | 
  75  |     async changeQty() {
  76  |         expect(this.qtly).toBeVisible();
  77  |         expect(this.qtly).toBeEditable();
  78  |     }
  79  | 
  80  |     async verifyTableQtyMatchesHeaderQty() {
  81  | 
  82  |         const tableQtyValue = await this.qtly.inputValue();  //Get the current quantity value directly from the table input box locator
  83  |         console.log("Table Quantity Value:", tableQtyValue);
  84  | 
  85  |         const headerCartText = await this.numofProHeader.innerText();  // Get the text from your top shopping cart link locator (e.g., "Shopping cart(12)")
  86  |         console.log("Header Cart Text:", headerCartText);
  87  | 
  88  |         // 3. Extract just the numbers from the header text (turns "Shopping cart(12)" into "12")
  89  |         const headerQtyNumber = headerCartText.replace(/[^0-9]/g, '');
  90  |         console.log("Header Quantity Number:", headerQtyNumber);
  91  | 
  92  |         // 4. Assert that both quantities match each other dynamically
  93  |         expect(headerQtyNumber).toBe(tableQtyValue);
  94  |     }
  95  | 
  96  |     async quantityAndPriceChangeCalculation(quantityValue: string) {
  97  | 
  98  |         const initialPrice = await this.tablePrice.innerText();
  99  |         const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
  100 |         console.log("Unit Price:", unitPrice);
  101 | 
  102 |         // more Quantity
  103 |         await this.qtly.fill(quantityValue);
  104 |         console.log("Add to Cart Quantity is:", quantityValue);
  105 |         await this.page.keyboard.press('Enter');
  106 | 
  107 |         //  Get the updated total price text.
  108 |         const updatedPriceText = await this.tablePrice.innerText();
  109 |         const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
  110 |         console.log("Total Price for Qty", quantityValue, ":", totalPrice);
  111 | 
  112 |         // Assert math calculation (price * Quantity
> 113 |         expect(totalPrice).toBe(unitPrice * parseInt(quantityValue));
      |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  114 | 
  115 | 
  116 |         // Total Price calculation
  117 |         await expect(this.total).toHaveText((unitPrice * parseInt(quantityValue)).toFixed(2));
  118 | 
  119 |     }
  120 | 
  121 | 
  122 | }
```