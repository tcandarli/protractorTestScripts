describe('Selenium Locators', function () {

    it('by.id locator example', function () {

        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        element(by.id('firstname')).sendKeys('Mike');
        browser.sleep(4000);

    });

    it('Facebook login by id', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://facebook.com');
        browser.sleep(2000);
        element(by.id('email')).sendKeys('myemail@gmail.com');
        browser.sleep(4000);
        element(by.id('pass')).sendKeys('password123');
        browser.sleep(4000);
        element(by.id('u_0_2')).click();
        browser.sleep(4000);
    });

    it('by.name locator example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        browser.sleep(4000);
        element(by.name('lastname')).sendKeys('Stone');
        browser.sleep(5000);
    });

    // by.name()
    it('by.name locator at Facebook', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://facebook.com');
        browser.sleep(3000);
        element(by.name('email')).sendKeys('myemail@gmail.com');
        browser.sleep(4000);
        element(by.name('pass')).sendKeys('password123');
        element(by.id('u_0_2')).click();
        browser.sleep(4000);
    });

    // className()
    it('by.className Locator Example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        element(by.className('page-header-two')).getText()
            .then(function (text) {
                if (text == "Create your Sky iD") {
                    console.log("Test passed");
                } else {
                    console.log("Test failed");
                }
            });
        browser.sleep(4000);
    });

    // by.tagName()
    it('by.tagName Locator Example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        element(by.tagName('button')).click();
        browser.sleep(10000);
    });

    // by.linkText()
    it('by.linkText locator example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://facebook.com');
        browser.sleep(5000);
        element(by.linkText('Forgot account?')).click();
        browser.sleep(4000);
    });

    // by.partialLinkText()
    it('by.partialLinkText locator example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://facebook.com');
        browser.sleep(5000);
        element(by.partialLinkText('Forgot?')).click();
        browser.sleep(4000);
    });

    // by.partialLinkText() example 2
    fit('by.partialLinkText locator example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        browser.sleep(5000);
        element(by.partialLinkText('Feed')).click();
        browser.sleep(4000);
    });
    
    // by.linkText() example
    it('by.partialLinkText locator example', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        browser.sleep(5000);
        element(by.linkText('Feed')).click();
        browser.sleep(4000);
    });
    





});