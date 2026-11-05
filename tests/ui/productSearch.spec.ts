import { test, expect } from "../fixtures/baseFixtures";

test.describe("Product Search Module", () => {

    test("Valid Product Search", async ({ page, loggedUser, productSearch }) => {

        await productSearch.EnterSerch('Computing and Internet');
        await productSearch.viewSearchProductList();
    });

    test("Parcial Product Search", async ({ page, loggedUser, productSearch }) => {
        await productSearch.EnterSerch('Computing');
        await productSearch.viewSearchProductList();

    });

    test("invalid Product Search", async ({ page, loggedUser, productSearch }) => {
        await productSearch.EnterSerch('abcsd');
        await productSearch.errorMsg();

    });

    test("Empty Product Search", async ({ page, loggedUser, productSearch }) => {

        page.once('dialog', async dialog => {

            const alertText = dialog.message();
            console.log("Captured Alert Text:" + alertText);
            expect(dialog.message()).toEqual("Please enter some search keyword");
            await dialog.accept();
        });

        await productSearch.searchBox.fill("");
        await productSearch.searchButton.click();
    });


});