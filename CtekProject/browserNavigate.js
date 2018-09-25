describe('Browser Method Suite', function () {

    // it('Navigate Back/Forward method', function () {
    //     browser.waitForAngularEnabled(false);
    //     browser.get('https://www.google.com');
    //     browser.sleep(4000);
    //     browser.get('www.bbc.com');
    //     browser.sleep(4000);
    //     browser.navigate().back();
    //     browser.sleep(4000);
    //     browser.navigate().forward();
    //     browser.sleep(3000);
    //     browser.manage().window().setSize(1580, 800);
    //     browser.sleep(4000);

    // });

    // it('Get Current URL Method', function () {
    //     browser.waitForAngularEnabled(false);
    //     browser.get('https://www.google.com');
    //     browser.sleep(4000);
    //     browser.getCurrentUrl().then(function (siteUrl) {
    //         console.log(siteUrl);
    //     });
    // });

    // getTitle()
    it('get the title of the page', function () {

        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com');
        browser.sleep(4000);
        browser.getTitle().then(function (title) {
            console.log(title);
        });


    });


});