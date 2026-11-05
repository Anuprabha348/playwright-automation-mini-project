import { test } from "..//fixtures/baseFixtures";


test.describe("Regression Testing", () => {

    test("End To End", async ({ page, loginPage, loggedUser, productSearch, productDetails, checkout, shoppingCart }) => {

        //login done by login fixture 

        // product search 
        const searchTerm = 'Computing and Internet';

        await productSearch.EnterSerch(searchTerm);
        await productSearch.viewSearchProductList();

        // product details

        await productSearch.clickSearchedProduct(searchTerm);
        await productDetails.verifyProductDetails(searchTerm);
        await productDetails.VerifyQuanitypriceincreese('2')
        await  productDetails.addtocart.click();
        await productDetails.addProductToCart();

        // 3. Navigate to Shopping Cart
        await shoppingCart.clickShoppingCartLink();
        await shoppingCart.headingVisible();

        // 4. Perform cart validations
        await shoppingCart.getAllProductList();
        await shoppingCart.verifyTableQtyMatchesHeaderQty();
        await shoppingCart.clickCheckBox();
        await shoppingCart.productImage();
        await shoppingCart.cartProductName();
        await shoppingCart.priceCheck();
        await shoppingCart.changeQty();
        await shoppingCart.quantityAndPriceChangeCalculation('3');
        // checkout
        await checkout.enterDiscount();
        await checkout.enterGiftcard();
        await checkout.checkEstimateShipping("United States", "Alaska", "456789");

        await checkout.verifyCartTotalsMatch();
        await checkout.terms.click();
        await checkout.checkoutbtn.click();
        await checkout.enterBillingAddressvalidation("New Address");
        // billing 
        await checkout.enterBillingAddress("New Address", "United States");
        await checkout.EnterShippingaddress();
        await checkout.enterShippingMethod();
        await checkout.selectPaymentMethods('COD');
        await checkout.checkPaymentinfo();
        await checkout.checkOrderconfirmation();
        await checkout.succesMsg();

    });
});

