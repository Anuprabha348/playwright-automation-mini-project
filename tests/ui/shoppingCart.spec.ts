import { test } from "../fixtures/baseFixtures";

test.describe("Shopping Cart Module", () => {

  test("Verify the Shopping Cart can be Clickable", async ({ page, loggedUser, productSearch, productDetails, shoppingCart }) => {
    
    // 1. Search and navigate to a product first so productDetails works
    const searchTerm = 'Computing and Internet';
    await productSearch.EnterSerch(searchTerm);
    await productSearch.clickSearchedProduct(searchTerm);

    // 2. Add product to cart from Product Details page
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
  });

});