const {test,expect} = require('@playwright/test');
const {baseURL,User,InvalidUser} = require('../utils/constants');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const CartPage = require('../pages/CartPage');
const CheckoutPaymentPage = require('../pages/CheckoutPaymentPage');
const OrderDetailsPage = require('../pages/OrderDetailsPage');
const testData = require('../utils/testData');


test('Place order and Buy Product', async({page}) => {
    const searchProductname = "laptop";   
    await page.goto(baseURL);
    const title = await page.title();
    expect(title).toBe('Demo Web Shop');
    

    //login
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(User.email, User.password);
    await expect(loginPage.getLoggedinUser(User.email)).toBeVisible();

    

    //search item
    const searchPage = new SearchPage(page);
    await searchPage.searchItems(searchProductname);
    

    //add to cart
    const cartPage =  new CartPage(page);
    await cartPage.addToCart();
    await expect(cartPage.getSuccessMessage()).toBeVisible();
    const productNameSearchPage = await cartPage.getProductName();
    
    
    //cartpage
    await cartPage.openCart();
    const cartPageTitle = await cartPage.getCartPageTitle();
    expect(cartPageTitle).toContain("Shopping Cart");
    const cartProductname = await cartPage.getCartProductName();
    expect(productNameSearchPage).toBe(cartProductname);
    await cartPage.proceedToCheckout();

   //checkout and payment
    const checkoutPaymentPage = new CheckoutPaymentPage(page);
    const checkoutPageTitle = await checkoutPaymentPage.getCheckoutPageTitle();
    expect(checkoutPageTitle).toContain("Checkout");

    await checkoutPaymentPage.proceedToPayment(testData);
    await expect(checkoutPaymentPage.orderPlaceMsg).toBeVisible();
    const orderInfo = await checkoutPaymentPage.getOrderInfo().first().textContent();
   
    console.log(orderInfo);
    const orderId = orderInfo.split(":")[1].trim();
    console.log("order id is", orderId);
   

    //orderdetials
    const orderDetailsPage = new OrderDetailsPage(page);

    await orderDetailsPage.getOrderDetails();
    const orderDetails = await orderDetailsPage.orderDetails.textContent();
    const detailsPageOrderId = orderDetails.split("#")[1].trim();
    console.log("Order id in details page", detailsPageOrderId);
    expect(orderId).toBe(detailsPageOrderId);

})

test("Login with invalid credential", async({page}) => {
    await page.goto(baseURL);
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(InvalidUser.email, InvalidUser.password);
    await loginPage.errorMessage.waitFor();
    await expect (loginPage.errorMessage).toContainText("Login was unsuccessful");

})
test("Search Unavailable Product", async ({ page }) => {
    const invalidProductname = "Headset";
    await page.goto(baseURL);
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(User.email, User.password);

    const searchPage = new SearchPage(page);
    await searchPage.searchItems(invalidProductname);

    await expect(searchPage.invalidProductCheck).toBeVisible();
});


