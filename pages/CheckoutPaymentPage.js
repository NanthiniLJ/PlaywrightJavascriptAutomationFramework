const { billingAddress, paymentInfo } = require("../utils/testData");

class CheckoutPaymentPage{

    constructor(page){
        this.page = page;
        this.billingAddressLOV = page.locator("#billing-address-select");
        this.countryId = page.locator("#BillingNewAddress_CountryId");
        this.cityName = page.locator("#BillingNewAddress_City");
        this.address1 = page.locator("#BillingNewAddress_Address1");
        this.zipCode = page.locator("#BillingNewAddress_ZipPostalCode");
        this.phoneNumber = page.locator("#BillingNewAddress_PhoneNumber");
        this.saveBilling = page.locator("input[onclick='Billing.save()']");
        this.saveShipping = page.locator("input[onclick='Shipping.save()']");
        this.saveShippingMethod = page.locator("input[onclick='ShippingMethod.save()']");
        this.creditCard = page.getByLabel("Credit Card");
        this.savePaymentMethod = page.locator("input[onclick='PaymentMethod.save()']");
        this.cardType = page.locator("#CreditCardType");
        this.cardHolderName = page.locator("#CardholderName");
        this.cardNo = page.locator("#CardNumber");
        this.expireMonth = page.locator("#ExpireMonth");
        this.expireYear = page.locator("#ExpireYear");
        this.cardCode = page.locator("#CardCode");
        this.savePaymentInfo = page.locator("input[onclick='PaymentInfo.save()']");
        this.confirmProdName = page.locator(".product-name");
        this.confirmButton = page.getByRole('button', { name: 'Confirm' });
        this.orderPlaceMsg = page.getByText("Your order has been successfully processed!");
        
        

    }

    async getCheckoutPageTitle(){
        return await this.page.title();

    }

    async proceedToPayment(data){

        await this.billingAddressLOV.selectOption(billingAddress.addressType);
        await this.countryId .selectOption(billingAddress.country);
        await this.cityName.fill(billingAddress.city);
        await this.address1.fill(billingAddress.address);
        await this.zipCode.fill(billingAddress.postalcode);
        await this.phoneNumber.fill(billingAddress.mobilenumber);
        await this.saveBilling.click();
        await this.saveShipping.click();
        await this.saveShippingMethod.click();
        await this.creditCard.click();
        await this.savePaymentMethod.click();
        await this.cardType.selectOption(paymentInfo.cardType);
        await this.cardHolderName.fill(paymentInfo.nameOnCard);
        await this.cardNo.fill(paymentInfo.cardNumber);
        await this.expireMonth.selectOption(paymentInfo.expiryMonth);
        await this.expireYear.selectOption(paymentInfo.expiryYear);
        await this.cardCode.fill(paymentInfo.cvv);
        await this.savePaymentInfo.click();


        //await this.confirmProdName.textContent();
        
        await this.confirmButton.click();

    }

    getOrderInfo(){
        return this.page.locator(".details li");

    }

}
module.exports = CheckoutPaymentPage;
