var homepageLinks = function () {

    this.scrolldownToEnd = browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
    this.aboutUsLink = element(by.linkText('About us'));
    this.aboutUsPageText = element(by.xpath("//div[@class='col-md-6 ']/h1"));
    this.contactUsLink = element(by.linkText('Contact us'));
    this.helpLink = element.all(by.linkText('Help')).first();
    this.askHelp = $('input[placeholder="Search for answers..."]');
    
}

module.exports = new homepageLinks();