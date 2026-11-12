# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\regression.spec.ts >> Regression Testing >> End To End Testing 
- Location: tests\ui\regression.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('First name is required.')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('First name is required.') with timeout 5000ms
  - waiting for getByText('First name is required.')
    - waiting for "https://demowebshop.tricentis.com/" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"
  - Test timeout of 30000ms exceeded.

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
  211 |         await expect(this.shippingResult).toBeVisible();
  212 |     }
  213 | 
  214 |     async verifyCartTotalsMatch() {
  215 | 
  216 |         const rawTablePrice = await this.tablePrice.innerText();
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
  227 |         await expect(tablePriceText).toBe(subTotalText);
  228 |         await expect(tablePriceText).toBe(finalTotalText);
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
> 259 |         await expect(this.firstNameVal).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
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
  292 |         await this.continueshipmethod.click();
  293 |     }
  294 | 
  295 |     async selectPaymentMethods(method: 'COD' | 'Check' | 'CreditCard' | 'PurchaseOrder') {
  296 |         await expect(this.paymentMethodheading).toBeVisible();
  297 | 
  298 |         if (method === 'COD') {
  299 |             await this.codinpayment.check();
  300 |             console.log("COD is selected");
  301 |         } else if (method === 'Check') {
  302 |             await this.money.check();
  303 |             console.log("Money is selected");
  304 |         } else if (method === 'CreditCard') {
  305 |             await this.creditcard.check();
  306 |             console.log("creditcard is selected");
  307 |         } else if (method === 'PurchaseOrder') {
  308 |             await this.purchaseorder.check();
  309 |             console.log("purchaseorder is selected");
  310 |         }
  311 |         await expect(this.codinpayment).toBeVisible();
  312 |         await expect(this.money).toBeVisible();
  313 |         await expect(this.creditcard).toBeVisible();
  314 |         await expect(this.purchaseorder).toBeVisible();
  315 | 
  316 |         await this.continuepaymentMethod.click();
  317 |     }
  318 | 
  319 |     async checkPaymentinfo() {
  320 |         await expect(this.paymentinfoheading).toBeVisible();
  321 |         //  Scopes locator directly to the active Payment Info container
  322 |         const paymentDetailsElement = this.page.locator('#checkout-payment-info-load .payment-details, #checkout-payment-info-load p');
  323 |         const selectedPaymentText = await paymentDetailsElement.first().innerText();
  324 |         console.log("Dynamically Selected Payment Method:", selectedPaymentText.trim());
  325 |         await this.contniuePaymentinfo.click();
  326 |         return selectedPaymentText.trim(); // if use return that will be the last line ,below that wont work
  327 |    
  328 |     }
  329 | 
  330 |     async checkOrderconfirmation() {
  331 |         await expect(this.confirmorderheading).toBeVisible();
  332 |         await expect(this.ordersummary).toBeVisible();
  333 |         await this.confirmbtninfinal.click();
  334 |     }
  335 | 
  336 |     async succesMsg() {
  337 |         await expect(this.page.getByRole('heading', { name: 'Thank you' })).toBeVisible();
  338 |         await expect(this.page.locator('div.section.order-completed')).toBeVisible();
  339 |         await expect(this.page.getByText('Your order has been successfully processed!', { exact: true })).toBeVisible();
  340 |         await this.page.locator('input.button-2.order-completed-continue-button').click();
  341 |     }
  342 | 
  343 | 
  344 | }
```