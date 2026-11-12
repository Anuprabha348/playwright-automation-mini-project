# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\regression.spec.ts >> Regression Testing >> End To End
- Location: tests\ui\regression.spec.ts:6:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 20
Received: 10
```

# Page snapshot

```yaml
- generic [ref=f15e2]:
  - generic [ref=f15e3]:
    - generic [ref=f15e4]:
      - link [ref=f15e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f15e7]
      - list [ref=f15e10]:
        - listitem [ref=f15e11]:
          - link "Register" [ref=f15e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f15e13]:
          - link "Log in" [ref=f15e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f15e15]:
          - link "Shopping cart (0)" [ref=f15e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f15e17]: Shopping cart
            - generic [ref=f15e18]: (0)
        - listitem [ref=f15e19]:
          - link "Wishlist (0)" [ref=f15e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f15e21]: Wishlist
            - generic [ref=f15e22]: (0)
      - generic [ref=f15e24]:
        - status [ref=f15e25]
        - textbox [ref=f15e26]: Search store
        - button "Search" [ref=f15e27] [cursor=pointer]
    - list [ref=f15e29]:
      - listitem [ref=f15e30]:
        - link "Books" [ref=f15e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f15e32]:
        - link "Computers" [ref=f15e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f15e34]:
        - link "Electronics" [ref=f15e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f15e36]:
        - link "Apparel & Shoes" [ref=f15e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f15e38]:
        - link "Digital downloads" [ref=f15e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f15e40]:
        - link "Jewelry" [ref=f15e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f15e42]:
        - link "Gift Cards" [ref=f15e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f15e44]:
        - generic [ref=f15e45]:
          - strong [ref=f15e47]: Categories
          - list [ref=f15e49]:
            - listitem [ref=f15e50]:
              - link "Books" [ref=f15e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f15e52]:
              - link "Computers" [ref=f15e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f15e54]:
              - link "Electronics" [ref=f15e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f15e56]:
              - link "Apparel & Shoes" [ref=f15e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f15e58]:
              - link "Digital downloads" [ref=f15e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f15e60]:
              - link "Jewelry" [ref=f15e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f15e62]:
              - link "Gift Cards" [ref=f15e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f15e64]:
          - strong [ref=f15e66]: Manufacturers
          - list [ref=f15e68]:
            - listitem [ref=f15e69]:
              - link "Tricentis" [ref=f15e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f15e71]:
          - strong [ref=f15e73]: Popular tags
          - generic [ref=f15e74]:
            - list [ref=f15e76]:
              - listitem [ref=f15e77]:
                - link "apparel" [ref=f15e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f15e79]:
                - link "awesome" [ref=f15e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f15e81]:
                - link "book" [ref=f15e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f15e83]:
                - link "camera" [ref=f15e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f15e85]:
                - link "cell" [ref=f15e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f15e87]:
                - link "compact" [ref=f15e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f15e89]:
                - link "computer" [ref=f15e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f15e91]:
                - link "cool" [ref=f15e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f15e93]:
                - link "digital" [ref=f15e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f15e95]:
                - link "jeans" [ref=f15e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f15e97]:
                - link "jewelry" [ref=f15e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f15e99]:
                - link "nice" [ref=f15e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f15e101]:
                - link "shirt" [ref=f15e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f15e103]:
                - link "shoes" [ref=f15e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f15e105]:
                - link "TCP" [ref=f15e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f15e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f15e109]:
        - generic [ref=f15e110]:
          - strong [ref=f15e112]: Newsletter
          - generic [ref=f15e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f15e116]
            - button "Subscribe" [ref=f15e118] [cursor=pointer]
        - generic [ref=f15e119]:
          - strong [ref=f15e121]: Recently viewed products
          - list [ref=f15e123]:
            - listitem [ref=f15e124]:
              - link [ref=f15e126] [cursor=pointer]:
                - /url: /computing-and-internet
                - img "Picture of Computing and Internet" [ref=f15e127]
              - link "Computing and Internet" [ref=f15e128] [cursor=pointer]:
                - /url: /computing-and-internet
        - generic [ref=f15e129]:
          - strong [ref=f15e131]: Community poll
          - generic [ref=f15e133]:
            - strong [ref=f15e134]: Do you like nopCommerce?
            - list [ref=f15e135]:
              - listitem [ref=f15e136]:
                - radio "Excellent" [ref=f15e137]
                - text: Excellent
              - listitem [ref=f15e138]:
                - radio "Good" [ref=f15e139]
                - text: Good
              - listitem [ref=f15e140]:
                - radio "Poor" [ref=f15e141]
                - text: Poor
              - listitem [ref=f15e142]:
                - radio "Very bad" [ref=f15e143]
                - text: Very bad
            - button "Vote" [ref=f15e145] [cursor=pointer]
      - generic [ref=f15e148]:
        - generic:
          - generic:
            - link:
              - /url: https://www.tricentis.com/speed/
            - link:
              - /url: https://academy.tricentis.com
        - generic [ref=f15e149]:
          - heading "Welcome to our store" [level=2] [ref=f15e151]
          - generic [ref=f15e152]:
            - paragraph [ref=f15e153]: Welcome to the new Tricentis store!
            - paragraph [ref=f15e154]: Feel free to shop around and explore everything.
        - generic [ref=f15e155]:
          - strong [ref=f15e157]: Featured products
          - generic [ref=f15e159]:
            - link [ref=f15e161] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f15e162]
            - generic [ref=f15e163]:
              - heading [level=2] [ref=f15e164]:
                - link "$25 Virtual Gift Card" [ref=f15e165] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "929 review(s)" [ref=f15e166]
              - generic [ref=f15e169]:
                - generic [ref=f15e170]: "25.00"
                - button "Add to cart" [ref=f15e173] [cursor=pointer]
          - generic [ref=f15e175]:
            - link [ref=f15e177] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f15e178]
            - generic [ref=f15e179]:
              - heading [level=2] [ref=f15e180]:
                - link "14.1-inch Laptop" [ref=f15e181] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1998 review(s)" [ref=f15e182]
              - generic [ref=f15e185]:
                - generic [ref=f15e186]: "1590.00"
                - button "Add to cart" [ref=f15e189] [cursor=pointer]
          - generic [ref=f15e191]:
            - link [ref=f15e193] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f15e194]
            - generic [ref=f15e195]:
              - heading [level=2] [ref=f15e196]:
                - link "Build your own cheap computer" [ref=f15e197] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f15e198]
              - generic [ref=f15e201]:
                - generic [ref=f15e202]: "800.00"
                - button "Add to cart" [ref=f15e205] [cursor=pointer]
          - generic [ref=f15e207]:
            - link [ref=f15e209] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f15e210]
            - generic [ref=f15e211]:
              - heading [level=2] [ref=f15e212]:
                - link "Build your own computer" [ref=f15e213] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f15e214]
              - generic [ref=f15e217]:
                - generic [ref=f15e218]: "1200.00"
                - button "Add to cart" [ref=f15e221] [cursor=pointer]
          - generic [ref=f15e223]:
            - link [ref=f15e225] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f15e226]
            - generic [ref=f15e227]:
              - heading [level=2] [ref=f15e228]:
                - link "Build your own expensive computer" [ref=f15e229] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f15e230]
              - generic [ref=f15e233]:
                - generic [ref=f15e234]: "1800.00"
                - button "Add to cart" [ref=f15e237] [cursor=pointer]
          - generic [ref=f15e239]:
            - link [ref=f15e241] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f15e242]
            - generic [ref=f15e243]:
              - heading [level=2] [ref=f15e244]:
                - link "Simple Computer" [ref=f15e245] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "418 review(s)" [ref=f15e246]
              - generic [ref=f15e249]:
                - generic [ref=f15e250]: "800.00"
                - button "Add to cart" [ref=f15e253] [cursor=pointer]
  - generic [ref=f15e254]:
    - generic [ref=f15e255]:
      - generic [ref=f15e256]:
        - heading "Information" [level=3] [ref=f15e257]
        - list [ref=f15e258]:
          - listitem [ref=f15e259]:
            - link "Sitemap" [ref=f15e260] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f15e261]:
            - link "Shipping & Returns" [ref=f15e262] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f15e263]:
            - link "Privacy Notice" [ref=f15e264] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f15e265]:
            - link "Conditions of Use" [ref=f15e266] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f15e267]:
            - link "About us" [ref=f15e268] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f15e269]:
            - link "Contact us" [ref=f15e270] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f15e271]:
        - heading "Customer service" [level=3] [ref=f15e272]
        - list [ref=f15e273]:
          - listitem [ref=f15e274]:
            - link "Search" [ref=f15e275] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f15e276]:
            - link "News" [ref=f15e277] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f15e278]:
            - link "Blog" [ref=f15e279] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f15e280]:
            - link "Recently viewed products" [ref=f15e281] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f15e282]:
            - link "Compare products list" [ref=f15e283] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f15e284]:
            - link "New products" [ref=f15e285] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f15e286]:
        - heading "My account" [level=3] [ref=f15e287]
        - list [ref=f15e288]:
          - listitem [ref=f15e289]:
            - link "My account" [ref=f15e290] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f15e291]:
            - link "Orders" [ref=f15e292] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f15e293]:
            - link "Addresses" [ref=f15e294] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f15e295]:
            - link "Shopping cart" [ref=f15e296] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f15e297]:
            - link "Wishlist" [ref=f15e298] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f15e299]:
        - heading "Follow us" [level=3] [ref=f15e300]
        - list [ref=f15e301]:
          - listitem [ref=f15e302]:
            - link "Facebook" [ref=f15e303] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f15e304]:
            - link "Twitter" [ref=f15e305] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f15e306]:
            - link "RSS" [ref=f15e307] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f15e308]:
            - link "YouTube" [ref=f15e309] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f15e310]:
            - link "Google+" [ref=f15e311] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f15e312]:
      - text: Powered by
      - link "nopCommerce" [ref=f15e313] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f15e314]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { test, Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class ProductDetails {
  4   |     readonly page: Page;
  5   |     readonly prodetails;
  6   |     readonly image;
  7   |     readonly des;
  8   |     readonly proName;
  9   |     readonly shtdes;
  10  |     readonly stock;
  11  |     readonly ship;
  12  |     readonly review;
  13  |     readonly price;
  14  |     readonly qty;
  15  |     readonly addtocart;
  16  |     readonly email;
  17  |     readonly compare;
  18  |     readonly succ;
  19  |     readonly negqty;
  20  | 
  21  | 
  22  |     constructor(page: Page) {
  23  |         this.page = page;
  24  |         this.prodetails = page.locator('div.page.product-details-page');
  25  |         this.image = page.locator('#main-product-img-13:visible')
  26  |         this.des = page.getByText('Get to know everything about computing and the internet.', { exact: true });
  27  |         this.proName = page.locator('div.product-name');
  28  |         this.shtdes = page.locator(".short-description");
  29  |         this.stock = page.locator(".stock");
  30  |         this.ship = page.locator('.free-shipping');
  31  |         this.review = page.locator(".product-reviews-overview");
  32  |         this.price = page.locator(".price-value-13")
  33  |         this.qty = page.locator("#addtocart_13_EnteredQuantity");
  34  |         this.addtocart = page.locator('#add-to-cart-button-13');
  35  |         this.email = page.locator('.email-a-friend');
  36  |         this.compare = page.locator('.compare-products');
  37  |         this.succ = page.getByText('The product has been added to your shopping cart', { exact: true })
  38  |         this.negqty = page.getByText('Quantity should be positive', { exact: true })
  39  |     }
  40  | 
  41  |     // Methods
  42  | 
  43  |     async verifyProductDetails(expectedProductName: string, ) {
  44  |         // product details 
  45  | 
  46  |         await expect(this.prodetails).toBeVisible();
  47  |         await expect(this.image).toBeVisible();
  48  |         await expect(this.des).toBeVisible();
  49  | 
  50  |         const productName = await this.proName.innerText(); //allinterTest is [] of string
  51  |         console.log("Product Name:", productName);
  52  |         expect(productName.trim()).not.toBe('');
  53  | 
  54  |         await expect(this.proName).toBeVisible();
  55  |         await expect(this.shtdes).toBeVisible();
  56  |         await expect(this.stock).toBeVisible();
  57  |         await expect(this.ship).toBeVisible();
  58  |         await expect(this.review).toBeVisible();
  59  | 
  60  |         // Quantity
  61  |         await expect(this.qty).toBeVisible();
  62  |         const def = await this.qty.inputValue(); // no innertext because its number.
  63  |         console.log("Default Quantity is:", def);
  64  |         // expect(price.trim()).not.toBe('');
  65  |         await expect(this.qty).toHaveCount(1);
  66  | 
  67  |         // quantity validation
  68  | 
  69  |         await this.qty.fill("0");
  70  |         await this.addtocart.click();
  71  |         await expect(this.negqty).toBeVisible();
  72  |         const validation = await this.negqty.innerText();
  73  |         console.log("Validation msg:", validation);
  74  | 
  75  |         //buttons
  76  |         await expect(this.email).toBeVisible();
  77  |         await expect(this.compare).toBeVisible();
  78  |         await this.addtocart.click();
  79  |     }
  80  | 
  81  |     //Verify price Calculation.
  82  |     async VerifyQuanitypriceincreese(quantityValue: string) {
  83  | 
  84  |         //.innerText(): Used to extract visible text content from standard HTML display elements like spans or divs (such as product prices).
  85  |         //.inputValue(): Used to retrieve the current typed or selected value specifically from interactive form elements like input boxes (such as quantity fields).
  86  | 
  87  |         const initialPrice = await this.price.innerText();
  88  |         const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
  89  |         console.log("Unit Price:", unitPrice);
  90  | 
  91  |         // more Quantity
  92  |         await this.qty.fill(quantityValue);
  93  |         console.log("Add to Cart Quantity is:", quantityValue);
  94  | 
  95  |         //  Get the updated total price text.
  96  |         const updatedPriceText = await this.price.innerText();
  97  |         const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
  98  |         console.log("Total Price for Qty", quantityValue, ":", totalPrice);
  99  | 
  100 |         // Assert math calculation
> 101 |         expect.soft(totalPrice).toBe(unitPrice * parseInt(quantityValue));
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  102 |         await this.addtocart.click();
  103 |     }
  104 | 
  105 | 
  106 |     async addProductToCart() {
  107 | 
  108 |         await expect(this.addtocart).toBeVisible();
  109 | 
  110 |         await expect(this.addtocart).toBeEnabled();
  111 | 
  112 |         await this.addtocart.click();
  113 | 
  114 |         expect(this.succ).toBeVisible();
  115 | 
  116 |         const SuccesMessage = await this.succ.innerText();
  117 |         console.log("Add to card Status:", SuccesMessage);
  118 |     }
  119 | }
  120 | 
```