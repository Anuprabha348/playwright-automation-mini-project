# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Checkout Module >> check billing Address validation
- Location: tests\ui\checkout.spec.ts:26:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('First name is required.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('First name is required.') with timeout 5000ms
  - waiting for getByText('First name is required.')

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
    - link "Shopping cart (4)":
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
    - text: . Select a billing address from your address book or enter a new address.
    - combobox "Select a billing address from your address book or enter a new address.":
      - option "John d, qqewrsfdrgfd, dfggg, Texas 4556789, United States"
      - option "John d, 123 Main Street, Dallas, Texas 75001.0, United States"
      - option "New Address" [selected]
    - text: "First name:"
    - textbox "First name:": John
    - text: "* Last name:"
    - textbox "Last name:": d
    - text: "* Email:"
    - textbox "Email:": john123@test123.com
    - text: "* Company:"
    - textbox "Company:"
    - text: "Country:"
    - combobox "Country:":
      - option "Select country" [selected]
      - option "United States"
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
      - option "Other (Non US)" [selected]
    - text: "City:"
    - textbox "City:"
    - text: "* Address 1:"
    - textbox "Address 1:"
    - text: "* Address 2:"
    - textbox "Address 2:"
    - text: "Zip / postal code:"
    - textbox "Zip / postal code:"
    - text: "* Phone number:"
    - textbox "Phone number:"
    - text: "* Fax number:"
    - textbox "Fax number:"
    - button "Continue"
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
  237 |         await this.countrybillingAdd.selectOption({ label: country });
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
> 248 |         await expect(this.firstNameVal).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  249 |         await expect(this.lastnameVal).toBeVisible();
  250 |         await expect(this.emailval).toBeVisible();
  251 |         await expect(this.countryval).toBeVisible();
  252 |         await expect(this.cityval).toBeVisible();
  253 |         await expect(this.add1val).toBeVisible();
  254 |         await expect(this.zipval).toBeVisible();
  255 |         await expect(this.phoneval).toBeVisible();
  256 |         await this.continueaddress.click();
  257 | 
  258 |     }
  259 | 
  260 | 
  261 | 
  262 | }
```