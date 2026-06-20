class CartPage{

    constructor(page){
        this.page = page;
        this.productname = page.locator(".product-title a");
        this.addtoCart = page.locator("input[value='Add to cart']");
        this.successMessage = page.getByText("The product has been added to your shopping cart");
        this.cartLink = page.locator("#topcartlink");
        this.cartProductName = page.locator(".product-name");
        this.acceptTerm = page.locator("#termsofservice");
        this.checkOut = page.locator("#checkout");




    }
    async getProductName(){
        return await this.productname.first().textContent();
    }

    async addToCart(){   
        await await this.addtoCart.first().click();
    }

    getSuccessMessage(){
        return this.successMessage;

    }

    async openCart(){
        await this.cartLink.click();
    }

    async getCartPageTitle() {
        return await this.page.title();

    }
    async getCartProductName(){
        return await this.cartProductName.textContent();
    }

    async proceedToCheckout(){
        await this.acceptTerm.click();
        await this.checkOut.click();
    }

      
}
module.exports = CartPage;
