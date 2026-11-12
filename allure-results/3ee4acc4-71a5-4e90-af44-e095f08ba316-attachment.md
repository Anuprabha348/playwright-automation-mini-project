# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Test Cases >> Verify user can login with Empty credentials
- Location: tests\ui\login.spec.ts:13:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('div.validation-summary-errors')
Timeout: 5000ms
- Expected  - 1
+ Received  + 3

- Login was unsuccessful. Please correct the errors and try again.No customer account found
+ Login was unsuccessful. Please correct the errors and try again.
+ No customer account found
+

Call log:
  - Expect "toHaveText" locator('div.validation-summary-errors') with timeout 5000ms
  - waiting for locator('div.validation-summary-errors')
    14 × locator resolved to <div class="validation-summary-errors">…</div>
       - unexpected value "Login was unsuccessful. Please correct the errors and try again.
No customer account found
"

```

```yaml
- text: Login was unsuccessful. Please correct the errors and try again.
- list:
  - listitem: No customer account found
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly loginLink: Locator;
  6  |     readonly emailInput: Locator;
  7  |     readonly passwordInput: Locator;
  8  |     readonly loginButton: Locator;
  9  |     readonly logoutLink: Locator;
  10 |     readonly validation: Locator;
  11 | 
  12 | 
  13 |     constructor(page: Page) {  // locaters
  14 |         this.page = page;
  15 |         this.loginLink = page.getByText('Log in');
  16 |         this.emailInput = page.getByRole('textbox', { name: 'Email:' });
  17 |         this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
  18 |         this.loginButton = page.getByRole('button', { name: 'Log in' });
  19 |         this.logoutLink = page.getByRole('link', { name: "log out" });
  20 |         this.validation = page.locator('div.validation-summary-errors')
  21 |     }
  22 |     // Methods
  23 |     async clickLoginLink(url: string) {
  24 |         await this.page.goto(url);
  25 |         await this.loginLink.click();
  26 |     }
  27 | 
  28 |     async login(email: string, pass: string) {
  29 |         await this.loginLink.click();
  30 |         await expect(this.page).toHaveURL("https://demowebshop.tricentis.com/login");
  31 |         await this.emailInput.fill(email);
  32 |         await this.passwordInput.fill(pass);
  33 |         await this.loginButton.click();
  34 | 
  35 |     }
  36 | 
  37 |     async enterEmail(email: string) {
  38 |         await this.emailInput.fill(email);
  39 |     }
  40 |     async enterPassword(pass: string) {
  41 |         await this.passwordInput.fill(pass);
  42 |     }
  43 |     async clickLogin() {
  44 |         await this.loginButton.click();
  45 |     }
  46 |     async clickLogout() {
  47 |         await this.logoutLink.click();
  48 |     }
  49 |     async validationError() {
  50 |      const loginerror  =(await this.validation.innerText()).replace(/\s+/g, ' ').trim();
  51 |      console.log("Validation Error:", loginerror);
> 52 |         await expect(this .validation).toHaveText("Login was unsuccessful. Please correct the errors and try again.No customer account found");
     |                                        ^ Error: expect(locator).toHaveText(expected) failed
  53 |     }
  54 | }
```