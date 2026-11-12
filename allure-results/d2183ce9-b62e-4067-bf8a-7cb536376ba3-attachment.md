# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout Module >> Verify the same total
- Location: tests\ui\checkout.spec.ts:16:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.product-subtotal')

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
        - generic [ref=f6e139]:
          - generic [ref=f6e140]:
            - link [ref=f6e141] [cursor=pointer]:
              - /url: https://www.tricentis.com/speed/
            - generic [ref=f6e143]: Speed | Tricentis
            - generic:
              - generic [ref=f6e144] [cursor=pointer]: Prev
              - generic [ref=f6e145] [cursor=pointer]: Next
          - generic [ref=f6e146]:
            - generic [ref=f6e147] [cursor=pointer]: "1"
            - generic [ref=f6e148] [cursor=pointer]: "2"
        - generic [ref=f6e149]:
          - heading "Welcome to our store" [level=2] [ref=f6e151]
          - generic [ref=f6e152]:
            - paragraph [ref=f6e153]: Welcome to the new Tricentis store!
            - paragraph [ref=f6e154]: Feel free to shop around and explore everything.
        - generic [ref=f6e155]:
          - strong [ref=f6e157]: Featured products
          - generic [ref=f6e159]:
            - link [ref=f6e161] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f6e162]
            - generic [ref=f6e163]:
              - heading [level=2] [ref=f6e164]:
                - link "$25 Virtual Gift Card" [ref=f6e165] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "929 review(s)" [ref=f6e166]
              - generic [ref=f6e169]:
                - generic [ref=f6e170]: "25.00"
                - button "Add to cart" [ref=f6e173] [cursor=pointer]
          - generic [ref=f6e175]:
            - link [ref=f6e177] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f6e178]
            - generic [ref=f6e179]:
              - heading [level=2] [ref=f6e180]:
                - link "14.1-inch Laptop" [ref=f6e181] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1998 review(s)" [ref=f6e182]
              - generic [ref=f6e185]:
                - generic [ref=f6e186]: "1590.00"
                - button "Add to cart" [ref=f6e189] [cursor=pointer]
          - generic [ref=f6e191]:
            - link [ref=f6e193] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f6e194]
            - generic [ref=f6e195]:
              - heading [level=2] [ref=f6e196]:
                - link "Build your own cheap computer" [ref=f6e197] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "939 review(s)" [ref=f6e198]
              - generic [ref=f6e201]:
                - generic [ref=f6e202]: "800.00"
                - button "Add to cart" [ref=f6e205] [cursor=pointer]
          - generic [ref=f6e207]:
            - link [ref=f6e209] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f6e210]
            - generic [ref=f6e211]:
              - heading [level=2] [ref=f6e212]:
                - link "Build your own computer" [ref=f6e213] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "438 review(s)" [ref=f6e214]
              - generic [ref=f6e217]:
                - generic [ref=f6e218]: "1200.00"
                - button "Add to cart" [ref=f6e221] [cursor=pointer]
          - generic [ref=f6e223]:
            - link [ref=f6e225] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f6e226]
            - generic [ref=f6e227]:
              - heading [level=2] [ref=f6e228]:
                - link "Build your own expensive computer" [ref=f6e229] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "530 review(s)" [ref=f6e230]
              - generic [ref=f6e233]:
                - generic [ref=f6e234]: "1800.00"
                - button "Add to cart" [ref=f6e237] [cursor=pointer]
          - generic [ref=f6e239]:
            - link [ref=f6e241] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f6e242]
            - generic [ref=f6e243]:
              - heading [level=2] [ref=f6e244]:
                - link "Simple Computer" [ref=f6e245] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "418 review(s)" [ref=f6e246]
              - generic [ref=f6e249]:
                - generic [ref=f6e250]: "800.00"
                - button "Add to cart" [ref=f6e253] [cursor=pointer]
  - generic [ref=f6e254]:
    - generic [ref=f6e255]:
      - generic [ref=f6e256]:
        - heading "Information" [level=3] [ref=f6e257]
        - list [ref=f6e258]:
          - listitem [ref=f6e259]:
            - link "Sitemap" [ref=f6e260] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f6e261]:
            - link "Shipping & Returns" [ref=f6e262] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f6e263]:
            - link "Privacy Notice" [ref=f6e264] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f6e265]:
            - link "Conditions of Use" [ref=f6e266] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f6e267]:
            - link "About us" [ref=f6e268] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f6e269]:
            - link "Contact us" [ref=f6e270] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f6e271]:
        - heading "Customer service" [level=3] [ref=f6e272]
        - list [ref=f6e273]:
          - listitem [ref=f6e274]:
            - link "Search" [ref=f6e275] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f6e276]:
            - link "News" [ref=f6e277] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f6e278]:
            - link "Blog" [ref=f6e279] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f6e280]:
            - link "Recently viewed products" [ref=f6e281] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f6e282]:
            - link "Compare products list" [ref=f6e283] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f6e284]:
            - link "New products" [ref=f6e285] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f6e286]:
        - heading "My account" [level=3] [ref=f6e287]
        - list [ref=f6e288]:
          - listitem [ref=f6e289]:
            - link "My account" [ref=f6e290] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f6e291]:
            - link "Orders" [ref=f6e292] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f6e293]:
            - link "Addresses" [ref=f6e294] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f6e295]:
            - link "Shopping cart" [ref=f6e296] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f6e297]:
            - link "Wishlist" [ref=f6e298] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f6e299]:
        - heading "Follow us" [level=3] [ref=f6e300]
        - list [ref=f6e301]:
          - listitem [ref=f6e302]:
            - link "Facebook" [ref=f6e303] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f6e304]:
            - link "Twitter" [ref=f6e305] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f6e306]:
            - link "RSS" [ref=f6e307] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f6e308]:
            - link "YouTube" [ref=f6e309] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f6e310]:
            - link "Google+" [ref=f6e311] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f6e312]:
      - text: Powered by
      - link "nopCommerce" [ref=f6e313] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f6e314]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  116 |         this.checkoutbtn = page.getByRole('button', { name: 'Checkout' });
  117 |         this.tablePrice = page.locator('.product-subtotal'); // Product table item total column
  118 |         this.subTotal = page.locator('.cart-total tr:has-text("Sub-Total:") td.cart-total-right span.product-price'); // Sub-total value in the summary table
  119 |         this.total = page.locator('tr:has-text("Total:") td.cart-total-right span.product-price.order-total strong');  // Final total value in the summary table
  120 | 
  121 |         //checkout address
  122 |         this.billingAddHeading = page.locator('div.step-title h2', { hasText: 'Billing address' });
  123 |         this.selectaBillingAddress = page.locator('#billing-address-select');
  124 |         this.firstName = page.locator("#BillingNewAddress_FirstName")
  125 |         this.lastname = page.locator('#BillingNewAddress_LastName')
  126 |         this.email = page.locator('#BillingNewAddress_Email')
  127 |         this.countrybillingAdd = page.locator('#BillingNewAddress_CountryId')
  128 |         this.province = page.locator('#BillingNewAddress_StateProvinceId')
  129 |         this.cityadd = page.locator('#BillingNewAddress_City')
  130 |         this.add1 = page.locator('#BillingNewAddress_Address1')
  131 |         this.postalcode = page.locator('#BillingNewAddress_ZipPostalCode')
  132 |         this.phonenum = page.locator('#BillingNewAddress_PhoneNumber')
  133 |         this.continueaddress = page.locator('input.button-1.new-address-next-step-button:visible')
  134 |         //shipping Address
  135 |         this.shippingAddheading = page.getByRole('heading', { name: 'Shipping address' })
  136 |         this.storepickup = page.getByRole('checkbox', { name: 'In-Store Pickup' })
  137 |         this.storepickupText = page.getByLabel('In-Store Pickup')
  138 |         this.shippingpadd = page.locator("#shipping-address-select")
  139 |         this.continueshipingadd = page.locator('input.button-1.new-address-next-step-button:visible')
  140 |         //shipping Method
  141 |         this.shippingMethodheading = page.getByRole('heading', { name: 'Shipping method' })
  142 |         this.ground = page.locator('.method-name label[for="shippingoption_0"]');
  143 |         this.nextDay = page.locator("label[for='shippingoption_1']");
  144 |         this.ndDayAir = page.locator("label[for='shippingoption_2']");
  145 |         this.continueshipmethod = page.locator('input.button-1.shipping-method-next-step-button')
  146 |         //Payment Method
  147 |         this.paymentMethodheading = page.getByText('Payment Method')
  148 |         this.codinpayment = page.getByLabel('Cash On Delivery (COD) (7.00)')
  149 |         this.money = page.getByText('Check / Money Order (5.00)')
  150 |         this.creditcard = page.locator(':text("Credit Card")')
  151 |         this.purchaseorder = page.getByText('Purchase Order')
  152 |         this.continuepaymentMethod = page.locator('input.button-1.payment-method-next-step-button')
  153 |         //Payment info
  154 |         this.paymentinfoheading = page.getByRole('heading', { name: 'Payment information' })
  155 |         this.selectedpayment = page.locator('td:visible')
  156 |         this.contniuePaymentinfo = page.locator('input.button-1.payment-info-next-step-button')
  157 |         // confirm
  158 |         this.confirmorderheading = page.getByRole('heading', { name: 'Confirm order' })
  159 |         this.ordersummary = page.locator('.order-summary-content')
  160 |         this.confirmbtninfinal = page.locator('input.button-1.confirm-order-next-step-button')
  161 | 
  162 |         // validation
  163 |         this.firstNameVal = page.getByText('First name is required.');
  164 |         this.lastnameVal = page.getByText('Last name is required.');
  165 |         this.emailval = page.getByText('Email is required.');
  166 |         this.countryval = page.getByText('Country is required.');
  167 |         this.cityval = page.getByText('City is required');
  168 |         this.add1val = page.getByText('Street address is required');
  169 |         this.zipval = page.getByText('Zip / postal code is required');
  170 |         this.phoneval = page.getByText('Phone is required');
  171 | 
  172 |     }
  173 | 
  174 |     // Methods
  175 | 
  176 |     async enterDiscount() {
  177 |         // ui
  178 |         await expect(this.discountHeading).toBeVisible();
  179 |         await expect(this.discountText).toBeVisible();
  180 |         // fill
  181 |         await this.discountinput.fill("JUNGKOOK1997");
  182 |         //click
  183 |         console.log("Button visible:", await this.discountButton.isVisible());
  184 |         console.log("Button enabled:", await this.discountButton.isEnabled());
  185 |         await this.discountButton.click();
  186 |         // validation
  187 |         await expect(this.discountValidation).toBeVisible();
  188 |         //get text
  189 |         const validation = await this.discountValidation.innerText();
  190 |         console.log("Validation Msg:", validation);
  191 |         await expect(this.discountValidation).toContainText("couldn't be applied");
  192 |     }
  193 | 
  194 |     async enterGiftcard() {
  195 |         await expect(this.giftcardHeading).toBeVisible();
  196 |         await expect(this.giftcardText).toBeVisible();
  197 |         await this.giftcardinput.fill("JUNGKOOK1997");
  198 |         await this.giftcardButton.click()
  199 |         await expect(this.giftcardtValidation).toBeVisible();
  200 |         const validation = await this.giftcardtValidation.innerText();
  201 |         console.log("Validation Msg:", validation);
  202 |     }
  203 | 
  204 |     async checkEstimateShipping(country: string, state: string, zipinput: string) {
  205 |         await expect(this.estimateheading).toBeVisible();
  206 |         await expect(this.estimatetext).toBeVisible();
  207 |         await this.countryDropdown.selectOption({ label: country });
  208 |         await this.stateDropdown.selectOption({ label: state });
  209 |         await this.zip.fill(zipinput);
  210 |         await this.estimateButton.click();
  211 |         expect(this.shippingResult).toBeVisible();
  212 |     }
  213 | 
  214 |     async verifyCartTotalsMatch() {
  215 | 
> 216 |         const rawTablePrice = await this.tablePrice.innerText();
      |                                                     ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  217 |         const rawSubTotal = await this.subTotal.innerText();
  218 |         const rawFinalTotal = await this.total.innerText();
  219 |         // Sanitize strings to extract only numbers/decimals (e.g., "30.00")
  220 |         const tablePriceText = rawTablePrice.replace(/[^0-9.]/g, '');
  221 |         const subTotalText = rawSubTotal.replace(/[^0-9.]/g, '');
  222 |         const finalTotalText = rawFinalTotal.replace(/[^0-9.]/g, '');
  223 | 
  224 |         console.log(`Comparing Item Total: ${tablePriceText} with Sub-Total: ${subTotalText} and Total: ${finalTotalText}`);
  225 | 
  226 |         //  Assert they match perfectly
  227 |         expect(tablePriceText).toBe(subTotalText);
  228 |         expect(tablePriceText).toBe(finalTotalText);
  229 | 
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
  284 |         
  285 |         //nextday
  286 |         await expect(this.nextDay).toBeVisible();
  287 |         await this.nextDay.check();
  288 |         await expect(this.nextDay).toBeChecked();
  289 |      
  290 |         //ndDay
  291 |         await expect(this.ndDayAir).toBeVisible();
  292 |        
  293 |         await this.continueshipmethod.click();
  294 |     }
  295 | 
  296 |     async selectPaymentMethods(method: 'COD' | 'Check' | 'CreditCard' | 'PurchaseOrder') {
  297 |         await expect(this.paymentMethodheading).toBeVisible();
  298 | 
  299 |         if (method === 'COD') {
  300 |             await this.codinpayment.check();
  301 |             console.log("COD is selected");
  302 |         } else if (method === 'Check') {
  303 |             await this.money.check();
  304 |             console.log("Money is selected");
  305 |         } else if (method === 'CreditCard') {
  306 |             await this.creditcard.check();
  307 |             console.log("creditcard is selected");
  308 |         } else if (method === 'PurchaseOrder') {
  309 |             await this.purchaseorder.check();
  310 |             console.log("purchaseorder is selected");
  311 |         }
  312 |         await expect(this.codinpayment).toBeVisible();
  313 |         await expect(this.money).toBeVisible();
  314 |         await expect(this.creditcard).toBeVisible();
  315 |         await expect(this.purchaseorder).toBeVisible();
  316 | 
```