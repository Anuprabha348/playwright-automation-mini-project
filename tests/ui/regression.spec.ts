import { test } from "..//fixtures/baseFixtures";


test.describe("Regression Testing", () => {

    test("End To End Testing ", async ({ page,loggedUser, productSearch, productDetails, checkout, shoppingCart }) => {

        //login done by login fixture 
        // product search 
        const searchTerm = 'Computing and Internet';

        await productSearch.EnterSerch(searchTerm);
        await productSearch.viewSearchProductList();
        console.log("-----product search completed-----");

        // product details
        await productSearch.clickSearchedProduct(searchTerm);
        await productDetails.verifyProductDetails(searchTerm, '2');
        await productDetails.addProductToCart();
        console.log("-----product Details completed-----");

        // 3. Navigate to Shopping Cart
        await shoppingCart.clickShoppingCartLink();
        await shoppingCart.headingVisible();
        console.log("----- navigation to shopping cart completed-----");

        // 4. Perform cart validations
        await shoppingCart.getAllProductList();
        await shoppingCart.verifyTableQtyMatchesHeaderQty();
        await shoppingCart.clickCheckBox();
        await shoppingCart.productImage();
        await shoppingCart.cartProductName();
        await shoppingCart.priceCheck();
        await shoppingCart.changeQty();
        await shoppingCart.quantityAndPriceChangeCalculation('3');
        console.log("-----shopping cart completed-----");

        // checkout
        await checkout.enterDiscount();
        await checkout.enterGiftcard();
        await checkout.checkEstimateShipping("United States", "Alaska", "457866");

        await checkout.verifyCartTotalsMatch();
        await checkout.terms.click();
        await checkout.checkoutbtn.click();
        await checkout.enterBillingAddressvalidation("New Address");
        console.log(" -----checkout cart completed-----");

        // billing 
        await checkout.enterBillingAddress("New Address", "United States");
        await checkout.EnterShippingaddress();
        await checkout.enterShippingMethod();
        await checkout.selectPaymentMethods('COD');
        await checkout.checkPaymentinfo();
        await checkout.checkOrderconfirmation();
        console.log("-----Billing completed-----");
        await checkout.succesMsg();
        console.log("-----order placed-----");


    });
});

