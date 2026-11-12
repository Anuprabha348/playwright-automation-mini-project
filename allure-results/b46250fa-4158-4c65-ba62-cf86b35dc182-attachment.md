# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Test Cases >> Verify user can log in successfully
- Location: tests\ui\login.spec.ts:14:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Log in')

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly loginLink: Locator;
  6  |     readonly emailInput: Locator;
  7  |     readonly passwoedInput: Locator;
  8  |     readonly loginButton: Locator;
  9  |     readonly logoutLink: Locator;
  10 | 
  11 |     constructor(page: Page) {  // locaters
  12 |         this.page = page;
  13 |         this.loginLink = page.getByText('Log in');
  14 |         this.emailInput = page.getByRole('textbox', { name: 'Email:' });
  15 |         this.passwoedInput = page.getByRole('textbox', { name: 'Password:' });
  16 |         this.loginButton = page.getByRole('button', { name: 'login' });
  17 |         this.logoutLink = page.getByRole('link', { name: "log out" });
  18 | 
  19 |     }
  20 |     // Methods
  21 |     async clickLoginLink(url: string) {
  22 |         await this.page.goto(url);
  23 |         await this.loginLink.click();
  24 |     }
  25 | 
  26 |     async login(email: string, pass: string) {
> 27 |         await this.loginLink.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |         await this.emailInput.fill(email);
  29 |         await this.passwoedInput.fill(pass);
  30 |         await this.loginButton.click();
  31 |     }
  32 | 
  33 |     async enterEmail(email: string) {
  34 |         await this.emailInput.fill(email);
  35 |     }
  36 |     async enterPassword(pass: string) {
  37 |         await this.passwoedInput.fill(pass);
  38 |     }
  39 |     async clickLogin() {
  40 |         await this.loginButton.click();
  41 |     }
  42 |     async clickLogout() {
  43 |         await this.logoutLink.click();
  44 |     }
  45 | 
  46 | }
```