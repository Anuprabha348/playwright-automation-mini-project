# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout Module >> check billing Address Enter & validation,payment method,order confirm 
- Location: tests\ui\checkout.spec.ts:26:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#checkout-payment-info-load .payment-details, #checkout-payment-info-load p').first()

```

# Page snapshot

```yaml
- generic [ref=f7e2]:
  - generic [ref=f7e3]:
    - generic [ref=f7e4]:
      - link [ref=f7e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f7e7]
      - list [ref=f7e10]:
        - listitem [ref=f7e11]:
          - link "Register" [ref=f7e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f7e13]:
          - link "Log in" [ref=f7e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f7e15]:
          - link "Shopping cart (0)" [ref=f7e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f7e17]: Shopping cart
            - generic [ref=f7e18]: (0)
        - listitem [ref=f7e19]:
          - link "Wishlist (0)" [ref=f7e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f7e21]: Wishlist
            - generic [ref=f7e22]: (0)
      - generic [ref=f7e24]:
        - status [ref=f7e25]
        - textbox [ref=f7e26]: Search store
        - button "Search" [ref=f7e27] [cursor=pointer]
    - list [ref=f7e29]:
      - listitem [ref=f7e30]:
        - link "Books" [ref=f7e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f7e32]:
        - link "Computers" [ref=f7e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f7e34]:
        - link "Electronics" [ref=f7e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f7e36]:
        - link "Apparel & Shoes" [ref=f7e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f7e38]:
        - link "Digital downloads" [ref=f7e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f7e40]:
        - link "Jewelry" [ref=f7e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f7e42]:
        - link "Gift Cards" [ref=f7e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f7e44]:
        - generic [ref=f7e45]:
          - strong [ref=f7e47]: Categories
          - list [ref=f7e49]:
            - listitem [ref=f7e50]:
              - link "Books" [ref=f7e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f7e52]:
              - link "Computers" [ref=f7e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f7e54]:
              - link "Electronics" [ref=f7e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f7e56]:
              - link "Apparel & Shoes" [ref=f7e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f7e58]:
              - link "Digital downloads" [ref=f7e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f7e60]:
              - link "Jewelry" [ref=f7e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f7e62]:
              - link "Gift Cards" [ref=f7e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f7e64]:
          - strong [ref=f7e66]: Manufacturers
          - list [ref=f7e68]:
            - listitem [ref=f7e69]:
              - link "Tricentis" [ref=f7e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f7e71]:
          - strong [ref=f7e73]: Popular tags
          - generic [ref=f7e74]:
            - list [ref=f7e76]:
              - listitem [ref=f7e77]:
                - link "apparel" [ref=f7e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f7e79]:
                - link "awesome" [ref=f7e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f7e81]:
                - link "book" [ref=f7e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f7e83]:
                - link "camera" [ref=f7e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f7e85]:
                - link "cell" [ref=f7e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f7e87]:
                - link "compact" [ref=f7e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f7e89]:
                - link "computer" [ref=f7e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f7e91]:
                - link "cool" [ref=f7e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f7e93]:
                - link "digital" [ref=f7e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f7e95]:
                - link "jeans" [ref=f7e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f7e97]:
                - link "jewelry" [ref=f7e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f7e99]:
                - link "nice" [ref=f7e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f7e101]:
                - link "shirt" [ref=f7e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f7e103]:
                - link "shoes" [ref=f7e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f7e105]:
                - link "TCP" [ref=f7e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f7e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f7e109]:
        - generic [ref=f7e110]:
          - strong [ref=f7e112]: Newsletter
          - generic [ref=f7e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f7e116]
            - button "Subscribe" [ref=f7e118] [cursor=pointer]
        - generic [ref=f7e119]:
          - strong [ref=f7e121]: Community poll
          - generic [ref=f7e123]:
            - strong [ref=f7e124]: Do you like nopCommerce?
            - list [ref=f7e125]:
              - listitem [ref=f7e126]:
                - radio "Excellent" [ref=f7e127]
                - text: Excellent
              - listitem [ref=f7e128]:
                - radio "Good" [ref=f7e129]
                - text: Good
              - listitem [ref=f7e130]:
                - radio "Poor" [ref=f7e131]
                - text: Poor
              - listitem [ref=f7e132]:
                - radio "Very bad" [ref=f7e133]
                - text: Very bad
            - button "Vote" [ref=f7e135] [cursor=pointer]
      - generic [ref=f7e138]:
        - generic:
          - generic:
            - link:
              - /url: https://www.tricentis.com/speed/
            - link:
              - /url: https://academy.tricentis.com
        - generic [ref=f7e139]:
          - heading "Welcome to our store" [level=2] [ref=f7e141]
          - generic [ref=f7e142]:
            - paragraph [ref=f7e143]: Welcome to the new Tricentis store!
            - paragraph [ref=f7e144]: Feel free to shop around and explore everything.
        - generic [ref=f7e145]:
          - strong [ref=f7e147]: Featured products
          - generic [ref=f7e149]:
            - link [ref=f7e151] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f7e152]
            - generic [ref=f7e153]:
              - heading [level=2] [ref=f7e154]:
                - link "$25 Virtual Gift Card" [ref=f7e155] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "929 review(s)" [ref=f7e156]
              - generic [ref=f7e159]:
                - generic [ref=f7e160]: "25.00"
                - button "Add to cart" [ref=f7e163] [cursor=pointer]
          - generic [ref=f7e165]:
            - link [ref=f7e167] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f7e168]
            - generic [ref=f7e169]:
              - heading [level=2] [ref=f7e170]:
                - link "14.1-inch Laptop" [ref=f7e171] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1998 review(s)" [ref=f7e172]
              - generic [ref=f7e175]:
                - generic [ref=f7e176]: "1590.00"
                - button "Add to cart" [ref=f7e179] [cursor=pointer]
          - generic [ref=f7e181]:
            - link [ref=f7e183] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f7e184]
            - generic [ref=f7e185]:
              - heading [level=2] [ref=f7e186]:
                - link "Build your own cheap computer" [ref=f7e187] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f7e188]
              - generic [ref=f7e191]:
                - generic [ref=f7e192]: "800.00"
                - button "Add to cart" [ref=f7e195] [cursor=pointer]
          - generic [ref=f7e197]:
            - link [ref=f7e199] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f7e200]
            - generic [ref=f7e201]:
              - heading [level=2] [ref=f7e202]:
                - link "Build your own computer" [ref=f7e203] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f7e204]
              - generic [ref=f7e207]:
                - generic [ref=f7e208]: "1200.00"
                - button "Add to cart" [ref=f7e211] [cursor=pointer]
          - generic [ref=f7e213]:
            - link [ref=f7e215] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f7e216]
            - generic [ref=f7e217]:
              - heading [level=2] [ref=f7e218]:
                - link "Build your own expensive computer" [ref=f7e219] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f7e220]
              - generic [ref=f7e223]:
                - generic [ref=f7e224]: "1800.00"
                - button "Add to cart" [ref=f7e227] [cursor=pointer]
          - generic [ref=f7e229]:
            - link [ref=f7e231] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f7e232]
            - generic [ref=f7e233]:
              - heading [level=2] [ref=f7e234]:
                - link "Simple Computer" [ref=f7e235] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "418 review(s)" [ref=f7e236]
              - generic [ref=f7e239]:
                - generic [ref=f7e240]: "800.00"
                - button "Add to cart" [ref=f7e243] [cursor=pointer]
  - generic [ref=f7e244]:
    - generic [ref=f7e245]:
      - generic [ref=f7e246]:
        - heading "Information" [level=3] [ref=f7e247]
        - list [ref=f7e248]:
          - listitem [ref=f7e249]:
            - link "Sitemap" [ref=f7e250] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f7e251]:
            - link "Shipping & Returns" [ref=f7e252] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f7e253]:
            - link "Privacy Notice" [ref=f7e254] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f7e255]:
            - link "Conditions of Use" [ref=f7e256] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f7e257]:
            - link "About us" [ref=f7e258] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f7e259]:
            - link "Contact us" [ref=f7e260] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f7e261]:
        - heading "Customer service" [level=3] [ref=f7e262]
        - list [ref=f7e263]:
          - listitem [ref=f7e264]:
            - link "Search" [ref=f7e265] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f7e266]:
            - link "News" [ref=f7e267] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f7e268]:
            - link "Blog" [ref=f7e269] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f7e270]:
            - link "Recently viewed products" [ref=f7e271] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f7e272]:
            - link "Compare products list" [ref=f7e273] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f7e274]:
            - link "New products" [ref=f7e275] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f7e276]:
        - heading "My account" [level=3] [ref=f7e277]
        - list [ref=f7e278]:
          - listitem [ref=f7e279]:
            - link "My account" [ref=f7e280] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f7e281]:
            - link "Orders" [ref=f7e282] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f7e283]:
            - link "Addresses" [ref=f7e284] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f7e285]:
            - link "Shopping cart" [ref=f7e286] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f7e287]:
            - link "Wishlist" [ref=f7e288] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f7e289]:
        - heading "Follow us" [level=3] [ref=f7e290]
        - list [ref=f7e291]:
          - listitem [ref=f7e292]:
            - link "Facebook" [ref=f7e293] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f7e294]:
            - link "Twitter" [ref=f7e295] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f7e296]:
            - link "RSS" [ref=f7e297] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f7e298]:
            - link "YouTube" [ref=f7e299] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f7e300]:
            - link "Google+" [ref=f7e301] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f7e302]:
      - text: Powered by
      - link "nopCommerce" [ref=f7e303] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f7e304]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  230 |         console.log("All totals match successfully!");
  231 |     }
  232 | 
  233 |     async enterBillingAddress(address: string, country: string,) {
  234 |         expect(this.billingAddHeading).toBeVisible();
  235 |         await this.selectaBillingAddress.selectOption({ label: address });
  236 |         await this.firstName.fill("John");
  237 |         await this.lastname.fill("d");
  238 |         await this.email.fill("john123@test123.com");
  239 |         await this.countrybillingAdd.click();
  240 |         await this.countrybillingAdd.selectOption({ label: country });
  241 |         await this.cityadd.fill("Alashka");
  242 |         await this.add1.fill("Alashka city");
  243 |         await this.postalcode.fill("6789054");
  244 |         await this.phonenum.fill("9876543210");
  245 |         await this.continueaddress.click();
  246 | 
  247 |     }
  248 |     async enterBillingAddressvalidation(address: string) {
  249 |         await expect(this.billingAddHeading).toBeVisible();
  250 |         await this.selectaBillingAddress.selectOption({ label: address });
  251 |         await this.firstName.clear();
  252 |         await this.lastname.clear();
  253 |         await this.email.clear();
  254 |         await this.cityadd.clear();
  255 |         await this.add1.clear();
  256 |         await this.postalcode.clear();
  257 |         await this.phonenum.clear();
  258 |         await this.continueaddress.click();
  259 |         await expect(this.firstNameVal).toBeVisible();
  260 |         await expect(this.lastnameVal).toBeVisible();
  261 |         await expect(this.emailval).toBeVisible();
  262 |         await expect(this.countryval).toBeVisible();
  263 |         await expect(this.cityval).toBeVisible();
  264 |         await expect(this.add1val).toBeVisible();
  265 |         await expect(this.zipval).toBeVisible();
  266 |         await expect(this.phoneval).toBeVisible();
  267 | 
  268 |     }
  269 |     async EnterShippingaddress() {
  270 |         await expect(this.shippingAddheading).toBeVisible();
  271 |         await this.shippingpadd.selectOption({ label: 'John d, Alashka city, Alashka 6789054, United States' });
  272 |         await expect(this.storepickup).toBeVisible();
  273 |         // await this.storepickup.click();   if its checkbox is selected then no shipping method.
  274 |         // console.log("Store pickup is selected");
  275 |         await expect(this.storepickupText).toBeVisible();
  276 |         await this.continueshipingadd.click();
  277 |     }
  278 | 
  279 |     async enterShippingMethod() {
  280 |         //ground
  281 |         await expect(this.shippingMethodheading).toBeVisible();
  282 |         await expect(this.ground).toBeVisible();
  283 |         await expect(this.ground).toBeChecked();
  284 |         const groundText = await this.page.locator('li').locator('div').nth(1);
  285 |         console.log(groundText);
  286 | 
  287 |         //nextday
  288 |         await expect(this.nextDay).toBeVisible();
  289 |         await this.nextDay.check();
  290 |         await expect(this.nextDay).toBeChecked();
  291 |         const NextDayText = await this.page.getByText('The one day air shipping', { exact: true });
  292 |         console.log(NextDayText);
  293 | 
  294 |         //ndDay
  295 |         await expect(this.ndDayAir).toBeVisible();
  296 |         const ndDayAirText = await this.page.getByText('The two day air shipping', { exact: true })
  297 |         console.log(ndDayAirText);
  298 | 
  299 |         await this.continueshipmethod.click();
  300 |     }
  301 | 
  302 |     async selectPaymentMethods(method: 'COD' | 'Check' | 'CreditCard' | 'PurchaseOrder') {
  303 |         await expect(this.paymentMethodheading).toBeVisible();
  304 | 
  305 |         if (method === 'COD') {
  306 |             await this.codinpayment.check();
  307 |             console.log("COD is selected");
  308 |         } else if (method === 'Check') {
  309 |             await this.money.check();
  310 |             console.log("Money is selected");
  311 |         } else if (method === 'CreditCard') {
  312 |             await this.creditcard.check();
  313 |             console.log("creditcard is selected");
  314 |         } else if (method === 'PurchaseOrder') {
  315 |             await this.purchaseorder.check();
  316 |             console.log("purchaseorder is selected");
  317 |         }
  318 |         await expect(this.codinpayment).toBeVisible();
  319 |         await expect(this.money).toBeVisible();
  320 |         await expect(this.creditcard).toBeVisible();
  321 |         await expect(this.purchaseorder).toBeVisible();
  322 | 
  323 |         await this.continuepaymentMethod.click();
  324 |     }
  325 | 
  326 |     async checkPaymentinfo() {
  327 |         await expect(this.paymentinfoheading).toBeVisible();
  328 |         //  Scopes locator directly to the active Payment Info container
  329 |         const paymentDetailsElement = this.page.locator('#checkout-payment-info-load .payment-details, #checkout-payment-info-load p');
> 330 |         const selectedPaymentText = await paymentDetailsElement.first().innerText();
      |                                                                         ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  331 |         console.log("Dynamically Selected Payment Method:", selectedPaymentText.trim());
  332 |         return selectedPaymentText.trim();
  333 |     }
  334 | 
  335 |     async checkOrderconfirmation() {
  336 |         await expect(this.confirmorderheading).toBeVisible();
  337 |         await expect(this.ordersummary).toBeVisible();
  338 |         await this.confirmbtninfinal.click();
  339 |     }
  340 | 
  341 |     async succesMsg() {
  342 |         await expect(this.page.getByRole('heading', { name: 'Thank you' })).toBeVisible();
  343 |         await expect(this.page.locator('div.section.order-completed')).toBeVisible();
  344 |         await expect(this.page.getByText('Your order has been successfully processed!', { exact: true })).toBeVisible();
  345 |         await this.page.locator('input.button-2.order-completed-continue-button').click();
  346 |     }
  347 | 
  348 | 
  349 | }
```