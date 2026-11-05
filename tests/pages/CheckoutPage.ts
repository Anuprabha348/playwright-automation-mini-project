import { Page, Locator, expect } from "@playwright/test";

export class Checkout {
    readonly page: Page;
    //discount
    readonly discountHeading;
    readonly discountText;
    readonly discountinput;
    readonly discountButton;
    readonly discountValidation;

    //gift card
    readonly giftcardHeading;
    readonly giftcardText;
    readonly giftcardinput;
    readonly giftcardButton;
    readonly giftcardtValidation;

    //estimation calculation
    readonly estimateheading;
    readonly estimatetext;
    readonly countryDropdown;
    readonly stateDropdown;
    readonly zip;
    readonly estimateButton;
    readonly shippingResult;
    readonly subTotal;
    readonly shipping;
    readonly tax;
    readonly total;
    readonly terms;
    readonly checkoutbtn;
    readonly tablePrice;

    //checkout address
    readonly billingAddHeading;
    readonly selectaBillingAddress;
    readonly firstName;
    readonly lastname;
    readonly email;
    readonly countrybillingAdd;
    readonly province;
    readonly cityadd;
    readonly add1;
    readonly postalcode;
    readonly phonenum;

    //shipping Address
    readonly shippingAddheading;
    readonly shippingpadd;
    readonly storepickup;
    readonly storepickupText;


    //shipping method
    readonly shippingMethodheading;
    readonly ground;
    readonly nextDay;
    readonly ndDayAir;

    // payment
    readonly paymentMethodheading;
    readonly codinpayment;
    readonly money;
    readonly creditcard;
    readonly purchaseorder;

    //payment
    readonly paymentinfoheading;
    readonly selectedpayment;

    //ordersummary
    readonly confirmorderheading;
    readonly ordersummary;

    //contniue btns
    readonly continueaddress;
    readonly continueshipingadd;
    readonly continueshipmethod;
    readonly continuepaymentMethod;
    readonly contniuePaymentinfo;
    readonly confirmbtninfinal;

    //  Address validation
    readonly firstNameVal;
    readonly lastnameVal;
    readonly emailval;
    readonly countryval;
    readonly cityval;
    readonly add1val;
    readonly zipval;
    readonly phoneval;

    constructor(page: Page) {
        this.page = page;
        this.discountHeading = page.getByText('Discount Code', { exact: true });
        this.discountText = page.getByText('Enter your coupon here');
        this.discountinput = page.locator('[name="discountcouponcode"]');
        this.discountButton = page.getByRole('button', { name: 'Apply coupon' });
        this.discountValidation = page.getByText(/coupon code you entered couldn't be applied/i);
        this.giftcardHeading = page.locator('strong').filter({ hasText: 'Gift Cards' });
        this.giftcardText = page.getByText('Enter gift card code');
        this.giftcardinput = page.locator('.gift-card-coupon-code');
        this.giftcardButton = page.getByRole('button', { name: 'Add gift card' });
        this.giftcardtValidation = page.getByText("The coupon code you entered couldn't be applied to your order", { exact: true });
        this.estimateheading = page.locator('div.estimate-shipping h2, div.estimate-shipping .title');
        this.estimatetext = page.getByText('Enter your destination to get a shipping estimate', { exact: true });
        this.countryDropdown = page.locator('#CountryId');
        this.stateDropdown = page.locator('#StateProvinceId');
        this.zip = page.getByRole('textbox', { name: 'Zip / postal code:' });
        this.estimateButton = page.locator('[name="estimateshipping"]');
        this.shippingResult = page.locator('.shipping-results')
        this.shipping = page.locator(`//tr[td[contains(., 'Shipping:')]]//td[count(//th[contains(., '30.00')]/preceding-sibling::th) + 1]//span`);
        this.tax = page.locator('span').filter({ hasText: '0.00' }).first();
        this.terms = page.locator('#termsofservice');
        this.checkoutbtn = page.getByRole('button', { name: 'Checkout' });
        this.tablePrice = page.locator('.product-subtotal'); // Product table item total column
        this.subTotal = page.locator('.cart-total tr:has-text("Sub-Total:") td.cart-total-right span.product-price'); // Sub-total value in the summary table
        this.total = page.locator('tr:has-text("Total:") td.cart-total-right span.product-price.order-total strong');  // Final total value in the summary table

        //checkout address
        this.billingAddHeading = page.locator('div.step-title h2', { hasText: 'Billing address' });
        this.selectaBillingAddress = page.locator('#billing-address-select');
        this.firstName = page.locator("#BillingNewAddress_FirstName")
        this.lastname = page.locator('#BillingNewAddress_LastName')
        this.email = page.locator('#BillingNewAddress_Email')
        this.countrybillingAdd = page.locator('#BillingNewAddress_CountryId')
        this.province = page.locator('#BillingNewAddress_StateProvinceId')
        this.cityadd = page.locator('#BillingNewAddress_City')
        this.add1 = page.locator('#BillingNewAddress_Address1')
        this.postalcode = page.locator('#BillingNewAddress_ZipPostalCode')
        this.phonenum = page.locator('#BillingNewAddress_PhoneNumber')
        this.continueaddress = page.locator('input.button-1.new-address-next-step-button:visible')
        //shipping Address
        this.shippingAddheading = page.getByRole('heading', { name: 'Shipping address' })
        this.storepickup = page.getByRole('checkbox', { name: 'In-Store Pickup' })
        this.storepickupText = page.getByLabel('In-Store Pickup')
        this.shippingpadd = page.locator("#shipping-address-select")
        this.continueshipingadd = page.locator('input.button-1.new-address-next-step-button:visible')
        //shipping Method
        this.shippingMethodheading = page.getByRole('heading', { name: 'Shipping method' })
        this.ground = page.locator('.method-name label[for="shippingoption_0"]');
        this.nextDay = page.locator("label[for='shippingoption_1']");
        this.ndDayAir = page.locator("label[for='shippingoption_2']");
        this.continueshipmethod = page.locator('input.button-1.shipping-method-next-step-button')
        //Payment Method
        this.paymentMethodheading = page.getByText('Payment Method')
        this.codinpayment = page.getByLabel('Cash On Delivery (COD) (7.00)')
        this.money = page.getByText('Check / Money Order (5.00)')
        this.creditcard = page.locator(':text("Credit Card")')
        this.purchaseorder = page.getByText('Purchase Order')
        this.continuepaymentMethod = page.locator('input.button-1.payment-method-next-step-button')
        //Payment info
        this.paymentinfoheading = page.getByRole('heading', { name: 'Payment information' })
        this.selectedpayment = page.locator('td:visible')
        this.contniuePaymentinfo = page.locator('input.button-1.payment-info-next-step-button')
        // confirm
        this.confirmorderheading = page.getByRole('heading', { name: 'Confirm order' })
        this.ordersummary = page.locator('.order-summary-content')
        this.confirmbtninfinal = page.locator('input.button-1.confirm-order-next-step-button')

        // validation
        this.firstNameVal = page.getByText('First name is required.');
        this.lastnameVal = page.getByText('Last name is required.');
        this.emailval = page.getByText('Email is required.');
        this.countryval = page.getByText('Country is required.');
        this.cityval = page.getByText('City is required');
        this.add1val = page.getByText('Street address is required');
        this.zipval = page.getByText('Zip / postal code is required');
        this.phoneval = page.getByText('Phone is required');

    }

    // Methods

    async enterDiscount() {
        // ui
        await expect(this.discountHeading).toBeVisible();
        await expect(this.discountText).toBeVisible();
        // fill
        await this.discountinput.fill("JUNGKOOK1997");
        //click
        console.log("Button visible:", await this.discountButton.isVisible());
        console.log("Button enabled:", await this.discountButton.isEnabled());
        await this.discountButton.click();
        // validation
        await expect(this.discountValidation).toBeVisible();
        //get text
        const validation = await this.discountValidation.innerText();
        console.log("Validation Msg:", validation);
        await expect(this.discountValidation).toContainText("couldn't be applied");
    }

    async enterGiftcard() {
        await expect(this.giftcardHeading).toBeVisible();
        await expect(this.giftcardText).toBeVisible();
        await this.giftcardinput.fill("JUNGKOOK1997");
        await this.giftcardButton.click()
        await expect(this.giftcardtValidation).toBeVisible();
        const validation = await this.giftcardtValidation.innerText();
        console.log("Validation Msg:", validation);
    }

    async checkEstimateShipping(country: string, state: string, zipinput: string) {
        await expect(this.estimateheading).toBeVisible();
        await expect(this.estimatetext).toBeVisible();
        await this.countryDropdown.selectOption({ label: country });
        await this.stateDropdown.selectOption({ label: state });
        await this.zip.fill(zipinput);
        await this.estimateButton.click();
        expect(this.shippingResult).toBeVisible();
    }

    async verifyCartTotalsMatch() {

        const rawTablePrice = await this.tablePrice.innerText();
        const rawSubTotal = await this.subTotal.innerText();
        const rawFinalTotal = await this.total.innerText();
        // Sanitize strings to extract only numbers/decimals (e.g., "30.00")
        const tablePriceText = rawTablePrice.replace(/[^0-9.]/g, '');
        const subTotalText = rawSubTotal.replace(/[^0-9.]/g, '');
        const finalTotalText = rawFinalTotal.replace(/[^0-9.]/g, '');

        console.log(`Comparing Item Total: ${tablePriceText} with Sub-Total: ${subTotalText} and Total: ${finalTotalText}`);

        //  Assert they match perfectly
        expect(tablePriceText).toBe(subTotalText);
        expect(tablePriceText).toBe(finalTotalText);

        console.log("All totals match successfully!");
    }

    async enterBillingAddress(address: string, country: string,) {
        expect(this.billingAddHeading).toBeVisible();
        await this.selectaBillingAddress.selectOption({ label: address });
        await this.firstName.fill("John");
        await this.lastname.fill("d");
        await this.email.fill("john123@test123.com");
        await this.countrybillingAdd.click();
        await this.countrybillingAdd.selectOption({ label: country });
        await this.cityadd.fill("Alashka");
        await this.add1.fill("Alashka city");
        await this.postalcode.fill("6789054");
        await this.phonenum.fill("9876543210");
        await this.continueaddress.click();

    }
    async enterBillingAddressvalidation(address: string) {
        await expect(this.billingAddHeading).toBeVisible();
        await this.selectaBillingAddress.selectOption({ label: address });
        await this.firstName.clear();
        await this.lastname.clear();
        await this.email.clear();
        await this.cityadd.clear();
        await this.add1.clear();
        await this.postalcode.clear();
        await this.phonenum.clear();
        await this.continueaddress.click();
        await expect(this.firstNameVal).toBeVisible();
        await expect(this.lastnameVal).toBeVisible();
        await expect(this.emailval).toBeVisible();
        await expect(this.countryval).toBeVisible();
        await expect(this.cityval).toBeVisible();
        await expect(this.add1val).toBeVisible();
        await expect(this.zipval).toBeVisible();
        await expect(this.phoneval).toBeVisible();

    }
    async EnterShippingaddress() {
        await expect(this.shippingAddheading).toBeVisible();
        await this.shippingpadd.selectOption({ label: 'John d, Alashka city, Alashka 6789054, United States' });
        await expect(this.storepickup).toBeVisible();
        // await this.storepickup.click();   if its checkbox is selected then no shipping method.
        // console.log("Store pickup is selected");
        await expect(this.storepickupText).toBeVisible();
        await this.continueshipingadd.click();
    }

    async enterShippingMethod() {
        //ground
        await expect(this.shippingMethodheading).toBeVisible();
        await expect(this.ground).toBeVisible();
        await expect(this.ground).toBeChecked();
        
        //nextday
        await expect(this.nextDay).toBeVisible();
        await this.nextDay.check();
        await expect(this.nextDay).toBeChecked();
     
        //ndDay
        await expect(this.ndDayAir).toBeVisible();
       
        await this.continueshipmethod.click();
    }

    async selectPaymentMethods(method: 'COD' | 'Check' | 'CreditCard' | 'PurchaseOrder') {
        await expect(this.paymentMethodheading).toBeVisible();

        if (method === 'COD') {
            await this.codinpayment.check();
            console.log("COD is selected");
        } else if (method === 'Check') {
            await this.money.check();
            console.log("Money is selected");
        } else if (method === 'CreditCard') {
            await this.creditcard.check();
            console.log("creditcard is selected");
        } else if (method === 'PurchaseOrder') {
            await this.purchaseorder.check();
            console.log("purchaseorder is selected");
        }
        await expect(this.codinpayment).toBeVisible();
        await expect(this.money).toBeVisible();
        await expect(this.creditcard).toBeVisible();
        await expect(this.purchaseorder).toBeVisible();

        await this.continuepaymentMethod.click();
    }

    async checkPaymentinfo() {
        await expect(this.paymentinfoheading).toBeVisible();
        //  Scopes locator directly to the active Payment Info container
        const paymentDetailsElement = this.page.locator('#checkout-payment-info-load .payment-details, #checkout-payment-info-load p');
        const selectedPaymentText = await paymentDetailsElement.first().innerText();
        console.log("Dynamically Selected Payment Method:", selectedPaymentText.trim());
         await this.contniuePaymentinfo.click();
        return selectedPaymentText.trim(); // if use return that will be the last line ,below that wont work
   
    }

    async checkOrderconfirmation() {
        await expect(this.confirmorderheading).toBeVisible();
        await expect(this.ordersummary).toBeVisible();
        await this.confirmbtninfinal.click();
    }

    async succesMsg() {
        await expect(this.page.getByRole('heading', { name: 'Thank you' })).toBeVisible();
        await expect(this.page.locator('div.section.order-completed')).toBeVisible();
        await expect(this.page.getByText('Your order has been successfully processed!', { exact: true })).toBeVisible();
        await this.page.locator('input.button-2.order-completed-continue-button').click();
    }


}