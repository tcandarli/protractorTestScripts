
 var homePage = function () {

    this.logo = element(by.css('[alt="Logo"]'));
    this.fiveColumnOnFrontPage = element.all(by.className("nav-link"));
    this.checkText= element(by.css("div[class='title']>h1"));
    this.checkText_2=element(by.css(".home-advance-search.align-items-center>h2"));
    this.searchVStay=element.all(by.className("mt-3 card-title"));
    this.trendStay=element(by.cssContainingText("h3","Trending Stays"));
    this.checkButton= element.all(by.className('btn btn-view-more'));
    };
    
    module.exports = new homePage();