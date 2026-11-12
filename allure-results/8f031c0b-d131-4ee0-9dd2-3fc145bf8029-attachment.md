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
    3 × waiting for "https://demowebshop.tricentis.com/cart" navigation to finish...
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
- text: The coupon code you entered couldn't be applied to your order
- strong: Gift Cards
- text: Enter gift card code
- textbox
- button "Add gift card"
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
Error: locator.click: Test ended.
Call log:
  - waiting for locator('#termsofservice')
    - locator resolved to <input type="checkbox" id="termsofservice" name="termsofservice"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Test source

```ts
  1  | import { test } from "..//fixtures/baseFixtures";
  2  | 
  3  | 
  4  | test.describe("Regression Testing", () => {
  5  | 
  6  |     test("End To End Testing ", async ({ page, loginPage, loggedUser, productSearch, productDetails, checkout, shoppingCart }) => {
  7  | 
  8  |         //login done by login fixture 
  9  | 
  10 |         // product search 
  11 |         const searchTerm = 'Computing and Internet';
  12 | 
  13 |         await productSearch.EnterSerch(searchTerm);
  14 |         await productSearch.viewSearchProductList();
  15 | 
  16 |         // product details
  17 | 
  18 |         await productSearch.clickSearchedProduct(searchTerm);
  19 |         await productDetails.verifyProductDetails(searchTerm);
  20 |         await productDetails.VerifyQuanitypriceincreese('2')
  21 |         await  productDetails.addtocart.click();
  22 |          await  productDetails.addtocart.click();
  23 |         await productDetails.addProductToCart();
  24 | 
  25 |         // 3. Navigate to Shopping Cart
  26 |         await shoppingCart.clickShoppingCartLink();
  27 |         await shoppingCart.headingVisible();
  28 | 
  29 |         // 4. Perform cart validations
  30 |         await shoppingCart.getAllProductList();
  31 |         await shoppingCart.verifyTableQtyMatchesHeaderQty();
  32 |         await shoppingCart.clickCheckBox();
  33 |         await shoppingCart.productImage();
  34 |         await shoppingCart.cartProductName();
  35 |         await shoppingCart.priceCheck();
  36 |         await shoppingCart.changeQty();
  37 |         await shoppingCart.quantityAndPriceChangeCalculation('3');
  38 |         // checkout
  39 |         await checkout.enterDiscount();
  40 |         await checkout.enterGiftcard();
  41 |         await checkout.checkEstimateShipping("United States", "Alaska", "457866");
  42 | 
  43 |         await checkout.verifyCartTotalsMatch();
> 44 |         await checkout.terms.click();
     |                              ^ Error: locator.click: Test ended.
  45 |         await checkout.checkoutbtn.click();
  46 |         await checkout.enterBillingAddressvalidation("New Address");
  47 |         // billing 
  48 |         await checkout.enterBillingAddress("New Address", "United States");
  49 |         await checkout.EnterShippingaddress();
  50 |         await checkout.enterShippingMethod();
  51 |         await checkout.selectPaymentMethods('COD');
  52 |         await checkout.checkPaymentinfo();
  53 |         await checkout.checkOrderconfirmation();
  54 |         await checkout.succesMsg();
  55 | 
  56 |     });
  57 | });
  58 | 
  59 | 
```