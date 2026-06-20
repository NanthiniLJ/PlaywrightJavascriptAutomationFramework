const {test, expect} = require('@playwright/test')
const {baseURL} = require('../utils/constants');
const testData = require('../utils/testData');
const RegisterPage = require('../pages/RegisterPage');


test("Register new user", async ({page}) => {

    await page.goto(baseURL);
    const title = await page.title();
    expect(title).toBe('Demo Web Shop');
    console.log(title);

    const registerPage = new RegisterPage(page);
    await registerPage.newUserRegistration(testData);
    await expect(registerPage.successRegisterMsg).toBeVisible();
    console.log("TestCompleted");

})