import { test, expect } from "../fixtures/baseFixtures";

test.describe("Product Details Module", () => {

    test("", async ({ page, loggedUser, productSearch, productDetails }) => {

        const searchTerm = 'Computing and Internet';

        await productSearch.EnterSerch(searchTerm);
        await productSearch.viewSearchProductList()
        await productSearch.clickSearchedProduct(searchTerm);
        await productDetails.verifyProductDetails(searchTerm);
        await productDetails.VerifyQuanitypriceincreese('6')
        await productDetails.addProductToCart();

    });

});