class LoginPage{

    constructor(page){
        this.page = page;
        this.loginLink = page.locator("a[href='/login']");
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.loginButton = page.locator("input[value='Log in']");
        this.errorMessage = page.locator('.validation-summary-errors');
        
    }

    async validLogin(email,password){
        await this.loginLink.click();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    getLoggedinUser(email){
        return this.page.getByRole('link', {name: email});
    }

}
module.exports = LoginPage;
