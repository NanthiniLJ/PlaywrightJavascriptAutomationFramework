class SearchPage{

    constructor(page){
        this.page=page;
        this.searchBox = page.locator("#small-searchterms");
        this.searchIcon = page.locator("input.search-box-button");
        this.invalidProductCheck = page.getByText("No products were found that matched your criteria.");
    }

    async searchItems(productName){
        await this.searchBox.fill(productName);
        await this.searchIcon.click();

    }

}
module.exports = SearchPage;
