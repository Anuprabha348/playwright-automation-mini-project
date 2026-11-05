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

Locator: getByText('The coupon code you entered couldn\'t be applied to your order', { exact: true })
Expected: visible
Error: Test ended.

Call log:
  - Expect "toBeVisible" getByText('The coupon code you entered couldn\'t be applied to your order', { exact: true }) with timeout 5000ms
  - waiting for getByText('The coupon code you entered couldn\'t be applied to your order', { exact: true })
  - Test ended.

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
  33 |         this.discountButton = page.locator('input[name="applydiscountcouponcode"]');
  34 |         this.discountValidation = page.getByText("The coupon code you entered couldn't be applied to your order", { exact: true });
  35 |         this.giftcardHeading = page.locator('strong').filter({ hasText: 'Gift Cards' });
  36 |         this.giftcardText = page.getByText('Enter gift card code');
  37 |         this.giftcardinput = page.locator('.gift-card-coupon-code');
  38 |         this.giftcardButton = page.locator("input[value='Add gift card']");
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
  58 |         await expect(this.discountHeading).toBeVisible();
  59 |         await expect(this.discountText).toBeVisible();
  60 |         await this.discountinput.fill("JUNGKOOK1997");
  61 |         await this.discountButton.click()
> 62 |         await expect(this.discountValidation).toBeVisible();
     |                                               ^ Error: expect(locator).toBeVisible() failed
  63 |         const validation = this.discountValidation.innerText();
  64 |         console.log("Validation Msg:", validation);
  65 |     }
  66 | 
  67 |      async enterGiftcard() {
  68 |         await expect(this.giftcardHeading).toBeVisible();
  69 |         await expect(this.giftcardText).toBeVisible();
  70 |         await this.giftcardinput.fill("JUNGKOOK1997");
  71 |         await this.giftcardButton.click()
  72 |         await expect(this.giftcardtValidation).toBeVisible();
  73 |         const validation = this.giftcardtValidation.innerText();
  74 |         console.log("Validation Msg:", validation);
  75 |     }
  76 | 
  77 | 
  78 | }
```