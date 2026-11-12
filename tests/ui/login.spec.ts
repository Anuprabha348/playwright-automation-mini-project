import { Page, expect } from "@playwright/test";
import { test } from "../fixtures/baseFixtures";
import testData from "../testDatas/testData.json";  // Test Data from json file 

// import from excel file
//const testData: any = getExcelData('Sheet1');

test.describe("Login Test Cases", () => {

  test("Verify Login Page Title", async ({ page, loginPage }) => { // passing fixture 
    await expect(page.getByRole('img', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  })

  for (const data of testData) {

    test(`Verify user can login with ${data.scenario}`, async ({ page, loginPage }) => {

      await loginPage.login(data.email, data.password); // Perform login with JSON data

      if(data.status.toLowerCase().trim() === "valid") {
        await expect(loginPage.logoutLink).toBeVisible()
        await loginPage.clickLogout();   // logout 
        console.log("Login succesfull")
      }
      else{
        await loginPage.validationError(data.expectedResult);
        // Pass the unique error message defined for this row in JSON!
      }
    })
  }
});

