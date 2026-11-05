# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout Module >> check billing Address Enter & validation,payment method,order confirm 
- Location: tests\ui\checkout.spec.ts:26:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.order-summary-content')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.order-summary-content') with timeout 5000ms
  - waiting for locator('.order-summary-content')

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
    - link "Shopping cart (1)":
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
- heading "Checkout" [level=1]
- list:
  - listitem:
    - text: "1"
    - heading "Billing address" [level=2]
    - text: .
  - listitem:
    - text: "2"
    - heading "Shipping address" [level=2]
    - text: .
  - listitem:
    - text: "3"
    - heading "Shipping method" [level=2]
    - text: .
  - listitem:
    - text: "4"
    - heading "Payment method" [level=2]
    - text: .
  - listitem:
    - text: "5"
    - heading "Payment information" [level=2]
    - text: .
    - table:
      - rowgroup:
        - row "You will pay by COD":
          - cell "You will pay by COD":
            - paragraph: You will pay by COD
    - list
    - paragraph:
      - link "Back":
        - /url: "#"
    - button "Continue"
  - listitem:
    - text: "6"
    - heading "Confirm order" [level=2]
    - text: .
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
  330 |         const selectedPaymentText = await paymentDetailsElement.first().innerText();
  331 |         console.log("Dynamically Selected Payment Method:", selectedPaymentText.trim());
  332 |         return selectedPaymentText.trim();
  333 |     }
  334 | 
  335 |     async checkOrderconfirmation() {
  336 |         await expect(this.confirmorderheading).toBeVisible();
> 337 |         await expect(this.ordersummary).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
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