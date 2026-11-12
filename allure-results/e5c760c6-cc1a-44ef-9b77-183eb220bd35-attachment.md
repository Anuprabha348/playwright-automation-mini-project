# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\regression.spec.ts >> Regression Testing >> End To End Testing 
- Location: tests\ui\regression.spec.ts:6:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('The product has been added to your shopping cart', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('The product has been added to your shopping cart', { exact: true }) with timeout 5000ms
  - waiting for getByText('The product has been added to your shopping cart', { exact: true })
    4 × waiting for "https://demowebshop.tricentis.com/cart" navigation to finish...
      - navigated to "https://demowebshop.tricentis.com/cart"
    - waiting for "https://demowebshop.tricentis.com/cart" navigation to finish...

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
    - link "Shopping cart (3)":
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
- heading "Shopping cart" [level=1]
- table:
  - rowgroup:
    - row "Remove Product(s) Price Qty. Total":
      - columnheader "Remove"
      - columnheader
      - columnheader "Product(s)"
      - columnheader "Price"
      - columnheader "Qty."
      - columnheader "Total"
  - rowgroup:
    - row "Picture of Computing and Internet Computing and Internet 10.00 3 30.00":
      - cell:
        - checkbox
      - cell "Picture of Computing and Internet":
        - img "Picture of Computing and Internet"
      - cell "Computing and Internet":
        - link "Computing and Internet":
          - /url: /computing-and-internet
      - cell "10.00"
      - cell "3":
        - textbox: "3"
      - cell "30.00"
- button "Update shopping cart"
- button "Continue shopping"
- strong: Discount Code
- text: Enter your coupon here
- textbox
- button "Apply coupon"
- strong: Gift Cards
- text: Enter gift card code
- textbox
- button "Add gift card"
- text: The coupon code you entered couldn't be applied to your order
- strong: Estimate shipping
- text: "Enter your destination to get a shipping estimate Country:"
- combobox "Country:":
  - option "Select country"
  - option "United States" [selected]
  - option "Canada"
  - option "Afghanistan"
  - option "Albania"
  - option "Algeria"
  - option "American Samoa"
  - option "Andorra"
  - option "Angola"
  - option "Anguilla"
  - option "Antarctica"
  - option "Antigua and Barbuda"
  - option "Argentina"
  - option "Armenia"
  - option "Aruba"
  - option "Australia"
  - option "Austria"
  - option "Azerbaijan"
  - option "Bahamas"
  - option "Bahrain"
  - option "Bangladesh"
  - option "Barbados"
  - option "Belarus"
  - option "Belgium"
  - option "Belize"
  - option "Benin"
  - option "Bermuda"
  - option "Bhutan"
  - option "Bolivia"
  - option "Bosnia and Herzegowina"
  - option "Botswana"
  - option "Bouvet Island"
  - option "Brazil"
  - option "British Indian Ocean Territory"
  - option "Brunei Darussalam"
  - option "Bulgaria"
  - option "Burkina Faso"
  - option "Burundi"
  - option "Cambodia"
  - option "Cameroon"
  - option "Cape Verde"
  - option "Cayman Islands"
  - option "Central African Republic"
  - option "Chad"
  - option "Chile"
  - option "China"
  - option "Christmas Island"
  - option "Cocos (Keeling) Islands"
  - option "Colombia"
  - option "Comoros"
  - option "Congo"
  - option "Cook Islands"
  - option "Costa Rica"
  - option "Cote D'Ivoire"
  - option "Croatia"
  - option "Cuba"
  - option "Cyprus"
  - option "Czech Republic"
  - option "Denmark"
  - option "Djibouti"
  - option "Dominica"
  - option "Dominican Republic"
  - option "Ecuador"
  - option "Egypt"
  - option "El Salvador"
  - option "Equatorial Guinea"
  - option "Eritrea"
  - option "Estonia"
  - option "Ethiopia"
  - option "Falkland Islands (Malvinas)"
  - option "Faroe Islands"
  - option "Fiji"
  - option "Finland"
  - option "France"
  - option "French Guiana"
  - option "French Polynesia"
  - option "French Southern Territories"
  - option "Gabon"
  - option "Gambia"
  - option "Georgia"
  - option "Germany"
  - option "Ghana"
  - option "Gibraltar"
  - option "Greece"
  - option "Greenland"
  - option "Grenada"
  - option "Guadeloupe"
  - option "Guam"
  - option "Guatemala"
  - option "Guinea"
  - option "Guinea-bissau"
  - option "Guyana"
  - option "Haiti"
  - option "Heard and Mc Donald Islands"
  - option "Honduras"
  - option "Hong Kong"
  - option "Hungary"
  - option "Iceland"
  - option "India"
  - option "Indonesia"
  - option "Iran (Islamic Republic of)"
  - option "Iraq"
  - option "Ireland"
  - option "Israel"
  - option "Italy"
  - option "Jamaica"
  - option "Japan"
  - option "Jordan"
  - option "Kazakhstan"
  - option "Kenya"
  - option "Kiribati"
  - option "Korea"
  - option "Korea, Democratic People's Republic of"
  - option "Kuwait"
  - option "Kyrgyzstan"
  - option "Lao People's Democratic Republic"
  - option "Latvia"
  - option "Lebanon"
  - option "Lesotho"
  - option "Liberia"
  - option "Libyan Arab Jamahiriya"
  - option "Liechtenstein"
  - option "Lithuania"
  - option "Luxembourg"
  - option "Macau"
  - option "Macedonia"
  - option "Madagascar"
  - option "Malawi"
  - option "Malaysia"
  - option "Maldives"
  - option "Mali"
  - option "Malta"
  - option "Marshall Islands"
  - option "Martinique"
  - option "Mauritania"
  - option "Mauritius"
  - option "Mayotte"
  - option "Mexico"
  - option "Micronesia"
  - option "Moldova"
  - option "Monaco"
  - option "Mongolia"
  - option "Montenegro"
  - option "Montserrat"
  - option "Morocco"
  - option "Mozambique"
  - option "Myanmar"
  - option "Namibia"
  - option "Nauru"
  - option "Nepal"
  - option "Netherlands"
  - option "Netherlands Antilles"
  - option "New Caledonia"
  - option "New Zealand"
  - option "Nicaragua"
  - option "Niger"
  - option "Nigeria"
  - option "Niue"
  - option "Norfolk Island"
  - option "Northern Mariana Islands"
  - option "Norway"
  - option "Oman"
  - option "Pakistan"
  - option "Palau"
  - option "Panama"
  - option "Papua New Guinea"
  - option "Paraguay"
  - option "Peru"
  - option "Philippines"
  - option "Pitcairn"
  - option "Poland"
  - option "Portugal"
  - option "Puerto Rico"
  - option "Qatar"
  - option "Reunion"
  - option "Romania"
  - option "Russia"
  - option "Rwanda"
  - option "Saint Kitts and Nevis"
  - option "Saint Lucia"
  - option "Saint Vincent and the Grenadines"
  - option "Samoa"
  - option "San Marino"
  - option "Sao Tome and Principe"
  - option "Saudi Arabia"
  - option "Senegal"
  - option "Serbia"
  - option "Seychelles"
  - option "Sierra Leone"
  - option "Singapore"
  - option "Slovakia (Slovak Republic)"
  - option "Slovenia"
  - option "Solomon Islands"
  - option "Somalia"
  - option "South Africa"
  - option "South Georgia & South Sandwich Islands"
  - option "Spain"
  - option "Sri Lanka"
  - option "St. Helena"
  - option "St. Pierre and Miquelon"
  - option "Sudan"
  - option "Suriname"
  - option "Svalbard and Jan Mayen Islands"
  - option "Swaziland"
  - option "Sweden"
  - option "Switzerland"
  - option "Syrian Arab Republic"
  - option "Taiwan"
  - option "Tajikistan"
  - option "Tanzania"
  - option "Thailand"
  - option "Togo"
  - option "Tokelau"
  - option "Tonga"
  - option "Trinidad and Tobago"
  - option "Tunisia"
  - option "Turkey"
  - option "Turkmenistan"
  - option "Turks and Caicos Islands"
  - option "Tuvalu"
  - option "Uganda"
  - option "Ukraine"
  - option "United Arab Emirates"
  - option "United Kingdom"
  - option "United States minor outlying islands"
  - option "Uruguay"
  - option "Uzbekistan"
  - option "Vanuatu"
  - option "Vatican City State (Holy See)"
  - option "Venezuela"
  - option "Viet Nam"
  - option "Virgin Islands (British)"
  - option "Virgin Islands (U.S.)"
  - option "Wallis and Futuna Islands"
  - option "Western Sahara"
  - option "Yemen"
  - option "Zambia"
  - option "Zimbabwe"
- text: "* State / province:"
- combobox "State / province:":
  - option "AA (Armed Forces Americas)" [selected]
  - option "AE (Armed Forces Europe)"
  - option "Alabama"
  - option "Alaska"
  - option "American Samoa"
  - option "AP (Armed Forces Pacific)"
  - option "Arizona"
  - option "Arkansas"
  - option "California"
  - option "Colorado"
  - option "Connecticut"
  - option "Delaware"
  - option "District of Columbia"
  - option "Federated States of Micronesia"
  - option "Florida"
  - option "Georgia"
  - option "Guam"
  - option "Hawaii"
  - option "Idaho"
  - option "Illinois"
  - option "Indiana"
  - option "Iowa"
  - option "Kansas"
  - option "Kentucky"
  - option "Louisiana"
  - option "Maine"
  - option "Marshall Islands"
  - option "Maryland"
  - option "Massachusetts"
  - option "Michigan"
  - option "Minnesota"
  - option "Mississippi"
  - option "Missouri"
  - option "Montana"
  - option "Nebraska"
  - option "Nevada"
  - option "New Hampshire"
  - option "New Jersey"
  - option "New Mexico"
  - option "New York"
  - option "North Carolina"
  - option "North Dakota"
  - option "Northern Mariana Islands"
  - option "Ohio"
  - option "Oklahoma"
  - option "Oregon"
  - option "Palau"
  - option "Pennsylvania"
  - option "Puerto Rico"
  - option "Rhode Island"
  - option "South Carolina"
  - option "South Dakota"
  - option "Tennessee"
  - option "Texas"
  - option "Utah"
  - option "Vermont"
  - option "Virgin Islands"
  - option "Virginia"
  - option "Washington"
  - option "West Virginia"
  - option "Wisconsin"
  - option "Wyoming"
- text: "Zip / postal code:"
- textbox "Zip / postal code:": "6789054"
- button "Estimate shipping"
- table:
  - rowgroup:
    - 'row "Sub-Total: 30.00"':
      - cell "Sub-Total:"
      - cell "30.00"
    - 'row "Shipping: 0.00"':
      - cell "Shipping:"
      - cell "0.00"
    - 'row "Tax: 0.00"':
      - cell "Tax:"
      - cell "0.00"
    - 'row "Total: 30.00"':
      - cell "Total:"
      - cell "30.00":
        - strong: "30.00"
- checkbox
- text: I agree with the terms of service and I adhere to them unconditionally (read)
- button "Checkout"
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
Error: locator.clear: Test ended.
Call log:
  - waiting for locator('#BillingNewAddress_LastName')
    - waiting for "https://demowebshop.tricentis.com/logout" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"

```

# Test source

```ts
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
> 252 |         await this.lastname.clear();
      |                             ^ Error: locator.clear: Test ended.
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
  317 |         await this.continuepaymentMethod.click();
  318 |     }
  319 | 
  320 |     async checkPaymentinfo() {
  321 |         await expect(this.paymentinfoheading).toBeVisible();
  322 |         //  Scopes locator directly to the active Payment Info container
  323 |         const paymentDetailsElement = this.page.locator('#checkout-payment-info-load .payment-details, #checkout-payment-info-load p');
  324 |         const selectedPaymentText = await paymentDetailsElement.first().innerText();
  325 |         console.log("Dynamically Selected Payment Method:", selectedPaymentText.trim());
  326 |          await this.contniuePaymentinfo.click();
  327 |         return selectedPaymentText.trim(); // if use return that will be the last line ,below that wont work
  328 |    
  329 |     }
  330 | 
  331 |     async checkOrderconfirmation() {
  332 |         await expect(this.confirmorderheading).toBeVisible();
  333 |         await expect(this.ordersummary).toBeVisible();
  334 |         await this.confirmbtninfinal.click();
  335 |     }
  336 | 
  337 |     async succesMsg() {
  338 |         await expect(this.page.getByRole('heading', { name: 'Thank you' })).toBeVisible();
  339 |         await expect(this.page.locator('div.section.order-completed')).toBeVisible();
  340 |         await expect(this.page.getByText('Your order has been successfully processed!', { exact: true })).toBeVisible();
  341 |         await this.page.locator('input.button-2.order-completed-continue-button').click();
  342 |     }
  343 | 
  344 | 
  345 | }
```