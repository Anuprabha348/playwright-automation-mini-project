import { expect, test } from "../fixtures/baseFixtures"


test.describe("Checkout Module", () => {

    test ("Verify Discount Coupons Can apply", async ({ page, loggedUser, checkout, shoppingCart }) => {
        await shoppingCart.clickShoppingCartLink(); // await is more important
        await checkout.enterDiscount();
        await checkout.enterGiftcard();
    });

    test("Verify Estimation shipping Can apply", async ({ page, loggedUser, checkout, shoppingCart }) => {
        await shoppingCart.clickShoppingCartLink();
        await checkout.checkEstimateShipping("United States", "Alaska", "456789");
    });

    test("Verify the same total", async ({ page, loggedUser, checkout, shoppingCart }) => {
        await shoppingCart.clickShoppingCartLink();
        await checkout.verifyCartTotalsMatch();
    });

    test("checkout", async ({ page, loggedUser, checkout, shoppingCart }) => {
        await shoppingCart.clickShoppingCartLink();
        await checkout.checkoutbtn.click();
    });
     
    test("check billing Address Enter & validation,payment method,order confirm ", async ({ page, loggedUser, checkout, shoppingCart }) => {
        await shoppingCart.clickShoppingCartLink();
        await checkout.terms.click();
        await checkout.checkoutbtn.click();
        await checkout.enterBillingAddressvalidation("New Address");
        await checkout.enterBillingAddress("New Address","United States");
        await checkout.EnterShippingaddress();
        await checkout.enterShippingMethod();
        await checkout.selectPaymentMethods('COD');
        await checkout.checkPaymentinfo();
        await checkout.checkOrderconfirmation();
        await checkout.succesMsg();
    });
   
});