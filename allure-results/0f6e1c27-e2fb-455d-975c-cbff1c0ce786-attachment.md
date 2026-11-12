# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkout.spec.ts >> Cheout Moduele >> Verify Discount Coupons Can apply
- Location: tests\ui\checkout.spec.ts:6:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Discount Code', { exact: true })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Discount Code', { exact: true }) with timeout 5000ms
  - waiting for getByText('Discount Code', { exact: true })
    - waiting for "https://demowebshop.tricentis.com/cart" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/"
  - Test ended.

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
- img
- text: Speed | Tricentis Prev Next 1 2
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
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | export class Checkout {
  4  |     readonly page: Page;
  5  |     readonly discountHeading;
  6  |     readonly discountText;
  7  |     readonly discountinput;
  8  |     readonly discountButton;
  9  |     readonly discountValidation;
  10 |     readonly giftcardHeading;
  11 |     readonly giftcardText;
  12 |     readonly giftcardinput;
  13 |     readonly giftcardButton;
  14 |     readonly giftcardtValidation;
  15 |     readonly estimateheading;
  16 |     readonly estimatetext;
  17 |     readonly country;
  18 |     readonly state;
  19 |     readonly zip;
  20 |     readonly estimateButton;
  21 |     readonly subTotal;
  22 |     readonly shipping;
  23 |     readonly tax;
  24 |     readonly total;
  25 |     readonly terms;
  26 |     readonly checkoutbtn;
  27 | 
  28 |     constructor(page: Page) {
  29 |         this.page = page;
  30 |         this.discountHeading = page.getByText('Discount Code', { exact: true });
  31 |         this.discountText = page.getByText('Enter your coupon here');
  32 |         this.discountinput = page.locator('[name="discountcouponcode"]');
  33 |         this.discountButton = page.getByRole('button', { name: 'Apply coupon' });
  34 |         this.discountValidation = page.getByText(/coupon code you entered couldn't be applied/i);
  35 |         this.giftcardHeading = page.locator('strong').filter({ hasText: 'Gift Cards' });
  36 |         this.giftcardText = page.getByText('Enter gift card code');
  37 |         this.giftcardinput = page.locator('.gift-card-coupon-code');
  38 |         this.giftcardButton = page.getByRole('button', { name: 'Add gift card' });
  39 |         this.giftcardtValidation = page.getByText("The coupon code you entered couldn't be applied to your order", { exact: true });
  40 |         this.estimateheading = page.getByText('Estimate shipping', { exact: true });
  41 |         this.estimatetext = page.getByText('Enter your destination to get a shipping estimate', { exact: true });
  42 |         this.country = page.locator('#CountryId');
  43 |         this.state = page.locator('#StateProvinceId');
  44 |         this.zip = page.getByRole('textbox', { name: 'Zip / postal code:' });
  45 |         this.estimateButton = page.locator('[name="estimateshipping"]');
  46 |         this.subTotal = page.locator(`//tr[td[contains(., 'Sub-Total:')]]//td[count(//th[contains(., '30.00')]/preceding-sibling::th) + 1]//span`);
  47 |         this.shipping = page.locator(`//tr[td[contains(., 'Shipping:')]]//td[count(//th[contains(., '30.00')]/preceding-sibling::th) + 1]//span`);
  48 |         this.tax = page.locator('span').filter({ hasText: '0.00' }).first();
  49 |         this.total = page.locator(`//tr[td[contains(., 'Total:')]]//strong`);
  50 |         this.terms = page.locator('#termsofservice');
  51 |         this.checkoutbtn = page.getByRole('button', { name: 'Checkout' });
  52 | 
  53 |     }
  54 | 
  55 |     // Methods
  56 | 
  57 |     async enterDiscount() {
  58 |         // ui
> 59 |         await expect(this.discountHeading).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  60 |         await expect(this.discountText).toBeVisible();
  61 |         // fill
  62 |         await this.discountinput.fill("JUNGKOOK1997");
  63 |         //click
  64 |         console.log("Button count:", await this.discountButton.count());
  65 |         console.log("Button visible:", await this.discountButton.isVisible());
  66 |         console.log("Button enabled:", await this.discountButton.isEnabled());
  67 |         await this.discountButton.click();
  68 |         // validation
  69 |         await expect(this.discountValidation).toBeVisible();
  70 |         //get text
  71 |         const validation = await this.discountValidation.innerText();
  72 |         console.log("Validation Msg:", validation);
  73 | 
  74 |         await expect(this.discountValidation).toContainText("couldn't be applied");
  75 |     }
  76 | 
  77 |     async enterGiftcard() {
  78 |         await expect(this.giftcardHeading).toBeVisible();
  79 |         await expect(this.giftcardText).toBeVisible();
  80 |         await this.giftcardinput.fill("JUNGKOOK1997");
  81 |         await this.giftcardButton.click()
  82 |         await expect(this.giftcardtValidation).toBeVisible();
  83 |         const validation = await this.giftcardtValidation.innerText();
  84 |         console.log("Validation Msg:", validation);
  85 |     }
  86 | 
  87 | 
  88 | }
```