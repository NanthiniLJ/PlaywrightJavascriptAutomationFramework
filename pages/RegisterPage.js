const { newUser } = require("../utils/testData");

class RegisterPage{

    constructor(page){
        this.page = page;
        this.registerLink = page.locator("a[href='/register']");
        this.gender = page.getByLabel("Female");
        this.firstName = page.locator("#FirstName");
        this.lastName = page.locator("#LastName");
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.confirmPassword = page.locator("#ConfirmPassword");
        this.registerButton = page.locator("#register-button");
        this.successRegisterMsg = page.getByText("Your registration completed");


    }
 
    async newUserRegistration(data){
        await this.registerLink.click();
        await this.gender.click();
        await this.firstName.fill(newUser.firstname);
        await this.lastName.fill(newUser.lastname);
        await this.email.fill(newUser.email);
        await this.password.fill(newUser.password);
        await this.confirmPassword.fill(newUser.password);
        await this.registerButton.click();
    }

}
module.exports = RegisterPage;
