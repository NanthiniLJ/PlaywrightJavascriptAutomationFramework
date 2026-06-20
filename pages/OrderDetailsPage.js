class OrderDetailsPage{

    constructor(page) {
        this.page=page;
        this.orderDetailsLink = page.locator("a[href*='/orderdetails/']");
        this.orderDetails = page.locator(".order-number");
    }

    async getOrderDetails(){
        await this.orderDetailsLink.click();
    }
}
module.exports = OrderDetailsPage;
