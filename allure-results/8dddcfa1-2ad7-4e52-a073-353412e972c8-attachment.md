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

```

```yaml
- paragraph: Quantity should be positive
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
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- list:
  - listitem:
    - link "Home":
      - /url: /
    - text: /
  - listitem:
    - link "Books":
      - /url: /books
    - text: /
  - listitem:
    - strong: Computing and Internet
- img "Picture of Computing and Internet"
- heading "Computing and Internet" [level=1]
- text: "More Than 100 tips about computing and internet. Availability: In stock Free shipping"
- link "3177 review(s)":
  - /url: /productreviews/13
- text: "|"
- link "Add your review":
  - /url: /productreviews/13
- text: "Old price: 30.00 Price: 10.00 Qty:"
- textbox "Qty:": "2"
- button "Add to cart"
- button "Email a friend"
- button "Add to compare list"
- paragraph: Get to know everything about computing and the internet.
- strong: Product tags
- list:
  - listitem:
    - link "nice":
      - /url: /producttag/1/nice
    - text: (6)
  - listitem: ","
  - listitem:
    - link "awesome":
      - /url: /producttag/8/awesome
    - text: (20)
  - listitem: ","
  - listitem:
    - link "book":
      - /url: /producttag/10/book
    - text: (6)
- strong: Customers who bought this item also bought
- link "Picture of Simple Computer":
  - /url: /simple-computer
  - img "Picture of Simple Computer"
- heading "Simple Computer" [level=2]:
  - link "Simple Computer":
    - /url: /simple-computer
- text: "800.00"
- button "Add to cart"
- link "Picture of Build your own expensive computer":
  - /url: /build-your-own-expensive-computer-2
  - img "Picture of Build your own expensive computer"
- heading "Build your own expensive computer" [level=2]:
  - link "Build your own expensive computer":
    - /url: /build-your-own-expensive-computer-2
- text: "1800.00"
- button "Add to cart"
- link "Picture of Blue Jeans":
  - /url: /blue-jeans
  - img "Picture of Blue Jeans"
- heading "Blue Jeans" [level=2]:
  - link "Blue Jeans":
    - /url: /blue-jeans
- text: "1.00"
- button "Add to cart"
- strong: Related products
- link "Picture of Health Book":
  - /url: /health
  - img "Picture of Health Book"
- heading "Health Book" [level=2]:
  - link "Health Book":
    - /url: /health
- text: 27.00 10.00
- button "Add to cart"
- link "Picture of Science":
  - /url: /science
  - img "Picture of Science"
- heading "Science" [level=2]:
  - link "Science":
    - /url: /science
- text: 67.00 51.00
- link "Picture of Fiction":
  - /url: /fiction
  - img "Picture of Fiction"
- heading "Fiction" [level=2]:
  - link "Fiction":
    - /url: /fiction
- text: 35.00 24.00
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
  8   |     readonly proName;
  9   |     readonly shtdes;
  10  |     readonly stock;
  11  |     readonly ship;
  12  |     readonly review;
  13  |     readonly price;
  14  |     readonly qty;
  15  |     readonly addtocart;
  16  |     readonly email;
  17  |     readonly compare;
  18  |     readonly succ;
  19  |     readonly negqty;
  20  | 
  21  |     constructor(page: Page) {
  22  |         this.page = page;
  23  |         this.prodetails = page.locator('div.page.product-details-page');
  24  |         this.image = page.locator('#main-product-img-13:visible')
  25  |         this.des = page.getByText('Get to know everything about computing and the internet.', { exact: true });
  26  |         this.proName = page.locator('div.product-name');
  27  |         this.shtdes = page.locator(".short-description");
  28  |         this.stock = page.locator(".stock");
  29  |         this.ship = page.locator('.free-shipping');
  30  |         this.review = page.locator(".product-reviews-overview");
  31  |         this.price = page.locator(".price-value-13")
  32  |         this.qty = page.locator("#addtocart_13_EnteredQuantity");
  33  |         this.addtocart = page.locator('#add-to-cart-button-13');
  34  |         this.email = page.locator('.email-a-friend');
  35  |         this.compare = page.locator('.compare-products');
  36  |         this.succ = page.getByText('The product has been added to your shopping cart', { exact: true })
  37  |         this.negqty = page.getByText('Quantity should be positive', { exact: true })
  38  |     }
  39  | 
  40  |     //  Action Methods
  41  |     async verifyProductDetails(expectedProductName: string, ) {
  42  |         // product details 
  43  | 
  44  |         await expect(this.prodetails).toBeVisible();
  45  |         await expect(this.image).toBeVisible();
  46  |         await expect(this.des).toBeVisible();
  47  | 
  48  |         const productName = await this.proName.innerText(); //allinterTest is [] of string
  49  |         console.log("Product Name:", productName);
  50  |         expect(productName.trim()).not.toBe('');
  51  | 
  52  |         await expect(this.proName).toBeVisible();
  53  |         await expect(this.shtdes).toBeVisible();
  54  |         await expect(this.stock).toBeVisible();
  55  |         await expect(this.ship).toBeVisible();
  56  |         await expect(this.review).toBeVisible();
  57  | 
  58  |         // Quantity
  59  |         await expect(this.qty).toBeVisible();
  60  |         const def = await this.qty.inputValue(); // no innertext because its number.
  61  |         console.log("Default Quantity is:", def);
  62  |         // expect(price.trim()).not.toBe('');
  63  |         await expect(this.qty).toHaveCount(1);
  64  | 
  65  |         // quantity validation
  66  | 
  67  |         await this.qty.fill("0");
  68  |         await this.addtocart.click();
  69  |         await expect(this.negqty).toBeVisible();
  70  |         const validation = await this.negqty.innerText();
  71  |         console.log("Validation msg:", validation);
  72  | 
  73  |         //buttons
  74  |         await expect(this.email).toBeVisible();
  75  |         await expect(this.compare).toBeVisible();
  76  |         await this.addtocart.click();
  77  |     }
  78  | 
  79  |     //Verify price Calculation.
  80  |     async VerifyQuanitypriceincreese(quantityValue: string) {
  81  | 
  82  |         //.innerText(): Used to extract visible text content from standard HTML display elements like spans or divs (such as product prices).
  83  |         //.inputValue(): Used to retrieve the current typed or selected value specifically from interactive form elements like input boxes (such as quantity fields).
  84  | 
  85  |         const initialPrice = await this.price.innerText();
  86  |         const unitPrice = parseFloat(initialPrice.replace(/[^0-9.]/g, ''));
  87  |         console.log("Unit Price:", unitPrice);
  88  | 
  89  |         // more Quantity
  90  |         await this.qty.fill(quantityValue);
  91  |         console.log("Add to Cart Quantity is:", quantityValue);
  92  | 
  93  |         //  Get the updated total price text. ---------------------------------bug in the website its getting failed so , i commed
  94  |        // const updatedPriceText = await this.price.innerText();
  95  |        // const totalPrice = parseFloat(updatedPriceText.replace(/[^0-9.]/g, ''));
  96  |        // console.log("Total Price for Qty", quantityValue, ":", totalPrice);
  97  | 
  98  |         // Assert math calculation
  99  |        // expect.soft(totalPrice).toBe(unitPrice * parseInt(quantityValue));
  100 |         await this.addtocart.click();
  101 |     }
  102 | 
  103 |     async addProductToCart() {
  104 | 
  105 |         await expect(this.addtocart).toBeVisible();
  106 |         await expect(this.addtocart).toBeEnabled();
  107 |         await this.addtocart.click();
> 108 |         await expect(this.succ).toBeVisible();
      |                                 ^ Error: expect(locator).toBeVisible() failed
  109 |         const SuccesMessage = await this.succ.innerText();
  110 |         console.log("Add to card Status:", SuccesMessage);
  111 |     }
  112 | }
  113 | 
```