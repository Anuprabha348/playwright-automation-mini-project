import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutLink: Locator;
    readonly validation: Locator;


    constructor(page: Page) {  // locaters
        this.page = page;
        this. loginLink = page.locator('.ico-login');
        this.emailInput = page.getByRole('textbox', { name: 'Email:' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.logoutLink = page.getByRole('link', { name: "log out" });
        this.validation = page.locator('div.validation-summary-errors')
    }
    // Methods
    async clickLoginLink(url: string) {
        await this.page.goto(url);
        await this.loginLink.click();
    }

    async login(email: string, pass: string) {
        await this.loginLink.click();
        await expect(this.page).toHaveURL("https://demowebshop.tricentis.com/login");
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();

    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }
    async enterPassword(pass: string) {
        await this.passwordInput.fill(pass);
    }
    async clickLogin() {
        await this.loginButton.click();
    }
    async clickLogout() {
        await this.logoutLink.click();
    }
    
    async validationError(expectedResult: string,timeout: number = 5000) {
    // 1. Get the text and normalize all spaces/newlines into a single clean space
    const rawText = await this.validation.textContent();
    const cleanedText = rawText ? rawText.replace(/\s+/g, ' ').trim() : '';

    console.log("Validation Error:", cleanedText);
    expect(cleanedText).toBe(expectedResult);
    
}}