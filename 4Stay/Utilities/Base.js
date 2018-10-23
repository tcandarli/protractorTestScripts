var Base = function () {
    this.homeUrl = 'https://4stay.com';
    this.navigateToHome = function () {
        browser.get(this.homeUrl);
    };
};

module.exports = new Base();