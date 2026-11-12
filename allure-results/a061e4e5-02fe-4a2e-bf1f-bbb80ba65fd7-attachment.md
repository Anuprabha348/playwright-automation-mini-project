# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout Module >> check billing Address validation
- Location: tests\ui\checkout.spec.ts:26:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#BillingNewAddress_CountryId')
    - locator resolved to <select data-val="true" class="input-validation-error" id="BillingNewAddress_CountryId" name="BillingNewAddress.CountryId" data-val-required="Country is required." data-val-number="The field Country must be a number.">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    41 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms
    - waiting for "https://demowebshop.tricentis.com/logout" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"
    - waiting for element to be visible and enabled
  - element was detached from the DOM, retrying

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
              - generic "926 review(s)" [ref=f7e156]
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
              - generic "1992 review(s)" [ref=f7e172]
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
  137 |         this.continueshipingadd = page.locator('input.button-1.new-address-next-step-button:visible')
  138 |         //shipping Method
  139 |         this.shippingMethodheading = page.getByRole('heading', { name: 'Shipping method' })
  140 |         this.ground = page.getByText('Ground (10.00)', { exact: true })
  141 |         this.nextDay = page.getByText('Next Day Air (40.00)', { exact: true })
  142 |         this.ndDayAir = page.getByLabel('2nd Day Air (20.00)', { exact: true })
  143 |         this.continueshipmethod = page.locator('input.button-1.shipping-method-next-step-button')
  144 |         //Payment Method
  145 |         this.paymentMethodheading = page.getByText('Payment Method')
  146 |         this.codinpayment = page.getByLabel('Cash On Delivery (COD) (7.00)')
  147 |         this.money = page.getByText('Check / Money Order (5.00)')
  148 |         this.creditcard = page.locator(':text("Credit Card")')
  149 |         this.purchaseorder = page.getByText('Purchase Order')
  150 |         this.continuepaymentMethod = page.locator('input.button-1.payment-method-next-step-button')
  151 |         //Payment info
  152 |         this.paymentinfoheading = page.getByRole('heading', { name: 'Payment information' })
  153 |         this.selectedpayment = page.locator('td:visible')
  154 |         this.contniuePaymentinfo = page.locator('input.button-1.payment-info-next-step-button')
  155 |         // confirm
  156 |         this.confirmorderheading = page.getByRole('heading', { name: 'Confirm order' })
  157 |         this.ordersummary = page.locator('.order-summary-content')
  158 |         this.confirmbtninfinal = page.locator('input.button-1.confirm-order-next-step-button')
  159 | 
  160 |         // validation
  161 |         this.firstNameVal = page.getByText('First name is required.');
  162 |         this.lastnameVal = page.getByText('Last name is required.');
  163 |         this.emailval = page.getByText('Email is required.');
  164 |         this.countryval = page.getByText('Country is required.');
  165 |         this.cityval = page.getByText('City is required');
  166 |         this.add1val = page.getByText('Street address is required');
  167 |         this.zipval = page.getByText('Zip / postal code is required');
  168 |         this.phoneval = page.getByText('Phone is required');
  169 | 
  170 |     }
  171 | 
  172 |     // Methods
  173 | 
  174 |     async enterDiscount() {
  175 |         // ui
  176 |         await expect(this.discountHeading).toBeVisible();
  177 |         await expect(this.discountText).toBeVisible();
  178 |         // fill
  179 |         await this.discountinput.fill("JUNGKOOK1997");
  180 |         //click
  181 |         console.log("Button visible:", await this.discountButton.isVisible());
  182 |         console.log("Button enabled:", await this.discountButton.isEnabled());
  183 |         await this.discountButton.click();
  184 |         // validation
  185 |         await expect(this.discountValidation).toBeVisible();
  186 |         //get text
  187 |         const validation = await this.discountValidation.innerText();
  188 |         console.log("Validation Msg:", validation);
  189 |         await expect(this.discountValidation).toContainText("couldn't be applied");
  190 |     }
  191 | 
  192 |     async enterGiftcard() {
  193 |         await expect(this.giftcardHeading).toBeVisible();
  194 |         await expect(this.giftcardText).toBeVisible();
  195 |         await this.giftcardinput.fill("JUNGKOOK1997");
  196 |         await this.giftcardButton.click()
  197 |         await expect(this.giftcardtValidation).toBeVisible();
  198 |         const validation = await this.giftcardtValidation.innerText();
  199 |         console.log("Validation Msg:", validation);
  200 |     }
  201 | 
  202 |     async checkEstimateShipping(country: string, state: string, zipinput: string) {
  203 |         await expect(this.estimateheading).toBeVisible();
  204 |         await expect(this.estimatetext).toBeVisible();
  205 |         await this.countryDropdown.selectOption({ label: country });
  206 |         await this.stateDropdown.selectOption({ label: state });
  207 |         await this.zip.fill(zipinput);
  208 |         await this.estimateButton.click();
  209 |         expect(this.shippingResult).toBeVisible();
  210 |     }
  211 | 
  212 |     async verifyCartTotalsMatch() {
  213 | 
  214 |         const rawTablePrice = await this.tablePrice.innerText();
  215 |         const rawSubTotal = await this.subTotal.innerText();
  216 |         const rawFinalTotal = await this.total.innerText();
  217 |         // Sanitize strings to extract only numbers/decimals (e.g., "30.00")
  218 |         const tablePriceText = rawTablePrice.replace(/[^0-9.]/g, '');
  219 |         const subTotalText = rawSubTotal.replace(/[^0-9.]/g, '');
  220 |         const finalTotalText = rawFinalTotal.replace(/[^0-9.]/g, '');
  221 | 
  222 |         console.log(`Comparing Item Total: ${tablePriceText} with Sub-Total: ${subTotalText} and Total: ${finalTotalText}`);
  223 | 
  224 |         //  Assert they match perfectly
  225 |         expect(tablePriceText).toBe(subTotalText);
  226 |         expect(tablePriceText).toBe(finalTotalText);
  227 | 
  228 |         console.log("All totals match successfully!");
  229 |     }
  230 | 
  231 |     async enterBillingAddress(address: string, country: string,) {
  232 |         expect(this.billingAddHeading).toBeVisible();
  233 |         await this.selectaBillingAddress.selectOption({ label: address });
  234 |         await this.firstName.fill("John");
  235 |         await this.lastname.fill("d");
  236 |         await this.email.fill("john123@test123.com");
> 237 |         await this.countrybillingAdd.selectOption({ label: country });
      |                                      ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  238 |         await this.cityadd.fill("Alashka");
  239 |         await this.add1.fill("Alashka city");
  240 |         await this.postalcode.fill("6789054");
  241 |         await this.phonenum.fill("9876543210");
  242 |         await this.continueaddress.click();
  243 | 
  244 |     }
  245 |     async enterBillingAddressvalidation(address:string) {
  246 |         await expect(this.billingAddHeading).toBeVisible();
  247 |         await this.selectaBillingAddress.selectOption({ label:address});
  248 |         await this.firstName.clear();
  249 |         await this.lastname.clear();
  250 |         await this.email.clear();
  251 |         await this.cityadd.clear();
  252 |         await this.add1.clear();
  253 |         await this.postalcode.clear();
  254 |         await this.phonenum.clear();
  255 |         await this.continueaddress.click();
  256 |         await expect(this.firstNameVal).toBeVisible();
  257 |         await expect(this.lastnameVal).toBeVisible();
  258 |         await expect(this.emailval).toBeVisible();
  259 |         await expect(this.countryval).toBeVisible();
  260 |         await expect(this.cityval).toBeVisible();
  261 |         await expect(this.add1val).toBeVisible();
  262 |         await expect(this.zipval).toBeVisible();
  263 |         await expect(this.phoneval).toBeVisible();
  264 |        
  265 | 
  266 |     }
  267 | 
  268 | 
  269 | 
  270 | }
```