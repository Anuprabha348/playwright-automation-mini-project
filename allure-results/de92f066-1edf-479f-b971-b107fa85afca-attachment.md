# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shoppingCart.spec.ts >> Shopping Cart Module >> Verify the Shopping Cart can be Clickable
- Location: tests\ui\shoppingCart.spec.ts:5:7

# Error details

```
TypeError: shoppingCart.productsCountinCart is not a function
```

# Page snapshot

```yaml
- generic [ref=f8e2]:
  - generic [ref=f8e3]:
    - generic [ref=f8e4]:
      - link [ref=f8e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f8e7]
      - list [ref=f8e10]:
        - listitem [ref=f8e11]:
          - link "Register" [ref=f8e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f8e13]:
          - link "Log in" [ref=f8e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f8e15]:
          - link "Shopping cart (0)" [ref=f8e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f8e17]: Shopping cart
            - generic [ref=f8e18]: (0)
        - listitem [ref=f8e19]:
          - link "Wishlist (0)" [ref=f8e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f8e21]: Wishlist
            - generic [ref=f8e22]: (0)
      - generic [ref=f8e24]:
        - status [ref=f8e25]
        - textbox [ref=f8e26]: Search store
        - button "Search" [ref=f8e27] [cursor=pointer]
    - list [ref=f8e29]:
      - listitem [ref=f8e30]:
        - link "Books" [ref=f8e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f8e32]:
        - link "Computers" [ref=f8e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f8e34]:
        - link "Electronics" [ref=f8e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f8e36]:
        - link "Apparel & Shoes" [ref=f8e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f8e38]:
        - link "Digital downloads" [ref=f8e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f8e40]:
        - link "Jewelry" [ref=f8e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f8e42]:
        - link "Gift Cards" [ref=f8e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f8e44]:
        - generic [ref=f8e45]:
          - strong [ref=f8e47]: Categories
          - list [ref=f8e49]:
            - listitem [ref=f8e50]:
              - link "Books" [ref=f8e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f8e52]:
              - link "Computers" [ref=f8e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f8e54]:
              - link "Electronics" [ref=f8e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f8e56]:
              - link "Apparel & Shoes" [ref=f8e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f8e58]:
              - link "Digital downloads" [ref=f8e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f8e60]:
              - link "Jewelry" [ref=f8e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f8e62]:
              - link "Gift Cards" [ref=f8e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f8e64]:
          - strong [ref=f8e66]: Manufacturers
          - list [ref=f8e68]:
            - listitem [ref=f8e69]:
              - link "Tricentis" [ref=f8e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f8e71]:
          - strong [ref=f8e73]: Popular tags
          - generic [ref=f8e74]:
            - list [ref=f8e76]:
              - listitem [ref=f8e77]:
                - link "apparel" [ref=f8e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f8e79]:
                - link "awesome" [ref=f8e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f8e81]:
                - link "book" [ref=f8e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f8e83]:
                - link "camera" [ref=f8e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f8e85]:
                - link "cell" [ref=f8e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f8e87]:
                - link "compact" [ref=f8e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f8e89]:
                - link "computer" [ref=f8e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f8e91]:
                - link "cool" [ref=f8e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f8e93]:
                - link "digital" [ref=f8e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f8e95]:
                - link "jeans" [ref=f8e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f8e97]:
                - link "jewelry" [ref=f8e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f8e99]:
                - link "nice" [ref=f8e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f8e101]:
                - link "shirt" [ref=f8e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f8e103]:
                - link "shoes" [ref=f8e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f8e105]:
                - link "TCP" [ref=f8e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f8e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f8e109]:
        - generic [ref=f8e110]:
          - strong [ref=f8e112]: Newsletter
          - generic [ref=f8e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f8e116]
            - button "Subscribe" [ref=f8e118] [cursor=pointer]
        - generic [ref=f8e119]:
          - strong [ref=f8e121]: Recently viewed products
          - list [ref=f8e123]:
            - listitem [ref=f8e124]:
              - generic [ref=f8e125]:
                - link "Picture of Computing and Internet":
                  - /url: /computing-and-internet
                  - img "Picture of Computing and Internet"
              - link "Computing and Internet" [ref=f8e126] [cursor=pointer]:
                - /url: /computing-and-internet
        - generic [ref=f8e127]:
          - strong [ref=f8e129]: Community poll
          - generic [ref=f8e131]:
            - strong [ref=f8e132]: Do you like nopCommerce?
            - list [ref=f8e133]:
              - listitem [ref=f8e134]:
                - radio "Excellent" [ref=f8e135]
                - text: Excellent
              - listitem [ref=f8e136]:
                - radio "Good" [ref=f8e137]
                - text: Good
              - listitem [ref=f8e138]:
                - radio "Poor" [ref=f8e139]
                - text: Poor
              - listitem [ref=f8e140]:
                - radio "Very bad" [ref=f8e141]
                - text: Very bad
            - button "Vote" [ref=f8e143] [cursor=pointer]
      - generic [ref=f8e146]:
        - generic:
          - generic:
            - link:
              - /url: https://www.tricentis.com/speed/
            - link:
              - /url: https://academy.tricentis.com
        - generic [ref=f8e147]:
          - heading "Welcome to our store" [level=2] [ref=f8e149]
          - generic [ref=f8e150]:
            - paragraph [ref=f8e151]: Welcome to the new Tricentis store!
            - paragraph [ref=f8e152]: Feel free to shop around and explore everything.
        - generic [ref=f8e153]:
          - strong [ref=f8e155]: Featured products
          - generic [ref=f8e157]:
            - link [ref=f8e159] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f8e160]
            - generic [ref=f8e161]:
              - heading [level=2] [ref=f8e162]:
                - link "$25 Virtual Gift Card" [ref=f8e163] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "919 review(s)" [ref=f8e164]
              - generic [ref=f8e167]:
                - generic [ref=f8e168]: "25.00"
                - button "Add to cart" [ref=f8e171] [cursor=pointer]
          - generic [ref=f8e173]:
            - link [ref=f8e175] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f8e176]
            - generic [ref=f8e177]:
              - heading [level=2] [ref=f8e178]:
                - link "14.1-inch Laptop" [ref=f8e179] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1980 review(s)" [ref=f8e180]
              - generic [ref=f8e183]:
                - generic [ref=f8e184]: "1590.00"
                - button "Add to cart" [ref=f8e187] [cursor=pointer]
          - generic [ref=f8e189]:
            - link [ref=f8e191] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f8e192]
            - generic [ref=f8e193]:
              - heading [level=2] [ref=f8e194]:
                - link "Build your own cheap computer" [ref=f8e195] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f8e196]
              - generic [ref=f8e199]:
                - generic [ref=f8e200]: "800.00"
                - button "Add to cart" [ref=f8e203] [cursor=pointer]
          - generic [ref=f8e205]:
            - link [ref=f8e207] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f8e208]
            - generic [ref=f8e209]:
              - heading [level=2] [ref=f8e210]:
                - link "Build your own computer" [ref=f8e211] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f8e212]
              - generic [ref=f8e215]:
                - generic [ref=f8e216]: "1200.00"
                - button "Add to cart" [ref=f8e219] [cursor=pointer]
          - generic [ref=f8e221]:
            - link [ref=f8e223] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f8e224]
            - generic [ref=f8e225]:
              - heading [level=2] [ref=f8e226]:
                - link "Build your own expensive computer" [ref=f8e227] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f8e228]
              - generic [ref=f8e231]:
                - generic [ref=f8e232]: "1800.00"
                - button "Add to cart" [ref=f8e235] [cursor=pointer]
          - generic [ref=f8e237]:
            - link [ref=f8e239] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f8e240]
            - generic [ref=f8e241]:
              - heading [level=2] [ref=f8e242]:
                - link "Simple Computer" [ref=f8e243] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "418 review(s)" [ref=f8e244]
              - generic [ref=f8e247]:
                - generic [ref=f8e248]: "800.00"
                - button "Add to cart" [ref=f8e251] [cursor=pointer]
  - generic [ref=f8e252]:
    - generic [ref=f8e253]:
      - generic [ref=f8e254]:
        - heading "Information" [level=3] [ref=f8e255]
        - list [ref=f8e256]:
          - listitem [ref=f8e257]:
            - link "Sitemap" [ref=f8e258] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f8e259]:
            - link "Shipping & Returns" [ref=f8e260] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f8e261]:
            - link "Privacy Notice" [ref=f8e262] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f8e263]:
            - link "Conditions of Use" [ref=f8e264] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f8e265]:
            - link "About us" [ref=f8e266] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f8e267]:
            - link "Contact us" [ref=f8e268] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f8e269]:
        - heading "Customer service" [level=3] [ref=f8e270]
        - list [ref=f8e271]:
          - listitem [ref=f8e272]:
            - link "Search" [ref=f8e273] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f8e274]:
            - link "News" [ref=f8e275] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f8e276]:
            - link "Blog" [ref=f8e277] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f8e278]:
            - link "Recently viewed products" [ref=f8e279] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f8e280]:
            - link "Compare products list" [ref=f8e281] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f8e282]:
            - link "New products" [ref=f8e283] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f8e284]:
        - heading "My account" [level=3] [ref=f8e285]
        - list [ref=f8e286]:
          - listitem [ref=f8e287]:
            - link "My account" [ref=f8e288] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f8e289]:
            - link "Orders" [ref=f8e290] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f8e291]:
            - link "Addresses" [ref=f8e292] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f8e293]:
            - link "Shopping cart" [ref=f8e294] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f8e295]:
            - link "Wishlist" [ref=f8e296] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f8e297]:
        - heading "Follow us" [level=3] [ref=f8e298]
        - list [ref=f8e299]:
          - listitem [ref=f8e300]:
            - link "Facebook" [ref=f8e301] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f8e302]:
            - link "Twitter" [ref=f8e303] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f8e304]:
            - link "RSS" [ref=f8e305] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f8e306]:
            - link "YouTube" [ref=f8e307] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f8e308]:
            - link "Google+" [ref=f8e309] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f8e310]:
      - text: Powered by
      - link "nopCommerce" [ref=f8e311] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f8e312]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test } from "../fixtures/baseFixtures";
  2  | 
  3  | test.describe("Shopping Cart Module", () => {
  4  | 
  5  |   test("Verify the Shopping Cart can be Clickable", async ({ page, loggedUser, productSearch, productDetails, shoppingCart }) => {
  6  |     
  7  |     // 1. Search and navigate to a product first so productDetails works
  8  |     const searchTerm = 'Computing and Internet';
  9  |     await productSearch.EnterSerch(searchTerm);
  10 |     await productSearch.clickSearchedProduct(searchTerm);
  11 | 
  12 |     // 2. Add product to cart from Product Details page
  13 |     await productDetails.addProductToCart();
  14 | 
  15 |     // 3. Navigate to Shopping Cart
  16 |     await shoppingCart.clickShoppingCartLink();
  17 |     await shoppingCart.headingVisible();
  18 | 
  19 |     // 4. Perform cart validations
  20 |     await shoppingCart.getAllProductList();
> 21 |     await shoppingCart.productsCountinCart();
     |                        ^ TypeError: shoppingCart.productsCountinCart is not a function
  22 |     await shoppingCart.clickCheckBox();
  23 |     await shoppingCart.productImage();
  24 |     await shoppingCart.cartProductName();
  25 |     await shoppingCart.priceCheck();
  26 |     await shoppingCart.changeQty();
  27 |     await shoppingCart.quantityAndPriceChangeCalculation('6');
  28 |   });
  29 | 
  30 | });
```